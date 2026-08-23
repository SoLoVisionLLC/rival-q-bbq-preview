#!/usr/bin/env python3
"""Build Rival Q BBQ preview site: variants A/B/C, static HTML, 6 routes each."""
import os, shutil

ROOT = '/tmp/rivalq/site'
ASSETS = 'assets'
PAGES = {
    '/': 'index.html',
    '/menu': 'menu/index.html',
    '/schedule': 'schedule/index.html',
    '/catering': 'catering/index.html',
    '/about': 'about/index.html',
    '/contact': 'contact/index.html',
}

NAV = """
<nav class="nav">
  <a class="brand" href="/"><img src="/assets/logo.jpg" alt="Rival Q BBQ logo"> <span>Rival Q BBQ</span></a>
  <div class="links">
    <a href="/">Home</a>
    <a href="/schedule">Schedule</a>
    <a href="/menu">Menu</a>
    <a href="/catering">Catering</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </div>
</nav>"""

FOOTER = """
<footer class="footer">
  <div class="foot-inner">
    <img src="/assets/logo.jpg" alt="Rival Q BBQ logo">
    <div>
      <p><strong>Rival Q BBQ</strong> — Real wood smoked BBQ. We strive to give you the best bite every time!</p>
      <p><a href="tel:+14193064401">(419) 306-4401</a> · <a href="mailto:RivalQBarbecue@gmail.com">RivalQBarbecue@gmail.com</a></p>
      <p><a href="https://www.facebook.com/p/Rival-Q-BBQ-61563203428687/" rel="noopener">Facebook</a> · <a href="https://tiktok.com/@rival.q.barbecue" rel="noopener">TikTok</a> · <a href="https://streetfoodfinder.com/RivalQ" rel="noopener">StreetFoodFinder</a></p>
      <p>Based in Fostoria, Ohio — popping up across the Fostoria–Findlay area.</p>
      <p class="rivalon">Rival On.</p>
    </div>
  </div>
</footer>
<script>document.write('')/* keep static */</script>
"""

HEAD = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="icon" href="/assets/logo.jpg">
<style>{css}</style>
</head>
<body>
{rail}"""


def page(variant, slug, title, desc, body, rail=''):
    css = open(f'{ROOT}/variants/{variant}.css').read()
    return HEAD.format(title=title, desc=desc, css=css, rail=rail) + NAV + body + FOOTER + '</body>\n</html>\n'


# ---------------- shared content fragments ----------------

PROOF = """
<div class="proof">
  <strong>98% recommend on Facebook</strong>
  <span>(69 reviews, checked August 23, 2026)</span>
</div>"""

CAPACITY = """
<div class="capacity">
  <h3>480 pounds of meat smoked in a single day</h3>
  <p class="breakdown">200 lbs brisket · 150 lbs pork butts · 80 lbs chicken thighs · 50 lbs chicken wings</p>
  <p class="dated">Documented on August 18, 2026.</p>
  <p>Need a mass smoke? Let Rival Q handle the smoke.</p>
</div>"""

MENU_GROUPS = """
<p class="menu-note">Menu items and pricing vary by stop. Below is our example menu from the August 14, 2026 Fostoria pop-up.</p>
<section class="menu-group">
  <h2>Platters</h2>
  <p class="price-line">$16 each — or Mix &amp; Match Any 2 for $30 (2 smoked meats + 8 sides)</p>
  <ul>
    <li>Pulled Pork</li>
    <li>Smoked Chicken Quarter</li>
    <li>Jalapeño Cheddar Sausage</li>
  </ul>
</section>
<section class="menu-group">
  <h2>Handhelds &amp; Bowls</h2>
  <ul class="priced">
    <li>Pulled Pork Sandwich — $8</li>
    <li>Q-Bowl — $10 <span class="note">(cheesy potatoes topped with pork)</span></li>
    <li>Pulled Pork Nachos — $12 <span class="note">(chips, pork, nacho cheese, sour cream, BBQ sauce drizzle)</span></li>
  </ul>
</section>
<section class="menu-group">
  <h2>Sides</h2>
  <p class="price-line">Included with platters — also available individually.</p>
  <ul>
    <li>Cheesy Potatoes</li>
    <li>Pit Beans</li>
    <li>Cornbread</li>
    <li>Coleslaw</li>
  </ul>
</section>
<a class="cta-primary" href="/schedule">See Our Next Stop</a>"""

SCHEDULE_BODY = """
<h1>Where We're Popping Up</h1>
<p>Follow along — new stops are announced on Facebook first.
Follow <a href="https://www.facebook.com/p/Rival-Q-BBQ-61563203428687/" rel="noopener">Rival Q BBQ on Facebook</a>
and track us on <a href="https://streetfoodfinder.com/RivalQ" rel="noopener">StreetFoodFinder</a>.</p>

<section class="stop past">
  <h2>Thursday, August 14, 2026 — Fostoria</h2>
  <p>121 S County Line St · 12–7 PM · Sold out — thanks, Fostoria!</p>
  <p><a href="https://www.facebook.com/61563203428687/posts/%EF%B8%8Ffostoria-814%EF%B8%8Fwe-are-set-up-now-swing-by-and-get-some-delicious-bbq121-s-county-/122204480078440114" rel="noopener">See the Facebook post</a></p>
</section>

<section class="stop past">
  <h2>Friday, August 8, 2026 — Fostoria</h2>
  <p>895 N County Line St · Serving until 6 PM or sellout</p>
  <p><a href="https://www.facebook.com/p/Rival-Q-BBQ-61563203428687/" rel="noopener">Details on Facebook</a></p>
</section>

<a class="cta-secondary" href="/menu">View Current Menu</a>"""

CATERING_FORM = """
<form id="quote" action="#" method="post">
  <label>Name<input type="text" name="name" required></label>
  <label>Email<input type="email" name="email" required></label>
  <label>Phone<input type="tel" name="phone"></label>
  <label>Event date<input type="date" name="event_date"></label>
  <label>Location<input type="text" name="location"></label>
  <label>Guest count<input type="number" name="guests" min="1"></label>
  <label>Event type
    <select name="event_type">
      <option>Festival</option><option>Corporate</option>
      <option>Community</option><option>Private event</option><option>Other</option>
    </select>
  </label>
  <label>Service preference<input type="text" name="service"></label>
  <label>Tell us about your event<textarea name="notes" rows="4"></textarea></label>
  <button type="submit">Request a Quote</button>
  <p id="success" hidden>Thanks! We got it — we'll be in touch. Need us sooner? Call (419) 306-4401.</p>
</form>
<p class="fallbacks">Prefer to talk it out? <a href="tel:+14193064401">Call (419) 306-4401</a> or email
<a href="mailto:RivalQBarbecue@gmail.com">RivalQBarbecue@gmail.com</a>.</p>
<script>
document.getElementById('quote').addEventListener('submit', function(e){
  e.preventDefault();
  this.querySelector('button').hidden = true;
  document.getElementById('success').hidden = false;
});
</script>"""

ABOUT_BODY = """
<h1>About Rival Q BBQ</h1>
<img class="about-photo" src="/assets/truck-brisket.jpg" alt="The Rival Q Barbecue trailer at night with briskets and sliced smoked meat">
<p>Rival Q BBQ is real wood-smoked barbecue from Fostoria, Ohio — smoked low &amp; slow over real wood,
popped up across the Fostoria–Findlay area.</p>
<p>You may have seen us at the Sparkle Stroll in 2025 or covering the June 2026 Fostoria rail event.
We strive to give you the best bite every time!</p>
""" + CAPACITY + PROOF + """
<p class="motto">Never Underestimate The Smoke.</p>"""

CONTACT_BODY = """
<h1>Contact Rival Q BBQ</h1>
<ul class="contact-list">
  <li>Phone: <a href="tel:+14193064401">(419) 306-4401</a></li>
  <li>Email: <a href="mailto:RivalQBarbecue@gmail.com">RivalQBarbecue@gmail.com</a></li>
  <li>Facebook: <a href="https://www.facebook.com/p/Rival-Q-BBQ-61563203428687/" rel="noopener">Rival Q BBQ</a></li>
  <li>TikTok: <a href="https://tiktok.com/@rival.q.barbecue" rel="noopener">@rival.q.barbecue</a></li>
  <li>StreetFoodFinder: <a href="https://streetfoodfinder.com/RivalQ" rel="noopener">streetfoodfinder.com/RivalQ</a></li>
</ul>
<p>Based in Fostoria, Ohio — popping up across the Fostoria–Findlay area.</p>
<a class="cta-primary" href="/schedule">See Our Next Stop</a>"""


def home_a():
    return f"""
<header class="hero split">
  <div class="hero-logo"><img src="/assets/logo.jpg" alt="Rival Q BBQ logo"><h1>Never Underestimate the Smoke.</h1>
  <p class="sub">Real wood-smoked barbecue from Fostoria—find the next stop, see what's on the menu, or bring Rival Q to your event.</p></div>
  <div class="hero-photo"><img src="/assets/truck-brisket.jpg" alt="Rival Q trailer and briskets at night"></div>
  <div class="hero-stop">
    <h2>Recent Stop</h2>
    <p>Aug 14 · Fostoria<br>121 S County Line St · 12–7 PM</p>
    <p>Sold out — thank you!</p>
    <a class="cta-primary" href="/schedule">See Our Next Stop</a>
    <a class="cta-secondary" href="/catering">Book Rival Q Catering</a>
  </div>
</header>
{CAPACITY}
{PROOF}
<section class="teaser">
  <h2>On the Menu</h2>
  <p>Platters, pulled pork sandwiches, Q-Bowls, nachos — real wood smoked BBQ (or until sold out!).</p>
  <a class="cta-secondary" href="/menu">View Current Menu</a>
</section>
<a class="call" href="tel:+14193064401">Call (419) 306-4401</a>"""

def home_b():
    return f"""
<header class="hero full">
  <img src="/assets/truck-brisket.jpg" alt="Rival Q trailer and briskets at night">
  <div class="overlay">
    <img class="mark" src="/assets/logo.jpg" alt="">
    <h1>Never Underestimate the Smoke.</h1>
    <p class="sub">Real wood-smoked barbecue from Fostoria—find the next stop, see what's on the menu, or bring Rival Q to your event.</p>
    <div class="stop-module">
      <strong>Recent stop:</strong> Aug 14 · Fostoria · sold out
      <a class="cta-primary" href="/schedule">See Our Next Stop</a>
      <a class="cta-secondary" href="/catering">Book Rival Q Catering</a>
    </div>
  </div>
</header>
<section class="band media"><img src="/assets/smoked-chicken.jpg" alt="Smoked chicken on the pit"><div><h2>Smoked low &amp; slow</h2><p>Real wood, every cook.</p></div></section>
{CAPACITY}
<section class="band tiles">
  <a href="/menu" class="tile"><img src="/assets/pulled-pork-sandwich.jpg" alt="Pulled pork sandwich"><span>Pulled Pork Sandwich $8</span></a>
  <a href="/menu" class="tile"><img src="/assets/bbq-nachos.jpg" alt="Pulled pork nachos"><span>Nachos $12</span></a>
  <a href="/menu" class="tile wide"><span>Full menu → View Current Menu</span></a>
</section>
{PROOF}"""

def home_c():
    return f"""
<header class="poster">
  <div class="big-q">Q</div>
  <img class="cutout" src="/assets/truck-brisket.jpg" alt="Rival Q trailer and briskets at night">
  <h1>NEVER<br>UNDER<br>ESTIMATE<br>THE SMOKE.</h1>
  <p class="sub">Real wood-smoked barbecue from Fostoria—find the next stop, see what's on the menu, or bring Rival Q to your event.</p>
</header>
<div class="marquee"><span>AUG 14 · FOSTORIA · SOLD OUT ★ AUG 8 · FOSTORIA ★ NEXT STOP ANNOUNCED ON FACEBOOK FIRST ★</span></div>
<div class="poster-grid">
  <img src="/assets/smoked-chicken.jpg" alt="Smoked chicken">
  <img src="/assets/bbq-nachos.jpg" alt="Pulled pork nachos">
</div>
<div class="poster-actions">
  <a class="cta-primary" href="/schedule">See Our Next Stop</a>
  <a class="cta-secondary" href="/catering">Book Rival Q Catering</a>
  <a class="cta-ghost" href="/menu">View Current Menu</a>
</div>
{CAPACITY}"""


RAIL_B = '<div class="sticky-rail"><a href="/schedule">Schedule</a><a href="tel:+14193064401">Call</a><a href="/catering">Catering</a></div>'
RAIL = '<div class="sticky-rail"><a href="/schedule">Schedule</a><a href="tel:+14193064401">Call</a><a href="/catering">Catering</a></div>'


def build_variant(v):
    homes = {'a': home_a(), 'b': home_b(), 'c': home_c()}
    pages = {
        '/': ('Rival Q BBQ — Real Wood Smoked BBQ in Fostoria, Ohio',
              'Real wood-smoked barbecue from Fostoria. Find the next stop, see the menu, book catering.', homes[v]),
        '/menu': ('Menu — Rival Q BBQ', 'Dated example menu from the August 14, 2026 Fostoria pop-up.',
                  f'<h1>Menu</h1>{MENU_GROUPS}'),
        '/schedule': ('Schedule — Rival Q BBQ', 'Recent pop-ups and where to find the next stop.',
                      SCHEDULE_BODY),
        '/catering': ('Catering — Rival Q BBQ', 'Bring Rival Q wood-smoked barbecue to your event.',
                      f"""<h1>Rival Q Catering</h1>
<p>Festivals, corporate events, community gatherings, private parties — real wood-smoked barbecue, brought to you.</p>
{CAPACITY}
<h2>Request a quote</h2>
{CATERING_FORM}"""),
        '/about': ('About — Rival Q BBQ', 'Real wood-smoked barbecue from Fostoria, Ohio.', ABOUT_BODY),
        '/contact': ('Contact — Rival Q BBQ', 'Find Rival Q BBQ by phone, email, Facebook, TikTok, or StreetFoodFinder.', CONTACT_BODY),
    }
    rail = RAIL_B if v == 'b' else ''
    for route, (t, d, body) in pages.items():
        out = os.path.join(ROOT, 'variants', v)
        if v == 'a':
            out = os.path.join(ROOT, 'variants/a')
        path = os.path.join(out, PAGES[route].lstrip('/'))
        os.makedirs(os.path.dirname(path) or out, exist_ok=True)
        with open(path, 'w') as f:
            f.write(page(v, route, t, d, body, rail))
    # assets per variant
    adir = os.path.join(ROOT, 'variants', v, 'assets')
    if not os.path.exists(adir):
        os.symlink('/tmp/rivalq/site/assets', adir)


if __name__ == '__main__':
    for v in 'abc':
        build_variant(v)
    print('built')

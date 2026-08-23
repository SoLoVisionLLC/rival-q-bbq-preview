#!/usr/bin/env python3
"""QA: HTTP status, noindex, internal links, forms, HTML hashes for all variants."""
import urllib.request, urllib.error, ssl, hashlib, re, json, sys

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

ROUTES = ['/', '/menu/', '/schedule/', '/catering/', '/about/', '/contact/']
HOSTS = {'a': 'https://rivalqbbq-a.sololink.cloud',
         'b': 'https://rivalqbbq-b.sololink.cloud',
         'c': 'https://rivalqbbq-c.sololink.cloud'}

BANNED = re.compile(r'\b(revision|preview|concept|mockup|demo|placeholder|sample)\b', re.I)

results = {}
hashes = {}
for v, host in HOSTS.items():
    vres = []
    for route in ROUTES:
        url = host + route
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, context=ctx) as resp:
                body = resp.read().decode('utf-8', 'replace')
                code = resp.status
        except urllib.error.HTTPError as e:
            body = ''
            code = e.code
        except Exception as e:
            body = ''
            code = str(e)
        noindex = 'noindex' in (body[:2000] if body else '')
        banned = sorted(set(m.group(0).lower() for m in BANNED.finditer(body)))
        links = sorted(set(re.findall(r'href="(/[^"]*)"', body)))
        formok = '<form' in body if route == '/catering/' else None
        vres.append({'route': route, 'status': code, 'noindex': noindex,
                     'banned_words': banned, 'internal_links': links, 'form': formok,
                     'sha256': hashlib.sha256(body.encode()).hexdigest()[:16]})
    results[v] = vres

for v, rows in results.items():
    print(f"=== Variant {v}")
    for r in rows:
        flag = '' if r['status'] == 200 and r['noindex'] and not r['banned_words'] else '  <-- PROBLEM'
        print(r['route'], r['status'], 'noindex:', r['noindex'], 'banned:', r['banned_words'],
              'links:', r['internal_links'], r['sha256'], flag)

# uniqueness gate: index.html hashes must differ across variants
idx = {v: rows[0]['sha256'] for v, rows in results.items()}
print('index hashes:', idx)
if len(set(idx.values())) != 3:
    print('FAIL: identical home pages'); sys.exit(1)
print('OK: all three variants unique')
json.dump(results, open('/tmp/rivalq/qa_results.json', 'w'), indent=2)

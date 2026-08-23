# Rival Q BBQ — Preview Site (Variants A/B/C)

Static noindex preview site, three design variants:

- variants/a — Local Smokehouse Ledger (trust-first)
- variants/b — The Smoke Drop (conversion-first)
- variants/c — Rival Smoke Poster Series (bold/differentiated)

Routes per variant: / , /menu , /schedule , /catering , /about , /contact

Rebuild: `python3 build.py` (writes HTML from shared content + per-variant CSS).
Deploy: serve each variants/<x> directory as a static site root.
All pages carry <meta name="robots" content="noindex, nofollow">.

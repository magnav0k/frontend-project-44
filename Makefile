install:
    npm ci
brain-games:
    node bin/brain-games.js
publish:
    npm publish --dry-run
lint:
    npm eslint
brain-even:
    node bin/brain-even.js
brain-calc:
    node bir/brain-calc.js
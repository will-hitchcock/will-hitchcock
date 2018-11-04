Contentful Gatsby Boilerplate
=================
**Contentful Gatsby Boilerplate** is a starting point for spinning up a modern Contentful / Gatsby project

Run the site
-----------------------

1) Clone the repo:
```
$ git clone git@github.com:will-hitchcock/contentful-gatsby-boilerplate.git
```

2) Move into the project directory:
```
$ cd contentful-gatsby-boilerplate
```

3) Set environment variables:

Make a copy of sample.env:

```
$ cp sample.env .env
```

Add your Contentful API keys

4) Install node packages:
```
$ npm install
```

5) Run the app for local dev:
```
$ npm run dev
```

Navigate to **[http://localhost:8000](http://localhost:8000)**

## Storybook

1) Run storybook
```
npm run storybook
```

Navigate to **[http://localhost:6006](http://localhost:6006)**

## Testing

To run the full test suite:
```
$ npm test
```

Run test suite in watch mode:
```
$ npm run test:watch
```

## Linting

Run the linter:
```
npm run lint
```

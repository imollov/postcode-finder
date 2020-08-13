[![Netlify Status](https://api.netlify.com/api/v1/badges/8fd0f4d3-2569-486a-8671-4fcc9112ef50/deploy-status)](https://app.netlify.com/sites/postcodefinder/deploys)

# postcode-finder

![postcode-finder-sample-result-page](screenshot.png)

## Features

- Find the postal code for a given address
- Find the postal code at the current device geolocation
- See the postal code positioned on a map
- Share or bookmark the postal code result page

## Develop

_Prerequisites:_ [node](https://nodejs.org/en/download/) and [yarn](https://yarnpkg.com/) must be installed locally.

1. Clone this repository

```
git clone git@github.com:imollov/postcode-finder.git
```

2. Navigate to the project directory

```
cd postcode-finder
```

3. Install dependencies

```
yarn
```

4. Copy `.env.example` to `.env` and paste your Google Maps API key

5. Run the local dev server

```
yarn start
```

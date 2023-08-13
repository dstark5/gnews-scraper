# GNews Scraper

GNewsScraper is a TypeScript package that scrapes article data from Google News based on a keyword or phrase. It returns the results as an array of JSON objects, making it convenient to access and use the scraped information.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![Static Badge](https://img.shields.io/badge/build-passing-green)
![GitHub issues](https://img.shields.io/github/issues/dstark5/gnews-scraper)

- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Output](#output)
- [Contribute](#contribute)
- [Issues](#issues)

## Installation

```sh
 npm install gnews-scraper
```

**Warning:** This package is native [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and no longer provides a CommonJS export. If your project uses CommonJS, you will have to [convert to ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) or use the [dynamic `import()`](https://v8.dev/features/dynamic-import) function. Please don't open issues for questions regarding CommonJS / ESM.

## Usage

```javascript
// Import the package
import GNews from 'gnews-scraper';

// Execute within an async function,
// pass a options object (further documentation below)
const news=await GNews({
    searchQuery:"Nasdaq",
    prettyUrl:true,
    cache:true,
    cacheTTL:3600,
    timeframe:'7d',
    queryParams: {
        hl:"en-US",
        gl:"US",
        ceid:"US:en"
    }
    args:["--incognito","--no-sandbox","--single-process",]
})

console.log(news)
```

## Options

The options provided for configuring the behavior of the GNewsScraper has the following properties:

**searchQuery (required)**

Specifies the search term or keyword to find articles related to.

**prettyUrl (optional)**

Determines whether the scraper should follow redirects and retrieve the actual "pretty" URL of each article. Enabling this feature may impact the performance of the scraper due to additional HTTP requests.

**_without prettyUrl :_**

```js
https://news.google.com/articles/CBMiZ2h0dHBzOi8vd3d3Lm5hc2RhcS5jb20vYXJ0aWNsZXMvZm9yZXgtZG9sbGFyLWZpcm1zLWFtaWQtc3VwcG9ydGl2ZS11LnMuLWRhdGEtc3dlZGlzaC1jcm93bi1hdXNzaWUtc2xpZGXSAQA?hl=en-US&gl=US&ceid=US%3Aen
```

**_with prettyUrl :_**

```js
https://www.nasdaq.com/articles/forex-dollar-firms-amid-supportive-u.s.-data-swedish-crown-aussie-slide
```

**cache (optional)**

Indicates whether the scraper should cache the results to improve efficiency and reduce the number of requests to Google News. Using cache prevents blocking of IP by google news.

_default:false_

**cacheTTL (optional)**

Specifies the time-to-live (TTL) duration in seconds for the cached results. After the TTL expires, the scraper will fetch fresh results from Google News.

_default:3600_

**timeframe (optional)**

Filters the results to articles published within a specific timeframe before the request.

_default:'7d'_

The format of the timeframe is a string comprised of a number :

- h = hours (eg: `1h`)

- d = days (eg: `1d` , `7d`)

- y = years (eg: `1y`)

**queryParams (optional)**

Additional query parameters to include in the URL when performing the search.

- **hl** - represents the language (English-US)

- **gl** - represents the country (US)

- **ceid** - represents the country-specific identifier.

**args (optional)**

Additional arguements to included when launching puppeteer

```javascript
default:["--incognito",
"--no-sandbox",
"--single-process",
"--no-zygote",
"--disable-dev-shm-usage",
"--disable-setuid-sandbox"]
```

Available arguements

```javascript
[
  "--no-sandbox", // Disable sandboxing for better compatibility
  "--disable-setuid-sandbox", // Disable setuid sandbox
  "--disable-infobars", // Disable the infobar that displays browser automation
  "--single-process", // Use a single process (can reduce resource usage)
  "--no-zygote", // Do not use zygote process for spawning child processes
  "--no-first-run", // Skip first-run wizards (e.g., Chrome welcome page)
  "--window-position=0,0", // Set the initial window position
  "--ignore-certificate-errors", // Ignore certificate errors (useful for self-signed certificates)
  "--ignore-certificate-errors-skip-list", // Additional skip list for certificate error handling
  "--disable-dev-shm-usage", // Disable /dev/shm usage for better stability
  "--disable-accelerated-2d-canvas", // Disable GPU-accelerated 2D canvas
  "--disable-gpu", // Disable GPU acceleration for headless mode
  "--hide-scrollbars", // Hide scrollbars in the browser
  "--disable-notifications", // Disable notifications
  "--disable-background-timer-throttling", // Disable background timer throttling
  "--disable-backgrounding-occluded-windows", // Disable backgrounding of occluded windows
  "--disable-breakpad", // Disable crash reporting
  "--disable-component-extensions-with-background-pages", // Disable background pages for component extensions
  "--disable-extensions", // Disable browser extensions
  "--disable-features=TranslateUI,BlinkGenPropertyTrees", // Disable specific features
  "--disable-ipc-flooding-protection", // Disable IPC flooding protection
  "--disable-renderer-backgrounding", // Disable backgrounding of renderers
  "--metrics-recording-only", // Record metrics only
  "--mute-audio", // Mute audio
];
```

## Output

The output is an array of JSON objects as mentioned below :

```javascript

[
  {
    title: 'Nasdaq to transfer European power business to EEX bourse',
    articleUrl: 'https://www.reuters.com/business/energy/nasdaq-transfer-european-power-business-eex-bourse-2023-06-20/',
    sourceName: 'Reuters.com',
    imageUrl: 'https://lh3.googleusercontent.com/proxy/khH_YuxJvTa6rmavuuRIHG6JPu3_YD5b_jPjHZGn3t-5pfMORfSHJcuuTVCPdgRK8U_uD81JpOCFVe2YUpEGmhGNAEkm49VGoLgiKuDi2PZec-J4InGcSMtw4YIC5dwBcxngzUPv9MFK01fK3vl3ESvL8KF__Vs=s0-w100-h100-rw-dckaGU07gH',
    time: '19 hours ago'
  },
 ...
]

```

## Upkeep

Please note that this is a web-scraper, which relies on DOM selectors, so any fundamental changes in the markup on the Google News site will probably break this tool. I'll try my best to keep it up-to-date, but changes to the markup on Google News will be silent and therefore difficult to keep track of. Feel free to submit an issue if the tool stops working.

## Contribute

Feel free to [submit a PR](https://github.com/dstark5/gnews-scraper/pulls) if you've fixed an open issue.

## Issues

Please report bugs via the [issue tracker](https://github.com/dstark5/gnews-scraper/issues).

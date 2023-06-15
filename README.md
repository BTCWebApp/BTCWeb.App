# BTCWeb.App

A list of progressive web apps useful to bitcoiners

# To list your PWA

Make a pull request with your PWA added to the Array found in /src/sites.json

The format should be:

```json
{
  "name": "My BTC PWA",
  "url": "https://example.com",
  "icon": "https://example.com/logo.png",
  "description": "This PWA does cool things with Bitcoin!",
  "tags": ["BTC", "tool", "map", "lightning", "wallet"],
  "npub": "npub1.....",
  "lnurl": "coolbtcpwa@example.com",
  "repo": "https://github.com/farmfoodmap/example.com",
  "screenshots": [
    "https://example.com/screenshot1.png",
    "https://example.com/screenshot2.png",
    "https://example.com/screenshot3.png",
    "https://example.com/screenshot4.png",
    "https://example.com/screenshot5.png"
  ]
}
```

- `name` is the name of your PWA
- `url` is the address it can be reached at
- `icon` is a link to the app icon (displays at max 250x250 px)
- `description` is 1 paragraph
- `tags` are helpful search tags that can be used to search for it. Please try to use tags that have already been used by other similar apps so we don't have to be too strict with this. Tags are case insensitive and will all be converted to uppercase.
- `npub` is a nostr public key for the project or maintainer [1][2]
- `lnurl` might be used for tips/zaps/donations in future [1][2]
- `repo` url to the repository [1][2]
- `screenshots` a list of up to 5 urls to screenshots of the app [1][2]

[1] Not currently used but may be used in future
[2] Not required. Please give a value of an empty string or array if none provided.

This is thrown together in a hurry using boilerplate Vanilla TS. It's really simple and probably doesn't need a framework. This makes it easier for other people to contribute.

# Development

1. Clone the repo - node js is required.
1. `cd BTCWeb.App` - change into the project directory
1. `npm i` - install dependencies
1. `npm run dev` - run a local web server that reloads on change

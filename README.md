# vuid
> very unique identifiers

This module exports a tiny (144B) function that generates [UUIDv4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)) compliant identifiers in the browser. It takes advantages of and relies on the browsers built in `crypto` API namely the `getRandomValues` function. This offers a [better level](https://v8project.blogspot.co.uk/2015/12/theres-mathrandom-and-then-theres.html) of randomness than `Math.random` but means will not work in a node environment.

For all practical purposes the generated identifiers can be considered universally unique. The chance of two ever colliding is **1 in 5,316,911,983,139,663,491,615,228,241,121,378,304**. Which is a pretty _cool_ guarantee.

For a history on the conception and evolution of this solution:

- There is this stackoverflow [answer](https://stackoverflow.com/a/2117523/1009784) by [Robert Kieffer](https://github.com/broofa).
- There is this [gist](https://gist.github.com/jed/982883) by [Jed Schmidt](https://github.com/jed).

## Import

You can install the package from npm and load it from node_modules.

```js
import vuid from 'vuid'
```

Or import it directly from unpkg in a script tag where type="module".

```js
import vuid from 'https://unpkg.com/vuid'
```

## Usage

Call the imported function.

```js
vuid() // 6dfc8a40-2d34-45b5-b3ab-aaf168e71aed
```

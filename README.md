# Consonant [![npm version](https://badge.fury.io/js/consonant.svg)](https://badge.fury.io/js/consonant)

Tiny library for working with consonants.

## Install

```
$ npm install consonant
```

## Usage

```js
const consonant = require('consonant');

const { consonants } = consonant;
//=> ['b', 'c', 'd', 'f', ...]

const { isConsonant } = consonant;
isConsonant('x');
//=> true

const { includesConsonant } = consonant;
includesConsonant('rhythms');
//=> true

const { startsWithConsonant } = consonant;
startsWithConsonant('xylophone');
//=> true

const { endsWithConsonant } = consonant;
endsWithConsonant('persiflage');
//=> false
```

#

<p align="center">
  <a href="http://paco.sh"><img src="https://raw.githubusercontent.com/pacocoursey/pacocoursey.github.io/master/footer.png" height="300"></a>
</p>

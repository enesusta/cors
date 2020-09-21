<p align="center">
<b>tornavida</b> <br/>
Tools to make a Javascript developer's life easier
</p>


<div align="center">

[![Build Status](https://travis-ci.com/enesusta/tornavida.svg?branch=master)](https://travis-ci.com/enesusta/tornavida)
[![Coverage Status](https://coveralls.io/repos/github/enesusta/tornavida/badge.svg?branch=master)](https://coveralls.io/github/enesusta/tornavida?branch=master)
[![CodeFactor](https://www.codefactor.io/repository/github/enesusta/tornavida/badge)](https://www.codefactor.io/repository/github/enesusta/tornavida)
[![NPM](https://img.shields.io/npm/v/tornavida.svg)](https://www.npmjs.com/package/tornavida) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![npm bundle size](https://img.shields.io/bundlephobia/min/tornavida?color=red)
![NPM](https://img.shields.io/npm/l/tornavida)
[![Package Quality](https://npm.packagequality.com/shield/tornavida.svg)](https://packagequality.com/#?package=tornavida)

</div>

- [🕺 Install](#-install)
  - [Import Syntax](#import-syntax)
    - [For ECMAScript Modules](#for-ecmascript-modules)
    - [For CommonJS Modules](#for-commonjs-modules)
- [📦 Packages](#-packages)
  - [math](#math)
    - [fieldMax(arr: any[], prop: string): number](#fieldmaxarr-any-prop-string-number)
    - [random(min: number, max: number): number](#randommin-number-max-number-number)
- [License](#license)


## 🕺 Install 

by using `npm` :

```bash
npm i tornavida
```

by using `yarn` :

```bash
yarn add tornavida
```

This repository has 3 general-purposes packages.
Those are:
- math
- text
- util

The priority of `tornavida` is to provide convenience for applications that uses ECMAScript modules. 

If you want to use tornavida with `cjs` ( [CommonJS](https://en.wikipedia.org/wiki/CommonJS) ) modules in `NodeJS` `(nodejs uses commonjs as a module system.)` one thing you must do that follows the syntax as listed below.

For example, we assume that you would like to use a module from the **util** package.

### Import Syntax

#### For ECMAScript Modules

Let's take a look at the syntax we should follow when using ECMAScript modules.

```js
import { sortAscByField } from 'tornavida/util';
// import { sortAscByField } from 'tornavida';  (1)

const array = [
   {id: 10, text: '10'},
   {id: 15, text: '15'},
   {id: 25, text: '25'}
];

const sortedArray = sortAscByField(array, 'id');
```

(1) This is also valid but you should use follow the syntax which listed above `<tornavida>/<package-name>`. If you don't have any concerns about performance you could also use that import statement without **subpackage indicator.**


Output

```json
[
  { id: 10, text: '10' },
  { id: 15, text: '15' },
  { id: 25, text: '25' }
]
```

#### For CommonJS Modules

Let's take a look at the syntax we should follow when using CommonJS modules. 

You can import CommonJS modules as follows `tornavida/<package-name>/cjs`


This syntax is valid for all packages that tornavida has.

```js
const { sortDescByField } = require('tornavida/util/cjs');

const array = [
    { id: 10, text: '10' },
    { id: 15, text: '15' },
    { id: 25, text: '25' }
];

const sortedDescArray = sortDescByField(array, 'id');
```

Output

```json
[
  { id: 25, text: '25' },
  { id: 15, text: '15' },
  { id: 10, text: '10' }
]
```

## 📦 Packages

### math

#### fieldMax(arr: any[], prop: string): number

Assume that you're just wondering what is the maximum value of the property that array has.

```js
import { fieldMax } from 'tornavida/math';

const arr = [
    { uuid: 1923 },
    { uuid: 1444 },
    { uuid: 1363 },
    { uuid: 1071 }
];

const maxValueOfGivenProp = fieldMax(arr, 'uuid'); // 1923
```

#### random(min: number, max: number): number

random function generates random integer value.

```js
import { random } from 'tornavida/math';

const randomInteger = random(1, 10); // Generates random integers between 1 to 10
```


## License

MIT © [enesusta](https://github.com/enesusta)

---

# fast-math
Faster equivalent of Math library.

[![npm version](https://badge.fury.io/js/fast-math.svg)](https://badge.fury.io/js/fast-math) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# Installation
```sh
$ npm install fast-math
```

# Quick start
```sh
var FastMath = require('fast-math');

FastMath.abs(-123);
```

# Covering for Math library
Currently the library implements below methods:
> - abs(x),
> - ceil(x),
> - floor(x),
> - round(x) - FastMath fixing negative number bad cases like FastMath.round(-1.5) = -2, in Node Math.round(-1.5) = -1 :(
> - sign(x)


# Performance
Run performance test to see how that library is fast.
```sh
npm run performance 

Start testing
Each method will be invoke 999999999 times

Test abs() method
Node Math time: 4572ms
FastMath time: 1080ms

Test ceil() method
Node Math time: 7224ms
FastMath time: 1341ms

Test floor() method
Node Math time: 7023ms
FastMath time: 1340ms

Test round() method
Node Math time: 8552ms
FastMath time: 1070ms

Test sign() method
Node Math time: 4802ms
FastMath time: 1080ms

Stop testing
```

# Licence
MIT

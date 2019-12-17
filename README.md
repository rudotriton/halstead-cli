# Halstead Metrics CLI

A command line tool for measuring Halstead metrics for JavaScript files.

## Installation

```bash
npm install -g halstead-metrics-cli
```

## Usage

Metrics for all files in a directory:

```bash
halstead dir cmds
```

```
Halstead metrics for: cmds

Total operators...........................391
Distinct operators.........................63
Total operands............................172
Distinct operands..........................42

Program length............................563
Program vocabulary........................105
Estimated length.......................603.05
Purity ratio.............................1.07
Volume................................3780.12
Difficulty.............................129.00
Program effort......................487635.51
Time required to program (h).............7.53
Number of delivered bugs.................2.07
```


Metrics for single or multiple files:

```bash
halstead file utils/error.js ./index.js
```


```
Halstead metrics for: utils/error.js,./index.js

Total operators...........................153
Distinct operators.........................36
Total operands.............................58
Distinct operands..........................23

Program length............................211
Program vocabulary.........................59
Estimated length.......................290.16
Purity ratio.............................1.38
Volume................................1241.24
Difficulty..............................45.39
Program effort.......................56341.40
Time required to program (h).............0.87
Number of delivered bugs.................0.49
```
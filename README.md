# cowrizz

a simple package to cowsay with a bit of charisma

## Installation

```bash
npm i cowrizz
```

## Usage

```js
import cowrizz, { glasses } from "cowrizz";

await cowrizz({
  text: "Hello World!",
  // startEyes: glasses.empty,
  // endEyes: glasses.default,
  // interval: 50,
  // startPause: 1000,
  // endPause: 1000,
  // reducedAnimation: boolean
});
```

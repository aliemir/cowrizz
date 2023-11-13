#!/usr/bin/env node

import cowrizz from "./index";
import args from "args";

args.option("text", "Text to say", "moo!");
args.option("startEyes", "Start eyes", "(oo)");
args.option("endEyes", "End eyes", "■-■¬");
args.option("interval", "Interval between frames", 50);
args.option("startPause", "Pause at the start", 1000);
args.option("endPause", "Pause at the end", 1000);
args.option("reducedAnimation", "Reduce animation", false);

const flags = args.parse(process.argv);

cowrizz({
  text: flags.text,
  startEyes: flags.startEyes,
  endEyes: flags.endEyes,
  interval: flags.interval,
  startPause: flags.startPause,
  endPause: flags.endPause,
  reducedAnimation: flags.reducedAnimation,
});

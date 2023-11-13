import cowsay from "cowsay";
import readline from "readline";

type CowrizzConfig = {
  text?: string;
  startEyes?: string;
  endEyes?: string;
  interval?: number;
  startPause?: number;
  endPause?: number;
  reducedAnimation?: boolean;
};

const cowrizz = async ({
  text = "moo!",
  startEyes = glasses.empty,
  endEyes = glasses.default,
  interval = 50,
  startPause = 1000,
  endPause = 1000,
  reducedAnimation = false,
}: CowrizzConfig) => {
  const cow = cowsay.say({
    text,
    e: startEyes.slice(1, -1),
  });

  const lines = cow.split("\n");
  const eyeline = lines.length - 4;

  const eyesStart = lines[eyeline].indexOf(startEyes);
  const eyeLineLength = lines[eyeline].length;

  const glassesLine = `${" ".repeat(eyesStart)}${endEyes}`;

  const frames: string[][] = [];
  for (let i = 0; i <= glassesLine.length; i++) {
    const frame = [...lines];
    if (i > 0) {
      frame[eyeline] =
        glassesLine.slice(i * -1) + lines[eyeline].slice(i, eyeLineLength);
    }
    frames.push(frame);
  }

  for (const frame of frames) {
    if (
      reducedAnimation &&
      frames.indexOf(frame) % 2 === 0 &&
      frames.indexOf(frame) !== frames.length - 1
    ) {
      continue;
    }

    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);

    console.log(frame.join("\n"));

    await new Promise((resolve) =>
      setTimeout(
        resolve,
        startPause && frames.indexOf(frame) === 0 ? startPause : interval
      )
    );
  }

  if (endPause > 0) {
    await new Promise((resolve) => setTimeout(resolve, endPause));
  }
};

export default cowrizz;

export const glasses = {
  empty: "(oo)",
  default: "■-■¬",
  rounded: "○-○¬",
  rounded2: "●-●¬",
  stars: "★-★¬",
  diamonds: "◆-◆¬",
  triangles: "▼-▼¬",
};

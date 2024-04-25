import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const part1 = (data) => {
  const fishes = final.split(",").map(Number);

  let day = 0;
  while (day < 80) {
    const fishesLength = fishes.length;
    for (let i = 0; i < fishesLength; i++) {
      if (fishes[i] === 0) {
        fishes.push(8);
        fishes[i] = 6;
      } else {
        fishes[i]--;
      }
    }

    day++;
  }

  return {
    fishes,
    length: fishes.length,
  };
};

console.log({ part1: part1(final) });

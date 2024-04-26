import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const part1 = (data) => {
  const fishes = data.split(",").map(Number);

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
// console.log({ part1: part1(test) });

const part2 = (data) => {
  const DAYS = 256;

  const ages = data
    .split(",")
    .map(Number)
    .reduce((acc, curr) => {
      acc[curr] += 1;
      return acc;
    }, Array.from({ length: 9 }).fill(0));

  for (let day = 0; day < DAYS; day++) {
    const day0 = ages.shift();

    ages[6] += day0;
    ages.push(day0);
  }

  return {
    ages,
    length: ages.reduce((acc, curr) => acc + curr),
  };
};

console.log({ part2: part2(final) });

const chalk = require("chalk");
const boxen = require("boxen");
const boxData = {
  name: chalk.bold("      👋 Hey, HAPPY BIRTHDAY \n  BROTHER FROM ANOTHER MOTHER"),
  github: chalk.gray("https://github.com/2003Aditya") + chalk.blue("2003Aditya"),
  npx: chalk.red("npx") + " " + chalk.white("sumit-birthday"),
  printWork: chalk.white.bold("       Work: FutureIAS"),
  printLinkedIn: chalk.white.bold("   LinkedIn:"),
  printGithub: chalk.white.bold("     GitHub:"),
  printCommd: chalk.white.bold("       Commd:"),
};

exports.Box = boxen(
  [
    `${boxData.name}`,
    ``,
    `${boxData.printWork}  ${boxData.work}`,
    ``,
    `${boxData.printGithub}  ${boxData.github}`,
    `${boxData.printLinkedIn}  ${boxData.linkedin}`,
    ``,
    `${boxData.labeprintCommdlCard}  ${boxData.npx}`,
    ``,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

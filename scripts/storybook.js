import concurrently from "concurrently";

concurrently(
  [
    "watch",
    { command: "rollup -c rollup.config.js -w", name: "rollup" },
    { command: "start-storybook -p 6006", name: "storybook" },
  ],
  {
    killOthers: ["failure"],
  }
);

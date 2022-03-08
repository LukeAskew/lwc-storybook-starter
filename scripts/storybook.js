import { spawn } from "child_process";

// Start file watchers
spawn("rollup", ["-c", "rollup.config.js", "-w"], {
  stdio: "inherit",
});

// Run Storybook in a separate process
spawn("start-storybook", ["-p", "6006"], {
  stdio: "inherit",
});

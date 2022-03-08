import { emptyDir } from "fs-extra";

await emptyDir("./dist");
await emptyDir("./.storybook-static");

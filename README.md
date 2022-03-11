# LWC Storybook Starter

> A starting point for LWC-based projects using Storybook

## Overview

The project serves as a minimal starting-point for **off-platform** LWC projects that want to use Storybook as their development + documentation solution. Developers should customize this starting point to fit their needs.

Happy Hacking!

## Usage

Develop:

```sh
yarn storybook
```

Build:

```sh
yarn build
yarn storybook:build
```

Test:

```sh
yarn test
```

## Creating New Components

Adding a new components requires a few steps:

1. Create a new folder under the desired namespace e.g. `src/modules/my/{component}` where `{component}` is replaced with your component's name
2. Add `{component}.css`, `{component}.html`, `{component}.ts`, and `{component}.stories.ts` files to the new folder
3. Optional: if you want to expose your new component, create a "module" file in the root of `src` using the `{namespace}-{componentName}.ts` format
4. Add a path alias to the `tsconfig.json#paths` config

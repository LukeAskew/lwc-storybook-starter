/**
 * Load modules required to render a story
 */
export async function loadModules({ parameters: { modules, tdsVersion } }) {
  if (!modules) return;
  return {
    modules: await Promise.all(
      modules.map((m) => {
        const path = m;
        // Tell webpack to ignore transforming this dynamic import
        // and use the native browser API instead.
        return import(/* webpackIgnore: true */ `${path}`);
      })
    ),
  };
}

export const loaders = [loadModules];

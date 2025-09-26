import React from "react";



const modules = import.meta.glob('/src/modules/**/*.tsx');
console.log('Available modules:', Object.keys(modules));

export const lazyLoad = (path: string, exportName = 'default') => {
  const importer = modules[`/src/modules/${path}`];
  if (!importer) {
    throw new Error(`Module not found: /src/modules/${path}`);
  }
  return React.lazy(() =>
    importer().then((m: any) => {
      const component = m[exportName];
      if (!component) {
        throw new Error(`Export "${exportName}" not found in ${path}`);
      }
      return { default: component };
    })
  );
};
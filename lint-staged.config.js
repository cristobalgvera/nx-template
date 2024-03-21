function join(files) {
  return files.join(',');
}

module.exports = {
  '{apps,libs,tools}/**/*.{ts,tsx}': (files) => {
    return `nx affected --target=typecheck --files=${join(files)}`;
  },
  '{apps,libs,tools}/**/*.{js,ts,jsx,tsx,json}': [
    (files) => `nx affected:lint --files=${join(files)}`,
    (files) => `nx format:write --files=${join(files)}`,
  ],
};

const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  prettierPath: null, // HACK: Prettier v3 is incompatible with Jest's inline snapshots
};

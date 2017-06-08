/* node: true */

const plugin = require('./extras');

describe('Extras Plugin', () => {
  it('should contain a preload hook', () => {
    expect(plugin.preload).toBeDefined();
  });
});

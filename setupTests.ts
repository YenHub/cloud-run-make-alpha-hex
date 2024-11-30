/*
 * This file is used to run global setup for tests.
 *
 * `beforeEach` is run before each & every test
 * `afterEach` is run after each & every test
 *
 * We should only add things here that affect all tests.
 *
 * This will run before your own individual `beforeEach` and `afterEach` test
 * blocks, meaning you can override anything that is set here in your own blocks
 */

afterEach(() => {
  /** Clear, Reset & Restore all Jest Mocks */
  jest.clearAllMocks();
  jest.resetAllMocks();
  jest.restoreAllMocks();
  jest.resetModules();
});

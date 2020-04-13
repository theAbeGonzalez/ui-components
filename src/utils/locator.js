const prefix = 'automation';
/**
 * Helper function to create a standard identifier for data-testid html attribute.
 */
const getTestIdLocator = (name) => (suffix) =>
  suffix ? `${prefix}-${name}-${suffix}` : `${prefix}-${name}`;

export default getTestIdLocator;

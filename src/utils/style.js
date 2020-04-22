const applyIf = (condition, css) => {
  if (condition) {
    return css;
  }
  return null;
};

const applyIfTernary = (condition, css1, css2) => {
  return condition ? css1 : css2;
};

export { applyIf, applyIfTernary };

export const prependStyle = (shadowRoot, styles) => {
  if (!styles) return;

  const style = document.createElement("style");
  style.innerHTML = styles.toString();
  shadowRoot.prepend(style);
};

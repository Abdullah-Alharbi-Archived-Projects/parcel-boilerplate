export default function compile(tag, attrs, ...children) {
  // Note: Custom Components will be functions
  if (typeof tag === "function") return tag();

  // Regular html tags will be strings to create the elements
  if (typeof tag === "string") {
    const fragments = document.createDocumentFragment();
    const element = document.createElement(tag);

    children.forEach((child) => {
      if (child instanceof HTMLElement) fragments.appendChild(child);
      else if (typeof child === "string")
        fragments.append(document.createTextNode(child));
      else throw { error: "Child is not appendable.", child };
    });

    element.appendChild(fragments);

    // Merge element with attributes
    Object.assign(element, attrs);

    return element;
  }
}

//  MUST RUN IN CLIENT SIDE
export const getPlainText = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.body.textContent;
};

//  MUST RUN IN CLIENT SIDE
export const fromHTMLToObject = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  return Array.from(doc.body.childNodes)
    .map((node) => {
      if (node.nodeType === 3) {
        return {
          type: "text",
          content: node.textContent,
          bold: node.parentElement?.tagName.toLowerCase() === "b",
          italic: node.parentElement?.tagName.toLowerCase() === "i",
        };
      }
      if (node.nodeType === 1) {
        return {
          type: (node as HTMLElement).tagName.toLowerCase(),
          content: node.textContent,
          bold: node.parentElement?.tagName.toLowerCase() === "b",
          italic: node.parentElement?.tagName.toLowerCase() === "i",
        };
      }

      return null;
    })
    .filter(Boolean);
};

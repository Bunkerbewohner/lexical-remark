import { Strong } from "mdast";
import { Handler } from ".";

export const strong: Handler<Strong, true> = (node, { parent, formatting = [], rootHandler }) => {
  node.children.forEach((child) => {
    rootHandler(child, { parent, formatting: [...formatting, 'bold'], rootHandler });
  });
};

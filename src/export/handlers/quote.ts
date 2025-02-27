import { BlockContent, Blockquote } from 'mdast';
import type { QuoteNode } from '@lexical/rich-text';
import { Handler } from "./index.js";

export const quote: Handler<QuoteNode> = (node, { rootHandler }) => {
  const remarkNode: Blockquote = {
    type: 'blockquote',
    children: node.getChildren()
      .map((child) => rootHandler(child, { rootHandler }))
      .filter((child): child is BlockContent => !!child),
  };

  return remarkNode;
};
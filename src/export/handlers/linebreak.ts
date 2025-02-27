import { Break } from 'mdast';
import { Handler } from "./index.js";
import type { LineBreakNode } from 'lexical';

export const linebreak: Handler<LineBreakNode> = () => {
  const remarkNode: Break = {
    type: 'break',
  };

  return remarkNode;
};
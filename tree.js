/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let current = [this.root];
    let sum = 0;
    while (current.length) {
      const node = current.pop();
      if (node) {
        sum += node.val;
        for (let child of node.children) {
          current.push(child);
        }
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let current = [this.root];
    let sum = 0;
    while (current.length) {
      const node = current.pop();
      if (node) {
        sum += node.val % 2 === 0 ? 1 : 0;
        for (let child of node.children) {
          current.push(child);
        }
      }
    }
    return sum;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let current = [this.root];
    let sum = 0;
    while (current.length) {
      const node = current.pop();
      if (node) {
        sum += node.val > lowerBound ? 1 : 0;
        for (let child of node.children) {
          current.push(child);
        }
      }
    }
    return sum;
  }
}

module.exports = { Tree, TreeNode };

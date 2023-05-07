/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(curr = this.root) {
    if (!curr) return 0;
    if (!curr.left && !curr.right) return 1;
    if (!curr.left) {
      return this.minDepth(curr.right) + 1;
    }
    if (!curr.right) {
      return this.minDepth(curr.left) + 1;
    }
    return Math.min(this.minDepth(curr.left), this.minDepth(curr.right)) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(curr = this.root) {
    if (!curr) return 0;
    if (!curr.left && !curr.right) return 1;
    if (!curr.left) {
      return this.maxDepth(curr.right) + 1;
    }
    if (!curr.right) {
      return this.maxDepth(curr.left) + 1;
    }
    return Math.max(this.maxDepth(curr.left), this.maxDepth(curr.right)) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(curr = this.root) {
    let maxSum = 0;

    function findSums(node) {
      if (!node) return 0;
      let left = findSums(node.left);
      let right = findSums(node.right);
      let allSum = left + right + node.val;
      let leftNodeSum = left + node.val;
      let rightNodeSum = right + node.val;
      maxSum = Math.max(maxSum, node.val, allSum, leftNodeSum, rightNodeSum);
      return Math.max(leftNodeSum, rightNodeSum, node.val);
    }

    findSums(curr);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, curr = this.root) {
    let result = null;
    if (!curr) return null;
    if (curr.val > lowerBound && (curr.val < result || !result)) {
      result = curr.val;
    }
    if (curr.left || curr.right) {
      let left = this.nextLarger(lowerBound, curr.left);
      let right = this.nextLarger(lowerBound, curr.right);
      if (left > lowerBound && (left < result || !result)) {
        result = left;
      }
      if (right > lowerBound && (right < result || !result)) {
        result = right;
      }
    }
    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };

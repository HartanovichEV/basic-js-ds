const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data, currentNode = this.rootNode) {
    let newNode = new Node(data);

    if (this.rootNode == null) {
      this.rootNode = newNode;
    } else if (data > currentNode.data) {
      if (currentNode.right == null) {
        currentNode.right = newNode;
      } else {
        this.add(data, currentNode.right)
      }
    } else if (data < currentNode.data) {
      if (currentNode.left == null) {
        currentNode.left = newNode;
      } else {
        this.add(data, currentNode.left)
      }
    }
  }

  has(data, node = this.rootNode) {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.has(data, node.left);
    } else if (data > node.data) {
      return this.has(data, node.right);
    } else {
      return true;
    }
  }


  find(data, node = this.rootNode) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.find(data, node.left);
    } else if (data > node.data) {
      return this.find(data, node.right);
    } else {
      return node;
    }
  }

  remove(data, node = this.rootNode) {
    if (!node) {
      return null;
    }
  
    if (data < node.data) {
      node.left = this.remove(data, node.left);
    } else if (data > node.data) {
      node.right = this.remove(data, node.right);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        node.data = this.min(node.right);
        node.right = this.remove(node.data, node.right);
      }
    }
  
    return node;
  }

  min(node = this.rootNode) {
    while(node.left) {
      node = node.left;
    }

    return node.data
  }

  max() {
    let node = this.rootNode;
    while(node.right) {
      node = node.right;
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};
const linksClass = "pagination__item--link";

const containersClass = "fixed-containers";

// Accessing the DOM with JS is resource demanding so i want to create an object to retain in memory and just access it one time
const containers = {
  topLeft_container_node: document.getElementById("top-left-container"),
  centerLeft_container_node: document.getElementById("center-left-container"),
  centerRight_container_node: document.getElementById("center-right-container"),
  bottomLeft_container_node: document.getElementById("bottom-left-container")
};

const links = document.getElementsByClassName(linksClass);

const clearContainers = () => {
  // Might look a little confusing but its just a while for each container to check if has child and removing then one after each other.
  while (containers.topLeft_node.firstChild) {
    containers.topLeft_node.removeChild(containers.topLeft_node.firstChild);
  }
  while (containers.centerLeft_node.firstChild) {
    containers.centerLeft_node.removeChild(
      containers.centerLeft_node.firstChild
    );
  }
  while (containers.centerLeft_arrow.firstChild) {
    containers.centerLeft_arrow.removeChild(
      containers.centerLeft_arrow.firstChild
    );
  }
  while (containers.centerRight_node.firstChild) {
    containers.centerRight_node.removeChild(
      containers.centerRight_node.firstChild
    );
  }
  while (containers.centerRight_arrow.firstChild) {
    containers.centerRight_arrow.removeChild(
      containers.centerRight_arrow.firstChild
    );
  }
  while (containers.bottomLeft_node.firstChild) {
    containers.bottomLeft_node.removeChild(
      containers.bottomLeft_node.firstChild
    );
  }
};

const changeLinkToActive = index => {
  // links is a selector that contains all of the links nodes comes from constants.js
  // Made this function to change links to active base on the linked that the user clicked, with string interpolation makes it a little easier.
  for (let i = 0; i < links.length; i++) {
    if (i == index) {
      links[i].className = `${linksClass} active`;
    } else {
      links[i].className = linksClass;
    }
  }
};

moveScrollXTo = index => {
  // Here i just use string interpolation for some izi pizi node change-of-class
  document.getElementsByClassName(
    "slider"
  )[0].className = `slider slider-path-${index}`;
};

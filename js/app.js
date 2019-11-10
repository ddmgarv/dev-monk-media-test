// Here i created an arrow function named router, this kinda mimics the functionality of React router.

// Of course, this way of doing the exercise takes longer(from my point of view), but i just wanted to do it this way because... i'm a goofy goober(spongebob reference if u didnt catch it).
path_position = 0;

nextSection = () => {
  path_position++;
  console.log(path_position);
  router(path_position);
};

prevSection = () => {
  path_position--;
  router(path_position);
};

const router = index => {
  switch (index) {
    case 0:
      clearContainers();
      changeLinkToActive(index);
      moveScrollXTo(index);
      setTimeout(() => {
        path0_node0.render();
        path0_node1.render();
        path0_node2.render();
      }, 1000);
      path_position = 0;
      break;
    case 1:
      clearContainers();
      changeLinkToActive(index);
      moveScrollXTo(index);
      setTimeout(() => {
        path1_node0.render();
        path1_node1.render();
        path1_node2.render();
      }, 1000);
      path_position = 1;
      break;
    case 2:
      clearContainers();
      changeLinkToActive(index);
      moveScrollXTo(index);
      setTimeout(() => {
        path2_node0.render();
        path2_node1.render();
        path2_node2.render();
      }, 1000);
      path_position = 2;
      break;
    case 3:
      clearContainers();
      changeLinkToActive(index);
      moveScrollXTo(index);
      setTimeout(() => {
        path3_node0.render();
        path3_node1.render();
        path3_node2.render();
      }, 1000);
      path_position = 3;
      break;
    case 4:
      clearContainers();
      changeLinkToActive(index);
      moveScrollXTo(index);
      setTimeout(() => {
        path4_node0.render();
        path4_node1.render();
        path4_node2.render();
      }, 1000);
      path_position = 4;
      break;
    case 5:
      clearContainers();
      changeLinkToActive(index);
      moveScrollXTo(index);
      setTimeout(() => {
        path5_node0.render();
        path5_node1.render();
        path5_node2.render();
      }, 1000);
      path_position = 5;
      break;
    case 6:
      clearContainers();
      changeLinkToActive(index);
      moveScrollXTo(index);
      setTimeout(() => {
        path6_node0.render();
        path6_node1.render();
        path6_node2.render();
      }, 1000);
      path_position = 6;
      break;

    case 7:
      clearContainers();
      changeLinkToActive(index);
      moveScrollXTo(index);
      setTimeout(() => {
        path7_node0.render();
        path7_node1.render();
        path7_node2.render();
      }, 1000);
      path_position = 7;
      break;

    case 8:
      clearContainers();
      changeLinkToActive(index);
      moveScrollXTo(index);
      setTimeout(() => {
        path8_node0.render();
        path8_node1.render();
        path8_node2.render();
      }, 1000);
      path_position = 8;
      break;

    case 9:
      clearContainers();
      changeLinkToActive(index);
      moveScrollXTo(index);
      setTimeout(() => {
        path9_node0.render();
        path9_node1.render();
        path9_node2.render();
      }, 1000);
      path_position = 9;
      break;

    default:
      break;
  }
};

document.getElementById("center-left-arrow").onclick = prevSection;

document.getElementById("center-right-arrow").onclick = nextSection;

router(0);

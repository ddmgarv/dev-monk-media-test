// First step nodes to render
const path0_node0 = new HtmlNode(
  "p",
  "we are breaking <br /> our vow <br /> of silence",
  containers.topLeft_node,
  "title"
);
const path0_node1 = new HtmlNode(
  "p",
  "In january 2011, after a decade of digital, we opened the doors to our temple. <br /> Follow our noble eigthfold path to digital enlightement here",
  containers.bottomLeft_node,
  "paragraph"
);
const path0_node2 = new HtmlNode(
  "div",
  "",
  containers.centerRight_arrow,
  "arrowIcon rightArrow"
);
// First step nodes to render

// Second step nodes to render
const path1_node0 = new HtmlNode(
  "p",
  "talent is given <br /> true skill is <br /> earned",
  containers.centerLeft_node,
  "title"
);
const path1_node1 = new HtmlNode(
  "div",
  "",
  containers.centerLeft_arrow,
  "arrowIcon leftArrow"
);
const path1_node2 = new HtmlNode(
  "div",
  "",
  containers.centerRight_arrow,
  "arrowIcon rightArrow"
);
// Second step nodes to render

// third step nodes to render
const path2_node0 = new HtmlNode(
  "p",
  "be flexible to <br /> change and <br /> sturdy in <br /> convinction",
  containers.centerLeft_node,
  "title"
);
const path2_node1 = new HtmlNode(
  "div",
  "",
  containers.centerLeft_arrow,
  "arrowIcon leftArrow"
);
const path2_node2 = new HtmlNode(
  "div",
  "",
  containers.centerRight_arrow,
  "arrowIcon rightArrow"
);
// third step nodes to render

// fourth step nodes to render
const path3_node0 = new HtmlNode(
  "p",
  "use many skills <br /> yet work as one",
  containers.centerRight_node,
  "title"
);
const path3_node1 = new HtmlNode(
  "div",
  "",
  containers.centerLeft_arrow,
  "arrowIcon leftArrow"
);
const path3_node2 = new HtmlNode(
  "div",
  "",
  containers.centerRight_arrow,
  "arrowIcon rightArrow"
);
// fourth step nodes to render

// five step nodes to render
const path4_node0 = new HtmlNode(
  "p",
  "to master <br /> anything find <br /> interest in <br /> everything",
  containers.centerRight_node,
  "title"
);
const path4_node1 = new HtmlNode(
  "div",
  "",
  containers.centerLeft_arrow,
  "arrowIcon leftArrow"
);
const path4_node2 = new HtmlNode(
  "div",
  "",
  containers.centerRight_arrow,
  "arrowIcon rightArrow"
);
// five step nodes to render

// six step nodes to render
const path5_node0 = new HtmlNode(
  "p",
  "individuals <br /> flourish <br /> if culture <br /> and wisdom <br /> are shared",
  containers.centerRight_node,
  "title"
);
const path5_node1 = new HtmlNode(
  "div",
  "",
  containers.centerLeft_arrow,
  "arrowIcon leftArrow"
);
const path5_node2 = new HtmlNode(
  "div",
  "",
  containers.centerRight_arrow,
  "arrowIcon rightArrow"
);
// six step nodes to render

// seven step nodes to render
const path6_node0 = new HtmlNode(
  "p",
  "train for <br /> perfection but <br /> aim for more",
  containers.centerLeft_node,
  "title"
);
const path6_node1 = new HtmlNode(
  "div",
  "",
  containers.centerLeft_arrow,
  "arrowIcon leftArrow"
);
const path6_node2 = new HtmlNode(
  "div",
  "",
  containers.centerRight_arrow,
  "arrowIcon rightArrow"
);
// seven step nodes to render

// eight step nodes to render
const path7_node0 = new HtmlNode(
  "p",
  "take pride in your <br /> work but do not seek praise",
  containers.centerLeft_node,
  "title"
);
const path7_node1 = new HtmlNode(
  "div",
  "",
  containers.centerLeft_arrow,
  "arrowIcon leftArrow"
);
const path7_node2 = new HtmlNode(
  "div",
  "",
  containers.centerRight_arrow,
  "arrowIcon rightArrow"
);
// eight step nodes to render

// nine step nodes to render
const path8_node0 = new HtmlNode(
  "p",
  "temporary <br /> sacrifice brings <br /> lasting results",
  containers.centerLeft_node,
  "title"
);
const path8_node1 = new HtmlNode(
  "div",
  "",
  containers.centerLeft_arrow,
  "arrowIcon leftArrow"
);
const path8_node2 = new HtmlNode(
  "div",
  "",
  containers.centerRight_arrow,
  "arrowIcon rightArrow"
);
// nine step nodes to render

// ten step nodes to render
const path9_node0 = new HtmlNode("p", "", containers.centerLeft_node, "title");
const path9_node1 = new HtmlNode(
  "div",
  "",
  containers.centerLeft_arrow,
  "arrowIcon leftArrow"
);
const path9_node2 = new HtmlNode(
  "div",
  "",
  containers.centerRight_arrow,
  "arrowIcon rightArrow"
);
// ten step nodes to render

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
      }, 650);
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
      }, 650);
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
      }, 650);
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
      }, 650);
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
      }, 650);
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
      }, 650);
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
      }, 650);
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
      }, 650);
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
      }, 650);
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
      }, 650);
      path_position = 9;
      break;

    default:
      break;
  }
};

document.getElementById("center-left-arrow").onclick = prevSection;

document.getElementById("center-right-arrow").onclick = nextSection;

router(0);

// Here i created an arrow function named router, this kinda mimics the functionality of React router.

// Of course, this way of doing the exercise takes longer(from my point of view), but i just wanted to do it this way because... i'm a goofy goober(spongebob reference if u didnt catch it).

const router = index => {
  switch (index) {
    case 0:
      clearContainers();
      changeLinkToActive(index);
      moveScrollXTo(index);
      const path0_node1 = new HtmlNode(
        "p",
        "we are breaking <br /> our vow <br /> of silence",
        containers.topLeft_node,
        "title"
      );
      const path0_node2 = new HtmlNode(
        "p",
        "In january 2011, after a decade of digital, we opened the doors to our temple. <br /> Follow our noble eigthfold path to digital enlightement here",
        containers.bottomLeft_node,
        "paragraph"
      );
      const path0_node3 = new HtmlNode(
        "div",
        "",
        containers.centerRight_node,
        "arrowIcon rightArrow"
      );

      path0_node1.render();
      path0_node2.render();
      path0_node3.render();
      break;
    case 1:
      clearContainers();
      changeLinkToActive(index);
      moveScrollXTo(index);
      const path1_node0 = new HtmlNode(
        "p",
        "we are breaking <br /> our vow <br /> of silence",
        containers.topLeft_node,
        "title"
      );
      const path1_node1 = new HtmlNode(
        "p",
        "In january 2011, after a decade of digital, we opened the doors to our temple. <br /> Follow our noble eigthfold path to digital enlightement here",
        containers.bottomLeft_node,
        "paragraph"
      );
      const path1_node2 = new HtmlNode(
        "div",
        "",
        containers.centerRight_node,
        "arrowIcon rightArrow"
      );
      const path1_node3 = new HtmlNode(
        "div",
        "",
        containers.centerRight_node,
        "arrowIcon rightArrow"
      );
      path1_node0.render();
      path1_node1.render();
      path1_node2.render();
      path1_node3.render();
      break;

    default:
      break;
  }
};

router(0);

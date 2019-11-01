const changeLinkToActive = index => {
  links[index].className = `${linksClass} active`;
};
const clearContainers = () => {
  document.getElementsByClassName(containersClass).innerHTML = null;
};
// Here i created an arrow function named router, this kinda mimics the functionality of React router.

// Of course, this way of doing the exercise takes longer(from my point of view), but i just wanted to do it this way because... i'm a goofy goober(spongebob reference if u didnt catch it).

const router = index => {
  switch (index) {
    case 0:
      clearContainers();
      changeLinkToActive(index);
      const path_0_txt1 = new HtmlNode(
        "p",
        "we are breaking <br /> our vow <br /> of silence",
        containers.topLeft_container_node,
        "title"
      );
      const path_0_txt2 = new HtmlNode(
        "p",
        "In january 2011, after a decade of digital, we opened the doors to our temple. <br /> Follow our noble eigthfold path to digital enlightement here",
        containers.bottomLeft_container_node,
        "paragraph"
      );
      const path_0_arrow = new HtmlNode(
        "div",
        "",
        containers.centerRight_container_node,
        "arrowIcon rightArrow"
      );

      path_0_txt1.render();
      path_0_txt2.render();
      path_0_arrow.render();

      break;
    case 1:
      changeLinkToActive(index);
      break;

    default:
      break;
  }
};

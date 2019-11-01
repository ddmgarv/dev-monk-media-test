class AppString {
  constructor(text, selector, className) {
    this.text = text;
    this.selector = selector;
    this.className = className;
  }
  renderText() {
    let paragraph = document.createElement("p");
    paragraph.className = this.className;
    paragraph.innerHTML = this.text;
  }
}

function renderLink(index) {
  switch (index) {
    case 0:
      break;

    default:
      break;
  }
}

document.getElementsByClassName("pagination__item");

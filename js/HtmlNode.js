class HtmlNode {
  // Using classes
  constructor(htmlElement, text, selector, className) {
    // Constructor for initialize the object with values
    this.htmlElement = htmlElement;
    this.text = text;
    this.selector = selector;
    this.className = className;
  }
  render() {
    const { htmlElement, text, selector, className } = this;
    // Destructuring - ES6
    let paragraph = document.createElement(htmlElement);
    paragraph.className = className;
    paragraph.innerHTML = text;
    selector.appendChild(paragraph);
  }
}

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var firstTestMarkdown = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*';

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      term: firstTestMarkdown
    };

    return _this;
  }

  SearchBar.prototype.finalhtml = function finalhtml(data) {
    var sanitizedData = marked(data, {
      sanitize: true
    });
    return {
      __html: sanitizedData
    };
  };

  SearchBar.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement("textarea", { rows: "25", className: "form-control", value: this.state.term, onChange: function onChange(event) {
            return _this2.setState({ term: event.target.value });
          } })
      ),
      React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement("div", { dangerouslySetInnerHTML: this.finalhtml(this.state.term), className: "rawinput" })
      )
    );
  };

  return SearchBar;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return React.createElement(SearchBar, null);
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector(".container"));
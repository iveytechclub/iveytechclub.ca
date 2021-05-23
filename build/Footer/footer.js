var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

"use strict";

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.state = { year: new Date().getFullYear() }; // footer always has current year in copyright
    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "footer-container" },
        React.createElement(
          "div",
          { className: "social-buttons-container" },
          React.createElement(
            "a",
            {
              className: "social-button facebook",
              href: "https://www.facebook.com/IveyTechnologyClub",
              target: "_blank"
            },
            React.createElement("i", { className: "fab fa-facebook-f" })
          ),
          React.createElement(
            "a",
            {
              className: "social-button linkedin",
              href: "https://www.linkedin.com/company/ivey-tech-club/about/",
              target: "_blank"
            },
            React.createElement("i", { className: "fab fa-linkedin-in" })
          ),
          React.createElement(
            "a",
            {
              className: "social-button github",
              href: "https://github.com/iveytechclub",
              target: "_blank"
            },
            React.createElement("i", { className: "fab fa-github" })
          ),
          React.createElement(
            "a",
            {
              className: "social-button medium",
              href: "https://medium.com/@iveytechclub",
              target: "_blank"
            },
            React.createElement("i", { className: "fab fa-medium-m" })
          )
        ),
        React.createElement(
          "p",
          { className: "footnote" },
          "\xA9 ",
          this.state.year,
          " Ivey Tech Club at the Ivey Business School | All Rights Reserved | Made with \u2665"
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

var domTarget = document.querySelector("#footer-target");
ReactDOM.render(React.createElement(Footer, null), domTarget);
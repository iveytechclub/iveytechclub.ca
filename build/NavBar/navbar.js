"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    // assign to current page
    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

    _this.state = { active: PAGE }; // page is a variable declared in HTML for that page
    return _this;
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "nav",
        { className: "navbar navbar-expand-lg navbar-light fixed-top" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "a",
            { className: "navbar-brand", href: "./" },
            React.createElement("img", { src: "./assets/logo.jpg", className: "navbar-logo" })
          ),
          React.createElement(
            "button",
            {
              className: "navbar-toggler",
              type: "button",
              "data-bs-toggle": "collapse",
              "data-bs-target": "#navbarNav",
              "aria-controls": "navbarNav",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation"
            },
            React.createElement("span", { className: "navbar-toggler-icon" })
          ),
          React.createElement(
            "div",
            { className: "collapse navbar-collapse", id: "navbarNav" },
            React.createElement(
              "ul",
              { className: "navbar-nav ms-lg-auto" },
              React.createElement(
                "li",
                {
                  className: this.state.active == "home" ? "nav-item active" : "nav-item"
                },
                React.createElement(
                  "a",
                  { className: "nav-link ms-lg-4", href: "./" },
                  "Home"
                )
              ),
              React.createElement(
                "li",
                {
                  className: this.state.active == "events" ? "nav-item active" : "nav-item"
                },
                React.createElement(
                  "a",
                  { className: "nav-link ms-lg-4", href: "events" },
                  "Events"
                )
              ),
              React.createElement(
                "li",
                {
                  className: this.state.active == "resources" ? "nav-item active" : "nav-item"
                },
                React.createElement(
                  "a",
                  { className: "nav-link ms-lg-4", href: "resources" },
                  "Resources"
                )
              ),
              React.createElement(
                "li",
                {
                  className: this.state.active == "people" ? "nav-item dropdown active" : "nav-item dropdown"
                },
                React.createElement(
                  "a",
                  {
                    className: "nav-link ms-lg-4",
                    id: "navbarDropdownMenuLink",
                    role: "button",
                    "data-bs-toggle": "dropdown",
                    "aria-expanded": "false"
                  },
                  "People ",
                  React.createElement("i", { className: "fas fa-caret-down" })
                ),
                React.createElement(
                  "ul",
                  {
                    className: "dropdown-menu",
                    "aria-labelledby": "navbarDropdownMenuLink"
                  },
                  React.createElement(
                    "li",
                    null,
                    React.createElement(
                      "a",
                      { className: "dropdown-item", href: "team" },
                      "Our Team"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement(
                      "a",
                      { className: "dropdown-item", href: "alumni" },
                      "Alumni"
                    )
                  )
                )
              ),
              React.createElement(
                "li",
                {
                  className: this.state.active == "contact" ? "nav-item active" : "nav-item"
                },
                React.createElement(
                  "a",
                  { className: "nav-link ms-lg-4", href: "contact" },
                  "Contact"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return NavBar;
}(React.Component);

var domTarget = document.querySelector("#react-navbar");
ReactDOM.render(React.createElement(NavBar, null), domTarget);
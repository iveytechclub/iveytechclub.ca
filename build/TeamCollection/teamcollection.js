var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "pages/TeamPage/team.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

"use strict";

var TeamCollection = function (_React$Component) {
  _inherits(TeamCollection, _React$Component);

  function TeamCollection(props) {
    _classCallCheck(this, TeamCollection);

    var _this = _possibleConstructorReturn(this, (TeamCollection.__proto__ || Object.getPrototypeOf(TeamCollection)).call(this, props));

    _this.state = { team: [] };
    return _this;
  }

  _createClass(TeamCollection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      loadJSON(function (response) {
        var team = [];
        var teamObject = JSON.parse(response);
        teamObject.currentTeam.forEach(function (member) {
          // add it to the array
          team.push(member);
        });
        _this2.setState({
          team: team
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "team-container" },
        this.state.team.map(function (member, index) {
          return React.createElement(
            "div",
            { className: "member-container", index: index },
            React.createElement(
              "div",
              { className: "left" },
              React.createElement("div", {
                className: "person-img",
                style: {
                  backgroundImage: "url(pages/TeamPage/assets/TeamPhotos/" + member.imgURL + ")"
                }
              })
            ),
            React.createElement(
              "div",
              { className: "right" },
              React.createElement(
                "h4",
                { className: "name-heading" },
                member.name
              ),
              React.createElement(
                "h4",
                { className: "role-heading" },
                member.role
              ),
              React.createElement(
                "a",
                { href: member.linkedin, target: "_blank", className: "linkedin" },
                React.createElement("i", { "class": "fab fa-linkedin" })
              ),
              React.createElement(
                "div",
                { className: "subheading" },
                React.createElement(
                  "div",
                  { className: "label" },
                  "Pre-Ivey Program:"
                ),
                React.createElement(
                  "div",
                  { className: "info" },
                  member.preIveyProgram
                )
              ),
              React.createElement(
                "div",
                { className: "subheading" },
                React.createElement(
                  "div",
                  { className: "label" },
                  "Work Experience:"
                ),
                React.createElement(
                  "div",
                  { className: "info" },
                  member.workExperience
                )
              ),
              React.createElement(
                "div",
                { className: "subheading why-tech" },
                React.createElement(
                  "div",
                  { className: "label why-tech" },
                  "What do you ❤️ about tech:"
                ),
                React.createElement(
                  "div",
                  { className: "info why-tech" },
                  member.whyTech
                )
              )
            )
          );
        })
      );
    }
  }]);

  return TeamCollection;
}(React.Component);

var domTarget = document.querySelector("#team-collection");
ReactDOM.render(React.createElement(TeamCollection, null), domTarget);
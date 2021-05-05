var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "pages/AlumniPage/alumni.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

"use strict";

var AlumniCollection = function (_React$Component) {
  _inherits(AlumniCollection, _React$Component);

  function AlumniCollection(props) {
    _classCallCheck(this, AlumniCollection);

    var _this = _possibleConstructorReturn(this, (AlumniCollection.__proto__ || Object.getPrototypeOf(AlumniCollection)).call(this, props));

    _this.state = { alumniCohorts: [] };
    return _this;
  }

  _createClass(AlumniCollection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      loadJSON(function (response) {
        var cohortsArray = [];
        var alumniObject = JSON.parse(response);
        alumniObject.alumniCohorts.forEach(function (cohort) {
          // add it to the array
          cohortsArray.push(cohort);
        });
        _this2.setState({
          alumniCohorts: cohortsArray
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "alumni-cohorts-container" },
        this.state.alumniCohorts.map(function (cohort, index) {
          return React.createElement(
            "div",
            { className: "cohort-container", index: index },
            React.createElement(
              "h2",
              { className: "primary text-center" },
              cohort.year,
              " Team"
            ),
            React.createElement(
              "div",
              { className: "cohort-team-list" },
              cohort.team.map(function (person, index) {
                return React.createElement(
                  "div",
                  { index: index, className: "person-container" },
                  React.createElement(
                    "a",
                    { href: person.linkedin, target: "_blank" },
                    React.createElement(
                      "div",
                      { className: "circle" },
                      React.createElement("div", {
                        className: "person-img",
                        style: {
                          backgroundImage: "url(pages/TeamPage/assets/TeamPhotos/" + person.imgURL + ")"
                        }
                      }),
                      React.createElement(
                        "div",
                        { className: "linkedin-overlay" },
                        React.createElement("i", { className: "fab fa-linkedin-in" })
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "person-name" },
                    person.name
                  ),
                  React.createElement(
                    "div",
                    { className: "person-role" },
                    person.role
                  )
                );
              })
            )
          );
        })
      );
    }
  }]);

  return AlumniCollection;
}(React.Component);

var domTarget = document.querySelector("#alumni-collection");
ReactDOM.render(React.createElement(AlumniCollection, null), domTarget);
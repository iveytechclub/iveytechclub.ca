var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "pages/ResourcesPage/resources.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

"use strict";

var ResourceCollection = function (_React$Component) {
  _inherits(ResourceCollection, _React$Component);

  function ResourceCollection(props) {
    _classCallCheck(this, ResourceCollection);

    var _this = _possibleConstructorReturn(this, (ResourceCollection.__proto__ || Object.getPrototypeOf(ResourceCollection)).call(this, props));

    _this.state = { resources: [] };
    return _this;
  }

  _createClass(ResourceCollection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      loadJSON(function (response) {
        var resourcesArr = [];
        var resourcesObject = JSON.parse(response);
        resourcesObject.resources.forEach(function (resource) {
          // add it to the array
          resourcesArr.push(resource);
        });
        _this2.setState({
          resources: resourcesArr
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "resources-collection" },
        this.state.resources.map(function (resource, index) {
          return React.createElement(
            "div",
            {
              className: "resource-container m-lg-5 m-md-3 shine",
              index: index
            },
            React.createElement(
              "div",
              { className: "image-container" },
              React.createElement("div", {
                className: "resource-img shine-img",
                style: {
                  backgroundImage: "url(pages/ResourcesPage/assets/ResourceImages/" + resource.image + ")"
                }
              })
            ),
            React.createElement(
              "div",
              { className: "resource-details" },
              React.createElement(
                "h2",
                { className: "secondary" },
                resource.name
              ),
              React.createElement(
                "p",
                null,
                resource.description
              ),
              React.createElement(
                "a",
                { href: resource.link, target: "_blank" },
                React.createElement(
                  "button",
                  { className: "tertiary" },
                  "More Info"
                )
              )
            )
          );
        })
      );
    }
  }]);

  return ResourceCollection;
}(React.Component);

var domTarget = document.querySelector("#react-resources");
ReactDOM.render(React.createElement(ResourceCollection, null), domTarget);
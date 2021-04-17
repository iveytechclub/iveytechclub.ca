var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "pages/EventsPage/events.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

"use strict";

var EventCollection = function (_React$Component) {
  _inherits(EventCollection, _React$Component);

  function EventCollection(props) {
    _classCallCheck(this, EventCollection);

    var _this = _possibleConstructorReturn(this, (EventCollection.__proto__ || Object.getPrototypeOf(EventCollection)).call(this, props));

    _this.state = { upcomingEvents: [], previousEvents: [] };
    return _this;
  }

  _createClass(EventCollection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      loadJSON(function (response) {
        console.log(response);
        var upcomingArray = [];
        var previousArray = [];
        var eventsObject = JSON.parse(response);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "events-collection" },
        "Hello"
      );
    }
  }]);

  return EventCollection;
}(React.Component);

var domTarget = document.querySelector("#react-events");
ReactDOM.render(React.createElement(EventCollection, null), domTarget);
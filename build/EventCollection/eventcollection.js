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

var calendarDateArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug,", "Sep", "Oct", "Nov", "Dec"];

"use strict";

var EventCollection = function (_React$Component) {
  _inherits(EventCollection, _React$Component);

  function EventCollection(props) {
    _classCallCheck(this, EventCollection);

    var _this = _possibleConstructorReturn(this, (EventCollection.__proto__ || Object.getPrototypeOf(EventCollection)).call(this, props));

    _this.state = { upcomingEvents: [], previousEvents: [] };
    _this.renderEvents = _this.renderEvents.bind(_this);
    return _this;
  }

  _createClass(EventCollection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      loadJSON(function (response) {
        var upcomingArray = [];
        var previousArray = [];
        var eventsObject = JSON.parse(response);
        eventsObject.events.forEach(function (event) {
          // inspect the event date and sort it into either upcoming or previos event array
          var dateStrings = event.date.split("-");
          var newDate = new Date(parseInt(dateStrings[2], 10), parseInt(dateStrings[1], 10) - 1, // month is zero indexed
          parseInt(dateStrings[0], 10));
          // compare with current date to determine if in past
          if (newDate.getTime() < Date.now()) {
            console.log(newDate);
            // move to previous events
            previousArray.push(event);
          } else {
            console.log(newDate, newDate.getTime());
            console.log(Date.now());
            // move to future events
            upcomingArray.push(event);
          }
        });
        // need separate comparison functions for prev vs. upcoming
        function prevCompare(a, b) {
          var a_strings = a.date.split("-");
          var a_date = new Date(parseInt(a_strings[2], 10), parseInt(a_strings[1], 10) - 1, parseInt(a_strings[0], 10));
          var b_strings = b.date.split("-");
          var b_date = new Date(parseInt(b_strings[2], 10), parseInt(b_strings[1], 10) - 1, parseInt(b_strings[0], 10));
          if (a_date < b_date) {
            return 1;
          }
          if (a_date > b_date) {
            return -1;
          }
          return 0;
        }
        function upCompare(a, b) {
          var a_strings = a.date.split("-");
          var a_date = new Date(parseInt(a_strings[2], 10), parseInt(a_strings[1], 10) - 1, parseInt(a_strings[0], 10));
          var b_strings = b.date.split("-");
          var b_date = new Date(parseInt(b_strings[2], 10), parseInt(b_strings[1], 10) - 1, parseInt(b_strings[0], 10));
          if (a_date < b_date) {
            return -1;
          }
          if (a_date > b_date) {
            return 1;
          }
          return 0;
        }
        previousArray.sort(prevCompare);
        upcomingArray.sort(upCompare);
        _this2.setState({
          upcomingEvents: upcomingArray,
          previousEvents: previousArray
        });
      });
    }
  }, {
    key: "renderEvents",
    value: function renderEvents(type) {
      return this.state[type].map(function (event, index) {
        return React.createElement(
          "div",
          { index: index, className: "event-container" },
          React.createElement("img", {
            className: "event-img",
            src: "pages/EventsPage/assets/EventBanners/" + event.banner_file
          }),
          React.createElement(
            "div",
            { className: "event-details" },
            React.createElement(
              "h2",
              { className: "secondary" },
              event.eventName
            ),
            React.createElement(
              "p",
              null,
              event.description
            ),
            React.createElement(
              "div",
              { className: "event-logistics" },
              React.createElement(
                "div",
                { className: "detail-container" },
                React.createElement("i", { className: "fas fa-clock" }),
                React.createElement(
                  "span",
                  { className: "logistic-text" },
                  calendarDateArray[event.date.split("-")[1] - 1],
                  " ",
                  event.date.split("-")[0],
                  ", ",
                  event.date.split("-")[2],
                  " @",
                  " ",
                  event.time
                )
              ),
              React.createElement(
                "div",
                { className: "detail-container" },
                React.createElement("i", { className: "fas fa-map-marker-alt" }),
                React.createElement(
                  "span",
                  { className: "logistic-text" },
                  event.location
                )
              )
            ),
            React.createElement(
              "a",
              { href: event.registerLink, target: "_blank" },
              React.createElement(
                "button",
                { className: "tertiary absolute" },
                type == "previousEvents" ? "More Info" : "Register"
              )
            )
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "events-collection" },
        this.state.upcomingEvents.length > 0 ? React.createElement(
          "div",
          null,
          React.createElement(
            "h2",
            { className: "primary" },
            "Upcoming Events"
          ),
          React.createElement(
            "div",
            { className: "my-lg-4 my-sm-2" },
            this.renderEvents("upcomingEvents")
          )
        ) : null,
        this.state.previousEvents.length > 0 ? React.createElement(
          "div",
          null,
          React.createElement(
            "h2",
            { className: "primary" },
            "Previous Events"
          ),
          React.createElement(
            "div",
            { className: "my-lg-4 my-sm-2" },
            this.renderEvents("previousEvents")
          )
        ) : null
      );
    }
  }]);

  return EventCollection;
}(React.Component);

var domTarget = document.querySelector("#react-events");
ReactDOM.render(React.createElement(EventCollection, null), domTarget);

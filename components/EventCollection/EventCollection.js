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

const calendarDateArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug,",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

("use strict");

class EventCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { upcomingEvents: [], previousEvents: [] };
    this.renderEvents = this.renderEvents.bind(this);
  }

  componentDidMount() {
    loadJSON((response) => {
      const upcomingArray = [];
      const previousArray = [];
      var eventsObject = JSON.parse(response);
      eventsObject.events.forEach((event) => {
        // inspect the event date and sort it into either upcoming or previos event array
        const dateStrings = event.date.split("-");
        const newDate = new Date(
          parseInt(dateStrings[2], 10),
          parseInt(dateStrings[1], 10) - 1, // month is zero indexed
          parseInt(dateStrings[0], 10)
        );
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
        const a_strings = a.date.split("-");
        const a_date = new Date(
          parseInt(a_strings[2], 10),
          parseInt(a_strings[1], 10) - 1,
          parseInt(a_strings[0], 10)
        );
        const b_strings = b.date.split("-");
        const b_date = new Date(
          parseInt(b_strings[2], 10),
          parseInt(b_strings[1], 10) - 1,
          parseInt(b_strings[0], 10)
        );
        if (a_date < b_date) {
          return 1;
        }
        if (a_date > b_date) {
          return -1;
        }
        return 0;
      }
      function upCompare(a, b) {
        const a_strings = a.date.split("-");
        const a_date = new Date(
          parseInt(a_strings[2], 10),
          parseInt(a_strings[1], 10) - 1,
          parseInt(a_strings[0], 10)
        );
        const b_strings = b.date.split("-");
        const b_date = new Date(
          parseInt(b_strings[2], 10),
          parseInt(b_strings[1], 10) - 1,
          parseInt(b_strings[0], 10)
        );
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
      this.setState({
        upcomingEvents: upcomingArray,
        previousEvents: previousArray,
      });
    });
  }

  renderEvents(type) {
    return this.state[type].map((event, index) => {
      return (
        <div index={index} className="event-container">
          <img
            className="event-img"
            src={"pages/EventsPage/assets/EventBanners/" + event.banner_file}
          ></img>
          <div className="event-details">
            <h2 className="secondary">{event.eventName}</h2>
            <p>{event.description}</p>
            <div className="event-logistics">
              <div className="detail-container">
                <i className="fas fa-clock"></i>
                <span className="logistic-text">
                  {calendarDateArray[event.date.split("-")[1] - 1]}{" "}
                  {event.date.split("-")[0]}, {event.date.split("-")[2]} @{" "}
                  {event.time}
                </span>
              </div>
              <div className="detail-container">
                <i className="fas fa-map-marker-alt"></i>
                <span className="logistic-text">{event.location}</span>
              </div>
            </div>
            <a href={event.registerLink} target="_blank">
              <button className="tertiary absolute">
                {type == "previousEvents" ? "More Info" : "Register"}
              </button>
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="events-collection">
        {this.state.upcomingEvents.length > 0 ? (
          <div>
            <h2 className="primary">Upcoming Events</h2>
            <div className="my-lg-4 my-sm-2">
              {this.renderEvents("upcomingEvents")}
            </div>
          </div>
        ) : null}
        {this.state.previousEvents.length > 0 ? (
          <div>
            <h2 className="primary">Previous Events</h2>
            <div className="my-lg-4 my-sm-2">
              {this.renderEvents("previousEvents")}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const domTarget = document.querySelector("#react-events");
ReactDOM.render(<EventCollection />, domTarget);

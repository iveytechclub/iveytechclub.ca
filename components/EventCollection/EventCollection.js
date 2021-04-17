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

("use strict");

class EventCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { upcomingEvents: [], previousEvents: [] };
  }

  componentDidMount() {
    loadJSON((response) => {
      console.log(response);
      const upcomingArray = [];
      const previousArray = [];
      var eventsObject = JSON.parse(response);
    });
  }

  render() {
    return <div className="events-collection">Hello</div>;
  }
}

const domTarget = document.querySelector("#react-events");
ReactDOM.render(<EventCollection />, domTarget);

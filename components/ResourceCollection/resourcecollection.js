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

("use strict");

class ResourceCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resources: [] };
  }

  componentDidMount() {
    loadJSON((response) => {
      const resourcesArr = [];
      var resourcesObject = JSON.parse(response);
      resourcesObject.resources.forEach((resource) => {
        // add it to the array
        resourcesArr.push(resource);
      });
      this.setState({
        resources: resourcesArr,
      });
    });
  }

  render() {
    return (
      <div className="resources-collection">
        {this.state.resources.map((resource, index) => {
          return (
            <div
              className="resource-container m-lg-5 m-md-3 shine"
              index={index}
            >
              <div className="image-container">
                <div
                  className="resource-img shine-img"
                  style={{
                    backgroundImage: `url(pages/ResourcesPage/assets/ResourceImages/${resource.image})`,
                  }}
                ></div>
              </div>
              <div className="resource-details">
                <h2 className="secondary">{resource.name}</h2>
                <p>{resource.description}</p>
                <a href={resource.link} target="_blank">
                  <button className="tertiary">More Info</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const domTarget = document.querySelector("#react-resources");
ReactDOM.render(<ResourceCollection />, domTarget);

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

("use strict");

class AlumniCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alumniCohorts: [] };
  }

  componentDidMount() {
    loadJSON((response) => {
      const cohortsArray = [];
      var alumniObject = JSON.parse(response);
      alumniObject.alumniCohorts.forEach((cohort) => {
        // add it to the array
        cohortsArray.push(cohort);
      });
      this.setState({
        alumniCohorts: cohortsArray,
      });
    });
  }

  render() {
    return (
      <div className="alumni-cohorts-container">
        {this.state.alumniCohorts.map((cohort, index) => {
          return (
            <div className="cohort-container" index={index}>
              <h2 className="primary text-center">{cohort.year} Team</h2>
              <div className="cohort-team-list">
                {cohort.team.map((person, index) => {
                  return (
                    <div index={index} className="person-container">
                      <a href={person.linkedin} target="_blank">
                        <div className="circle">
                          <div
                            className="person-img"
                            style={{
                              backgroundImage: `url(pages/TeamPage/assets/TeamPhotos/${person.imgURL})`,
                            }}
                          ></div>
                          <div className="linkedin-overlay">
                            <i className="fab fa-linkedin-in"></i>
                          </div>
                        </div>
                      </a>
                      <div className="person-name">{person.name}</div>
                      <div className="person-role">{person.role}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const domTarget = document.querySelector("#alumni-collection");
ReactDOM.render(<AlumniCollection />, domTarget);

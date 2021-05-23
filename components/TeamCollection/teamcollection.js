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

("use strict");

class TeamCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { team: [] };
  }
  componentDidMount;
  componentDidMount() {
    loadJSON((response) => {
      const team = [];
      var teamObject = JSON.parse(response);
      teamObject.currentTeam.forEach((member) => {
        // add it to the array
        team.push(member);
      });
      this.setState({
        team: team,
      });
    });
  }

  render() {
    return (
      <div className="team-container">
        {this.state.team.map((member, index) => {
          return (
            <div className="member-container" index={index}>
              <div className="left">
                <div
                  className="person-img"
                  style={{
                    backgroundImage: `url(pages/TeamPage/assets/TeamPhotos/${member.imgURL})`,
                  }}
                ></div>
              </div>
              <div className="right">
                <h4 className="name-heading">{member.name}</h4>
                <h4 className="role-heading">{member.role}</h4>
                <a href={member.linkedin} target="_blank" className="linkedin">
                  <i class="fab fa-linkedin"></i>
                </a>
                <div className="subheading">
                  <div className="label">Pre-Ivey Program:</div>
                  <div className="info">{member.preIveyProgram}</div>
                </div>
                <div className="subheading">
                  <div className="label">Work Experience:</div>
                  <div className="info">{member.workExperience}</div>
                </div>
                <div className="subheading why-tech">
                  <div className="label why-tech">Why Tech:</div>
                  <div className="info why-tech">{member.whyTech}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const domTarget = document.querySelector("#team-collection");
ReactDOM.render(<TeamCollection />, domTarget);

("use strict");

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() }; // footer always has current year in copyright
  }

  render() {
    return (
      <div className="footer-container">
        <div className="social-buttons-container">
          <a
            className="social-button facebook"
            href="https://www.facebook.com/IveyTechnologyClub"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="social-button linkedin"
            href="https://www.linkedin.com/company/ivey-tech-club/about/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="social-button github"
            href="https://github.com/iveytechclub"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social-button medium"
            href="https://medium.com/@iveytechclub"
            target="_blank"
          >
            <i className="fab fa-medium-m"></i>
          </a>
        </div>
        <p className="footnote">
          © {this.state.year} Ivey Tech Club at the Ivey Business School | All
          Rights Reserved | Made with ♥
        </p>
      </div>
    );
  }
}

const domTarget = document.querySelector("#footer-target");
ReactDOM.render(<Footer />, domTarget);

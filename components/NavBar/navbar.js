"use strict";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // assign to current page
    this.state = { active: PAGE };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="./">
            <img src={"./assets/logo.jpg"} className="navbar-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-auto">
              <li
                className={
                  this.state.active == "home" ? "nav-item active" : "nav-item"
                }
              >
                <a className="nav-link ms-lg-4" href="./">
                  Home
                </a>
              </li>
              <li
                className={
                  this.state.active == "events" ? "nav-item active" : "nav-item"
                }
              >
                <a className="nav-link ms-lg-4" href="events">
                  Events
                </a>
              </li>
              <li
                className={
                  this.state.active == "resources"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <a className="nav-link ms-lg-4" href="resources">
                  Resources
                </a>
              </li>
              <li
                className={
                  this.state.active == "people"
                    ? "nav-item dropdown active"
                    : "nav-item dropdown"
                }
              >
                <a
                  className="nav-link ms-lg-4"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  People
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="team">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="alumni">
                      Alumni
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className={
                  this.state.active == "contact"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <a className="nav-link ms-lg-4" href="contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const domTarget = document.querySelector("#react-navbar");
ReactDOM.render(<NavBar />, domTarget);

import logo from "../assets/reactjs-icon.svg";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__identity">
          <img className="navbar__identity_logo" src={logo} alt="Logo" />
          <h3 className="navbar__identity_text">ReactFacts</h3>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__menu_item">
            <a className="navbar__menu_link" href="/">
              React Course - Project 1
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
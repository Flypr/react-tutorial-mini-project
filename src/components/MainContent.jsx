import BulletPoint from "./BulletPoint";
import backgroundImg from "../assets/reactjs-icon-background.svg";

function MainContent() {
  return (
    <div className="main-content">
      <div className="container">
        <img src={backgroundImg} alt="react icon background" className="background-image" />
        <h1 className="main-content__title">Fun facts about React</h1>
        <ul className="main-content__list">
          <li className="main-content__list-item">
            <BulletPoint />
            Was first released in 2013
          </li>
          <li className="main-content__list-item">
            <BulletPoint />
            Was originally created by Jordan Walke
          </li>
          <li className="main-content__list-item">
            <BulletPoint />
            Has well over 100K stars on GitHub
          </li>
          <li className="main-content__list-item">
            <BulletPoint />
            Is maintained by Facebook
          </li>
          <li className="main-content__list-item">
            <BulletPoint />
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;

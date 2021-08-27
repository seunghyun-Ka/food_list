import './App.css';
import MainPageComponent from "./main/index.js";
import { Switch, Route, Link } from "react-router-dom";
import FoodPage from "./foodpage";

function App() {
  return (
    <div>
      <header id="header">
        <div id="header_area">
          <Link className="logo" >
            <img src="images/utensils-solid.svg" alt="" />
            <span className="title">search in area</span>
          </Link>
        </div>
      </header>
      {/* Main */}
      <div id="main">
        {/* <div className="inner">

            <a href="index.html" className="logo">
              <span className="symbol"><img src="images/utensils-solid.svg" alt="" /></span><span className="title">search
                in area</span>
            </a>

            <nav>
              <ul>
                <li><a href="#menu">Menu</a></li>
              </ul>
            </nav>

          </div> */}

        {/* <nav id="menu">
        <h2>Menu</h2>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="">Menu1</a></li>
          <li><a href="">Menu2</a></li>
          <li><a href="">Menu3</a></li>
          <li><a href="">Menu4</a></li>
        </ul>
      </nav> */}
        <Switch>
          {/* 메인경로로 들어갔을 때 메인 페이지 보여주곘다. */}
          <Route exact={true} path="/">
            < MainPageComponent />
          </Route>
          {/* 서버 생성 전에 여기서 처음으로 페이지 만들었음  */}
          <Route exact={true} path="/foodpage/:id">
            <FoodPage />
          </Route>
        </Switch>
      </div>
      {/* Footer */}
      <footer id="footer">
        <div className="inner">
          <ul className="copyright">
            <li>&copy; Untitled. All rights reserved</li>
            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </footer>
    </div>

  );
}

export default App;

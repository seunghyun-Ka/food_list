import './App.css';
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import FoodPage from "./foodpage";

function App() {
  return (
    <div>
      {/* Wrapper */}
      <div id="wrapper">

        {/* Header */}
        <header id="header">
          <div className="inner">

            {/* Logo */}
            <a href="index.html" className="logo">
              <span className="symbol"><img src="images/utensils-solid.svg" alt="" /></span><span className="title">search
                in area</span>
            </a>

            {/* Nav */}
            <nav>
              <ul>
                <li><a href="#menu">Menu</a></li>
              </ul>
            </nav>

          </div>
        </header>

        {/* Menu */}
        <nav id="menu">
          <h2>Menu</h2>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="">Menu1</a></li>
            <li><a href="">Menu2</a></li>
            <li><a href="">Menu3</a></li>
            <li><a href="">Menu4</a></li>
          </ul>
        </nav>
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
    </div>
  );
}

export default App;

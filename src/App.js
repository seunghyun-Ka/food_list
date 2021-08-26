import './App.css';
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import FoodPage from "./foodpage";

function App() {
  return (
    <div>
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
  );
}

export default App;

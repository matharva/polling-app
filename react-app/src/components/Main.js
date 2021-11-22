import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Dashboard from "./authentication/Dashboard";
import PrivateRoute from "./authentication/PrivateRoute";
import Navbar from "./navbar/Navbar";
import UpdateProfile from "./authentication/UpdateProfile";
import AddPoll from "./poll/AddPoll";
import Poll from "./poll/Poll";
import Stats from "./stats/Stats";
import Schedule from "./schedule/Schedule";
import ImgUpload from "./img-upload/ImgUpload";
import AddPost from "./schedule/AddPost";
import Mashup from "./Mashup";

const Main = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const history = useHistory();

  useEffect(() => {
    history.push("/main/poll");
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route exact path="/main" component={Dashboard} />
            <Route path="/main/update-profile" component={UpdateProfile} />
            <Route path="/main/add-poll" component={AddPoll} />
            <Route path="/main/poll" component={Poll} />
            <Route path="/main/posts" component={Schedule} />
            <Route path="/main/image" component={ImgUpload} />
            <Route path="/main/addPost" component={AddPost} />
            <Route path="/main/mashup" component={Mashup} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Main;

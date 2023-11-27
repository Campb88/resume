import React, { Component } from "react";
import ReactGA from "react-ga";
import "./css/layout.css";
import Header from "./Components/Header.js";
import About from "./Components/About";
import Resume from "./Components/Resume";
/*  import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"; */
import resumeData from "./resumeData.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Header data={resumeData.main} />
         <About data={resumeData.main} />
         
        <Resume data={resumeData.resume} />
        {/*<Portfolio data={resumeData.portfolio} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} /> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import ReactGA from "react-ga";
import "./css/layout.css";
import Header from "./Components/Header.js";
/* import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
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

  componentDidMount() {
    // You may not need this function anymore
    // If resumeData.json is static and doesn't change, you can directly use `resumeData` variable.
    // If it does change dynamically, you might still want to fetch it dynamically.
  }

  render() {
    return (
      <div className="App">
        <Header data={resumeData.main} />
{/*         <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} /> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class About extends Component {
    render() {
        if (!this.props.data) return null;

        const name = this.props.data.name;
        const profilepic = require("../images/profile.jpg");
        const bio = this.props.data.bio;
        const bio2 = this.props.data.bio2;
        const city = this.props.data.address.city;
        const state = this.props.data.address.state;
        const zip = this.props.data.address.zip;
        const email = this.props.data.email;
        const professional = this.props.data.professional;
        const personal = this.props.data.personal;
        /* const resumeDownload = "../docs/Resume.pdf";
 */
        return (
            <section id="about" className="fade-in">
                <div className="container">
                    <div className="profile-pic-container">
                        <img
                            className="profile-pic"
                            src={profilepic}
                            alt="Nordic Giant Profile Pic"
                        />
                    </div>
                    <div className="about-details">
                        <h2>ABOUT ME</h2>
                        <p>{bio}</p>
                        <p>{bio2}</p>
                    </div>
                    <div className="contact-details">
                        <h2>CONTACT DETAILS</h2>
                        <p className="address">
                            <span>{name}</span>
                            <br />
                            <span>
                                {city} {state}, {zip}
                            </span>
                            <br />
                            <span>{email}</span>
                        </p>
                        <div className="download">
                            <p>
                                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vSgXKrPhTqEoaMmZVmVIbiBuD_17ADLscjt8qSdOUOZx0bNQuXfqsu8rnCGe8_F1zRqXcSbKkTeRrD7/pub" className="button">
                                    <i className="fas fa-download"></i>Download Resume
                                </a>
                            </p>
                        </div>
                    </div>


                    <div className="prof-mission">
                        <h2>PROFESSIONAL MISSION:</h2>
                        <p className="professional">
                            <span>{professional}</span>
                        </p>
                    </div>
                    <div className="pers-mission">
                        <h2>PERSONAL MISSION:</h2>
                        <p className="personal">
                            <span>{personal}</span>
                        </p>

                    </div>







                </div>
            </section>
        );
    }
}

export default About;
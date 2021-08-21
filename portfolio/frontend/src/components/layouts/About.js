import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="about">
                <h1 className="about__header">Миний тухайд:</h1>
                <div className="line"></div>
                <div className="row container">
                    <div className="column">
                        <h1 className="about__header--small">Сайн уу?</h1>
                        <p className="about__para">My name is Ram Maheshwari and I'm a passionate Frontend Web Developer using web technologies to build amazing products and focusing on solving problems for different niches and different industries using the power of technology.

I will love to hear from you. Whether it's a project, job opportunity, or just a chat. Feel free to contact me.</p>
                    </div>
                    <div className="column">
                        <h1 className="about__header--small">Skill</h1>
                        <div className="container--1">
                            <div className="box">HTML</div>
                            <div className="box">SASS</div>
                            <div className="box">REACT</div>
                            <div className="box">DJANGO</div>
                            <div className="box">JAVA</div>
                            <div className="box">GIT</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About

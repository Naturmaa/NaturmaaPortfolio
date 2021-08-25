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
                        <p className="about__para">Намайг Байгалмаа гэдэг. Би бол шинэ технологи дээр суурилан шинэ бүтээл гаргах замаар суралцах дуртай веб хөгжүүлэгч.</p>
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

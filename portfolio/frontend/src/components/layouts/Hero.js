import React, { Component } from 'react'

export class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="hero__container">
                    <h2 className="underline">Сайн уу?</h2>
                    <h1>Намайг <span className="hero__name">Байгалмаа</span> гэдэг.</h1>
                    <h2>Би бол <span className="hero__profession hero_underline">веб хөгжүүлэгч</span>.</h2>
                </div>
            </div>
        )
    }
}

export default Hero

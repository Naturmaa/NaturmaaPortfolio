import React, { Component } from 'react'

class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                <h1 className="projects__header">Миний бүтээлүүд:</h1>
                <div className="line"></div>
                <section className="cards">
                    <article>
                        <a href="https://github.com/Naturmaa/Fashion-shop-template">
                            <img className="article-img" src="https://i.pinimg.com/736x/0f/aa/36/0faa36a0829fa378750daa33ced0dce2.jpg" alt=" " />
                            <h1 className="article-title">
                                ECommerce
                            </h1>
                        </a>
                    </article>
                    <article>
                        <a href="https://github.com/Naturmaa/Dipper-Runner.git">
                            <img className="article-img" src="https://cdn.wallpapersafari.com/29/31/B8GNTr.jpg" alt=" " />
                            <h1 className="article-title">
                                Dipper Run
                            </h1>
                        </a>
                    </article>
                </section>
            </div>
        )
    }
}

export default Projects

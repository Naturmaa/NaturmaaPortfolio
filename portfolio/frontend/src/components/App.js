import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './layouts/Header'
import Hero from './layouts/Hero'
import Contact from './layouts/Contact'
import About from './layouts/About'
import Projects from './layouts/Projects'
import {Provider} from 'react-redux'
import store from '../store'

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
            <div>
                <Header />
                <Hero/>
                <About/>
                <Projects />
                <Contact/>
            </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
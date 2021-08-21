import React, { Component } from 'react'
import {connect} from 'react-redux';
import propTypes from 'prop-types'
import {addContact} from '../../actions/contacts'

class Contact extends Component {
    state = {
        name:'',
        email: '',
        message: ''
    }

    static propTypes = {
        addContact: propTypes.func.isRequired
    }

    onChange = e => this.setState({[e.target.name]:e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const {name, email, message} = this.state;
        const contact = {name, email, message}
        this.props.addContact(contact);
        console.log("submit");
    }

    render() {
        const {name, email, message} = this.state
        return (
            <div className="contact">
               <h1 className="contact__header">Contact</h1>
                <div className="line"></div>

                <div className="row">
                    <div className="column">
                    <div className="card card-body mt-4 mb-4">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                            className="form-control"
                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                            Submit
                            </button>
                        </div>
                    </form>        
                    </div>
                        
                    </div>
                    <div className="column">
                    <div className="contact__container">
                            <div className="container">
                                <div className="contact__label">Утасны дугаар:</div>
                                <div className="contact__info">99449032</div>
                            </div>
                            
                            <div className="container">
                                <div className="contact__label">E-Mail</div>
                                <div className="contact__info">naturmaa@tutanota.com</div>
                            </div>

                            <div className="container">
                                <div className="contact__label">Github</div>
                                <div className="contact__info"><a className="contact__info" href="https://github.com/Naturmaa">https://github.com/Naturmaa</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {addContact})(Contact);

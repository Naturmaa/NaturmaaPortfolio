import {connect} from 'react-redux'
import React, {Component, Fragment} from 'react'
import propTypes from 'prop-types'
import {getContacts, setContacts} from '../../actions/contacts'

export class Contacts extends Component {
    static propTypes = {
        contacts: propTypes.array.isRequired,
        getContacts: propTypes.func.isRequired
    }
    componentDidMount() {
        this.props.setContacts()
        this.props.getContacts();
    }
    render() {
        return(
            <Fragment>
                <h2>Contacts</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message ${this.props.contacts.length}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contacts.length>0&& this.props.contacts.map(contact =>(
                            <tr key ={contact.id}>
                                <td>{contact.id}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.message}</td>
                            </tr>
                          ))
                            
                        }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}
const mapStateProps = state => ({
    contacts: state.contacts.contacts
});
export default connect(mapStateProps, {getContacts, setContacts})(Contacts);
import axios from 'axios'
import {GET_CONTACTS, ADD_CONTACT} from './types'

// GET CONTACTS
export const getContacts = () => dispatch => {
    axios.get("/api/contact/").then(res => {
        dispatch({
            type: GET_CONTACTS,
            payload: res.data
        });
    }).catch(err => console.log(err));
}

// ADD CONTACT
export const addContact = (contact) => dispatch => {
    axios.post("api/contact/", contact).then(res => {
        dispatch({
            type: ADD_CONTACT,
            payload: res.data
        });
    }).catch(err => console.log(err));
}
export const setContacts=()=>dispatch=>{
    dispatch({
        type: GET_CONTACTS,
        payload: []
    });
}
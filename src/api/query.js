import axios from 'axios';

//This method used to add user token to request
function getAuthHeader() {

    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}

export default axios.create({
    headers: {
        Authorization: getAuthHeader(),
    }
})
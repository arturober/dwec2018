const DATA = "userdata";

document.addEventListener('DOMContentLoaded', e => {
    const form = document.getElementById('form');

    let userData = localStorage.getItem(DATA);
    if(userData !== null) {
        let dataObj = JSON.parse(userData);
        form.firstName.value = dataObj.firstName;
        form.lastName.value = dataObj.lastName;
    }
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        let dataObj = {
            firstName: form.firstName.value,
            lastName: form.lastName.value
        };
        localStorage.setItem(DATA, JSON.stringify(dataObj));
    });
});

var form = document.querySelector('#formContainer');
form.addEventListener('submit', login);

function login () {
    event.preventDefault();
    let email = formContainer.email.value;
    let password = formContainer.password.value;
    let student = JSON.parse(localStorage.getItem('students')) || {};
    // console.log(student);
    if(password == student[email].password) {
            alert('login successful');
    }
    else {
            alert('Incorrect Email or Password');
    }
    // if(email == student.email && password == student.password) {
    //     alert('login successful');
    // }
    // else {
    //     alert('Incorrect Email or Password');
    // }
}
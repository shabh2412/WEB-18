var form = document.querySelector('#formContainer');
form.addEventListener('submit',signUp);
// localStorage.clear()
var accounts = JSON.parse(localStorage.getItem('students')) || {};
// accounts = {};
function signUp() {
    event.preventDefault();
    let student = {
        mobile: formContainer.mobile.value,
        email: formContainer.email.value,
        password: formContainer.password.value
    };
    formContainer.mobile.value = "";
    formContainer.email.value = "";
    formContainer.password.value = "";
    // console.log(student);
    // accounts.push(student);
    accounts[student.email] = student;
    console.log(accounts);
    localStorage.setItem('students', JSON.stringify(accounts));
    alert('Sign Up Successful. Click on Sign-In to continue');
    // console.log(name);
}

const submitButton = document.getElementById('btn-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const email = emailField.value;


    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === "santan@gmail.com" && password === "santan") {
        window.location.href = "./bank.html";
    }
    else {
        alert("Cann't Enter!!! Forgot the Password?")
    }

})
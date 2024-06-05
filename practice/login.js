document.getElementById('submit-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if (email === 'santan@gmail.com' && password === '12345') {
        window.location.href = "bank.html";
    }
    else {
        alert('User Information is incorrect!');
    }


})
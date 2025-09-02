var userName = document.getElementById('username');
var userNameMsg = document.getElementById('username-msg');
var password = document.getElementById('password');
var passwordMsg = document.getElementById('password-msg');

userName.addEventListener('input', function (e) {
    var regex = /^[A-Za-z0-9]{8}$/;
    var res = regex.test(e.target.value);

    if (res) {
        userNameMsg.textContent = "Valid Username";
        userNameMsg.className = "valid";
    } else {
        userNameMsg.textContent = "Username must be alphanumeric and at least 8 characters";
        userNameMsg.className = "invalid";
    }
});

password.addEventListener('input', function (e) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8}$/;
    var res = regex.test(e.target.value);

    if (res) {
        passwordMsg.textContent = "Valid Password";
        passwordMsg.className = "valid";
    } else {
        passwordMsg.textContent = "Password must include A-Z, a-z, 0-9, special chars and be at least 8 characters";
        passwordMsg.className = "invalid";
    }
});

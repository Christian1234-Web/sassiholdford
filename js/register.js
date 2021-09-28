let btnRegister = $("#btnRegister"),
    inputName = $("#inputName"),
    inputMail = $("#inputMail"),
    inputPhone = $("#inputPhone"),
    inputPass = $("#inputPass"),
    mail = $("#mail"),
    pass = $("#pass"),

    loginForm = $("#loginForm"),
    btnLogin = $("#btnLogin");


$("#registerForm").submit(function(e) {
    e.preventDefault()
    creatUser();
});



function creatUser() {
    $.ajax({
        type: "POST",
        url: "http://206.189.124.254:9000/register",
        data: {
            "name": inputName.val(),
            "email": inputMail.val(),
            "phone": inputPhone.val(),
            "password": inputPass.val()
        },
        success: function(res) {
            console.log(res)
            alert('User Registered')
                // location.href = "loginForm"
        },
        error: function(err) {
            alert('User Not registered');
        },

    })
};


$('#loginForm').submit(function(e) {
    e.preventDefault()
    loginUser();
});

function loginUser() {
    $.ajax({
        type: "POST",
        url: "http://206.189.124.254:9000/login",
        data: {
            "email": mail.val(),
            "password": pass.val()
        },
        error: function(err) {
            alert('User Not Login');
        },
        success: function(res) {
            console.log(res)
                // if (res.error) {
                //     alert('User does not exist')
                // } else {
            location.href = "index.html"

        }
    })
};
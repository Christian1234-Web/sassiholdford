var body = $('tbody');
var form = $('#form');
var btnUpdate = $('#btnUpdate');
var nameInput = $('#name');
var emailInput = $('#email');
var phoneInput = $('#phone');
var passwordInput = $('#password');

form.hide();
getUsers();


body.on('click', '.edith', function() {
    form.show();
    userID = $(this).attr('dataID');
    nameInput.val($(this).attr('nameData'));
    emailInput.val($(this).attr('emailDta'));
    phoneInput.val($(this).attr('phoneData'));
    passwordInput.val($(this).attr('passwordData'));

});

body.on('click', '.delete', function() {
    userID = "";
    userID = $(this).attr('dataID');
    deleteUsers();
});


btnUpdate.click(function(e) {
    e.preventDefault;
    updateUser();
});



function updateUser() {
    $.ajax({
        type: "PUT",
        url: "http://206.189.124.254:9000/user/" + userID,
        data: {
            "name": nameInput.val(),
            "email": emailInput.val(),
            "phone": phoneInput.val(),
        },
        success: function(res) {
            alert('Update User Successful');
            res[userID] = data;
            getUsers();
        },
        error: function(err) {
            alert('Update User Failed');
        }
    })
};


function deleteUsers() {
    $.ajax({
        type: "DELETE",
        url: "http://206.189.124.254:9000/user/" + userID,
        success: function(res) {
            alert('User Deleted');
            getUsers();
        },
        error: function(err) {
            alert('User not Deleted');
        }
    })
}



function getUsers() {
    $.ajax({
        type: "GET",
        url: "http://206.189.124.254:9000/users",
        success: function(res) {
            var view = "";
            for (var i = 0; i < res.length; i++) {
                view += `
                <tr>
                    <td>${res[i].name}</td>
                    <td>${res[i].email}</td>
                    <td>${res[i].phone}</td>
                    <td><a href="#" class="edith" dataID="${res[i]._id}"
                     nameData="${res[i].name}"
                      emailData="${res[i].email}"
                       phoneData="${res[i].phone}"
                        passwordData="${res[i].password}">EDIT</a> |
                        <br>
                         <a href="#" class="delete" dataID="${res[i]._id}">DELETE</a></td>
                </tr>`;
            }
            body.html(view);
        },
        error: function(err) {
            alert('Error Uploading Users')
        }
    });
}
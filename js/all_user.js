let userName = $("#userName"),
    userPhone = $("#userPhone"),
    userEmail = $("#userEmail"),
    userPassword = $("#userPassword"),
    btnUpdate = $("#btnUpdate"),
    hidden = $(".hidden")
let productID;

let tb = $('.tb');
// let res = [];
hidden.hide();

loadProductData();


tb.on('click', '.edith', function() {
    hidden.show();
    userID = $(this).attr('dataId');
    userName.val($(this).attr('userName'));
    userPhone.val($(this).attr('userPhone'));
    userEmail.val($(this).attr('userEmail'));
    userPassword.val($(this).attr('userPassword'));

});


// update function

function updateUser() {
    let data = {
        name: $('#UserName').val(),
        phone: $('#userPhone').val(),
        email: $('#userEmail').val(),
        password: $('#userPassword').val(),

    }

    $.ajax({
        type: 'PUT',
        url: 'http://206.189.124.254:9000/update/user/' + userID,
        data: data,
        success: function(res) {
            alert('Update Successful')
            console.log('update successful')

        },
        error: function(err) {
            alert("Error Updating User")
            console.log('not successful updating a user')

        }
    })

};
// update button

btnUpdate.click(function(e) {
    let userID = $('#btnUpdate').attr('dataId')
    updateUser();
    // e.preventDefault;

    // loadProductData();


});

// delete function

function deleteUser() {
    $.ajax({
        type: "DELETE",
        url: "http://206.189.124.254:9000/user/" + userID,
        success: function(res) {
            alert('User Deleted');
            console.log('successful')
        },
        error: function(err) {
            alert('User not Deleted');
            console.log('not successful')
        }
    })
}


// delete button

tb.on('click', '.delete', function() {
    dataId = "";
    dataId = $(this).attr('dataId');
    // res.splice(dataId, 1);
    // loadProductData();
    deleteUser();


});


function loadProductData() {
    $.ajax({
        type: "GET",
        url: "http://206.189.124.254:9000/users",
        error: function(err) {
            alert('Error while uploading users')
            console.log('No INTERNET CONNECTION')
        },
        success: function(res) {
            let row = '';
            for (let i = 0; i < res.length; i++) {
                // console.log(res[i])
                row += ` <div class="row">
            <div class="col">${res[i].name}</div>
            <div class="col" id="mail">${res[i].phone}</div>
            <div class="col">${res[i].email}</div>
            <div class="col">${res[i].password}</div>
             <div class="col"><a href = "#" class="edith" id="updt" dataId="${res[i]._id}"
             userName="${res[i].name}"
             userPhone="${res[i].phone}
             userEmail="${res[i].email}"
             userPassword="${res[i].password}"
             >Edith</a>|
             
             <a href="#" class="delete" id="delte" dataId="${res[i]._id}"
             
             userName="${res[i].name}"
             userPhone="${res[i].phone}"
             userEmail="${res[i].email}"
             userPassword="${res[i].password}"

             >Delete</a>
             </div>
            </div>`

            }
            tb.html(row);

        }

    })
};
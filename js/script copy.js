var body = $('tbody');
var form = $('#form');
var btnUpdate = $('#btnUpdate');
var imageInput = $('#image');
var nameInput = $('#name');
var descriptionInput = $('#description');
var priceInput = $('#price');
var quantityInput = $('#quantity');
var categoryInput = $('#category');

form.hide();


getProduct();


body.on('click', '.edith', function() {
    form.show();
    productID = $(this).attr('dataID');
    nameInput.val($(this).attr('nameData'));
    descriptionInput.val($(this).attr('descriptionData'));
    priceInput.val($(this).attr('priceData'));
    quantityInput.val($(this).attr('quantityData'));
    categoryInput.val($(this).attr('categoryData'))
});

body.on('click', '.delete', function() {
    productID = "";
    productID = $(this).attr('dataID');
    deleteProduct();
});

btnUpdate.click(function(e) {
    e.preventDefault;
    updateProduct();
});



function getProduct() {

    $.ajax({
        type: "GET",
        url: "http://206.189.124.254:9000/products",
        success: function(res) {
            console.log(res);
            var view = "";
            for (var i = 0; i < res.length; i++) {
                if (res[i].category == "christian") {
                view += `
                <tr>
                    <td><img src="http://206.189.124.254:9000${res[i].image}" alt="" height="20"></td>
                    <td>${res[i].name}</td>
                    <td>${res[i].description}</td>
                    <td>${res[i].price}</td>
                    <td>${res[i].quantity}</td>
                    <td>${res[i].category}</td>
                <td><a href="#" class='edith' dataID="${res[i]._id}" 
                nameData="${res[i].name}"
                 descriptionData="${res[i].description}"
                  priceData="${res[i].price}" 
                  quantityData="${res[i].quantity}" 
                  categoryData="${res[i].category}">EDIT</a> |
                   <a href="#" class="delete" dataID= "${res[i]._id}">DELETE</a></td> 
            </tr>
                `;
                }
            }
            body.html(view);
        },
        error: function(err) {
            alert('Error Uploading Product')
        }
    });
}

function updateProduct() {

    $.ajax({
        type: "PUT",
        url: "http://206.189.124.254:9000/update/product/" + productID,
        data: {
            "name": nameInput.val(),
            "category": categoryInput.val(),
            "price": priceInput.val(),
            "quantity": quantityInput.val(),
            "image": imageInput.val(),
            "description": descriptionInput.val()
        },
        success: function(res) {
            console.log(res);
            // alert('Update Successful');
            // res[productID] = data;
            // getProduct();
        },
        error: function(err) {
            alert('Update Failed');
        }
    });
};

function deleteProduct() {
    $.ajax({
        type: "DELETE",
        url: "http://206.189.124.254:9000/product/" + productID,
        success: function(res) {
            alert('Product Deleted');
            getProduct();
        },
        error: function(err) {
            alert('Product not Deleted');
        }
    })
}
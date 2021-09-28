let productName = $("#productName"),
    productCategory = $("#productCategory"),
    productPrice = $("#productPrice"),
    productQuantity = $("#productQuantity"),
    productImage = $("#productImage"),
    productDescription = $("#productDescription"),
    btnUpdate = $("#btnUpdate");


let hidden = $(".hidden");
// let productID;
let tb = $('.tb');
// let res = [];

hidden.hide();

loadProductData();



// edith button // function

tb.on('click', '.edith', function() {
    hidden.show();
    productID = $(this).attr('dataId');
    productName.val($(this).attr('productName'));
    productCategory.val($(this).attr('productCategory'));
    productPrice.val($(this).attr('productPrice'));
    productQuantity.val($(this).attr('productQuantity'));
    productImage.val($(this).attr('productImage'))
    productDescription.val($(this).attr('productDescription'))
    loadProductData();


});


// update function

function updateProduct() {
    let data = {
        name: $('#productName').val(),
        category: $('#productCategory').val(),
        price: $('#productPrice').val(),
        quantity: $('#productQuantity').val(),
        image: $('#productImage').val(),
        description: $('#productDescription').val(),

    }
    let productID = $('#btnUpdate').attr('dataId')

    $.ajax({
        type: 'PUT',
        url: 'http://206.189.124.254:9000/update/product/' + dataId,
        data: data,
        success: function(res) {
            alert('Updating Successful')
            loadProductData()
        },
        error: function(err) {
            alert("Error Updating Product")
        }
    })

};
// update button

btnUpdate.click(function(e) {
    let productID = $('#btnUpdate').attr('dataId')
    e.preventDefault;
    updateProduct();
    // loadProductData();


});

// delete function

function deleteProduct() {
    $.ajax({
        type: "DELETE",
        url: "http://206.189.124.254:9000/product/" + productID,
        success: function(res) {
            alert('Product Deleted');
            loadProductData();
        },
        error: function(err) {
            alert('Product not Deleted');
        }
    })
}


// delete button

tb.on('click', '.delete', function() {
    productID = " ";
    productID = $(this).attr('dataId');
    deleteProduct();
    // res.splice(dataId, 1);
    // loadProductData();

});




function loadProductData() {
    $.ajax({
        type: "GET",
        url: "http://206.189.124.254:9000/products",
        error: function(err) {
            alert('Error while uploading data')
            console.log('wow')
        },
        success: function(res) {
            let row = '';
            for (let i = 0; i < res.length; i++) {
                row += ` <div class="row">
                <div class="col"><img src="http://206.189.124.254:9000${res[i].image}" height="30" width="30"></div>
            <div class="col">${res[i].name}</div>
            <div class="col">${res[i].category}</div>
            <div class="col" id="mail">${res[i].price}</div>
            <div class="col">${res[i].quantity}</div>
            <div class="col">${res[i].description}</div>
             <div class="col"><a href = "#" class="edith" id="updt" dataId="${i}._id"
             productImage="${res[i].image}"
             productName="${res[i].name}"
             productCategory="${res[i].category}
             productPrice="${res[i].price}"
             productQuantity="${res[i].quantity}"
             productDescription="${res[i].description}"
             >Edith</a>|
             
             <a href="#" class="delete" id="delte" dataId="${i}._id">Delete</a> </div>
            </div>`

            }
            tb.html(row);

        }

    })
};
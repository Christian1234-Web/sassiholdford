let tbd = $('.tbd');
// let studentData = [];


loadProductData();

function loadProductData() {
    $.ajax({
        type: "GET",
        url: "http://206.189.124.254:9000/products",
        error: function(err) {
            alert('Error while uploading data')
            console.log('wow')
        },
        success: function(res) {
            let load = '';
            for (let i = 0; i < res.length; i++) {
                if (res[i].category == "christian") {
                    console.log(res[i])
                    load += ` <div class="load">
                    <div class="allImg grid1"><img src="http://206.189.124.254:9000${res[i].image}" height="100" width="100"></div>
                      <a href="project_page.html"><b><p>${res[i].name}</p></b></a>
                    <p>${res[i].price}</p>
                  </div>`
                        // alert("Successful")

                }
                tbd.html(load);

            }
        }

    })
};
let image_1 = $('.image_1'),
    image_2 = $('.image_2'),
    bridal_fsh = $('#bridal_fsh'),
    fashion_fsh = $('#fashion_fsh'),
    bridal_brd = $('#bridal_brd'),
    fashion_brd = $('#fashion_brd'),

    bridal_slide = $('#bridal_slide'),
    fashion_slide = $('#fashion_slide');
// slider_fsh.hide()
// bridal_slide.hide()



fashion_fsh.hover(function() {
    console.log('fashion');
    fashion_slide.fadeIn(2000)
        // slider_fsh.show();
        // slider.hide();


});

bridal_fsh.hover(function() {
    console.log('bridal');
    bridal_slide.fadeIn(2000)
    fashion_slide.fadeOut(2000)

    // slider_fsh.hide();
    // slider.show();

});

fashion_brd.hover(function() {
    console.log('fashion');
    fashion_slide.fadeIn(2000)
    bridal_slide.fadeOut(2000)

    // slider_fsh.show();
    // slider.hide();


});

bridal_brd.hover(function() {
    console.log('bridal');
    bridal_slide.fadeIn(2000)

    // slider_fsh.hide();
    // slider.show();

});
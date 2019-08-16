$(document).ready(function(){
    if($("body").width() < 576) {
        $(".product a").attr("data-toggle", "modal");
    }

    $(".product").on("click","a", function(event) {
        event.preventDefault();
        if($("body").width() > 576) {
            $(".product a").attr("data-toggle", "");
            const id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body, html').animate({scrollTop: top}, 1500);
        } else {
            $(".product a").attr("data-toggle", "modal");
            const product = $(this).closest(".product");
            $(".m.product h4").text($(product).find("h4").text());
            $(".m.product p").text($(product).find("p").text());
            $(".m.product img").attr("src", $(product).find("img").attr("src"));
        }
    });

    $(".show-btn").on("click", scroll);
    $(".want-btn").on("click", scroll);

    $(document.body).on('hide.bs.modal,hidden.bs.modal', function () {
        $('body').css('padding-right','0');
        $('#contact-form').css("display", "block");
    });

    function scroll(event) {
        if(this.className.includes("want-btn")) {
            $('body').removeClass('modal-open');
            $('#productModal').modal('hide');
            $('.modal-backdrop').remove();
        }
        event.preventDefault();
        const id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
        $("#contact-form").toggleClass("show");

    }
});
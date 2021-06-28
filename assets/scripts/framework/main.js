$("body").on("click", ".cancel", function() {
    $("#message-box").fadeOut(200);
});

$("body").on("click", ".big-cancel", function() {
    $("#big-message-box").fadeOut(200);
});

$("nav li").click(function(e) {
    e.stopPropagation();

    if($(this).hasClass("down")) {
        $(this).children("ul").slideUp();
    } else {
        $(this).children("ul").css("display", "none");
        $(this).children("ul").slideDown();
    }

    let navLis = document.querySelectorAll("nav li");
    
    navLis.forEach((li)=> {
        if(li != this)
            li.classList.remove("down");
    });

    $(this).toggleClass("down");
});

function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), 
    n = bstr.length, 
    u8arr = new Uint8Array(n);

    while(n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], `filename.${mime.split('/')[1]}`, {type:mime});
}

$(window).scroll(function() {
    let top = $(this).scrollTop();

    if(!$("nav").hasClass("side-menu")) {
        if(top > 0) {
            $("nav").addClass("transparent");
            $("nav").addClass("shadow");
        } else {
            $("nav").removeClass("transparent");
            $("nav").removeClass("shadow");
        }
    }
    
});

function CalculateSideMenuHeight() {
    let sideMenu = document.querySelector(".side-menu");
    const adminContent = document.querySelector("#admin-content");

    if(sideMenu === null || adminContent === null)
        return;

    var height = adminContent.offsetHeight;
    sideMenu.style.height = height + "px";
}

setTimeout(function() {
    CalculateSideMenuHeight();
}, 300);

function NextProduct() {
    let left = (parseInt($('#slider').css('left'), 10) - 270);
    if(left%270 == 0) {
        if(left >= -1080) {
            $('#slider').animate({
                'left': left + 'px'
            }, 
            1000);
        } else {
            $('#slider').animate({
                'left': 0 + 'px'
            }, 
            1000);
        }
    }
}

setInterval(function() {
    NextProduct();
}, 4500);

$(".next_product").click(function() {
    NextProduct();
});

$(".prev_product").click(function() {
    let left = (parseInt($('#slider').css('left'), 10) + 270);
    if(left%270 == 0) {
        if(left <= 0) {
            $('#slider').animate({
                'left': left + 'px'
            }, 
            1000);
        } else {
            $('#slider').animate({
                'left': -1080 + 'px'
            }, 
            1000);
        }
    }
});

$("#mobile-menu").click(function() {
    $("nav").slideToggle(300);
});

$("#textarea-holder").html(`<textarea class="input textarea center-input" name="message"></textarea>`);
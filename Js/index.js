console.log('welcome to my Personal portfolio Website')
// initial call
$('#aboutSection, #serviceSection, #portfolioSection, #contactSection').hide()
$('.homeButton').addClass('active')


$('.homeButton').click(function () {
    $('#homeSection').fadeIn(350);
    $('#aboutSection, #serviceSection, #portfolioSection, #contactSection, #mobile').hide();
   $(this).addClass('active')
   $('.aboutButton, .serviceButton, .portfolioButton, .contactButton').removeClass('active')

});
$(".aboutButton").click(function () {
    $('#aboutSection').fadeIn(350);
    $('#homeSection, #serviceSection, #portfolioSection, #contactSection, #mobile').hide();
    $(this).addClass('active')
    $('.homeButton, .serviceButton, .portfolioButton, .contactButton').removeClass('active')
   
});
$('.serviceButton').click(function () {
    $('#serviceSection').fadeIn(350);
    $('#homeSection, #aboutSection, #portfolioSection, #contactSection,  #mobile').hide();
    $(this).addClass('active')
    $('.homeButton, .aboutButton, .portfolioButton, .contactButton').removeClass('active')
});

$('.portfolioButton').click(function () {
    $('#portfolioSection').fadeIn(350);
    $('#homeSection, #aboutSection, #serviceSection, #contactSection, #mobile').hide()
    $(this).addClass('active')
    $('.homeButton, .aboutButton, .serviceButton, .contactButton').removeClass('active')
});
$(".contactButton").click(function () {
  $('#contactSection').fadeIn(350);
  $('#homeSection, #aboutSection, #serviceSection, #portfolioSection, #mobile').hide();
  $(this).addClass('active')
  $('.homeButton, .aboutButton, .serviceButton, .portfolioButton').removeClass('active')
});

// Whatsapp Logo
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function getWhatsAppLink() {
    let phoneNumber = "9051521161";
    if (isMobile()) {
        return "https://wa.me/" + phoneNumber;
    } else {
        return "https://web.whatsapp.com/send?phone=" + phoneNumber;
    }
}

// Javascript to hide the navbar after sometime to enjoy full display experiance 
// Uncomment it to enjoy that functionality ---

// let navbar = document.getElementById("header");
// let isNavbarVisible = true;
// let timeoutId;

// window.addEventListener("mousemove", function(event) {
//   let mouseY = event.clientY;
  
//   // Check if cursor is near the top of the page (within 50 pixels)
//   if (mouseY <= 50) {
//     showNavbar();
//   } else {
//     hideNavbarAfterDelay();
//   }
// });

// function showNavbar() {
//   if (!isNavbarVisible) {
//     navbar.style.opacity = "1";
//     isNavbarVisible = true;
//   }
// }

// function hideNavbar() {
//   navbar.style.opacity = "0";
//   isNavbarVisible = false;
// }

// function hideNavbarAfterDelay() {
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(hideNavbar, 2000); // Adjust the delay time as needed (in milliseconds)
// }



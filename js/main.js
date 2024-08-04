function toggleAccordion(element) {
    const content = element.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}//content block displays elemens when the block is clicked

(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Courses carousel
    $(".courses-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });


    // Related carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);

//Countdown timer
//the date at which the courses start
const startDateNight = new Date("2025-01-01T13:00:00"); 
const startDateCarian = new Date("2025-02-01T13:00:00"); 
const startDateCold = new Date("2025-03-01T13:00:00"); 
const startDateGlint = new Date("2025-04-01T13:00:00"); 
const startDateGrav = new Date("2025-05-01T13:00:00"); 
const startDateCrystal = new Date("2025-06-01T13:00:00"); 

const currentdate = new Date(); //current time
//the total millasecons till start
const timeDifferenceNight = startDateNight.getTime()-currentdate.getTime(); //time till the courses start
const timeDifferenceCaria = startDateCarian.getTime()-currentdate.getTime();
const timeDifferenceCold = startDateCold.getTime()-currentdate.getTime();
const timeDifferenceGlint = startDateGlint.getTime()-currentdate.getTime();
const timeDifferenceGrav = startDateGrav.getTime()-currentdate.getTime();
const timeDifferenceCrystal = startDateCrystal.getTime()-currentdate.getTime();
//the total secons till the start
var totaleSecondsNight = Math.floor(timeDifferenceNight/1000);
var totaleSecondsCaria = Math.floor(timeDifferenceCaria/1000);
var totaleSecondsCold = Math.floor(timeDifferenceCold/1000);
var totaleSecondsGlint = Math.floor(timeDifferenceGlint/1000);
var totaleSecondsGrav = Math.floor(timeDifferenceGrav/1000);
var totaleSecondsCrystal = Math.floor(timeDifferenceCrystal/1000);


//Start on page load there is time otherwise it takes 1 sec
//
const daysNight1 = Math.floor(totaleSecondsNight/86400);
const hoursNight1 = Math.floor(totaleSecondsNight/3600)%24;
const minutesNight1 =Math.floor(totaleSecondsNight/60)%60;
const secondsNight1 =Math.floor(totaleSecondsNight%60);
console.log(`${daysNight1} days,${hoursNight1} hours,${minutesNight1} minutes,${secondsNight1} seconds, `);
var timeelNight1 = document.getElementById("time-night");
timeelNight1.innerHTML=`${daysNight1} days,${hoursNight1} hours,${minutesNight1} minutes,${secondsNight1} seconds, `;
if (totaleSecondsNight<0) {
    console.log("countdown has ended")
    timeelNight1.innerHTML=`This Course Has Started`;

}
const daysCaria1 = Math.floor(totaleSecondsCaria/86400);
const hoursCaria1 = Math.floor(totaleSecondsCaria/3600)%24;
const minutesCaria1 =Math.floor(totaleSecondsCaria/60)%60;
const secondsCaria1 =Math.floor(totaleSecondsCaria%60);
console.log(`${daysCaria1} days,${hoursCaria1} hours,${minutesCaria1} minutes,${secondsCaria1} seconds, `);
var timeelCaria1 = document.getElementById("time-carian");
timeelCaria1.innerHTML=`${daysCaria1} days,${hoursCaria1} hours,${minutesCaria1} minutes,${secondsCaria1} seconds, `;
if (totaleSecondsCaria<0) {
    console.log("countdown has ended")
    timeelCaria1.innerHTML=`This Course Has Started`;

}
const daysCold1 = Math.floor(totaleSecondsCold/86400);
const hoursCold1 = Math.floor(totaleSecondsCold/3600)%24;
const minutesCold1 =Math.floor(totaleSecondsCold/60)%60;
const secondsCold1 =Math.floor(totaleSecondsCold%60);
console.log(`${daysCold1} days,${hoursCold1} hours,${minutesCold1} minutes,${secondsCold1} seconds, `);
var timeelCold1 = document.getElementById("time-cold");
timeelCold1.innerHTML=`${daysCold1} days,${hoursCold1} hours,${minutesCold1} minutes,${secondsCold1} seconds, `;
if (totaleSecondsCold<0) {
    console.log("countdown has ended")
    timeelCold1.innerHTML=`This Course Has Started`;

}
const daysGlint1 = Math.floor(totaleSecondsGlint/86400);
const hoursGlint1 = Math.floor(totaleSecondsGlint/3600)%24;
const minutesGlint1 =Math.floor(totaleSecondsGlint/60)%60;
const secondsGlint1 =Math.floor(totaleSecondsGlint%60);
console.log(`${daysGlint1} days,${hoursGlint1} hours,${minutesGlint1} minutes,${secondsGlint1} seconds, `);
var timeelGlint1 = document.getElementById("time-glint");
timeelGlint1.innerHTML=`${daysGlint1} days,${hoursGlint1} hours,${minutesGlint1} minutes,${secondsGlint1} seconds, `;
if (totaleSecondsGlint<0) {
    console.log("countdown has ended")
    timeelGlint1.innerHTML=`This Course Has Started`;

}
const daysGrav1 = Math.floor(totaleSecondsGrav/86400);
const hoursGrav1 = Math.floor(totaleSecondsGrav/3600)%24;
const minutesGrav1 =Math.floor(totaleSecondsGrav/60)%60;
const secondsGrav1 =Math.floor(totaleSecondsGrav%60);
console.log(`${daysGrav1} days,${hoursGrav1} hours,${minutesGrav1} minutes,${secondsGrav1} seconds, `);
var timeelGrav1 = document.getElementById("time-gravity");
timeelGrav1.innerHTML=`${daysGrav1} days,${hoursGrav1} hours,${minutesGrav1} minutes,${secondsGrav1} seconds, `;
if (totaleSecondsGrav<0) {
    console.log("countdown has ended")
    timeelGrav1.innerHTML=`This Course Has Started`;

}
const daysCrystal1 = Math.floor(totaleSecondsCrystal/86400);
const hoursCrystal1 = Math.floor(totaleSecondsCrystal/3600)%24;
const minutesCrystal1 =Math.floor(totaleSecondsCrystal/60)%60;
const secondsCrystal1 =Math.floor(totaleSecondsCrystal%60);
console.log(`${daysCrystal1} days,${hoursCrystal1} hours,${minutesCrystal1} minutes,${secondsCrystal1} seconds, `);
var timeelCrystal1 = document.getElementById("time-crystal");
timeelCrystal1.innerHTML=`${daysCrystal1} days,${hoursCrystal1} hours,${minutesCrystal1} minutes,${secondsCrystal1} seconds, `;
if (totaleSecondsCrystal<0) {
    console.log("countdown has ended")
    timeel1.innerHTML=`This Course Has Started`;

}
//
//end on page load there is time



//This is the function to update it every secons
//
function updateCountdown() {
    //this is just a copy paste with name changes each time to update the time
    const daysNight = Math.floor(totaleSecondsNight/86400);
    const hoursNight = Math.floor(totaleSecondsNight/3600)%24;
    const minutesNight =Math.floor(totaleSecondsNight/60)%60;
    const secondsNight =Math.floor(totaleSecondsNight%60);
    console.log(`${daysNight} days,${hoursNight} hours,${minutesNight} minutes,${secondsNight} seconds, `);
    var timeelNight = document.getElementById("time-night");
    timeelNight.innerHTML=`${daysNight} days,${hoursNight} hours,${minutesNight} minutes,${secondsNight} seconds, `;
    totaleSecondsNight--;
    if (totaleSecondsNight<0) {
        console.log("countdown has ended")
        timeelNight.innerHTML=`This Course Has Started`;

    }
    const daysCaria = Math.floor(totaleSecondsCaria/86400);
    const hoursCaria = Math.floor(totaleSecondsCaria/3600)%24;
    const minutesCaria =Math.floor(totaleSecondsCaria/60)%60;
    const secondsCaria =Math.floor(totaleSecondsCaria%60);
    console.log(`${daysCaria} days,${hoursCaria} hours,${minutesCaria} minutes,${secondsCaria} seconds, `);
    var timeelCaria = document.getElementById("time-carian");
    timeelCaria.innerHTML=`${daysCaria} days,${hoursCaria} hours,${minutesCaria} minutes,${secondsCaria} seconds, `;
    totaleSecondsCaria--;
    if (totaleSecondsCaria<0) {
        console.log("countdown has ended")
        timeelCaria.innerHTML=`This Course Has Started`;

    }
    const daysCold = Math.floor(totaleSecondsCold/86400);
    const hoursCold = Math.floor(totaleSecondsCold/3600)%24;
    const minutesCold =Math.floor(totaleSecondsCold/60)%60;
    const secondsCold =Math.floor(totaleSecondsCold%60);
    console.log(`${daysCold} days,${hoursCold} hours,${minutesCold} minutes,${secondsCold} seconds, `);
    var timeelCold = document.getElementById("time-cold");
    timeelCold.innerHTML=`${daysCold} days,${hoursCold} hours,${minutesCold} minutes,${secondsCold} seconds, `;
    totaleSecondsCold--;
    if (totaleSecondsCold<0) {
        console.log("countdown has ended")
        timeelCold.innerHTML=`This Course Has Started`;

    }
    const daysGlint = Math.floor(totaleSecondsGlint/86400);
    const hoursGlint = Math.floor(totaleSecondsGlint/3600)%24;
    const minutesGlint =Math.floor(totaleSecondsGlint/60)%60;
    const secondsGlint =Math.floor(totaleSecondsGlint%60);
    console.log(`${daysGlint} days,${hoursGlint} hours,${minutesGlint} minutes,${secondsGlint} seconds, `);
    var timeelGlint = document.getElementById("time-glint");
    timeelGlint.innerHTML=`${daysGlint} days,${hoursGlint} hours,${minutesGlint} minutes,${secondsGlint} seconds, `;
    totaleSecondsGlint--;
    if (totaleSecondsGlint<0) {
        console.log("countdown has ended")
        timeelGlint.innerHTML=`This Course Has Started`;

    }
    const daysGrav = Math.floor(totaleSecondsGrav/86400);
    const hoursGrav = Math.floor(totaleSecondsGrav/3600)%24;
    const minutesGrav =Math.floor(totaleSecondsGrav/60)%60;
    const secondsGrav =Math.floor(totaleSecondsGrav%60);
    console.log(`${daysGrav} days,${hoursGrav} hours,${minutesGrav} minutes,${secondsGrav} seconds, `);
    var timeelGrav = document.getElementById("time-gravity");
    timeelGrav.innerHTML=`${daysGrav} days,${hoursGrav} hours,${minutesGrav} minutes,${secondsGrav} seconds, `;
    totaleSecondsGrav--;
    if (totaleSecondsGrav<0) {
        console.log("countdown has ended")
        timeelGrav.innerHTML=`This Course Has Started`;

    }
    const daysCrystal = Math.floor(totaleSecondsCrystal/86400);
    const hoursCrystal = Math.floor(totaleSecondsCrystal/3600)%24;
    const minutesCrystal =Math.floor(totaleSecondsCrystal/60)%60;
    const secondsCrystal =Math.floor(totaleSecondsCrystal%60);
    console.log(`${daysCrystal} days,${hoursCrystal} hours,${minutesCrystal} minutes,${secondsCrystal} seconds, `);
    var timeelCrystal = document.getElementById("time-crystal");
    timeelCrystal.innerHTML=`${daysCrystal} days,${hoursCrystal} hours,${minutesCrystal} minutes,${secondsCrystal} seconds, `;
    totaleSecondsCrystal--;
    if (totaleSecondsCrystal<0) {
        console.log("countdown has ended")
        timeel.innerHTML=`This Course Has Started`;

    }
}
const intervalCoundown =setInterval(updateCountdown,1000);

//Creating the courses
//

function temCourse(ftitle,fcode,fduration,fdescription,fdetails,fmodules,flecturer,fvenue,fguide,fvideo,fcompleted) {
    this.title=ftitle;
    this.code=fcode;
    this.duration=fduration;
    this.fdescription=fdescription;
    this.details=fdetails;
    this.modules=fmodules;
    this.lecturer=flecturer;
    this.venue=fvenue;
    this.guide=fguide;
    this.video=fvideo;
    this.completed=fcompleted;
}


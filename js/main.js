document.addEventListener('DOMContentLoaded', () => {
    loadCompletedModules();
});

function toggleAccordion(element) {
    const content = element.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

function completeModule(moduleId) {
    // Retrieve existing completed modules from localStorage or initialize an empty array
    const completedModules = JSON.parse(localStorage.getItem('completedModules')) || [];
    
    // Check if the module is already marked as completed
    if (!completedModules.includes(moduleId)) {
        completedModules.push(moduleId);  // Add moduleId to the array
        localStorage.setItem('completedModules', JSON.stringify(completedModules));  // Save to localStorage
        updateCompletedModulesList();  // Update the list of completed modules on the page if the element exists
    }
}

function loadCompletedModules() {
    // Retrieve completed modules from localStorage
    //localStorage.clear()
    const completedModules = JSON.parse(localStorage.getItem('completedModules')) || [];

    completedModules.forEach(moduleId => {
        const element = document.getElementById(moduleId);
        if (element) {
            element.style.textDecoration = "line-through";  // Mark the module as completed
        }
    });

    updateCompletedModulesList();  // Update the displayed list of completed modules if the element exists
}

function updateCompletedModulesList() {
    const completedModulesList = document.getElementById('completedModulesList');
    if (!completedModulesList) {
        //console.log('Element with ID "completedModulesList" not found. Skipping update.');
        return;
    }

    const completedModules = JSON.parse(localStorage.getItem('completedModules')) || [];
    completedModulesList.innerHTML = '';  // Clear existing list items

    completedModules.forEach(moduleId => {
        const element = document.getElementById(moduleId);
        if (element) {
            const moduleText = element.textContent;
            const li = document.createElement('li');
            li.textContent = moduleText;  // Add the module's text to the list
            completedModulesList.appendChild(li);
        }
    });
}
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

var arrcourses=[];

var courseCarian=new temCourse("Carian Scorecery","0001","72 Days","Carian scorcery is about creating weapons with magic","Carian scorcery is abour imbueing and creating waepons with magic",  
["Carian Greatsword","Carian Phalanx","Carian Piercer"],"Renalla","Debate Hall","guide goes here","video link goes here",false);

arrcourses.push(courseCarian);

var courseGlintstone=new temCourse("Glintstone Scorecery","0002","72 Days","Glintstone sorcery is about rocks","Glintstone sorcery is about magic rocks",  
["Cannon of Haima","Comet","Crystal Barrage"],"Sellen","Debate Hall","guide goes here","video link goes here",false);

arrcourses.push(courseGlintstone);


//This is the function to update it every second
//
function updateCountdown() {
    //this is just a copy paste with name changes each time to update the time
    const daysNight = Math.floor(totaleSecondsNight/86400);
    const hoursNight = Math.floor(totaleSecondsNight/3600)%24;
    const minutesNight =Math.floor(totaleSecondsNight/60)%60;
    const secondsNight =Math.floor(totaleSecondsNight%60);
    console.log(`${daysNight} days,${hoursNight} hours,${minutesNight} minutes,${secondsNight} seconds, `);
    var timeelNight = document.getElementById("time-night");
    timeelNight.innerHTML=`${daysNight} days ${hoursNight} hours ${minutesNight} minutes ${secondsNight} seconds `;
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
    timeelCaria.innerHTML=`${daysCaria} days ${hoursCaria} hours ${minutesCaria} minutes ${secondsCaria} seconds  `;
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
    timeelCold.innerHTML=`${daysCold} days ${hoursCold} hours ${minutesCold} minutes ${secondsCold} seconds  `;
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
    timeelGlint.innerHTML=`${daysGlint} days ${hoursGlint} hours ${minutesGlint} minutes ${secondsGlint} seconds  `;
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
    timeelGrav.innerHTML=`${daysGrav} days ${hoursGrav} hours ${minutesGrav} minutes ${secondsGrav} seconds  `;
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
    timeelCrystal.innerHTML=`${daysCrystal} days ${hoursCrystal} hours ${minutesCrystal} minutes ${secondsCrystal} seconds  `;
    totaleSecondsCrystal--;
    if (totaleSecondsCrystal<0) {
        console.log("countdown has ended")
        timeel.innerHTML=`This Course Has Started`;
    }
}

document.getElementById('searchButton').addEventListener('click',searchcourse);

function searchcourse() {
    var input=document.getElementById('searchInput').value.toLowerCase();
    var courseDisplay=document.getElementById('coursesDisplay');
    var detailDisplay=document.getElementById('detailsDisplay');

    courseDisplay.innerHTML='';
    detailDisplay.innerHTML='';

    var matchingcourses = arrcourses.filter(course => 
        course.title.toLowerCase().includes(input)??
        course.code.toLowerCase().includes(input)
    );

    matchingcourses.forEach(course=>{
        var courseitem=document.createElement('div');
        courseitem.className='course-item';
        courseitem.innerHTML=`<strong>${course.title}</strong> (${course.code})<br>${course.description}`;
        courseitem.addEventListener('click', () => {
            // Display modules for the selected course
            detailDisplay.innerHTML = `<h3>${course.title} Modules</h3>`;
            course.modules.forEach(module => {
                const moduleItem = document.createElement('div');
                moduleItem.className = 'module-item';
                moduleItem.innerHTML = `<strong>${module}</strong><br>Lecturer: ${course.lecturer}<br>Venue: ${course.venue}`;
                console.log(moduleItem);
                detailDisplay.appendChild(moduleItem);
            });
        });
        console.log(courseitem);
        courseDisplay.appendChild(courseitem);

    });


}





function storeUserData(){
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const temp = new FormData(form)
    const temp2 = Object.fromEntries(temp)

    const json = JSON.stringify(temp2)
    localStorage.setItem('form', json)

    window.location.href = "feature.html"

    
})
}

function displayUserData(){
    const json = localStorage.getItem('form')
    const temp = JSON.parse(json)

        const markup = `
    <div>
        <span>Welcome ${temp[0]} ${temp[1]}<span>
    </div>
        `
    document.getElementById('result').innerHTML = markup

}


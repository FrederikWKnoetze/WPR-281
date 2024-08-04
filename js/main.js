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
    console.log(matchingcourses);

    matchingcourses.forEach(element => {
        console.log(element);
    });


    matchingcourses.foreach(course=>{
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





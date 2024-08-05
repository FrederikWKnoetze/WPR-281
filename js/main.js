function funPrint(){
    print()
}
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
        console.log('Element with ID "completedModulesList" not found. Skipping update.');
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

    console.log('Completed Modules List:', completedModules);
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
    this.description=fdescription;
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
["Carian Greatsword","Carian Phalanx","Carian Piercer","Carian Retaliation","Carian Slicer","Glintblade Phalanx",
"Greatblade Phalanx","Lucidity","Magic Downpour","Magic Glintblade ","Glintblade Trio","Miriam's Vanishing"],
"Renalla","Grand Library","guide goes here","https://www.youtube.com/watch?v=cbWXHMVWYkQ",false);
arrcourses.push(courseCarian);

var courseGlintstone=new temCourse("Glintstone Scorecery","0002","72 Days","Glintstone sorcery is about rocks","Glintstone sorcery is about magic rocks",  
["Cannon of Haima","Comet","Crystal Barrage","Crystal Burst",
"Gavel of Haima","Glintstone Arc","Glintstone Cometshard","Glintstone Pebble",
"Glintstone Stars","Great Glintstone Shard","Rock Blaster","Scholar's Armament",
"Scholar's Shield","Shard Spiral","CShatter Earth","Star Shower",
"Starlight","Swift Glintstone Shard","Terra Magica","Thops's Barrier "
],"Sellen","Debate Parlour","guide goes here","https://www.youtube.com/watch?v=cbWXHMVWYkQ",false);
arrcourses.push(courseGlintstone);

var courseNight=new temCourse("Night Scorecery","0003","72 Days","Night Scorcery is about ambushing enemies","Night Scorcery is about ambushing enemies",  
["Ambush Shard","Eternal Darkness","Night Comet","Night Maiden's Mist",
"Night Shard","Unseen Blade","Unseen Form"
],"Gowry","Selia","guide goes here","https://www.youtube.com/watch?v=cbWXHMVWYkQ",false);
arrcourses.push(courseNight);

var courseCold=new temCourse("Cold Scorecery","0004","72 Days","Cold scorcery is about freezing things and people","Cold scorcery is about freezing things and people",  
["Adula's Moonblade","Freezing Mist","Frozen Armament","Glintstone Icecrag","Zamor Ice Storm"],"Ranni","Ranni's Rise","guide goes here","https://www.youtube.com/watch?v=cbWXHMVWYkQe",false);      
arrcourses.push(courseCold);

var courseGravity=new temCourse("Gravity Scorecery","0005","72 Days","Gravity Scorcery is about throwing rocks","Gravity Scorcery is about throwing rocks",  
["Collapsing Stars","Gravity Well","Meteorite","Meteorite of Astel",
"Rock Sling","Blades of Stone","Gravitational Missile"
],"Radahn","Redmane Castle","guide goes here","https://www.youtube.com/watch?v=cbWXHMVWYkQ",false);          
arrcourses.push(courseGravity);

var courseCrystalian=new temCourse("Crystalian Scorecery","0006","72 Days","Crystalian scorcery if about shooting crystals","Crystalian scorcery if about shooting crystals",  
["Crystal Release","Crystal Torrent","Shattering Crystal"],"Miriel","Church of Vows","guide goes here","https://www.youtube.com/watch?v=cbWXHMVWYkQ",false);          
arrcourses.push(courseCrystalian);


//This is the function to update it every second
//


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
    if ((matchingcourses.length==0)??(matchingcourses==null)) {
       alert('There are no courses matching this search');
    } else {
        matchingcourses.forEach(course=>{
            var courseitem=document.createElement('div');
            courseitem.className='course-item';
            courseitem.innerHTML=`<h3>${course.title}(Click for Modules)</h3> Code: ${course.code}<br>Duration: ${course.duration}<br>${course.description}`;
            courseitem.addEventListener('click', () => {
                // Display modules for the selected course
                detailDisplay.innerHTML = `<h3>${course.title} Modules<br>Lecturer: ${course.lecturer}<br>Venue: ${course.venue}</h3>`;
    
                course.modules.forEach(module => {
                    const moduleItem = document.createElement('div');
                    moduleItem.className = 'module-item';
                    moduleItem.innerHTML = `<strong>${module}</strong><br>Study Guide: ${course.guide}<br>Course Video Class: <a href="${course.video}">Click Here</a>`;
                    console.log(moduleItem);
                    detailDisplay.appendChild(moduleItem);
                });
                
            });
            console.log(courseitem);
            courseDisplay.appendChild(courseitem);
    
        });
    
    }
    


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




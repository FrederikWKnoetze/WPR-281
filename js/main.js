document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the signup form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const surname = document.getElementById('surname').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const course = document.getElementById('course').value;

            const user = {
                name,
                surname,
                email,
                phone,
                address,
                course
            };

            localStorage.setItem('user', JSON.stringify(user));
            alert('Sign up successful!');
            window.location.href = 'signIn.html';
        });
    }
});
function funPrint(){
   // print()
   var content=document.getElementById("printArea");
   var originalcontent=document.body.innerHTML;

   console.log(originalcontent);
   console.log(content);
    document.body.innerHTML='';
   document.body.appendChild(content);
   console.log(document.body);

   window.print();
   document.body.innerHTML=originalcontent;
   
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
            //element.style.textDecoration = "line-through";  // Mark the module as completed
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
            element.style.textDecoration = "line-through";
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
"Renalla","Grand Library","Study Guides/Carian Sorcery in Elden Ring.pdf","https://www.youtube.com/watch?v=cbWXHMVWYkQ",false);
arrcourses.push(courseCarian);

var courseGlintstone=new temCourse("Glintstone Scorecery","0002","72 Days","Glintstone sorcery is about rocks","Glintstone sorcery is about magic rocks",  
["Cannon of Haima","Comet","Crystal Barrage","Crystal Burst",
"Gavel of Haima","Glintstone Arc","Glintstone Cometshard","Glintstone Pebble",
"Glintstone Stars","Great Glintstone Shard","Rock Blaster","Scholar's Armament",
"Scholar's Shield","Shard Spiral","CShatter Earth","Star Shower",
"Starlight","Swift Glintstone Shard","Terra Magica","Thops's Barrier "
],"Sellen","Debate Parlour","Study Guides/Glintstone Sorcery in Elden Ring.pdf","https://www.youtube.com/watch?v=cbWXHMVWYkQ",false);
arrcourses.push(courseGlintstone);

var courseNight=new temCourse("Night Scorecery","0003","72 Days","Night Scorcery is about ambushing enemies","Night Scorcery is about ambushing enemies",  
["Ambush Shard","Eternal Darkness","Night Comet","Night Maiden's Mist",
"Night Shard","Unseen Blade","Unseen Form"
],"Gowry","Selia","Study Guides/Night Sorcery in Elden Ring.pdf","https://www.youtube.com/watch?v=cbWXHMVWYkQ",false);
arrcourses.push(courseNight);

var courseCold=new temCourse("Cold Scorecery","0004","72 Days","Cold scorcery is about freezing things and people","Cold scorcery is about freezing things and people",  
["Adula's Moonblade","Freezing Mist","Frozen Armament","Glintstone Icecrag","Zamor Ice Storm"],"Ranni","Ranni's Rise","Study Guides/Cold Sorcery in Elden Ring.pdf","https://www.youtube.com/watch?v=cbWXHMVWYkQe",false);      
arrcourses.push(courseCold);

var courseGravity=new temCourse("Gravity Scorecery","0005","72 Days","Gravity Scorcery is about throwing rocks","Gravity Scorcery is about throwing rocks",  
["Collapsing Stars","Gravity Well","Meteorite","Meteorite of Astel",
"Rock Sling","Blades of Stone","Gravitational Missile"
],"Radahn","Redmane Castle","Study Guides/Gravity Sorcery in Elden Ring.pdf","https://www.youtube.com/watch?v=cbWXHMVWYkQ",false);          
arrcourses.push(courseGravity);

var courseCrystalian=new temCourse("Crystalian Scorecery","0006","72 Days","Crystalian scorcery if about shooting crystals","Crystalian scorcery if about shooting crystals",  
["Crystal Release","Crystal Torrent","Shattering Crystal"],"Miriel","Church of Vows","Study Guides/Crystalian Sorcery in Elden Ring.pdf","https://www.youtube.com/watch?v=cbWXHMVWYkQ",false);          
arrcourses.push(courseCrystalian);


//This is the function to update it every second
//

try {
    document.getElementById('searchButton').addEventListener('click',searchcourse);
} catch (err) {
    console.log('Button not found');
}

try {
    var searchinputtest= document.getElementById('searchInput');
    searchinputtest.addEventListener('keypress',function(event){
        if (event.key === "Enter") {
            event.preventDefault();
            searchcourse();
          } 
    });
} catch (err) {
    console.log('Search not found');
}
//SEARCH
//
function searchcourse() {
    var input=document.getElementById('searchInput').value.toLowerCase();
    var courseDisplay=document.getElementById('coursesDisplay');
    var detailDisplay=document.getElementById('detailsDisplay');

    courseDisplay.innerHTML='';
    detailDisplay.innerHTML='';
    
    if (input=='') {
        alert('There are no courses matching this search');
    }else
        {

    
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
                            moduleItem.innerHTML = `<strong>${module}</strong><br>Study Guide: <a href="${course.guide}">Click Here</a><br>Course Video Class: <a href="${course.video}">Click Here</a>`;
                            console.log(moduleItem);
                            detailDisplay.appendChild(moduleItem);
                        });
                        
                    });
                    console.log(courseitem);
                    courseDisplay.appendChild(courseitem);
            
            });
        }
    }
    



    //
    //END SEARCH


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



function updateProgressNight(){
    let progress = localStorage.getItem('progress') || 0
    progress = parseInt(progress) + Math.ceil(100/7)
    if (progress > 100) progress = 100
    localStorage.setItem('progress', progress)
}

function loadProgressNight(){
    let progress = localStorage.getItem('progress') || 0;
    document.getElementById('progress-bar-inner-1').style.width = progress + '%';
    document.getElementById('progress-bar-inner-1').innerText = progress + '%';
    console.log('Progress loaded: ' + progress + '%');

}

function updateProgressCarian(){
    let progress1 = localStorage.getItem('progress1') || 0
    progress1 = parseInt(progress1) + Math.ceil(100/12)
    if (progress1 > 100) progress1 = 100
    localStorage.setItem('progress1', progress1)
}

function loadProgressCarian(){
    let progress1 = localStorage.getItem('progress1') || 0;
    document.getElementById('progress-bar-inner-2').style.width = progress1 + '%';
    document.getElementById('progress-bar-inner-2').innerText = progress1 + '%';
    console.log('Progress loaded: ' + progress1 + '%');

}

function updateProgressCold(){
    let progress2 = localStorage.getItem('progress2') || 0
    progress2 = parseInt(progress2) + Math.ceil(100/5)
    if (progress2 > 100) progress2 = 100
    localStorage.setItem('progress2', progress2)
}

function loadProgressCold(){

    let progress2 = localStorage.getItem('progress2') || 0;
    document.getElementById('progress-bar-inner-3').style.width = progress2 + '%';
    document.getElementById('progress-bar-inner-3').innerText = progress2 + '%';
    console.log('Progress loaded: ' + progress2 + '%');

}

function updateProgressGlintstone(){
    let progress3 = localStorage.getItem('progress3') || 0
    progress3 = parseInt(progress3) + Math.ceil(100/20)
    if (progress3 > 100) progress3 = 100
    localStorage.setItem('progress3', progress3)
}

function loadProgressGlintstone(){

    let progress3 = localStorage.getItem('progress3') || 0;
    document.getElementById('progress-bar-inner-4').style.width = progress3 + '%';
    document.getElementById('progress-bar-inner-4').innerText = progress3 + '%';
    console.log('Progress loaded: ' + progress3 + '%');

}

function updateProgressGravity(){
    let progress4 = localStorage.getItem('progress4') || 0
    progress4 = parseInt(progress4) + Math.ceil(100/7)
    if (progress4 > 100) progress4 = 100
    localStorage.setItem('progress4', progress4)
}

function loadProgressGravity(){

    let progress4 = localStorage.getItem('progress4') || 0;
    document.getElementById('progress-bar-inner-5').style.width = progress4 + '%';
    document.getElementById('progress-bar-inner-5').innerText = progress4 + '%';
    console.log('Progress loaded: ' + progress4 + '%');

}

function updateProgressCrystalian(){
    let progress5 = localStorage.getItem('progress5') || 0
    progress5 = parseInt(progress5) + Math.ceil(100/3)
    if (progress5 > 100) progress5 = 100
    localStorage.setItem('progress5', progress5)
}

function loadProgressCrystalian(){

    let progress5 = localStorage.getItem('progress5') || 0;
    document.getElementById('progress-bar-inner-6').style.width = progress5 + '%';
    document.getElementById('progress-bar-inner-6').innerText = progress5 + '%';
    console.log('Progress loaded: ' + progress5 + '%');

}
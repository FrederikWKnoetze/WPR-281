document.getElementById('signin-form').addEventListener('submit', checkUserData);

function checkUserData(event) {
    event.preventDefault();
    
    const email = document.getElementById('signin-email').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.email === email) {
        alert('Sign in successful!');
        localStorage.setItem('isSignedIn', 'true');
        // Redirect to courses or another page
        window.location.href = 'studentCourses.html';
    } else {
        alert('User not found. Please sign up first.');
    }
}

function checkIfSignedIn() {
    const isSignedIn = localStorage.getItem('isSignedIn');
    return isSignedIn === 'true';
}

// Example usage
if (checkIfSignedIn()) {
    alert('User is already signed in');
    // Redirect to courses or another page
    window.location.href = 'studentCourses.html';
}
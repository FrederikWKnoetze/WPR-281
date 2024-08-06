function checkUserData(event) {
    event.preventDefault();
    
    const email = document.getElementById('signin-email').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.email === email) {
        alert('Sign in successful!');
        // Redirect to courses or another page
        window.location.href = 'course.html';
    } else {
        alert('User not found. Please sign up first.');
    }
}
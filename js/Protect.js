document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('isSignedIn') !== 'true') {
        alert('You are not signed in. Redirecting to sign-in page.');
        window.location.href = 'signIn.html'; // Redirect to sign-in page
    }
});

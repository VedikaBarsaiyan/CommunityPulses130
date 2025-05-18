document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons with the 'btn' class
    const buttons = document.querySelectorAll('.btn');
    
    // Add click event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const buttonText = this.textContent.trim();
            
            // Handle different button actions
            switch(buttonText) {
                case 'Find Events':
                    alert('Events page will be implemented soon!');
                    break;
                case 'Create Event':
                    window.location.href = 'pages/create-event.html';
                    break;
                case 'Browse All Events':
                    alert('Browse Events page will be implemented soon!');
                    break;
                case 'Sign Up':
                    window.location.href = 'pages/signup.html';
                    break;
                case 'Learn More':
                    alert('About page will be implemented soon!');
                    break;
                default:
                    console.log('Button clicked:', buttonText);
            }
        });
    });
});

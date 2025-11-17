// Book a Call Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openBookCallModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modal = document.getElementById('bookCallModal');
    const bookCallForm = document.getElementById('bookCallForm');
    
    // Open modal
    if (openModalBtn) {
        openModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }
    
    // Close modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
    
    // Handle form submission
    if (bookCallForm) {
        bookCallForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = bookCallForm.querySelector('.modal-submit-btn');
            const originalText = submitButton.textContent;
            
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Booking...';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(function() {
                // Show success message
                submitButton.textContent = 'Booked!';
                submitButton.style.background = '#28a745';
                
                // Reset form after delay
                setTimeout(function() {
                    bookCallForm.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                    submitButton.style.background = '';
                    
                    // Close modal after successful submission
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }, 1500);
            }, 1000);
        });
    }
});

// Mobile Menu Toggle (if not already in HTML)
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    
    if (mobileMenuToggle && navContainer) {
        mobileMenuToggle.addEventListener('click', function() {
            navContainer.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navContainer.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
});

// Header scroll effect (if not already in HTML)
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});


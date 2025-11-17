// All JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navContainer.classList.toggle('active');
            document.body.style.overflow = navContainer.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navContainer.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navContainer.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navContainer.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navContainer.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Playbook form submission
    const playbookForm = document.getElementById('playbookForm');
    if (playbookForm) {
        playbookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitButton = this.querySelector('.playbook-form-btn');
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Downloading...';
            
            // Simulate download
            setTimeout(() => {
                alert('Thank you! Your download will begin shortly.');
                this.reset();
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 1500);
        });
    }
    
    // Playbook form reversed submission
    const playbookFormReversed = document.getElementById('playbookFormReversed');
    if (playbookFormReversed) {
        playbookFormReversed.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitButton = this.querySelector('.playbook-form-btn');
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Downloading...';
            
            // Simulate download
            setTimeout(() => {
                alert('Thank you! Your download will begin shortly.');
                this.reset();
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 1500);
        });
    }
    
    // Book a Call Modal Functionality
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
    
    // Close modal on Escape key (handled in unified handler below)
    
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
    
    // Request Access Modal Functionality
    const openRequestAccessBtns = document.querySelectorAll('#openRequestAccessModal, #openRequestAccessModal2, #openRequestAccessModal3, #openRequestAccessModal4');
    const closeRequestAccessModalBtn = document.getElementById('closeRequestAccessModal');
    const requestAccessModal = document.getElementById('requestAccessModal');
    const requestAccessForm = document.getElementById('requestAccessForm');
    
    // Open modal for all request access buttons
    openRequestAccessBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                requestAccessModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        }
    });
    
    // Close modal
    if (closeRequestAccessModalBtn) {
        closeRequestAccessModalBtn.addEventListener('click', function() {
            requestAccessModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close modal when clicking outside
    if (requestAccessModal) {
        requestAccessModal.addEventListener('click', function(e) {
            if (e.target === requestAccessModal) {
                requestAccessModal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    }
    
    // Close modal on Escape key (handled in unified handler below)
    
    // Handle form submission
    if (requestAccessForm) {
        requestAccessForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = requestAccessForm.querySelector('.modal-submit-btn');
            const originalText = submitButton.textContent;
            
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Requesting...';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(function() {
                // Show success message
                submitButton.textContent = 'Requested!';
                submitButton.style.background = '#28a745';
                
                // Reset form after delay
                setTimeout(function() {
                    requestAccessForm.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                    submitButton.style.background = '';
                    
                    // Close modal after successful submission
                    requestAccessModal.classList.remove('active');
                    document.body.style.overflow = '';
                }, 1500);
            }, 1000);
        });
    }
    
    // Manager Modal Functionality
    const openManagerBtns = document.querySelectorAll('#openManagerModal, #openManagerModal2, #openManagerModal3');
    const closeManagerModalBtn = document.getElementById('closeManagerModal');
    const managerModal = document.getElementById('managerModal');
    const managerForm = document.getElementById('managerForm');
    
    // Open modal for all manager buttons
    openManagerBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                managerModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        }
    });
    
    // Close modal
    if (closeManagerModalBtn) {
        closeManagerModalBtn.addEventListener('click', function() {
            managerModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close modal when clicking outside
    if (managerModal) {
        managerModal.addEventListener('click', function(e) {
            if (e.target === managerModal) {
                managerModal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    }
    
    // Close modal on Escape key (handle all modals)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (managerModal && managerModal.classList.contains('active')) {
                managerModal.classList.remove('active');
                document.body.style.overflow = '';
            } else if (requestAccessModal && requestAccessModal.classList.contains('active')) {
                requestAccessModal.classList.remove('active');
                document.body.style.overflow = '';
            } else if (modal && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
    
    // Handle form submission
    if (managerForm) {
        managerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = managerForm.querySelector('.modal-submit-btn');
            const originalText = submitButton.textContent;
            
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Requesting...';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(function() {
                // Show success message
                submitButton.textContent = 'Requested!';
                submitButton.style.background = '#28a745';
                
                // Reset form after delay
                setTimeout(function() {
                    managerForm.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                    submitButton.style.background = '';
                    
                    // Close modal after successful submission
                    managerModal.classList.remove('active');
                    document.body.style.overflow = '';
                }, 1500);
            }, 1000);
        });
    }
});


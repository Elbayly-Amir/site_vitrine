        // Menu burger toggle
        const burger = document.querySelector('.burger');
        const navLinks = document.querySelector('.nav-links');

        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
        });

        // Smooth scrolling pour les liens
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Fermer le menu mobile après clic
                    navLinks.classList.remove('active');
                }
            });
        });

        // Animation au scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observer tous les éléments avec la classe fade-in
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Animation des menu items au hover
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Header transparent/opaque au scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.9)';
            }
        });

        // Gestion du formulaire de contact
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animation de validation
            const button = this.querySelector('button');
            const originalText = button.textContent;
            
            button.textContent = 'Envoi en cours...';
            button.style.background = '#28a745';
            
            setTimeout(() => {
                button.textContent = 'Message envoyé ✓';
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '#d4af37';
                    this.reset();
                }, 2000);
            }, 1000);
        });

        // Parallax effect pour le hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        });

        // Animation des prix au hover
        document.querySelectorAll('.price').forEach(price => {
            price.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.color = '#d4af37';
            });
            
            price.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.color = '#333';
            });
        });
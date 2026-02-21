      gsap.registerPlugin(ScrollTrigger);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach((element) => {
            gsap.to(element, {
                opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: element, start: 'top 85%', toggleActions: 'play none none reverse' }
            });
        });

        var tl = gsap.timeline();
        tl.from(".hero-sup", { y: 20, opacity: 0, duration: 0.8, delay: 0.2 })
          .from(".hero-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".hero-desc", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6");
  
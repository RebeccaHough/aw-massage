$('document').ready(function() {
    var debug = false; //debug: enable print statements
    
    //todo get scrollpos of bottom of jumbotron
    var scrollBoundary = 200;

    //show desktop menu when mobile menu button disappears
    //nb: this is to overcome the navbar-collapse class preventing mobile menu open
    //and close animations; I can't figure out why this is happening
    //nb: navbar-collapse keeps the menu open on desktop
    function toggleNavbarClass() {
        const toggler = document.getElementById("mobileMenuToggle");
        const navbar = document.getElementById("mainNavbarContent");
        const togglerDisplay = window.getComputedStyle(toggler).display;

        if(debug) console.log('[toggleNavbarClass] toggle display value: ',  togglerDisplay);
        if(debug) console.log('[toggleNavbarClass] navbar classes: ', navbar.classList);

        if(togglerDisplay == "none") {
            navbar.classList.add("navbar-collapse"); 
        } else {
            navbar.classList.remove("navbar-collapse"); 
        }

        if(debug) console.log('[toggleNavbarClass] navbar classes: ', navbar.classList);
    }

    window.onresize = toggleNavbarClass;
    //run once on load
    toggleNavbarClass();
    
    //when user scrolls down n px from the top of the document, resize the navbar
    function collapseNavLogo() {
        if(debug) console.log(collapsed);

        if (document.body.scrollTop > scrollBoundary || document.documentElement.scrollTop > scrollBoundary) {
            if(!collapsed) {
                collapsed = true;
                if(debug) console.log(collapsed);
                //scrolled down (collapse menu)
                document.getElementById("mainNavbar").style.padding = "0 0";
                document.getElementById("navLogo").querySelector('.logo-image').style.height = "50px";
        
                //remove old fade class
                document.getElementById("navLogo").querySelector('.logo-text').classList.remove('fade-in');
                //add new fade class
                document.getElementById("navLogo").querySelector('.logo-text').classList.add('fade-out');
            }
        } else {
            if(collapsed) {
                collapsed = false;
                if(debug) console.log(collapsed);
                //scroll at top (expand menu)
                document.getElementById("mainNavbar").style.padding = ".5rem 0";
                document.getElementById("navLogo").querySelector('.logo-image').style.height = "65px";
    
                //remove old fade class
                document.getElementById("navLogo").querySelector('.logo-text').classList.remove('fade-out');
                //add new fade class
                document.getElementById("navLogo").querySelector('.logo-text').classList.add('fade-in');
            }
        }
    }

    window.onscroll = collapseNavLogo;

    //set inital nav logo state (collapsed or not)
    var collapsed = document.body.scrollTop > scrollBoundary || document.documentElement.scrollTop > scrollBoundary;
    if(debug) console.log("[collapseNavLogo] collapsed = " + collapsed);
    //if logo should start collapsed, run collapse animation once
    if(collapsed) {
        collapsed = false; 
        collapseNavLogo();
    }

    //if on home page, automatically tab through treatments slider
    if(document.getElementById('treatmentsSlider')) {
        const sliderTime = 2000;
        let tabs = ["list-swedish-massage", "list-deep-tissue-massage", "list-advanced-clinical-massage", "list-hot-stone-massage", "list-scar-tissue-massage"];
        let activeIndex = 1;
        let sliderInterval = setInterval(runTreatmentSlider, sliderTime);

        function runTreatmentSlider(e) {
            $('#sliderTitle #' + tabs[activeIndex]).tab('show');
            activeIndex++;
            if(activeIndex >= tabs.length) 
                activeIndex = 0;
        }

        // $('#sliderTitle .list-group-item').on('shown.bs.tab', function(event) {});
        $('#sliderTitle .list-group-item').on('hidden.bs.tab', function(event) {
            var showIndex = tabs.findIndex((id) => id === event.relatedTarget.id);
            activeIndex = showIndex;
        });

        document.getElementById('treatmentsSlider').onmouseenter = pauseTreatmentSlider;
        document.getElementById('treatmentsSlider').onmousedown = pauseTreatmentSlider;
        //document.getElementById('treatmentsSlider').onclick = pauseTreatmentSlider;
        function pauseTreatmentSlider(e) {
            clearInterval(sliderInterval);
        }
        
        document.getElementById('treatmentsSlider').onmouseleave = resumeTreatmentSlider;
        function resumeTreatmentSlider(e) {
            sliderInterval = setInterval(runTreatmentSlider, sliderTime);
        }
    }
});


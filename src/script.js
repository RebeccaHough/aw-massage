$('document').ready(function() {
    var d = false; //debug: enable print statements
    
    //todo get scrollpos of bottom of jumbotron
    var scrollBoundary = 200;
    
    //set inital menu state
    //collasped = true | false;
    var collapsed = document.body.scrollTop > scrollBoundary || document.documentElement.scrollTop > scrollBoundary;
    if(d) console.log(collapsed);
    //if menu should start collapsed, run collapse animation once
    if(collapsed) {
        collapsed = false; 
        collapseNavDesktop();
    }
    
    window.onscroll = collapseNavDesktop;
    
    //when user scrolls down n px from the top of the document, resize the navbar
    function collapseNavDesktop() {
        if(d) console.log(collapsed);

        if (document.body.scrollTop > scrollBoundary || document.documentElement.scrollTop > scrollBoundary) {
            if(!collapsed) {
                collapsed = true;
                if(d) console.log(collapsed);
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
                if(d) console.log(collapsed);
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

    //if on home page, automatically tab through treatments slider
    if(document.getElementById('treatmentsSlider')) {
        let tabs = ["list-swedish-massage", "list-deep-tissue-massage", "list-advanced-clinical-massage", "list-hot-stone-massage", "list-scar-tissue-massage"];
        let activeIndex = 1;
        let sliderInterval = setInterval(runTreatmentSlider, 3500);

        function runTreatmentSlider(e) {
            $('#sliderTitle #' + tabs[activeIndex]).tab('show');
            activeIndex++;
            if(activeIndex >= tabs.length) 
                activeIndex = 0;
        }

        document.getElementById('treatmentsSlider').onmouseenter = pauseTreatmentSlider;
        document.getElementById('treatmentsSlider').onmousedown = pauseTreatmentSlider;
        //document.getElementById('treatmentsSlider').onclick = pauseTreatmentSlider;
        function pauseTreatmentSlider(e) {
            clearInterval(sliderInterval);
        }
        
        document.getElementById('treatmentsSlider').onmouseleave = resumeTreatmentSlider;
        function resumeTreatmentSlider(e) {
            sliderInterval = setInterval(runTreatmentSlider, 3500);
        }

        // Show each slide on hover, default parameter = tab index = active index
        for (let tabsIndex = 0; tabsIndex < tabs.length; tabsIndex++) {
            const name = tabs[tabsIndex];
            document.getElementById(name).onmouseover = function(ev, index = tabsIndex) {
                activeIndex = index;
                $('#sliderTitle #' + tabs[activeIndex]).tab('show');
            };
        }
    }
});


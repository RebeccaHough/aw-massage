window.onload = function() {
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
    
    window.onscroll = function() {collapseNavDesktop()};
    
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
};
(function () {
    // Search Button
    var searchBtn = document.getElementsByClassName("hbt")[0];

    searchBtn.addEventListener("mouseover", function () {
        searchBtn.setAttribute("placeholder", "Search");
    });
    searchBtn.addEventListener("mouseout", function () {
        searchBtn.setAttribute("placeholder", "");
    });
    //slider
    var slideIndex = 1;
    showDivs(slideIndex);

    window.plusDivs = function (n) {
        showDivs(slideIndex += n);
    }

    window.currentDiv = function (n) {
        showDivs(slideIndex = n);
    }

    function showDivs(n) {
        var x = document.getElementsByClassName("bgPos");

        var dots = document.getElementsByClassName("point");
        console.log(x.length);
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" select", " nonselect");
        }
        x[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " select";
    }
    // image overlay

    window.offImages = function (n) {
        document.getElementsByClassName("overlayImage")[n - 1].style.display = "none";
    }

    window.showImages = function (n) {
        document.getElementsByClassName("overlayImage")[n - 1].style.display = "block";
    }
    // js accordion
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            var acc = document.getElementsByClassName("accordion");
            for (i = 0; i < acc.length; i++) {
                var panel =  acc[i].nextElementSibling;
                panel.style.maxHeight = null;
                console.log(acc[i].className);
                if(acc[i].className=="accordion active")
                {acc[i].classList.toggle("active");}
            }
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                var allpanel = document.getElementsByClassName("panel");
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    }
    // Testimonials
    window.openTab = function (evt, tabId) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabId).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
})();
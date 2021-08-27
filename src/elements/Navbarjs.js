window.onscroll = function () {

    if(document.documentElement.scrollTop > 100) {
        document.getElementById("topbar ombre").style.background ="rgb(21, 107, 219)";
        document.getElementById("topbar ombre").style.color ="white";
        document.getElementById("topbar ombre").style.padding = "30px 10px";
    } else {
        document.getElementById("topbar ombre").style.background ="#f1f1f1";
        document.getElementById("topbar ombre").style.color ="rgb(172, 37, 37)";
        document.getElementById("topbar ombre").style.padding = "50px 10px";
    }

}
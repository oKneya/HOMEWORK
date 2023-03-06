// function pozz (){
//     return console.log("pozz");
// }


function informations (){
 console.log(window.navigator.platform);
 console.log(window.navigator.onLine);
 console.log(window.navigator.appVersion);
 console.log(window.location.protocol);
 console.log(window.location.href);

}
informations ();

function isOnline (){
    if (window.navigator.onLine=true){
        console.log("RADI");
    } else if (window.navigator.onLine=false){
        console.log("NE RADI");
    }
}

isOnline();

function windowInfo () {
    console.log(window.screen.availHeight);
    console.log(window.screen.availWidth);

    console.log(window.screen.height);
    console.log(window.screen.width);
}

windowInfo();

function urlInfo (){
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.search);
}

urlInfo ();

function reload (){
    window.location.reload ();
}

function assign () {
    window.location.assign("https://www.youtube.com/");
}

function replace () {
    window.location.replace("https://www.youtube.com/")
}

function storage (){
    localStorage.getItem("ime");
}

storage ()

function remove (){
    localStorage.removeItem("ime")
}

remove ()

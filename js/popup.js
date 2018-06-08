var youtube1 = '<div style="position:relative;;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/Cq9HWMgdkEg?rel=0&amp;showinfo=0&amp;ecver=2" frameborder="0" allow="autoplay; encrypted-media" style="position:absolute;width:80%;height:100%;left: 10%; margin-bottom: 25px;" allowfullscreen></iframe></div>'
var youtube2 = '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/Gx3FPVx8Qf4?rel=0&amp;showinfo=0&amp;ecver=2" frameborder="0" allow="autoplay; encrypted-media" style="position:absolute;width:80%;height:100%;left: 10%; margin-top: 25px;margin-bottom: 20px;" allowfullscreen></iframe></div>'

var wesaturate = '<a href="#"><img src="https://i.imgur.com/JEsKyzp.gif" style="margin-top: 200px;"" /></a>'
var wesaturate_about = '<div class ="wesat-about" style="width:100%; margin-top: 25px; text-align: center; color: white;"><p>Wesaturate is a platform for photographers accross the globe to upload, download, and edit RAW photos for free.<hr/> Design | Outreach and Marketing</p></div>'

var eof_1 = '<a href="https://bis236.wixsite.com/endofphrase"><img src="https://i.imgur.com/diAXNgb.png" style="margin-top: 20px; height: 80%" /></a>'
var eof_2 = '<a href="https://bis236.wixsite.com/endofphrase"><img src="https://i.imgur.com/qP4gJ58.png" style="margin-top: 20px; height: 80%" /></a>'
var eof_3 = '<a href="https://bis236.wixsite.com/endofphrase"><img src="https://i.imgur.com/H7mE1js.png" style="margin-top: 20px; height: 40%" /></a>'
var eof_about = '<div class ="eof-about" style="width:100%; margin-top: 25px; text-align: center; color: white;"><p>Designed and built a game for the web to be utilized and integrated online as well as in person. Creator of initial game design and developed multiple design iterations.<hr/> Design | Project Manegment</p></div>'

var artwork_1 = '<a href="https://imgur.com/lH63aJq"><img src="https://i.imgur.com/lH63aJq.jpg" style="height:100%; transform:rotate(180deg)" /></a>'
var artwork_2 = '<a href="https://imgur.com/Gn0lwMG"><img src="https://i.imgur.com/Gn0lwMG.jpg" style="height:100%" /></a>'
var artwork_3 = '<a href="https://imgur.com/sbVvJb8"><img src="https://i.imgur.com/sbVvJb8.jpg" style="height:100%" /></a>'

var photo_1 = '<img src="https://i.imgur.com/eNy24Jo.jpg" style="height:100%" />'
var photo_2 = '<img src="https://i.imgur.com/aU8OHgY.jpg" style="height:100%" />'
var photo_3 = '<img src="https://i.imgur.com/1DyOGlv.jpg" style="height:100%" />'

var secret = '<canvas id="world" style="width: 100%; height: 100%"></canvas>'

var popup = document.getElementById("popupMain")
function openNav(pop_id) {
    document.getElementById('pop-display-overlay').innerHTML = "";

    if (pop_id === "youtube1") {
        document.getElementById("pop-display-overlay").innerHTML += youtube1
    } else if (pop_id === "youtube2") {
        document.getElementById("pop-display-overlay").innerHTML += youtube1
    } else if (pop_id === "wesaturate") {
        document.getElementById('pop-display-overlay').innerHTML += wesaturate + wesaturate_about;
    } else if (pop_id == "eof1") {
        document.getElementById('pop-display-overlay').innerHTML += eof_1 + eof_about;
    } else if (pop_id === "eof2") {
        document.getElementById('pop-display-overlay').innerHTML += eof_2 + eof_about;
    } else if (pop_id === "eof3") {
        document.getElementById('pop-display-overlay').innerHTML += eof_3 + eof_about;
    } else if (pop_id === "art1") {
        console.log("it worked here...")
        document.getElementById('pop-display-overlay').innerHTML += artwork_1
    } else if (pop_id === "art2") {
        document.getElementById('pop-display-overlay').innerHTML += artwork_2
    } else if (pop_id === "art3") {
        document.getElementById('pop-display-overlay').innerHTML += artwork_3
    } else if (pop_id === "photo1") {
        document.getElementById('pop-display-overlay').innerHTML += photo_1
    } else if (pop_id === "photo2") {
        document.getElementById('pop-display-overlay').innerHTML += photo_2
    } else if (pop_id === "photo3") {
        document.getElementById('pop-display-overlay').innerHTML += photo_3
    }  else if (pop_id === "inspo1") {
        document.getElementById('pop-display-overlay').innerHTML += photo_1
    } else if (pop_id === "inspo2") {
        document.getElementById('pop-display-overlay').innerHTML += photo_1
    } else if (pop_id === "secret") {
        document.getElementById('pop-display-overlay').innerHTML += secret
    }

    document.getElementById("myNav").style.width = "100%";
    
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
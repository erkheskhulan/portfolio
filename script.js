function showMusic(mood){

let music = document.getElementById("music");

if(mood === "study"){
music.innerHTML =
'<iframe width="400" height="220" src="https://www.youtube.com/embed/jfKfPfyJRdk"></iframe>';
}

if(mood === "sad"){
music.innerHTML =
'<iframe width="400" height="220" src="https://www.youtube.com/embed/4fndeDfaWCg"></iframe>';
}

if(mood === "happy"){
music.innerHTML =
'<iframe width="400" height="220" src="https://www.youtube.com/embed/ZbZSe6N_BXs"></iframe>';
}

if(mood === "tired"){
music.innerHTML =
'<iframe width="400" height="220" src="https://www.youtube.com/embed/5qap5aO4i9A"></iframe>';
}

if(mood === "focus"){
music.innerHTML =
'<iframe width="400" height="220" src="https://www.youtube.com/embed/DWcJFNfaw9c"></iframe>';
}

if(mood === "chill"){
music.innerHTML =
'<iframe width="400" height="220" src="https://www.youtube.com/embed/lTRiuFIWV54"></iframe>';
}

}

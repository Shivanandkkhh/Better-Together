// section thumbnail image or product images
function myFunction(smallimgs) {
  var fullImg = document.getElementById("imageBox");
  
  fullImg.src = smallimgs.src;
  
  
}

// section description and review
function openCity(evt, cityName) {
  var i, paraText, tablinks;
  paraText = document.getElementsByClassName("paraText");
  for (i = 0; i < paraText.length; i++) {
      paraText[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

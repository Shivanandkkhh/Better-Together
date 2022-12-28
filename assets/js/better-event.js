function subscribe() {
    var empty = document.forms["subscribe_form"]["form2"].value;
    if (empty==null || empty==''){
        alert('fill the email field ...!!');
        return false;
    }
    else{
        alert('Thank you for subscribing ....!!!');
        return true;
    }
}

var expanded =false;
function showcheckboxes(){
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded){
        checkboxes.style.display ="block";
        expanded = true;
    }
    else
    {
        checkboxes.style.display ="none";
        expanded = false;
    }
}
// function checkedFunction(){
//     var checkedInputs = document.querySelectorAll("input:checked");
//     var doc=document.getElementsByClassName('check-number')[0];
//     doc.innerText=checkedInputs.length
// }
function checkedFunction(){
let checked = document.querySelectorAll("input:checked");
btnText = document.querySelector(".btnText");

  if(checked && checked.length > 0){
    btnText.innerText = `${checked.length} Selected`;
  }
  else{
    btnText.innerText = `${checked.length} Selected`;
  }
}

// gallery items filter
  
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
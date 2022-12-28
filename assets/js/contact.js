// function required()
//     {
//          var empt = document.forms["form1"]["txt"].value;
//         if (empt !=null)
//          {
//          alert('THANK YOU!');
//          return true;
//          }
//      }
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
// function myFunction(){
//     document.getElementById("thank_msg").innerHTML = "Thank You Submitting your form";
// }
function validate(){
var empt=document.forms["myform"]["name"]["tname"].value;
if (empt !=null)
{
    alert('THANK YOU');
    return true;
}

}
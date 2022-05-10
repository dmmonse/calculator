//links doc//
let outputScreen = document.getElementById("output-screen");

//links onclick with display//
function display (num){
    outputScreen.value += num;

}
//to calculate = //
function Calculate (){
    try{
        outputScreen.value= eval(outputScreen.value);
    }
//error display //
    catch(err){
        outputScreen.value= "";
        display("Invalid")
    }
}
//clear entire display //
function Clear(){
    outputScreen.value = "";
}
//clear -1 in display //
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
//msg before open//
function openMsg() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("msg").innerHTML =
        this.responseText;
      }
    };
    //msg after open//
    xhttp.open("GET", "hidden_msg.txt", true);
    xhttp.send();
  }
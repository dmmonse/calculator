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
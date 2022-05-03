let outputScreen = document.getElementById("output-screen");

function display (num){
    outputScreen .value += num;

}
function Calculate (){
    try{
        outputScree.value= eval(outputScreen.value);
    }
    catch(err){
        display("Invalid")
    }
}
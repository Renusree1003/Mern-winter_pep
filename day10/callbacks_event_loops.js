console.log("a-start");
function doSomeThing(){
    console.log("b-Starting..");
    setTimeout(() => {
        console.log("c--callback completed");
    }, 0);
    console.log("d--done");
}
console.log("e");
doSomeThing();
console.log("f")
//aebdfc
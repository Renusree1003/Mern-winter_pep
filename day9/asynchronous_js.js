// const heading = document.getElementsByTagName("h2")[0]; 
// const handleHeadingStyling = () => {
//     heading.style.backgroundColor = getRandomColor();
//     heading.style.color = getRandomColor();
// };


// console.log("START");
// const handleWelcome=()=>{
//     console.log("WELCOME");
//     setTimeout(() => {
//         console.log("Hello");

//     },1000);
// };
// console.log("END");


// const btn1 = document.getElementById("btn-1");
// const btn2 = document.getElementById("btn-2");
//-----------
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
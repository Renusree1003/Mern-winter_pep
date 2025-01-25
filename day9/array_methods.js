// const arr = ["Moon", "Sun", "Planets", "Galaxy",["animals"]];
//arr.splice(2, 1);
//arr.splice(1, 0, "Jupiter", "Earth");
// console.log(arr);
// const result = arr.flat(2);
// console.log("")

//--------------------ITERATION---------
//-------1.for-each
// const arr = ["Moon", "Sun", "Planets", "Galaxy", "animals"];
// const myCustomFunction = (cb) => {
//     for(let i=0; i<arr.length; i++){
//         cb(arr[i], i, arr);
//     }

// };
// const cb = (a,b,c) => {
//     console.log(a,b,c);
// };
// myCustomFunction(cb);

// const cb = (a,b,c) => {
//     console.log(a,b,c);
// };
// arr.forEach(cb);

//--------
// arr.forEach((a, b, c) => {
//     console.log(a, b, c);
// });
//-----------
// const ans = arr.forEach((a, b, c) => {
//     console.log(a, b, c);
//     return 10;
// });
// console.log(ans);

//--------MAP----
// console.log(arr);
// const ans = arr.map((a) => {
//     console.log(a);
//     return "Hello " + a;
// });
// console.log(ans);

// const sum = (...arr) => {
//     //console.log(arr);
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i];
//     }
//     console.log(sum);
// };
// sum();
// sum(10);
// sum(10, 20);
// sum(10, 20, 30);

// const arr = ["Moon", "Sun", "Planets", "Galaxy", "animals"];
// const [a, b, c, d, e, f] = arr;
// console.log(a, b, c, d, e, f);

const obj = {
    name: "Anurag",
    city: "Delhi",
    country: "India",
    phone: "123456789",
    bloodGroup: "O+",

};
const {firstElem, bloodGroup, ...rem } = obj;
console.log(firstElem, bloodGroup);
console.log(rem);
//container can be array or object, depends on the items


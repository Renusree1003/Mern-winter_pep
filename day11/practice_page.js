// const getData = () => {
//     const req = fetch("https://dummyjson.com/products");
//     req.then((res) => {
//         const pr = res.json();
//         pr.then((dataObj)=>{
//             const products = dataObj.products;
//             // console.log(" : products:", products);

//             // const firstProduct = products[0];
//             // console.log(" : firstProduct:", firstProduct);
//             // const card = document.createElement('div');
//             // const para = document.createElement("p");
//             // para.innerText = firstProduct.title;
//             // const parent= document.getElementById("root");
//             // parent.appendChild(para);
//             showProducts(dataObj);
//         });
//     }).catch((err) => {
//         alert(err.message);
//     });
// };
// getData();



// const getData = async () => {
//     const res = await fetch("https://dummyjson.com/products");
//     req.then((res) => {
//         const dataObj = await res.json();
//         //pr.then((dataObj)=>{
//             //const products = dataObj.products;
//             // console.log(" : products:", products);

//             // const firstProduct = products[0];
//             // console.log(" : firstProduct:", firstProduct);
//             // const card = document.createElement('div');
//             // const para = document.createElement("p");
//             // para.innerText = firstProduct.title;
//             // const parent= document.getElementById("root");
//             // parent.appendChild(para);
//             showProducts(dataObj);
//     //     });
//     // }).catch((err) => {
//     //     alert(err.message);
//     // });
// };
// getData();

const showProducts = (obj) => {
    console.log("A...");
};
console.log("B...");
const getData = async () => {
    console.log("C...");
    const res = await fetch("https://dummyjson.com/products");
    console.log("D..");
    const dataObj = await res.json();
    console.log("E..");
    showProducts(dataObj);
    console.log("F...");
};
console.log("G : CALLING getData()");
getData();
console.log("H..");
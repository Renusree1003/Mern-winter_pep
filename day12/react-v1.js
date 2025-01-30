// // console.log(React);
// // console.log(ReactDOM);

// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);


// const newTitle = React.createElement("h2", {}, "Hello from new react");
// //console.log(" : newTitle:", newTitle);
// const newPara = React.createElement("p", {}, "Hello from new react");
// const container = React.createElement("div", {}, [newTitle, newPara]);
// const li = React.createElement("li", {}, "item1");
// const li2 = React.createElement("li", {}, "item2");
// const ul = React.createElement("ul", {}, [li, li2]);
// const newDiv = React.createElement("div", {}, [container, ul]);

// root.render(newDiv);
//-------------------------------------------

// const creator = (name, value) => {
//     const res = {
//         studentName: name,
//         description: value,
//         greetings: `Hello ${name} ! How are you`,
//     };
//     return res;
// };

// const obj1 = creator("Renu", "This is dummy text");
// console.log(" : obj1:", obj1);
// const obj2 = creator("Renu", "This is dummy text");
// console.log(" : obj1:", obj2);


//------properties obj------------
// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);
// const styleObj ={
//     fontSize: "24px",
//     margin: "2rem",
// };
// // const Title = React.createElement("h2", {
// //     className: "text-style-type-1",
// //      id: "something",
// //     style: styleObj,
// //     title: "company name",
// // }, "Hello from new react");

// // // console.log(newTitle);
// const title = (<h2 className= "text-style-type-1" id="something" title="company name">Hello from react..</h2>)
// console.log(" : title: ", title);
// root.render(title);


//------------------USE JSX FROM UI------------
// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);
// const card = (
// <div className="card">
//     <div>
//         <h2>Hello...</h2>
//         <p>Description</p>
//     </div>
//     <img className="image" src="https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=dawn-landscape-mountains-247478.jpg&fm=jpg"></img>
// </div>
// );
// //const container = <div>{card}</div>;
// const container = <div>{card}</div>

// root.render(container);

//----------------jsx(react component)------------

// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);
// const Card = () => {
//     return(
// <div className="card">
//     <div>
//         <h2>Hello </h2>
//         <p>Description</p>
//     </div>
//     <img className="image" src="https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=dawn-landscape-mountains-247478.jpg&fm=jpg"></img>
// </div>
//     );
// };
// //const container = <div>{card}</div>;
// const container = React.createElement("div", {}, [Card(), Card(),]);

// root.render(container);
//-----------------------------------------------
const parent = document.getElementById("dom-root");
const root = ReactDOM.createRoot(parent);
const Card = (obj) => {
    return(
<div className="card">
    <div>
        <h2>Hello{obj.userName}!</h2>
        <p>{obj.greetings}! Description</p>
    </div>
    <img
            className="image"
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        ></img>
</div>
    );
};
//const container = <div>{card}</div>;
// const Container = React.createElement("div", {}, [
//     <Card userName="renu" greetings="hello"/>,
//     <Card userName="abc" greetings="hii"/>,]);

const Container = () => {
    return(
        <div>
            <Card userName="renu" greetings="hello"/>,
            <Card userName="abc" greetings="hii"/>

        </div>
    );
};
console.log(Container());

root.render(<Container/>);


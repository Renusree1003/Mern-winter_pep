function getUserDetails(){

}

function deliverItem(productId, address){
    console.log("Product delivered", productId, address);
}
getUserDetails(deliverItem);


//------------------Inversion of control :: callbacks

function getUserDetails(cb){
    if(Math.random()>0.5){
        cb();
    }

}

function deliverItem(productId, address){
    console.log("Product delivered", productId, address);
}
getUserDetails(deliverItem);

//-----promises


function getUserDetails(cb){
    if(Math.random()>0.5){
        cb();
    }

}

function deliverItem(productId, address){
    console.log("Product delivered", productId, address);
}
// getUserDetails(deliverItem);

const pr=getUserDetails();
pr.then(deliverItem);
pr.catch(() => {});

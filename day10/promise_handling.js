
const showData = () => {
    console.log("YES YES", val);

};

const successCallback = (val) =>{
    console.log("YES", val);
    const pr=val.json();
    pr.then(showData).catch(errorCallback);
};
const errorCallback = (err) => {
    console.log("NO", err);
};

const request = fetch("https://www.redbus.in/seowapi/offers");
request.then(successCallback).catch(errorCallback);
//----------------------------------
//promise queue ___________        ____callback queue
//1.micro task queue                     macro task queue
//2.higher priority                      lower
//3.callbacks from promises               callbacks from event handlers,
//  into this queue     ---              settimeout, set interval, come into this queue
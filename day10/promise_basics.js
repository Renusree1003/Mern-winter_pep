//promise is an object that represent eventual , comletion of failure of an asynchronous operation.
const pr= fetch("https://api.github.com/users/likbalpande");
const cb = (val) => {
    console.log("done", val);
    const pr2 = val.json();

};
const handleError = (val) => {
    const pr2 = val.json();
    pr2.then(cb2).catch(handleError);

};

pr.then(cb).catch(handleError);
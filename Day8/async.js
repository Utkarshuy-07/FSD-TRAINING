console.log("before function invokation");
const waitforSomeTime = (sec)=>{
    setTimeout(()=>) {
        console.log("inside  ");
    }

}

const fun = ()=>{
    console.log("inside the function, before wait");
    waitforSomeTime(5000);
    console.log("inside the function");
}
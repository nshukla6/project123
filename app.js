console.log('before clear');

console.clear();

console.log('after clear');

let arr=[1,2,3,4];   

console.assert(arr.length>1,'array length is not greater than 10');

$.getJSON('data.json',function(data){
    console.table(data,['name','username','email']);
});

console.log('%c error in app','color:white;background-color:red');

const errorStyle='color:white;background-color:orange';

function errorLog(message){
    console.log('%c'+message,errorStyle);
}
errorLog('there is an error');

JSON.stringify()
const fetchData = () => {
    const promise = new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve('Done!');
      }, 1500);
    
    });
    return promise;
  };
setTimeout(()=>{
console.log('first in, last out!')
fetchData().then(text =>{
console.log(text);
return fetchData();
}).then(text2=>{
    console.log(text2+'s')
});
},1000);

console.log('1');
console.log('2');
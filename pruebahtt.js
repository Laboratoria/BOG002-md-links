const request = require('request');

var link='http://www.google.com'
const resp=request(link, (error, response) =>{
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  return new Promise ((resolve, reject) => {
    if (typeof(error)!=null){
      resolve(console.log(response && response.statusCode))
    } else{
      reject(console.log(error+"su link esta tan roto como su alma"))
    }
        
})});

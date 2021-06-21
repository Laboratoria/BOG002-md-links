const fetch = require('node-fetch');
// const index = require('./index.js');
const {createObjLink}= require('./index')
const file = './carpeta';

function validate(data){
    const arrayLink= createObjLink(data);
    console.log('arra de links',arrayLink)
    const arrayPromise= arrayLink.map((element)=>fetch(element.href))
    
    console.log('array',arrayPromise)
}
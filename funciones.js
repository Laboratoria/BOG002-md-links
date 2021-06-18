const request = require('request');
const markdownLinkExtractor = require('markdown-link-extractor');
const { readFileSync } = require('fs');

const readLinks=(archivo,bool)=>{
    const markdown = readFileSync(archivo, {encoding: 'utf8'});


//El modulo markdown tiene dos moods (true-trae todos los detalles//false-solo los links)
const details = markdownLinkExtractor(markdown,true);
const arrayDetail=[]
const arrayTrue=[]
const arrayProm=[]
let arraySecondobject=[]
details.forEach(detail => arrayDetail.push(detail))

    for (var i in arrayDetail){
        let url=arrayDetail[i].href
        if (url.includes("https")||url.includes("http")){
        // if (arrayDetail[i].text.includes("http") || arrayDetail[i].text.includes("https")  ){

        var objetoCorregido=new Object();
        objetoCorregido.href=arrayDetail[i].href;
        objetoCorregido.text=arrayDetail[i].text;
        objetoCorregido.rute="traer de recursion el path despeus de incorporar las expresiones esas";
        arrayProm.push(status(objetoCorregido.href))        
        // objetoCorregido.status="con el http,estoy atoradilla"
        // objetoCorregido.ok="ok"
         arrayTrue.push(objetoCorregido)
    }   
    }
    Promise.all(arrayProm)
    .then(values => {console.log(values)})
    
    
    // })
    // .then(arraySecundario=>{unirObjects(arrayTrue,arraySecundario)})
    // .then(arrayUnidos=>{return arrayUnidos})
        

// if(bool===true){
    return arrayTrue}

// else{
//     var arrayFalse = arrayTrue.slice();
//     for (var i in arrayFalse){
//          delete arrayFalse[i].status
//          delete arrayFalse[i].ok
//     }
//     return arrayFalse}


function status(link){
 

    return new Promise ((resolve, reject) => {
        const rep=request(link, (error, response)=>{
        if (response != undefined){
            
          resolve(response.statusCode)
        } else{
            console.log(error)
          reject(error)
        }
    })})};

function objectLastwo(valores,array2){
        
    for (var i = 0; i < valores.length; i++){
        var statusok= new Object();
        statusok.value=array2[i];
        statusok.ok="ok";
         array2.push(statusok)
       }
    return new Promise ((resolve, reject) => {

        
         resolve(array2)
         reject("No funciono")
    })
    

}

function unirObjects(lista1,lista2){
        
    for (var i = 0; i < lista1.length; i++){
        Object.assign(lista1[i],lista2[i]);
       }
    return new Promise ((resolve, reject) => {

        
         resolve(lista1)
         reject("No funciono")
    })
    

}

module.exports = {
    readLinks,
   
};
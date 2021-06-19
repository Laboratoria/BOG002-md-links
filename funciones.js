const request = require('request');
const markdownLinkExtractor = require('markdown-link-extractor');
const { readFileSync } = require('fs');

async function readLinks(archivo,bool){
    const markdown = readFileSync(archivo, {encoding: 'utf8'});


//El modulo markdown tiene dos moods (true-trae todos los detalles//false-solo los links)
const details = markdownLinkExtractor(markdown,true);
const arrayDetail=[]
const arrayTrue=[]

details.forEach(detail => arrayDetail.push(detail))

    for (var i in arrayDetail){
        let url=arrayDetail[i].href
        if (url.includes("https")||url.includes("http")){
        var objetoCorregido=new Object();
        objetoCorregido.href=arrayDetail[i].href;
        objetoCorregido.text=arrayDetail[i].text;
        objetoCorregido.rute="traer de recursion el path despeus de incorporar las expresiones esas";
         arrayTrue.push(await prueba(objetoCorregido.href,objetoCorregido))
    }   
    }
    
if(bool===true){
    return arrayTrue
}
    else{
    var arrayFalse = arrayTrue.slice();
    for (var i in arrayFalse){
         delete arrayFalse[i].status
         delete arrayFalse[i].ok
    }
    return arrayFalse}
 
}


 async function prueba(param1,param2){
  var pruebilla= await status(param1)
 
  if (pruebilla==200){
    param2.status=pruebilla
      param2.ok="ok"
  }else {
    param2.status=400
    param2.ok="fail"
  }
  return param2
}

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



module.exports = {
    readLinks,
   
};
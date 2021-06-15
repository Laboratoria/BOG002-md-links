const request = require('request');
const markdownLinkExtractor = require('markdown-link-extractor');
const { readFileSync } = require('fs');

const readLinks=(archivo,bool)=>{
    const markdown = readFileSync(archivo, {encoding: 'utf8'});
//cuando el objeto llegue del principal aca se le puede mandar false
// const links = markdownLinkExtractor(markdown, false);
//  links.forEach(link => console.log(link));
//aca el if
const details = markdownLinkExtractor(markdown,true);
const arrayDetail=[]
const arrayTrue=[]
details.forEach(detail => arrayDetail.push(detail))

    for (var i in arrayDetail){
        let url=arrayDetail[i].href
        if (url.includes("https")||url.includes("http")){
        // if (arrayDetail[i].text.includes("http") || arrayDetail[i].text.includes("https")  ){
        var objetoCorregido=new Object();
        objetoCorregido.href=arrayDetail[i].href;
        objetoCorregido.text=arrayDetail[i].text;
        objetoCorregido.rute="traer de recursion el path despeus de incorporar las expresiones esas";
        objetoCorregido.status="con el http,estoy atoradilla"
        objetoCorregido.ok="ok"
        arrayTrue.push(objetoCorregido)
    }   
    }

if(bool===true){
    return arrayTrue}

else{
    var arrayFalse = arrayTrue.slice();
    for (var i in arrayFalse){
         delete arrayFalse[i].status
         delete arrayFalse[i].ok
    }
    return arrayFalse}
}

  



module.exports = {
    readLinks,
    // extraerLinks,
    // objLink,
    // newObjLink,
};
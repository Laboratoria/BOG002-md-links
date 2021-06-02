#! / usr / bin / env nodo
const mdlinks = require("./index");

const input = process.argv;
const path = input[2];
const validate = input.includes("--validate");
 


const cli = (path, options) => {
    const {validate} = options

    if (validate){
        return mdLinks.mdLinks(path, {validate: true})
        .then((result) => {
            
        })

    } if(validate) {
        return mdLinks.mdLinks(path, {validate: true})
        .then((result) => {
            const data = [];
           result.forEach(element =>{
              data.push([element.path, element.link, element.text, element.code, element.status])
            })
            console.table(data);
        })
        .catch(console.error)   
    }
    else {
        return mdLinks.mdLinks(path, {validate: false})
        .then((result) => {
                result.forEach(element => {
                    console.log(element.path, element.link, element.text)
                });
        })
        .catch(e => console.log((e.message))
        )}
}


cli(path, {validate: validate});
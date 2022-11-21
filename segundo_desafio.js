
const { info } = require('console')
const fs=require('fs')
const file='./archivos/ejemplo.txt'
//try{let file ='./archivos/ejemplo.txt'
//fs.mkdirSync('./archivos')
//fs.writeFileSync(file,'hola')
//}catch(err){
//console.error(err)
//}
const fileData=fs.readFileSync(file,'utf-8')


class contenedor{
    constructor(){
        
         
    }
    save(object){
        //traer el contenido del archivo y preguntar si tiene algo,si no se pone objet id en 1
        //si hay contenido se recorre y se guarda el id del ultimo y se le suma uno y al objeto.id se le asigna lo guardado
         
        fs.readFileSync(file,'utf-8',(error,contenido)=>{
            if (error){
                console.log("no se pudo leer el archivo")
            }else{
                //let info=JSON.parse(contenido)
                infor=JSON.parse(contenido)
                console.log("axq")
                if (infor==undefined){  
                    object["id"]=1
                   
                    fs.writeFileSync('./archivos/ejemplo.txt',object)
                    return(object.id)
                }else{
                    let info=JSON.parse(contenido)
                    console.log(infor)
                    for(let i = 0;i <info.length;i++){
                    if (info[i].id>mayor){
                        mayor=info[i].id
                    }
                    object["id"]=mayor+1
                    info.push(object)
                    fs.writeFileSync('./archivos/ejemplo.txt',JSON.stringify(info))
                    return(mayor+1)
                 }
                }
                
            }
        })
       
    }
    getbyid(number){
        
        fs.readFileSync(file,'utf-8',(error,contenido)=>{
            if (error){
                console.log("no se pudo leer el archivo")
            }else{

               let infoe=JSON.parse(contenido)
                if (infoe.id==number){
                    let resultado = infoe
                    return resultado
                }else{
                    return null
                }
                }
            })
    }
}

const ob=new contenedor();
let obk={title:"ventilador",price:300,url:"link"}
console.log(ob.getbyid(1))
//fs.appendFile('./archivos/ejemplo.txt',objeto)

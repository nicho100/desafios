
//const { info } = require('console')
const fs=require('fs')
const file='./archivos/productos.txt'
try{let file ='./archivos/productos.txt'
fs.mkdirSync('./archivos')
fs.writeFileSync(file,'hola')
}catch(err){
console.error(err)
}



class contenedor{
    constructor(title,price,thumbnail){
        this.title=title,
        this.price=price
        this.thumbnail=thumbnail
         
    }
    save(object){
        //traer el contenido del archivo y preguntar si tiene algo,si no se pone objet id en 1
        //si hay contenido se recorre y se guarda el id del ultimo y se le suma uno y al objeto.id se le asigna lo guardado
        fs.readFileSync(file,'utf-8',(error,contenido)=>{
            if (error){
                console.log("no se pudo leer el archivo")
            }else{
                console.log("hola")
                let info =JSON.parse(contenido)
                if (info ==undefined){  
                    object["id"]=1
                   
                    fs.writeFileSync('./archivos/.txt',object)
                    return(object.id)
                }else{
                    let info=JSON.parse(contenido)
                    console.log("hola2")
                    mayor=-1
                    for(let i = 0;i <info.length;i++){
                    if (info[i].id>mayor){
                        mayor=info[i].id
                    }}
                    object["id"]=mayor+1
                    info.push(object)
                    fs.writeFileSync('./archivos/producos.txt',JSON.stringify(info,null,2))
                    return(mayor+1)
                 
                }
                
            }
        })
       
    }
    getbyid(number){
        
        fs.readFileSync(file,'utf-8',(error,contenido)=>{
            if (error){
                console.log("no se pudo leer el archivo")
            }else{
                let resultado=null
                let bandera=0
                let inform=JSON.parse(contenido)
                for(let i = 0;i <inform.length;i++){
                if (inform[i].id==number){
                    resultado = inform[i]
                    bandera=1
                      }  } 
                if (bandera===0){
                resultado=null   
                }   
               return resultado
                }
            })
    }
}

const producto=new contenedor("ventilador",300,"link");
let obj={title:"ventilador",price:300,url:"link"}
console.log(producto.getbyid(2))
console.log(producto.save(obj))
//fs.appendFile('./archivos/ejemplo.txt',objeto)

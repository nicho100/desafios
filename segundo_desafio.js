const fs=require('fs')
const file='./archivos/productos.txt'

try{let file ='./archivos/productos.txt'
fs.mkdirSync('./archivos')
}catch(err){
console.error(err)
}


class contenedor{
    constructor(archivo){
        this.archivo=archivo
        
    }
    save(object){
        //traer el contenido del archivo y preguntar si tiene algo,si no se pone objet id en 1
        //si hay contenido se recorre y se guarda el id del ultimo y se le suma uno y al objeto.id se le asigna lo guardado
        fs.readFileSync(this.archivo,'utf-8',(error,contenido)=>{
            if (error){
                console.log("no se pudo leer el archivo")
            }else{
                
                let info =JSON.parse(contenido)
                if (info ==undefined){  
                    object["id"]=1
                   
                    fs.writeFileSync(this.archivo,object)
                    return(object.id)
                }else{
                    let info=JSON.parse(contenido)
                    mayor=-1
                    for(let i = 0;i <info.length;i++){
                    if (info[i].id>mayor){
                        mayor=info[i].id
                    }}
                    object["id"]=mayor+1
                    info.push(object)
                    fs.writeFileSync(this.archivo,JSON.stringify(info,null,2))
                    return(mayor+1)
                 
                }
                
            }
        })
       
    }
    getbyid(number){
        
        fs.readFileSync(this.archivo,'utf-8',(error,contenido)=>{
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
    getAll(){
        let info=""
        fs.readFileSync(this.archivo,'utf-8',(error,contenido)=>{
            if (error){
                console.log("no se pudo leer el archivo")
            }else{
                console.log("hola")
                info =JSON.parse(contenido)
                
            }
            
        })
        return info
    }
    deleteById(number){
        let info=""
        fs.readFileSync(this.archivo,'utf-8',(error,contenido)=>{
            if (error){
                console.log("no se pudo leer el archivo")
            }else{
                console.log("hola")
                info =JSON.parse(contenido)
                for(let i = 0;i <info.length;i++){
                    if (info[i].id===number){
                        info.splice(i,1)
                        fs.writeFileSync(this.archivo,JSON.stringify(info,null,2))
                          }else{
                            console.log("el elemento no se encuentra en el archivo")
                          } 
                        } 
                
                }
           
            
        }) 
    }
    deleteAll(){
        let info=""
        fs.readFileSync(this.archivo,'utf-8',(error,contenido)=>{
            if (error){
                console.log("no se pudo leer el archivo")
            }else{ 
                info =JSON.parse(contenido)
                info.splice(0,info.length)
                fs.writeFileSync(this.archivo,JSON.stringify(info,null,2))
            }
        })
    }
}

const producto=new contenedor(file);
let object={title:"ventilador",price:300,url:"link"}
console.log(producto.getbyid(2))
console.log(producto.save(object))
console.log(producto.getAll())
producto.deleteById(1)
producto.deleteAll()

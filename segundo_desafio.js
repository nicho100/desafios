const fs=require('fs')
const file='./archivos/productos.txt'

//try{let file ='./archivos/productos.txt'
//fs.mkdirSync('./archivos')
//}catch(err){
//console.error(err)
//}


class contenedor{
    constructor(archivo){
        this.archivo=archivo
        
    }
    save(object){
        //traer el contenido del archivo y preguntar si tiene algo,si no se pone objet id en 1
        //si hay contenido se recorre y se guarda el id del ultimo y se le suma uno y al objeto.id se le asigna lo guardado
        fs.readFile(this.archivo,'utf-8',(error,contenido)=>{
            if (error){
                console.log("no se pudo leer el archivo")
            }else{
                
                let info =JSON.parse(contenido)//esto tira error cuando el archivo viene vacio
                if (info ==undefined){  
                    object["id"]=1
                   console.log(object)
                    //fs.writeFile(this.archivo,object)//esta linea da error
                    return(object.id)
                }else{
                    
                    let info=JSON.parse(contenido)
                    let mayor=-1
                    for(let i = 0;i <info.length;i++){
                    if (info[i].id>mayor){
                        mayor=info[i].id
                    }}
                    object["id"]=mayor+1
                    info.push(object)
                    //fs.writeFile(this.archivo,JSON.stringify(info,null,2))//esta linea me da error
                    console.log(mayor+1)
                 
                }
                
            }
            return "gol" //el return se ejecuta antes del readfile
        })
       
    }
    getbyid(number){
        let resultado=null
        fs.readFile(this.archivo,'utf-8',(error,contenido)=>{
            if (error){
                console.log("no se pudo leer el archivo")
            }else{
                
                let bandera=0
                let info=JSON.parse(contenido)
                for(let i = 0;i <info.length;i++){
                if (info[i].id==number){
                    resultado = info[i]
                    
                    bandera=1
                      }  } 
                if (bandera===0){
                    resultado=null
                    console.log("no se encontro el elemento")   
                } 
            
                }
            })
            
            return resultado   //este return se ejecuta antes del readfile
            
            
    }
    getAll(){
        let info="no se cambio"
        fs.readFile(this.archivo,'utf-8',(error,contenido)=>{
            if (error){
                console.log("no se pudo leer el archivo")
            }else{
                
                info =JSON.parse(contenido)
                
            }    
        })
        return info//este return se ejecuta antes del readfile
    }
    deleteById(number){
        let info=""
        
        fs.readFile(this.archivo,'utf-8',(error,contenido)=>{
            if (error){
                console.log("no se pudo leer el archivo")
            }else{
                info =JSON.parse(contenido)
                let bandera=-1
                for(let i = 0;i <info.length;i++){
                    if (info[i].id===number){
                        info.splice(i,1)
                        console.log(info)
                        bandera=1
                        fs.writeFile(this.archivo,JSON.stringify(info,null,2))//me genera error esta linea
                          }
                        } if (bandera===-1){
                            console.log("el elemento no se encuentra en el archivo")
                        }
                
                }
           
            
        }) 
    }
    deleteAll(){
        let info=""
        fs.readFile(this.archivo,'utf-8',(error,contenido)=>{
            if (error){
                console.log("no se pudo leer el archivo")
            }else{ 
                info =JSON.parse(contenido)
                info.splice(0,info.length)
                console.log(info)
                //fs.writeFile(this.archivo,JSON.stringify(info,null,2))//esta linea me da error
            }
        })
    }
}

const producto=new contenedor(file);
let object={title:"ventilador",price:300,url:"link"}
//console.log(producto.getbyid(1))
console.log(producto.save(object))
//console.log(producto.getAll())
//producto.deleteById(4)
//producto.deleteAll()


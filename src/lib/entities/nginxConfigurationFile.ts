import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;



/**
  description d'un fichier de configuration nginx
*/
export class Entity_nginxConfigurationFile extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'nginxConfigurationFile' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["suffix"] != undefined){
          
           obj["suffix"] = obj["suffix"].toString() ;
           
        }
        
    
        
        if(obj["template"] != undefined){
          
           obj["template"] = obj["template"].toString() ;
           
        }
        
    
        
        if(obj["services"] != undefined && obj["services"] != null && _.isArray(obj["services"])){
          
          obj["services"] = obj["services"].map((value)=>{
            if(_.isString(value)){
              return new mongo.ObjectId(value)  ;
            }else if(value._id){
              return new mongo.ObjectId(value._id)   ;
            }
          })
          
        }
        
    
  }


 

public static checksuffix(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
            if(! val.match(/[^ \/\\]*/)){
              res.push(`${path} dont match [^ \/\\]*` );
            }
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checktemplate(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkservices(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          
          
              

              

              if(target.suffix != null && target.suffix != undefined ){
                
                
                res = Entity_nginxConfigurationFile.checksuffix(target.suffix , `${path}.suffix`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.template != null && target.template != undefined ){
                
                
                res = Entity_nginxConfigurationFile.checktemplate(target.template , `${path}.template`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.services != null && target.services != undefined ){
                
                
                target.services.forEach((data, index)=>{
                  res = Entity_nginxConfigurationFile.checkservices(target.services[index] , `${path}.services.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
           

        return err ;
      }
   
public static castQueryParam(path: string, value: any): any {
        let key:string = '' ;
        let subPath:string = '' ;

        if(value === null){
          return null ;
        }
        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} ${value}`)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path} ${value}`)
        }
        switch (key) {
          
            case 'suffix':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'template':
              //texte
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'services':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
         
          default:
            return Entity.castQueryParam(key, value) ;
            break;
        }
      }

public static getClassNameOfProp(path:string):string{
        let key:string = '' ;
        let subPath:string = '' ;

        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} `)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path}`)
        }
        switch (key) {
          
      
      case 'suffix':
       
             return null ;
       
        
       
      
      
      case 'template':
       
             return null ;
       
        
       
      
      
      case 'services':
       
        
       
              return 'service' ;
              
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }




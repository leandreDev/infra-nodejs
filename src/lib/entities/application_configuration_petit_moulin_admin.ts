import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_application_configuration } from "./application_configuration"


/**
  conf petit_moulin_admin
*/
export class Entity_application_configuration_petit_moulin_admin extends   Entity_application_configuration    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'application_configuration_petit_moulin_admin' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_application_configuration.cast(obj , true)
    
    
        
        if(obj["serviceUrl"] != undefined){
          
           obj["serviceUrl"] = obj["serviceUrl"].toString() ;
           
        }
        
    
        
        if(obj["bddUrl"] != undefined){
          
           obj["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
        
        if(obj["fsoUrl"] != undefined){
          
           obj["fsoUrl"] = obj["fsoUrl"].toString() ;
           
        }
        
    
  }


 

public static checkserviceUrl(val:any, path:string =null):string[]{
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


       
 

public static checkbddUrl(val:any, path:string =null):string[]{
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


       
 

public static checkfsoUrl(val:any, path:string =null):string[]{
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


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          err = Entity_application_configuration.check(target, isCompleteObj , path) ;
          
              

              

              if(target.serviceUrl != null && target.serviceUrl != undefined ){
                
                
                res = Entity_application_configuration_petit_moulin_admin.checkserviceUrl(target.serviceUrl , `${path}.serviceUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.bddUrl != null && target.bddUrl != undefined ){
                
                
                res = Entity_application_configuration_petit_moulin_admin.checkbddUrl(target.bddUrl , `${path}.bddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fsoUrl != null && target.fsoUrl != undefined ){
                
                
                res = Entity_application_configuration_petit_moulin_admin.checkfsoUrl(target.fsoUrl , `${path}.fsoUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
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
          
            case 'serviceUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'bddUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'fsoUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
         
          default:
            return Entity_application_configuration  .castQueryParam(key, value) ;
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
          
      
      case 'serviceUrl':
       
             return null ;
       
        
       
      
      
      case 'bddUrl':
       
             return null ;
       
        
       
      
      
      case 'fsoUrl':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_application_configuration  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




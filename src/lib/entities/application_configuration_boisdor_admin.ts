import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;


import {Entity_application_configuration } from "./application_configuration"


/**
  config boisdor admin
*/
export class Entity_application_configuration_boisdor_admin extends   Entity_application_configuration    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'application_configuration_boisdor_admin' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_application_configuration.cast(obj , true)
    
    
        
        if(obj["boisdorBddUrl"] != undefined){
          
           obj["boisdorBddUrl"] = obj["boisdorBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["boisdorAdminService"] != undefined){
          
           obj["boisdorAdminService"] = obj["boisdorAdminService"].toString() ;
           
        }
        
    
        
        if(obj["fsoUrl"] != undefined){
          
           obj["fsoUrl"] = obj["fsoUrl"].toString() ;
           
        }
        
    
        
        if(obj["boisdorMailService"] != undefined){
          
           obj["boisdorMailService"] = obj["boisdorMailService"].toString() ;
           
        }
        
    
  }


 

public static checkboisdorBddUrl(val:any, path:string =null):string[]{
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


       
 

public static checkboisdorAdminService(val:any, path:string =null):string[]{
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


       
 

public static checkboisdorMailService(val:any, path:string =null):string[]{
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
          
              

              

              if(target.boisdorBddUrl != null && target.boisdorBddUrl != undefined ){
                
                
                res = Entity_application_configuration_boisdor_admin.checkboisdorBddUrl(target.boisdorBddUrl , `${path}.boisdorBddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdorAdminService != null && target.boisdorAdminService != undefined ){
                
                
                res = Entity_application_configuration_boisdor_admin.checkboisdorAdminService(target.boisdorAdminService , `${path}.boisdorAdminService`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fsoUrl != null && target.fsoUrl != undefined ){
                
                
                res = Entity_application_configuration_boisdor_admin.checkfsoUrl(target.fsoUrl , `${path}.fsoUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdorMailService != null && target.boisdorMailService != undefined ){
                
                
                res = Entity_application_configuration_boisdor_admin.checkboisdorMailService(target.boisdorMailService , `${path}.boisdorMailService`) ;
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
          
            case 'boisdorBddUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'boisdorAdminService':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'fsoUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'boisdorMailService':
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
          
      
      case 'boisdorBddUrl':
       
             return null ;
       
        
       
      
      
      case 'boisdorAdminService':
       
             return null ;
       
        
       
      
      
      case 'fsoUrl':
       
             return null ;
       
        
       
      
      
      case 'boisdorMailService':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_application_configuration  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




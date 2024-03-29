import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;


import {Entity_application_configuration } from "./application_configuration"


/**
  config qbp admin
*/
export class Entity_application_configuration_qbp_admin extends   Entity_application_configuration    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'application_configuration_qbp_admin' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_application_configuration.cast(obj , true)
    
    
        
        if(obj["qbpBddUrl"] != undefined){
          
           obj["qbpBddUrl"] = obj["qbpBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["qbpAdminService"] != undefined){
          
           obj["qbpAdminService"] = obj["qbpAdminService"].toString() ;
           
        }
        
    
        
        if(obj["fsoUrl"] != undefined){
          
           obj["fsoUrl"] = obj["fsoUrl"].toString() ;
           
        }
        
    
        
        if(obj["mangoConf"] != undefined){
          
           
              Index.Entity_MangoConf.cast(obj["mangoConf"]) ;
              //602e35837d6c5b63b790117e
            
          
        }
        
    
        
        if(obj["orderService"] != undefined){
          
           obj["orderService"] = obj["orderService"].toString() ;
           
        }
        
    
        
        if(obj["savService"] != undefined){
          
           obj["savService"] = obj["savService"].toString() ;
           
        }
        
    
  }


 

public static checkqbpBddUrl(val:any, path:string =null):string[]{
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


       
 

public static checkqbpAdminService(val:any, path:string =null):string[]{
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


       
 

public static checkmangoConf(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_MangoConf.check(val , false , path  ) ;
            //602e35837d6c5b63b790117e

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkorderService(val:any, path:string =null):string[]{
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


       
 

public static checksavService(val:any, path:string =null):string[]{
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
          
              

              

              if(target.qbpBddUrl != null && target.qbpBddUrl != undefined ){
                
                
                res = Entity_application_configuration_qbp_admin.checkqbpBddUrl(target.qbpBddUrl , `${path}.qbpBddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.qbpAdminService != null && target.qbpAdminService != undefined ){
                
                
                res = Entity_application_configuration_qbp_admin.checkqbpAdminService(target.qbpAdminService , `${path}.qbpAdminService`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fsoUrl != null && target.fsoUrl != undefined ){
                
                
                res = Entity_application_configuration_qbp_admin.checkfsoUrl(target.fsoUrl , `${path}.fsoUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.mangoConf != null && target.mangoConf != undefined ){
                
                
                res = Entity_application_configuration_qbp_admin.checkmangoConf(target.mangoConf , `${path}.mangoConf`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.orderService != null && target.orderService != undefined ){
                
                
                res = Entity_application_configuration_qbp_admin.checkorderService(target.orderService , `${path}.orderService`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.savService != null && target.savService != undefined ){
                
                
                res = Entity_application_configuration_qbp_admin.checksavService(target.savService , `${path}.savService`) ;
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
          
            case 'qbpBddUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'qbpAdminService':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'fsoUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'mangoConf':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_MangoConf.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'orderService':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'savService':
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
          
      
      case 'qbpBddUrl':
       
             return null ;
       
        
       
      
      
      case 'qbpAdminService':
       
             return null ;
       
        
       
      
      
      case 'fsoUrl':
       
             return null ;
       
        
       
      
      
      case 'mangoConf':
       
        
              
             return Index.Entity_MangoConf.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'orderService':
       
             return null ;
       
        
       
      
      
      case 'savService':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_application_configuration  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




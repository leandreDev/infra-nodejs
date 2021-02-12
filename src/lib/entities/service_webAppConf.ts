import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;


import {Entity_service } from "./service"


/**
  permet de générer les fichier de conf des app (css, js, ...)
*/
export class Entity_service_webAppConf extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_webAppConf' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["infraBddUrl"] != undefined){
          
           obj["infraBddUrl"] = obj["infraBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoBddUrl"] != undefined){
          
           obj["ssoBddUrl"] = obj["ssoBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoUrl"] != undefined){
          
           obj["ssoUrl"] = obj["ssoUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoIssuer"] != undefined){
          
           obj["ssoIssuer"] = obj["ssoIssuer"].toString() ;
           
        }
        
    
        
        if(obj["configurationUrl"] != undefined){
          
           obj["configurationUrl"] = obj["configurationUrl"].toString() ;
           
        }
        
    
  }


 

public static checkinfraBddUrl(val:any, path:string =null):string[]{
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


       
 

public static checkssoBddUrl(val:any, path:string =null):string[]{
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


       
 

public static checkssoUrl(val:any, path:string =null):string[]{
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


       
 

public static checkssoIssuer(val:any, path:string =null):string[]{
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


       
 

public static checkconfigurationUrl(val:any, path:string =null):string[]{
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
        
          err = Entity_service.check(target, isCompleteObj , path) ;
          
              

              
              if( isCompleteObj && (target.infraBddUrl == null || target.infraBddUrl == undefined) ){
                err.push(path + ".infraBddUrl is required") ;
              }
              

              if(target.infraBddUrl != null && target.infraBddUrl != undefined ){
                
                
                res = Entity_service_webAppConf.checkinfraBddUrl(target.infraBddUrl , `${path}.infraBddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.ssoBddUrl == null || target.ssoBddUrl == undefined) ){
                err.push(path + ".ssoBddUrl is required") ;
              }
              

              if(target.ssoBddUrl != null && target.ssoBddUrl != undefined ){
                
                
                res = Entity_service_webAppConf.checkssoBddUrl(target.ssoBddUrl , `${path}.ssoBddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.ssoUrl != null && target.ssoUrl != undefined ){
                
                
                res = Entity_service_webAppConf.checkssoUrl(target.ssoUrl , `${path}.ssoUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.ssoIssuer != null && target.ssoIssuer != undefined ){
                
                
                res = Entity_service_webAppConf.checkssoIssuer(target.ssoIssuer , `${path}.ssoIssuer`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.configurationUrl != null && target.configurationUrl != undefined ){
                
                
                res = Entity_service_webAppConf.checkconfigurationUrl(target.configurationUrl , `${path}.configurationUrl`) ;
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
          
            case 'infraBddUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'ssoBddUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'ssoUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'ssoIssuer':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'configurationUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
         
          default:
            return Entity_service  .castQueryParam(key, value) ;
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
          
      
      case 'infraBddUrl':
       
             return null ;
       
        
       
      
      
      case 'ssoBddUrl':
       
             return null ;
       
        
       
      
      
      case 'ssoUrl':
       
             return null ;
       
        
       
      
      
      case 'ssoIssuer':
       
             return null ;
       
        
       
      
      
      case 'configurationUrl':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




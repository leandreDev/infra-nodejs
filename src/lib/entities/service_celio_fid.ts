import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;


import {Entity_service } from "./service"


/**
  service celio fid
*/
export class Entity_service_celio_fid extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_celio_fid' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["bddUrl"] != undefined){
          
           obj["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
        
        if(obj["accessTokenUrl"] != undefined){
          
           obj["accessTokenUrl"] = obj["accessTokenUrl"].toString() ;
           
        }
        
    
        
        if(obj["client_id"] != undefined){
          
           obj["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           obj["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["hybrisUrl"] != undefined){
          
           obj["hybrisUrl"] = obj["hybrisUrl"].toString() ;
           
        }
        
    
        
        if(obj["baseSiteId"] != undefined){
          
           obj["baseSiteId"] = obj["baseSiteId"].toString() ;
           
        }
        
    
        
        if(obj["secretToken"] != undefined){
          
           obj["secretToken"] = obj["secretToken"].toString() ;
           
        }
        
    
        
        if(obj["serverUrl"] != undefined){
          
           obj["serverUrl"] = obj["serverUrl"].toString() ;
           
        }
        
    
        
        if(obj["caPath"] != undefined){
          
           obj["caPath"] = obj["caPath"].toString() ;
           
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


       
 

public static checkaccessTokenUrl(val:any, path:string =null):string[]{
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


       
 

public static checkclient_id(val:any, path:string =null):string[]{
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


       
 

public static checkclient_secret(val:any, path:string =null):string[]{
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


       
 

public static checkhybrisUrl(val:any, path:string =null):string[]{
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


       
 

public static checkbaseSiteId(val:any, path:string =null):string[]{
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


       
 

public static checksecretToken(val:any, path:string =null):string[]{
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


       
 

public static checkserverUrl(val:any, path:string =null):string[]{
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


       
 

public static checkcaPath(val:any, path:string =null):string[]{
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
          
              

              

              if(target.bddUrl != null && target.bddUrl != undefined ){
                
                
                res = Entity_service_celio_fid.checkbddUrl(target.bddUrl , `${path}.bddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.accessTokenUrl == null || target.accessTokenUrl == undefined) ){
                err.push(path + ".accessTokenUrl is required") ;
              }
              

              if(target.accessTokenUrl != null && target.accessTokenUrl != undefined ){
                
                
                res = Entity_service_celio_fid.checkaccessTokenUrl(target.accessTokenUrl , `${path}.accessTokenUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.client_id == null || target.client_id == undefined) ){
                err.push(path + ".client_id is required") ;
              }
              

              if(target.client_id != null && target.client_id != undefined ){
                
                
                res = Entity_service_celio_fid.checkclient_id(target.client_id , `${path}.client_id`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.client_secret != null && target.client_secret != undefined ){
                
                
                res = Entity_service_celio_fid.checkclient_secret(target.client_secret , `${path}.client_secret`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.hybrisUrl == null || target.hybrisUrl == undefined) ){
                err.push(path + ".hybrisUrl is required") ;
              }
              

              if(target.hybrisUrl != null && target.hybrisUrl != undefined ){
                
                
                res = Entity_service_celio_fid.checkhybrisUrl(target.hybrisUrl , `${path}.hybrisUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.baseSiteId != null && target.baseSiteId != undefined ){
                
                
                res = Entity_service_celio_fid.checkbaseSiteId(target.baseSiteId , `${path}.baseSiteId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.secretToken != null && target.secretToken != undefined ){
                
                
                res = Entity_service_celio_fid.checksecretToken(target.secretToken , `${path}.secretToken`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.serverUrl != null && target.serverUrl != undefined ){
                
                
                res = Entity_service_celio_fid.checkserverUrl(target.serverUrl , `${path}.serverUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.caPath != null && target.caPath != undefined ){
                
                
                res = Entity_service_celio_fid.checkcaPath(target.caPath , `${path}.caPath`) ;
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
          
            case 'bddUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'accessTokenUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'client_id':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'client_secret':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'hybrisUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'baseSiteId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'secretToken':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'serverUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'caPath':
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
          
      
      case 'bddUrl':
       
             return null ;
       
        
       
      
      
      case 'accessTokenUrl':
       
             return null ;
       
        
       
      
      
      case 'client_id':
       
             return null ;
       
        
       
      
      
      case 'client_secret':
       
             return null ;
       
        
       
      
      
      case 'hybrisUrl':
       
             return null ;
       
        
       
      
      
      case 'baseSiteId':
       
             return null ;
       
        
       
      
      
      case 'secretToken':
       
             return null ;
       
        
       
      
      
      case 'serverUrl':
       
             return null ;
       
        
       
      
      
      case 'caPath':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



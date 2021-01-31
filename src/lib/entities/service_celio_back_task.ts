import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_service } from "./service"


/**
  service celio back_task
*/
export class Entity_service_celio_back_task extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_celio_back_task' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["fidBddUrl"] != undefined){
          
           obj["fidBddUrl"] = obj["fidBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["qcmBddUrl"] != undefined){
          
           obj["qcmBddUrl"] = obj["qcmBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["serviceFidUrl"] != undefined){
          
           obj["serviceFidUrl"] = obj["serviceFidUrl"].toString() ;
           
        }
        
    
        
        if(obj["siteId"] != undefined){
          
           obj["siteId"] = obj["siteId"].toString() ;
           
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
        
    
        
        if(obj["hybrisUrl"] != undefined){
          
           obj["hybrisUrl"] = obj["hybrisUrl"].toString() ;
           
        }
        
    
        
        if(obj["client_id"] != undefined){
          
           obj["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           obj["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["accessTokenUrl"] != undefined){
          
           obj["accessTokenUrl"] = obj["accessTokenUrl"].toString() ;
           
        }
        
    
        
        if(obj["marketingCloudApisConf"] != undefined){
          
           
              Index.Entity_MarketingCloudApisConf.cast(obj["marketingCloudApisConf"]) ;
              //5f58e011edf1f9ab75870cbf
            
          
        }
        
    
  }


 

public static checkfidBddUrl(val:any, path:string =null):string[]{
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


       
 

public static checkqcmBddUrl(val:any, path:string =null):string[]{
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


       
 

public static checkserviceFidUrl(val:any, path:string =null):string[]{
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


       
 

public static checksiteId(val:any, path:string =null):string[]{
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


       
 

public static checkmarketingCloudApisConf(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_MarketingCloudApisConf.check(val , false , path  ) ;
            //5f58e011edf1f9ab75870cbf

          }
          res = [...res , ...result] ;
        
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
          
              

              
              if( isCompleteObj && (target.fidBddUrl == null || target.fidBddUrl == undefined) ){
                err.push(path + ".fidBddUrl is required") ;
              }
              

              if(target.fidBddUrl != null && target.fidBddUrl != undefined ){
                
                
                res = Entity_service_celio_back_task.checkfidBddUrl(target.fidBddUrl , `${path}.fidBddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.qcmBddUrl == null || target.qcmBddUrl == undefined) ){
                err.push(path + ".qcmBddUrl is required") ;
              }
              

              if(target.qcmBddUrl != null && target.qcmBddUrl != undefined ){
                
                
                res = Entity_service_celio_back_task.checkqcmBddUrl(target.qcmBddUrl , `${path}.qcmBddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.serviceFidUrl == null || target.serviceFidUrl == undefined) ){
                err.push(path + ".serviceFidUrl is required") ;
              }
              

              if(target.serviceFidUrl != null && target.serviceFidUrl != undefined ){
                
                
                res = Entity_service_celio_back_task.checkserviceFidUrl(target.serviceFidUrl , `${path}.serviceFidUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.siteId != null && target.siteId != undefined ){
                
                
                res = Entity_service_celio_back_task.checksiteId(target.siteId , `${path}.siteId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.secretToken != null && target.secretToken != undefined ){
                
                
                res = Entity_service_celio_back_task.checksecretToken(target.secretToken , `${path}.secretToken`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.serverUrl != null && target.serverUrl != undefined ){
                
                
                res = Entity_service_celio_back_task.checkserverUrl(target.serverUrl , `${path}.serverUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.caPath != null && target.caPath != undefined ){
                
                
                res = Entity_service_celio_back_task.checkcaPath(target.caPath , `${path}.caPath`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.hybrisUrl == null || target.hybrisUrl == undefined) ){
                err.push(path + ".hybrisUrl is required") ;
              }
              

              if(target.hybrisUrl != null && target.hybrisUrl != undefined ){
                
                
                res = Entity_service_celio_back_task.checkhybrisUrl(target.hybrisUrl , `${path}.hybrisUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.client_id == null || target.client_id == undefined) ){
                err.push(path + ".client_id is required") ;
              }
              

              if(target.client_id != null && target.client_id != undefined ){
                
                
                res = Entity_service_celio_back_task.checkclient_id(target.client_id , `${path}.client_id`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.client_secret == null || target.client_secret == undefined) ){
                err.push(path + ".client_secret is required") ;
              }
              

              if(target.client_secret != null && target.client_secret != undefined ){
                
                
                res = Entity_service_celio_back_task.checkclient_secret(target.client_secret , `${path}.client_secret`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.accessTokenUrl == null || target.accessTokenUrl == undefined) ){
                err.push(path + ".accessTokenUrl is required") ;
              }
              

              if(target.accessTokenUrl != null && target.accessTokenUrl != undefined ){
                
                
                res = Entity_service_celio_back_task.checkaccessTokenUrl(target.accessTokenUrl , `${path}.accessTokenUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.marketingCloudApisConf != null && target.marketingCloudApisConf != undefined ){
                
                
                res = Entity_service_celio_back_task.checkmarketingCloudApisConf(target.marketingCloudApisConf , `${path}.marketingCloudApisConf`) ;
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
          
            case 'fidBddUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'qcmBddUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'serviceFidUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'siteId':
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
          
            case 'hybrisUrl':
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
          
            case 'accessTokenUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'marketingCloudApisConf':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_MarketingCloudApisConf.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
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
          
      
      case 'fidBddUrl':
       
             return null ;
       
        
       
      
      
      case 'qcmBddUrl':
       
             return null ;
       
        
       
      
      
      case 'serviceFidUrl':
       
             return null ;
       
        
       
      
      
      case 'siteId':
       
             return null ;
       
        
       
      
      
      case 'secretToken':
       
             return null ;
       
        
       
      
      
      case 'serverUrl':
       
             return null ;
       
        
       
      
      
      case 'caPath':
       
             return null ;
       
        
       
      
      
      case 'hybrisUrl':
       
             return null ;
       
        
       
      
      
      case 'client_id':
       
             return null ;
       
        
       
      
      
      case 'client_secret':
       
             return null ;
       
        
       
      
      
      case 'accessTokenUrl':
       
             return null ;
       
        
       
      
      
      case 'marketingCloudApisConf':
       
        
              
             return Index.Entity_MarketingCloudApisConf.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




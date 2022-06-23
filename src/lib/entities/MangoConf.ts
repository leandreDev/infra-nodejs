import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;



/**
  Données de configuration
*/
export class Entity_MangoConf extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'MangoConf' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["clientId"] != undefined){
          
           obj["clientId"] = obj["clientId"].toString() ;
           
        }
        
    
        
        if(obj["version"] != undefined){
          
           obj["version"] = obj["version"].toString() ;
           
        }
        
    
        
        if(obj["apiKey"] != undefined){
          
           obj["apiKey"] = obj["apiKey"].toString() ;
           
        }
        
    
        
        if(obj["serverUrl"] != undefined){
          
           obj["serverUrl"] = obj["serverUrl"].toString() ;
           
        }
        
    
        
        if(obj["paymentRedirectUrl"] != undefined){
          
           obj["paymentRedirectUrl"] = obj["paymentRedirectUrl"].toString() ;
           
        }
        
    
        
        if(obj["clientUserId"] != undefined){
          
           obj["clientUserId"] = obj["clientUserId"].toString() ;
           
        }
        
    
        
        if(obj["qbpUserIdInMangoPay"] != undefined){
          
           obj["qbpUserIdInMangoPay"] = obj["qbpUserIdInMangoPay"].toString() ;
           
        }
        
    
        
        if(obj["qbpWalletIdInMangoPay"] != undefined){
          
           obj["qbpWalletIdInMangoPay"] = obj["qbpWalletIdInMangoPay"].toString() ;
           
        }
        
    
  }


 

public static checkclientId(val:any, path:string =null):string[]{
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


       
 

public static checkversion(val:any, path:string =null):string[]{
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


       
 

public static checkapiKey(val:any, path:string =null):string[]{
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


       
 

public static checkpaymentRedirectUrl(val:any, path:string =null):string[]{
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


       
 

public static checkclientUserId(val:any, path:string =null):string[]{
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


       
 

public static checkqbpUserIdInMangoPay(val:any, path:string =null):string[]{
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


       
 

public static checkqbpWalletIdInMangoPay(val:any, path:string =null):string[]{
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
        
          
          
              

              
              if( isCompleteObj && (target.clientId == null || target.clientId == undefined) ){
                err.push(path + ".clientId is required") ;
              }
              

              if(target.clientId != null && target.clientId != undefined ){
                
                
                res = Entity_MangoConf.checkclientId(target.clientId , `${path}.clientId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.version == null || target.version == undefined) ){
                err.push(path + ".version is required") ;
              }
              

              if(target.version != null && target.version != undefined ){
                
                
                res = Entity_MangoConf.checkversion(target.version , `${path}.version`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.apiKey == null || target.apiKey == undefined) ){
                err.push(path + ".apiKey is required") ;
              }
              

              if(target.apiKey != null && target.apiKey != undefined ){
                
                
                res = Entity_MangoConf.checkapiKey(target.apiKey , `${path}.apiKey`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.serverUrl == null || target.serverUrl == undefined) ){
                err.push(path + ".serverUrl is required") ;
              }
              

              if(target.serverUrl != null && target.serverUrl != undefined ){
                
                
                res = Entity_MangoConf.checkserverUrl(target.serverUrl , `${path}.serverUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.paymentRedirectUrl != null && target.paymentRedirectUrl != undefined ){
                
                
                res = Entity_MangoConf.checkpaymentRedirectUrl(target.paymentRedirectUrl , `${path}.paymentRedirectUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.clientUserId != null && target.clientUserId != undefined ){
                
                
                res = Entity_MangoConf.checkclientUserId(target.clientUserId , `${path}.clientUserId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.qbpUserIdInMangoPay == null || target.qbpUserIdInMangoPay == undefined) ){
                err.push(path + ".qbpUserIdInMangoPay is required") ;
              }
              

              if(target.qbpUserIdInMangoPay != null && target.qbpUserIdInMangoPay != undefined ){
                
                
                res = Entity_MangoConf.checkqbpUserIdInMangoPay(target.qbpUserIdInMangoPay , `${path}.qbpUserIdInMangoPay`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.qbpWalletIdInMangoPay == null || target.qbpWalletIdInMangoPay == undefined) ){
                err.push(path + ".qbpWalletIdInMangoPay is required") ;
              }
              

              if(target.qbpWalletIdInMangoPay != null && target.qbpWalletIdInMangoPay != undefined ){
                
                
                res = Entity_MangoConf.checkqbpWalletIdInMangoPay(target.qbpWalletIdInMangoPay , `${path}.qbpWalletIdInMangoPay`) ;
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
          
            case 'clientId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'version':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'apiKey':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'serverUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'paymentRedirectUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'clientUserId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'qbpUserIdInMangoPay':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'qbpWalletIdInMangoPay':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
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
          
      
      case 'clientId':
       
             return null ;
       
        
       
      
      
      case 'version':
       
             return null ;
       
        
       
      
      
      case 'apiKey':
       
             return null ;
       
        
       
      
      
      case 'serverUrl':
       
             return null ;
       
        
       
      
      
      case 'paymentRedirectUrl':
       
             return null ;
       
        
       
      
      
      case 'clientUserId':
       
             return null ;
       
        
       
      
      
      case 'qbpUserIdInMangoPay':
       
             return null ;
       
        
       
      
      
      case 'qbpWalletIdInMangoPay':
       
             return null ;
       
        
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }




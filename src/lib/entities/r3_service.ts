import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;


import {Entity_service } from "./service"


/**
  service métier de QBP
*/
export class Entity_r3_service extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'r3_service' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["bddUrl"] != undefined){
          
           obj["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoBddUrl"] != undefined){
          
           obj["ssoBddUrl"] = obj["ssoBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["infraBddUrl"] != undefined){
          
           obj["infraBddUrl"] = obj["infraBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoApiUrl"] != undefined){
          
           obj["ssoApiUrl"] = obj["ssoApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["licenceApiUrl"] != undefined){
          
           obj["licenceApiUrl"] = obj["licenceApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["client_id"] != undefined){
          
           obj["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           obj["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["SendGridConf"] != undefined){
          
           
              Index.Entity_R3Mailer.cast(obj["SendGridConf"]) ;
              //617917c0a1e6a5fbdbe10b0c
            
          
        }
        
    
        
        if(obj["pdfRipUrl"] != undefined){
          
           obj["pdfRipUrl"] = obj["pdfRipUrl"].toString() ;
           
        }
        
    
        
        if(obj["pdfAppUrl"] != undefined){
          
           obj["pdfAppUrl"] = obj["pdfAppUrl"].toString() ;
           
        }
        
    
        
        if(obj["fsoUrl"] != undefined){
          
           obj["fsoUrl"] = obj["fsoUrl"].toString() ;
           
        }
        
    
        
        if(obj["parntaireConfig"] != undefined){
          
           
              Index.Entity_ParnerDeployConf.cast(obj["parntaireConfig"]) ;
              //62b41c98f1e11a1957bf37c6
            
          
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


       
 

public static checkssoApiUrl(val:any, path:string =null):string[]{
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


       
 

public static checklicenceApiUrl(val:any, path:string =null):string[]{
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


       
 

public static checkSendGridConf(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_R3Mailer.check(val , false , path  ) ;
            //617917c0a1e6a5fbdbe10b0c

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkpdfRipUrl(val:any, path:string =null):string[]{
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


       
 

public static checkpdfAppUrl(val:any, path:string =null):string[]{
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


       
 

public static checkparntaireConfig(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_ParnerDeployConf.check(val , false , path  ) ;
            //62b41c98f1e11a1957bf37c6

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
          
              

              

              if(target.bddUrl != null && target.bddUrl != undefined ){
                
                
                res = Entity_r3_service.checkbddUrl(target.bddUrl , `${path}.bddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.ssoBddUrl != null && target.ssoBddUrl != undefined ){
                
                
                res = Entity_r3_service.checkssoBddUrl(target.ssoBddUrl , `${path}.ssoBddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.infraBddUrl != null && target.infraBddUrl != undefined ){
                
                
                res = Entity_r3_service.checkinfraBddUrl(target.infraBddUrl , `${path}.infraBddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.ssoApiUrl != null && target.ssoApiUrl != undefined ){
                
                
                res = Entity_r3_service.checkssoApiUrl(target.ssoApiUrl , `${path}.ssoApiUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.licenceApiUrl != null && target.licenceApiUrl != undefined ){
                
                
                res = Entity_r3_service.checklicenceApiUrl(target.licenceApiUrl , `${path}.licenceApiUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.client_id != null && target.client_id != undefined ){
                
                
                res = Entity_r3_service.checkclient_id(target.client_id , `${path}.client_id`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.client_secret != null && target.client_secret != undefined ){
                
                
                res = Entity_r3_service.checkclient_secret(target.client_secret , `${path}.client_secret`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.SendGridConf != null && target.SendGridConf != undefined ){
                
                
                res = Entity_r3_service.checkSendGridConf(target.SendGridConf , `${path}.SendGridConf`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.pdfRipUrl == null || target.pdfRipUrl == undefined) ){
                err.push(path + ".pdfRipUrl is required") ;
              }
              

              if(target.pdfRipUrl != null && target.pdfRipUrl != undefined ){
                
                
                res = Entity_r3_service.checkpdfRipUrl(target.pdfRipUrl , `${path}.pdfRipUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.pdfAppUrl == null || target.pdfAppUrl == undefined) ){
                err.push(path + ".pdfAppUrl is required") ;
              }
              

              if(target.pdfAppUrl != null && target.pdfAppUrl != undefined ){
                
                
                res = Entity_r3_service.checkpdfAppUrl(target.pdfAppUrl , `${path}.pdfAppUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.fsoUrl == null || target.fsoUrl == undefined) ){
                err.push(path + ".fsoUrl is required") ;
              }
              

              if(target.fsoUrl != null && target.fsoUrl != undefined ){
                
                
                res = Entity_r3_service.checkfsoUrl(target.fsoUrl , `${path}.fsoUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.parntaireConfig != null && target.parntaireConfig != undefined ){
                
                
                res = Entity_r3_service.checkparntaireConfig(target.parntaireConfig , `${path}.parntaireConfig`) ;
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
          
            case 'ssoBddUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'infraBddUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'ssoApiUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'licenceApiUrl':
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
          
            case 'SendGridConf':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_R3Mailer.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'pdfRipUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'pdfAppUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'fsoUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'parntaireConfig':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_ParnerDeployConf.castQueryParam(subPath ,value) ;
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
          
      
      case 'bddUrl':
       
             return null ;
       
        
       
      
      
      case 'ssoBddUrl':
       
             return null ;
       
        
       
      
      
      case 'infraBddUrl':
       
             return null ;
       
        
       
      
      
      case 'ssoApiUrl':
       
             return null ;
       
        
       
      
      
      case 'licenceApiUrl':
       
             return null ;
       
        
       
      
      
      case 'client_id':
       
             return null ;
       
        
       
      
      
      case 'client_secret':
       
             return null ;
       
        
       
      
      
      case 'SendGridConf':
       
        
              
             return Index.Entity_R3Mailer.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'pdfRipUrl':
       
             return null ;
       
        
       
      
      
      case 'pdfAppUrl':
       
             return null ;
       
        
       
      
      
      case 'fsoUrl':
       
             return null ;
       
        
       
      
      
      case 'parntaireConfig':
       
        
              
             return Index.Entity_ParnerDeployConf.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;


import {Entity_application_configuration } from "./application_configuration"


/**
  config de l'app minds up
*/
export class Entity_AppConf_minds_up extends   Entity_application_configuration    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'AppConf_minds_up' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_application_configuration.cast(obj , true)
    
    
        
        if(obj["introTitle"] != undefined){
          
           obj["introTitle"] = obj["introTitle"].toString() ;
           
        }
        
    
        
        if(obj["introText"] != undefined){
          
           obj["introText"] = obj["introText"].toString() ;
           
        }
        
    
        
        if(obj["videoUrl"] != undefined){
          
           obj["videoUrl"] = obj["videoUrl"].toString() ;
           
        }
        
    
        
        if(obj["rgpd"] != undefined){
          
           obj["rgpd"] = obj["rgpd"].toString() ;
           
        }
        
    
        
        if(obj["serviceMindsUpUrl"] != undefined){
          
           obj["serviceMindsUpUrl"] = obj["serviceMindsUpUrl"].toString() ;
           
        }
        
    
        
        if(obj["managerObservable"] != undefined){
          
           obj["managerObservable"] = new Boolean(obj["managerObservable"]).valueOf() ;
          
        }
        
    
        
        if(obj["managerAutoExchange"] != undefined){
          
           obj["managerAutoExchange"] = new Boolean(obj["managerAutoExchange"]).valueOf() ;
          
        }
        
    
        
        if(obj["apiUrl"] != undefined){
          
           obj["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
        
        if(obj["module360"] != undefined){
          
           obj["module360"] = new Boolean(obj["module360"]).valueOf() ;
          
        }
        
    
        
        if(obj["moduleRepo"] != undefined){
          
           obj["moduleRepo"] = new Boolean(obj["moduleRepo"]).valueOf() ;
          
        }
        
    
        
        if(obj["moduleProgress"] != undefined){
          
           obj["moduleProgress"] = new Boolean(obj["moduleProgress"]).valueOf() ;
          
        }
        
    
        
        if(obj["lang"] != undefined && obj["lang"] != null && _.isArray(obj["lang"])){
          

            obj["lang"].forEach((value)=>{
              
                Index.Entity_name_value.cast(value) ;
                
              
            })
          
        }
        
    
        
        if(obj["collaborateurAnonyme"] != undefined){
          
           obj["collaborateurAnonyme"] = new Boolean(obj["collaborateurAnonyme"]).valueOf() ;
          
        }
        
    
        
        if(obj["emailValidator"] != undefined){
          
           obj["emailValidator"] = obj["emailValidator"].toString() ;
           
        }
        
    
        
        if(obj["emailValidatorErrorMessage"] != undefined){
          
           obj["emailValidatorErrorMessage"] = obj["emailValidatorErrorMessage"].toString() ;
           
        }
        
    
  }


 

public static checkintroTitle(val:any, path:string =null):string[]{
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


       
 

public static checkintroText(val:any, path:string =null):string[]{
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


       
 

public static checkvideoUrl(val:any, path:string =null):string[]{
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


       
 

public static checkrgpd(val:any, path:string =null):string[]{
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


       
 

public static checkserviceMindsUpUrl(val:any, path:string =null):string[]{
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


       
 

public static checkmanagerObservable(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkmanagerAutoExchange(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkapiUrl(val:any, path:string =null):string[]{
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


       
 

public static checkmodule360(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkmoduleRepo(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkmoduleProgress(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checklang(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_name_value.check(val , false , path  ) ;
            //59c62581c3c9d3a0f9e88616

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkcollaborateurAnonyme(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkemailValidator(val:any, path:string =null):string[]{
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


       
 

public static checkemailValidatorErrorMessage(val:any, path:string =null):string[]{
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
          
              

              

              if(target.introTitle != null && target.introTitle != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkintroTitle(target.introTitle , `${path}.introTitle`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.introText != null && target.introText != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkintroText(target.introText , `${path}.introText`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.videoUrl != null && target.videoUrl != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkvideoUrl(target.videoUrl , `${path}.videoUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.rgpd != null && target.rgpd != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkrgpd(target.rgpd , `${path}.rgpd`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.serviceMindsUpUrl == null || target.serviceMindsUpUrl == undefined) ){
                err.push(path + ".serviceMindsUpUrl is required") ;
              }
              

              if(target.serviceMindsUpUrl != null && target.serviceMindsUpUrl != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkserviceMindsUpUrl(target.serviceMindsUpUrl , `${path}.serviceMindsUpUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.managerObservable != null && target.managerObservable != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkmanagerObservable(target.managerObservable , `${path}.managerObservable`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.managerAutoExchange != null && target.managerAutoExchange != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkmanagerAutoExchange(target.managerAutoExchange , `${path}.managerAutoExchange`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.apiUrl == null || target.apiUrl == undefined) ){
                err.push(path + ".apiUrl is required") ;
              }
              

              if(target.apiUrl != null && target.apiUrl != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkapiUrl(target.apiUrl , `${path}.apiUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.module360 != null && target.module360 != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkmodule360(target.module360 , `${path}.module360`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.moduleRepo != null && target.moduleRepo != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkmoduleRepo(target.moduleRepo , `${path}.moduleRepo`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.moduleProgress != null && target.moduleProgress != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkmoduleProgress(target.moduleProgress , `${path}.moduleProgress`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.lang != null && target.lang != undefined ){
                
                
                target.lang.forEach((data, index)=>{
                  res = Entity_AppConf_minds_up.checklang(target.lang[index] , `${path}.lang.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.collaborateurAnonyme != null && target.collaborateurAnonyme != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkcollaborateurAnonyme(target.collaborateurAnonyme , `${path}.collaborateurAnonyme`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.emailValidator != null && target.emailValidator != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkemailValidator(target.emailValidator , `${path}.emailValidator`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.emailValidatorErrorMessage != null && target.emailValidatorErrorMessage != undefined ){
                
                
                res = Entity_AppConf_minds_up.checkemailValidatorErrorMessage(target.emailValidatorErrorMessage , `${path}.emailValidatorErrorMessage`) ;
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
          
            case 'introTitle':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'introText':
              //texte
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'videoUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'rgpd':
              //texte
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'serviceMindsUpUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'managerObservable':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'managerAutoExchange':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'apiUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'module360':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'moduleRepo':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'moduleProgress':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'lang':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_name_value.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'collaborateurAnonyme':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'emailValidator':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'emailValidatorErrorMessage':
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
          
      
      case 'introTitle':
       
             return null ;
       
        
       
      
      
      case 'introText':
       
             return null ;
       
        
       
      
      
      case 'videoUrl':
       
             return null ;
       
        
       
      
      
      case 'rgpd':
       
             return null ;
       
        
       
      
      
      case 'serviceMindsUpUrl':
       
             return null ;
       
        
       
      
      
      case 'managerObservable':
       
             return null ;
       
        
       
      
      
      case 'managerAutoExchange':
       
             return null ;
       
        
       
      
      
      case 'apiUrl':
       
             return null ;
       
        
       
      
      
      case 'module360':
       
             return null ;
       
        
       
      
      
      case 'moduleRepo':
       
             return null ;
       
        
       
      
      
      case 'moduleProgress':
       
             return null ;
       
        
       
      
      
      case 'lang':
       
        
              
             return Index.Entity_name_value.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'collaborateurAnonyme':
       
             return null ;
       
        
       
      
      
      case 'emailValidator':
       
             return null ;
       
        
       
      
      
      case 'emailValidatorErrorMessage':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_application_configuration  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




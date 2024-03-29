import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;


import {Entity_service } from "./service"


/**
  c'est un service en charge de valider les licences et retourner les configurations des applications web
*/
export class Entity_service_licence_token extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_licence_token' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["licenceUrl"] != undefined){
          
           obj["licenceUrl"] = obj["licenceUrl"].toString() ;
           
        }
        
    
        
        if(obj["application_instanceUrl"] != undefined){
          
           obj["application_instanceUrl"] = obj["application_instanceUrl"].toString() ;
           
        }
        
    
        
        if(obj["tockenDuration"] != undefined){
          
           obj["tockenDuration"] = new Number(obj["tockenDuration"]).valueOf();
          
        }
        
    
        
        if(obj["sso_well-known"] != undefined){
          
           obj["sso_well-known"] = obj["sso_well-known"].toString() ;
           
        }
        
    
        
        if(obj["certificates"] != undefined && obj["certificates"] != null && _.isArray(obj["certificates"])){
          
          obj["certificates"] = obj["certificates"].map((value)=>{
            if(_.isString(value)){
              return new mongo.ObjectId(value)  ;
            }else if(value._id){
              return new mongo.ObjectId(value._id)   ;
            }else if(value._bsontype && value._bsontype === 'ObjectID'){
                return value ;
            }
          })
          
        }
        
    
        
        if(obj["end_clientUrl"] != undefined){
          
           obj["end_clientUrl"] = obj["end_clientUrl"].toString() ;
           
        }
        
    
        
        if(obj["url_bdd"] != undefined){
          
           obj["url_bdd"] = obj["url_bdd"].toString() ;
           
        }
        
    
  }


 

public static checklicenceUrl(val:any, path:string =null):string[]{
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


       
 

public static checkapplication_instanceUrl(val:any, path:string =null):string[]{
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


       
 

public static checktockenDuration(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         
          if( ! _.isNumber(val)){
            res.push(`${path} is not a number`) ; 
          }
        
         
        

        

        

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 


       
 

public static checkcertificates(val:any, path:string =null):string[]{
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


       
 

public static checkend_clientUrl(val:any, path:string =null):string[]{
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


       
 

public static checkurl_bdd(val:any, path:string =null):string[]{
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
          
              

              

              if(target.licenceUrl != null && target.licenceUrl != undefined ){
                
                
                res = Entity_service_licence_token.checklicenceUrl(target.licenceUrl , `${path}.licenceUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.application_instanceUrl != null && target.application_instanceUrl != undefined ){
                
                
                res = Entity_service_licence_token.checkapplication_instanceUrl(target.application_instanceUrl , `${path}.application_instanceUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.tockenDuration != null && target.tockenDuration != undefined ){
                
                
                res = Entity_service_licence_token.checktockenDuration(target.tockenDuration , `${path}.tockenDuration`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              
              
           
              

              

              if(target.certificates != null && target.certificates != undefined ){
                
                
                target.certificates.forEach((data, index)=>{
                  res = Entity_service_licence_token.checkcertificates(target.certificates[index] , `${path}.certificates.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.end_clientUrl != null && target.end_clientUrl != undefined ){
                
                
                res = Entity_service_licence_token.checkend_clientUrl(target.end_clientUrl , `${path}.end_clientUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.url_bdd != null && target.url_bdd != undefined ){
                
                
                res = Entity_service_licence_token.checkurl_bdd(target.url_bdd , `${path}.url_bdd`) ;
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
          
            case 'licenceUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'application_instanceUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'tockenDuration':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'sso_well-known':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'certificates':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'end_clientUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'url_bdd':
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
          
      
      case 'licenceUrl':
       
             return null ;
       
        
       
      
      
      case 'application_instanceUrl':
       
             return null ;
       
        
       
      
      
      case 'tockenDuration':
       
             return null ;
       
        
       
      
      
      case 'sso_well-known':
       
             return null ;
       
        
       
      
      
      case 'certificates':
       
        
       
              return 'certificat' ;
              
      
      
      case 'end_clientUrl':
       
             return null ;
       
        
       
      
      
      case 'url_bdd':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




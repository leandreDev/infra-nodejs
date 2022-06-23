import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;



/**
  configuration du déploiement de partenaire
*/
export class Entity_ParnerDeployConf extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'ParnerDeployConf' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["adminUrl"] != undefined){
          
           obj["adminUrl"] = obj["adminUrl"].toString() ;
           
        }
        
    
        
        if(obj["landingPageUrl"] != undefined){
          
           obj["landingPageUrl"] = obj["landingPageUrl"].toString() ;
           
        }
        
    
        
        if(obj["appClientTemplateId"] != undefined){
          
          if(_.isString(obj["appClientTemplateId"])){
            obj["appClientTemplateId"] = new mongo.ObjectId(obj["appClientTemplateId"]);
          }else if(obj["appClientTemplateId"]._id){
            obj["appClientTemplateId"] = new mongo.ObjectId(obj["appClientTemplateId"]._id) ;
          }
          
        }
        
    
        
        if(obj["appAdminTemplateId"] != undefined){
          
          if(_.isString(obj["appAdminTemplateId"])){
            obj["appAdminTemplateId"] = new mongo.ObjectId(obj["appAdminTemplateId"]);
          }else if(obj["appAdminTemplateId"]._id){
            obj["appAdminTemplateId"] = new mongo.ObjectId(obj["appAdminTemplateId"]._id) ;
          }
          
        }
        
    
        
        if(obj["endClientTemplateId"] != undefined){
          
          if(_.isString(obj["endClientTemplateId"])){
            obj["endClientTemplateId"] = new mongo.ObjectId(obj["endClientTemplateId"]);
          }else if(obj["endClientTemplateId"]._id){
            obj["endClientTemplateId"] = new mongo.ObjectId(obj["endClientTemplateId"]._id) ;
          }
          
        }
        
    
        
        if(obj["oidcTemplateId"] != undefined){
          
          if(_.isString(obj["oidcTemplateId"])){
            obj["oidcTemplateId"] = new mongo.ObjectId(obj["oidcTemplateId"]);
          }else if(obj["oidcTemplateId"]._id){
            obj["oidcTemplateId"] = new mongo.ObjectId(obj["oidcTemplateId"]._id) ;
          }
          
        }
        
    
  }


 

public static checkadminUrl(val:any, path:string =null):string[]{
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


       
 

public static checklandingPageUrl(val:any, path:string =null):string[]{
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


       
 

public static checkappClientTemplateId(val:any, path:string =null):string[]{
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


       
 

public static checkappAdminTemplateId(val:any, path:string =null):string[]{
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


       
 

public static checkendClientTemplateId(val:any, path:string =null):string[]{
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


       
 

public static checkoidcTemplateId(val:any, path:string =null):string[]{
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


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          
          
              

              

              if(target.adminUrl != null && target.adminUrl != undefined ){
                
                
                res = Entity_ParnerDeployConf.checkadminUrl(target.adminUrl , `${path}.adminUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.landingPageUrl != null && target.landingPageUrl != undefined ){
                
                
                res = Entity_ParnerDeployConf.checklandingPageUrl(target.landingPageUrl , `${path}.landingPageUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.appClientTemplateId != null && target.appClientTemplateId != undefined ){
                
                
                res = Entity_ParnerDeployConf.checkappClientTemplateId(target.appClientTemplateId , `${path}.appClientTemplateId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.appAdminTemplateId != null && target.appAdminTemplateId != undefined ){
                
                
                res = Entity_ParnerDeployConf.checkappAdminTemplateId(target.appAdminTemplateId , `${path}.appAdminTemplateId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.endClientTemplateId != null && target.endClientTemplateId != undefined ){
                
                
                res = Entity_ParnerDeployConf.checkendClientTemplateId(target.endClientTemplateId , `${path}.endClientTemplateId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.oidcTemplateId != null && target.oidcTemplateId != undefined ){
                
                
                res = Entity_ParnerDeployConf.checkoidcTemplateId(target.oidcTemplateId , `${path}.oidcTemplateId`) ;
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
          
            case 'adminUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'landingPageUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'appClientTemplateId':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'appAdminTemplateId':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'endClientTemplateId':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'oidcTemplateId':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
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
          
      
      case 'adminUrl':
       
             return null ;
       
        
       
      
      
      case 'landingPageUrl':
       
             return null ;
       
        
       
      
      
      case 'appClientTemplateId':
       
        
       
              return 'application_instance' ;
              
      
      
      case 'appAdminTemplateId':
       
        
       
              return 'application_instance' ;
              
      
      
      case 'endClientTemplateId':
       
        
       
              return 'end_client' ;
              
      
      
      case 'oidcTemplateId':
       
        
       
              return 'oidc_Client' ;
              
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }




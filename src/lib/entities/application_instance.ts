import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;



/**
  c'est le couple application configuration 
*/
export class Entity_application_instance extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'application_instance' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["name"] != undefined){
          
           obj["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["application"] != undefined){
          
          if(_.isString(obj["application"])){
            obj["application"] = new mongo.ObjectId(obj["application"]);
          }else if(obj["application"]._id){
            obj["application"] = new mongo.ObjectId(obj["application"]._id) ;
          }
          
        }
        
    
        
        if(obj["configuration"] != undefined){
          
          if(_.isString(obj["configuration"])){
            obj["configuration"] = new mongo.ObjectId(obj["configuration"]);
          }else if(obj["configuration"]._id){
            obj["configuration"] = new mongo.ObjectId(obj["configuration"]._id) ;
          }
          
        }
        
    
        
        if(obj["end_client"] != undefined){
          
          if(_.isString(obj["end_client"])){
            obj["end_client"] = new mongo.ObjectId(obj["end_client"]);
          }else if(obj["end_client"]._id){
            obj["end_client"] = new mongo.ObjectId(obj["end_client"]._id) ;
          }
          
        }
        
    
        
        if(obj["oidc_client"] != undefined){
          
          if(_.isString(obj["oidc_client"])){
            obj["oidc_client"] = new mongo.ObjectId(obj["oidc_client"]);
          }else if(obj["oidc_client"]._id){
            obj["oidc_client"] = new mongo.ObjectId(obj["oidc_client"]._id) ;
          }
          
        }
        
    
        
        if(obj["css"] != undefined){
          
           obj["css"] = obj["css"].toString() ;
           
        }
        
    
        
        if(obj["public_data"] != undefined){
          
           obj["public_data"] = obj["public_data"] ;
          
        }
        
    
        
        if(obj["port"] != undefined){
          
           obj["port"] = new Number(obj["port"]).valueOf();
          
        }
        
    
  }


 

public static checkname(val:any, path:string =null):string[]{
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


       
 

public static checkapplication(val:any, path:string =null):string[]{
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


       
 

public static checkconfiguration(val:any, path:string =null):string[]{
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


       
 

public static checkend_client(val:any, path:string =null):string[]{
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


       
 

public static checkoidc_client(val:any, path:string =null):string[]{
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


       
 

public static checkcss(val:any, path:string =null):string[]{
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


       
 

public static checkpublic_data(val:any, path:string =null):string[]{
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


       
 

public static checkport(val:any, path:string =null):string[]{
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


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          
          
              

              

              if(target.name != null && target.name != undefined ){
                
                
                res = Entity_application_instance.checkname(target.name , `${path}.name`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.application != null && target.application != undefined ){
                
                
                res = Entity_application_instance.checkapplication(target.application , `${path}.application`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.configuration != null && target.configuration != undefined ){
                
                
                res = Entity_application_instance.checkconfiguration(target.configuration , `${path}.configuration`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.end_client == null || target.end_client == undefined) ){
                err.push(path + ".end_client is required") ;
              }
              

              if(target.end_client != null && target.end_client != undefined ){
                
                
                res = Entity_application_instance.checkend_client(target.end_client , `${path}.end_client`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.oidc_client == null || target.oidc_client == undefined) ){
                err.push(path + ".oidc_client is required") ;
              }
              

              if(target.oidc_client != null && target.oidc_client != undefined ){
                
                
                res = Entity_application_instance.checkoidc_client(target.oidc_client , `${path}.oidc_client`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.css != null && target.css != undefined ){
                
                
                res = Entity_application_instance.checkcss(target.css , `${path}.css`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.public_data != null && target.public_data != undefined ){
                
                
                res = Entity_application_instance.checkpublic_data(target.public_data , `${path}.public_data`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.port != null && target.port != undefined ){
                
                
                res = Entity_application_instance.checkport(target.port , `${path}.port`) ;
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
          
            case 'name':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'application':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'configuration':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'end_client':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'oidc_client':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'css':
              //texte
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'public_data':
              //object
              
              
              
              
              
              return value ;
              
              
              
            break;
          
            case 'port':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
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
          
      
      case 'name':
       
             return null ;
       
        
       
      
      
      case 'application':
       
        
       
              return 'application' ;
              
      
      
      case 'configuration':
       
        
       
              return 'application_configuration' ;
              
      
      
      case 'end_client':
       
        
       
              return 'end_client' ;
              
      
      
      case 'oidc_client':
       
        
       
              return 'oidc_Client' ;
              
      
      
      case 'css':
       
             return null ;
       
        
       
      
      
      case 'public_data':
       
             return null ;
       
        
       
      
      
      case 'port':
       
             return null ;
       
        
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }




import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_service } from "./service"


/**
  service_comptoireOr
*/
export class Entity_service_comptoireOr extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_comptoireOr' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["bddApiUrl"] != undefined){
          
           obj["bddApiUrl"] = obj["bddApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoApiUrl"] != undefined){
          
           obj["ssoApiUrl"] = obj["ssoApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["licenceApiUrl"] != undefined){
          
           obj["licenceApiUrl"] = obj["licenceApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["infraBddUrl"] != undefined){
          
           obj["infraBddUrl"] = obj["infraBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["adminConfId"] != undefined){
          
          if(_.isString(obj["adminConfId"])){
            obj["adminConfId"] = new mongo.ObjectId(obj["adminConfId"]);
          }else if(obj["adminConfId"]._id){
            obj["adminConfId"] = new mongo.ObjectId(obj["adminConfId"]._id) ;
          }
          
        }
        
    
        
        if(obj["end_client"] != undefined){
          
          if(_.isString(obj["end_client"])){
            obj["end_client"] = new mongo.ObjectId(obj["end_client"]);
          }else if(obj["end_client"]._id){
            obj["end_client"] = new mongo.ObjectId(obj["end_client"]._id) ;
          }
          
        }
        
    
        
        if(obj["adminLicenceStoreId"] != undefined){
          
           obj["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["adminAppId"] != undefined){
          
          if(_.isString(obj["adminAppId"])){
            obj["adminAppId"] = new mongo.ObjectId(obj["adminAppId"]);
          }else if(obj["adminAppId"]._id){
            obj["adminAppId"] = new mongo.ObjectId(obj["adminAppId"]._id) ;
          }
          
        }
        
    
        
        if(obj["sendgridApiUrl"] != undefined){
          
           obj["sendgridApiUrl"] = obj["sendgridApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["senderName"] != undefined){
          
           obj["senderName"] = obj["senderName"].toString() ;
           
        }
        
    
        
        if(obj["senderEmail"] != undefined){
          
           obj["senderEmail"] = obj["senderEmail"].toString() ;
           
        }
        
    
        
        if(obj["transactionEmailTemplate"] != undefined){
          
          if(_.isString(obj["transactionEmailTemplate"])){
            obj["transactionEmailTemplate"] = new mongo.ObjectId(obj["transactionEmailTemplate"]);
          }else if(obj["transactionEmailTemplate"]._id){
            obj["transactionEmailTemplate"] = new mongo.ObjectId(obj["transactionEmailTemplate"]._id) ;
          }
          
        }
        
    
  }


 

public static checkbddApiUrl(val:any, path:string =null):string[]{
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


       
 

public static checkadminConfId(val:any, path:string =null):string[]{
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


       
 

public static checkadminLicenceStoreId(val:any, path:string =null):string[]{
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


       
 

public static checkadminAppId(val:any, path:string =null):string[]{
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


       
 

public static checksendgridApiUrl(val:any, path:string =null):string[]{
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


       
 

public static checksenderName(val:any, path:string =null):string[]{
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


       
 

public static checksenderEmail(val:any, path:string =null):string[]{
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


       
 

public static checktransactionEmailTemplate(val:any, path:string =null):string[]{
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
        
          err = Entity_service.check(target, isCompleteObj , path) ;
          
              

              

              if(target.bddApiUrl != null && target.bddApiUrl != undefined ){
                
                
                res = Entity_service_comptoireOr.checkbddApiUrl(target.bddApiUrl , `${path}.bddApiUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.ssoApiUrl != null && target.ssoApiUrl != undefined ){
                
                
                res = Entity_service_comptoireOr.checkssoApiUrl(target.ssoApiUrl , `${path}.ssoApiUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.licenceApiUrl != null && target.licenceApiUrl != undefined ){
                
                
                res = Entity_service_comptoireOr.checklicenceApiUrl(target.licenceApiUrl , `${path}.licenceApiUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.infraBddUrl != null && target.infraBddUrl != undefined ){
                
                
                res = Entity_service_comptoireOr.checkinfraBddUrl(target.infraBddUrl , `${path}.infraBddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.adminConfId != null && target.adminConfId != undefined ){
                
                
                res = Entity_service_comptoireOr.checkadminConfId(target.adminConfId , `${path}.adminConfId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.end_client != null && target.end_client != undefined ){
                
                
                res = Entity_service_comptoireOr.checkend_client(target.end_client , `${path}.end_client`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.adminLicenceStoreId != null && target.adminLicenceStoreId != undefined ){
                
                
                res = Entity_service_comptoireOr.checkadminLicenceStoreId(target.adminLicenceStoreId , `${path}.adminLicenceStoreId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.adminAppId != null && target.adminAppId != undefined ){
                
                
                res = Entity_service_comptoireOr.checkadminAppId(target.adminAppId , `${path}.adminAppId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sendgridApiUrl != null && target.sendgridApiUrl != undefined ){
                
                
                res = Entity_service_comptoireOr.checksendgridApiUrl(target.sendgridApiUrl , `${path}.sendgridApiUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.senderName != null && target.senderName != undefined ){
                
                
                res = Entity_service_comptoireOr.checksenderName(target.senderName , `${path}.senderName`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.senderEmail != null && target.senderEmail != undefined ){
                
                
                res = Entity_service_comptoireOr.checksenderEmail(target.senderEmail , `${path}.senderEmail`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.transactionEmailTemplate != null && target.transactionEmailTemplate != undefined ){
                
                
                res = Entity_service_comptoireOr.checktransactionEmailTemplate(target.transactionEmailTemplate , `${path}.transactionEmailTemplate`) ;
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
          
            case 'bddApiUrl':
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
          
            case 'infraBddUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'adminConfId':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'end_client':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'adminLicenceStoreId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'adminAppId':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'sendgridApiUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'senderName':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'senderEmail':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'transactionEmailTemplate':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
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
          
      
      case 'bddApiUrl':
       
             return null ;
       
        
       
      
      
      case 'ssoApiUrl':
       
             return null ;
       
        
       
      
      
      case 'licenceApiUrl':
       
             return null ;
       
        
       
      
      
      case 'infraBddUrl':
       
             return null ;
       
        
       
      
      
      case 'adminConfId':
       
        
       
              return 'application_configuration_comptoire_or_admin' ;
              
      
      
      case 'end_client':
       
        
       
              return 'end_client' ;
              
      
      
      case 'adminLicenceStoreId':
       
             return null ;
       
        
       
      
      
      case 'adminAppId':
       
        
       
              return 'application_instance' ;
              
      
      
      case 'sendgridApiUrl':
       
             return null ;
       
        
       
      
      
      case 'senderName':
       
             return null ;
       
        
       
      
      
      case 'senderEmail':
       
             return null ;
       
        
       
      
      
      case 'transactionEmailTemplate':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




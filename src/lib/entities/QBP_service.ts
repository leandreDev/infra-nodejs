import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_service } from "./service"


/**
  service métier de QBP
*/
export class Entity_QBP_service extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'QBP_service' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["QbpBddUrl"] != undefined){
          
           obj["QbpBddUrl"] = obj["QbpBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoApiUrl"] != undefined){
          
           obj["ssoApiUrl"] = obj["ssoApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["licenceApiUrl"] != undefined){
          
           obj["licenceApiUrl"] = obj["licenceApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["sendgridApiUrl"] != undefined){
          
           obj["sendgridApiUrl"] = obj["sendgridApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["appId"] != undefined){
          
          if(_.isString(obj["appId"])){
            obj["appId"] = new mongo.ObjectId(obj["appId"]);
          }else if(obj["appId"]._id){
            obj["appId"] = new mongo.ObjectId(obj["appId"]._id) ;
          }
          
        }
        
    
        
        if(obj["end_client"] != undefined){
          
          if(_.isString(obj["end_client"])){
            obj["end_client"] = new mongo.ObjectId(obj["end_client"]);
          }else if(obj["end_client"]._id){
            obj["end_client"] = new mongo.ObjectId(obj["end_client"]._id) ;
          }
          
        }
        
    
        
        if(obj["licenceStoreId"] != undefined){
          
           obj["licenceStoreId"] = obj["licenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["ssoBddUrl"] != undefined){
          
           obj["ssoBddUrl"] = obj["ssoBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["client_id"] != undefined){
          
           obj["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           obj["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["sellerAppId"] != undefined){
          
           obj["sellerAppId"] = obj["sellerAppId"].toString() ;
           
        }
        
    
        
        if(obj["sellerLicenceStoreId"] != undefined){
          
           obj["sellerLicenceStoreId"] = obj["sellerLicenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["adminAppId"] != undefined){
          
           obj["adminAppId"] = obj["adminAppId"].toString() ;
           
        }
        
    
        
        if(obj["adminLicenceStoreId"] != undefined){
          
           obj["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["infraBddUrl"] != undefined){
          
           obj["infraBddUrl"] = obj["infraBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["sellerSso_Client_template"] != undefined){
          
          if(_.isString(obj["sellerSso_Client_template"])){
            obj["sellerSso_Client_template"] = new mongo.ObjectId(obj["sellerSso_Client_template"]);
          }else if(obj["sellerSso_Client_template"]._id){
            obj["sellerSso_Client_template"] = new mongo.ObjectId(obj["sellerSso_Client_template"]._id) ;
          }
          
        }
        
    
        
        if(obj["sellerEndClientTemplate"] != undefined){
          
          if(_.isString(obj["sellerEndClientTemplate"])){
            obj["sellerEndClientTemplate"] = new mongo.ObjectId(obj["sellerEndClientTemplate"]);
          }else if(obj["sellerEndClientTemplate"]._id){
            obj["sellerEndClientTemplate"] = new mongo.ObjectId(obj["sellerEndClientTemplate"]._id) ;
          }
          
        }
        
    
        
        if(obj["sellerAppInstanceTemplate"] != undefined){
          
          if(_.isString(obj["sellerAppInstanceTemplate"])){
            obj["sellerAppInstanceTemplate"] = new mongo.ObjectId(obj["sellerAppInstanceTemplate"]);
          }else if(obj["sellerAppInstanceTemplate"]._id){
            obj["sellerAppInstanceTemplate"] = new mongo.ObjectId(obj["sellerAppInstanceTemplate"]._id) ;
          }
          
        }
        
    
  }


 

public static checkQbpBddUrl(val:any, path:string =null):string[]{
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


       
 

public static checkappId(val:any, path:string =null):string[]{
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


       
 

public static checklicenceStoreId(val:any, path:string =null):string[]{
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


       
 

public static checksellerAppId(val:any, path:string =null):string[]{
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


       
 

public static checksellerLicenceStoreId(val:any, path:string =null):string[]{
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


       
 

public static checksellerSso_Client_template(val:any, path:string =null):string[]{
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


       
 

public static checksellerEndClientTemplate(val:any, path:string =null):string[]{
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


       
 

public static checksellerAppInstanceTemplate(val:any, path:string =null):string[]{
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
          
              

              

              if(target.QbpBddUrl != null && target.QbpBddUrl != undefined ){
                
                
                res = Entity_QBP_service.checkQbpBddUrl(target.QbpBddUrl , `${path}.QbpBddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.ssoApiUrl != null && target.ssoApiUrl != undefined ){
                
                
                res = Entity_QBP_service.checkssoApiUrl(target.ssoApiUrl , `${path}.ssoApiUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.licenceApiUrl != null && target.licenceApiUrl != undefined ){
                
                
                res = Entity_QBP_service.checklicenceApiUrl(target.licenceApiUrl , `${path}.licenceApiUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sendgridApiUrl != null && target.sendgridApiUrl != undefined ){
                
                
                res = Entity_QBP_service.checksendgridApiUrl(target.sendgridApiUrl , `${path}.sendgridApiUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.appId != null && target.appId != undefined ){
                
                
                res = Entity_QBP_service.checkappId(target.appId , `${path}.appId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.end_client != null && target.end_client != undefined ){
                
                
                res = Entity_QBP_service.checkend_client(target.end_client , `${path}.end_client`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.licenceStoreId != null && target.licenceStoreId != undefined ){
                
                
                res = Entity_QBP_service.checklicenceStoreId(target.licenceStoreId , `${path}.licenceStoreId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.ssoBddUrl != null && target.ssoBddUrl != undefined ){
                
                
                res = Entity_QBP_service.checkssoBddUrl(target.ssoBddUrl , `${path}.ssoBddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.client_id != null && target.client_id != undefined ){
                
                
                res = Entity_QBP_service.checkclient_id(target.client_id , `${path}.client_id`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.client_secret != null && target.client_secret != undefined ){
                
                
                res = Entity_QBP_service.checkclient_secret(target.client_secret , `${path}.client_secret`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.sellerAppId == null || target.sellerAppId == undefined) ){
                err.push(path + ".sellerAppId is required") ;
              }
              

              if(target.sellerAppId != null && target.sellerAppId != undefined ){
                
                
                res = Entity_QBP_service.checksellerAppId(target.sellerAppId , `${path}.sellerAppId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sellerLicenceStoreId != null && target.sellerLicenceStoreId != undefined ){
                
                
                res = Entity_QBP_service.checksellerLicenceStoreId(target.sellerLicenceStoreId , `${path}.sellerLicenceStoreId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.adminAppId != null && target.adminAppId != undefined ){
                
                
                res = Entity_QBP_service.checkadminAppId(target.adminAppId , `${path}.adminAppId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.adminLicenceStoreId != null && target.adminLicenceStoreId != undefined ){
                
                
                res = Entity_QBP_service.checkadminLicenceStoreId(target.adminLicenceStoreId , `${path}.adminLicenceStoreId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.infraBddUrl != null && target.infraBddUrl != undefined ){
                
                
                res = Entity_QBP_service.checkinfraBddUrl(target.infraBddUrl , `${path}.infraBddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sellerSso_Client_template != null && target.sellerSso_Client_template != undefined ){
                
                
                res = Entity_QBP_service.checksellerSso_Client_template(target.sellerSso_Client_template , `${path}.sellerSso_Client_template`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sellerEndClientTemplate != null && target.sellerEndClientTemplate != undefined ){
                
                
                res = Entity_QBP_service.checksellerEndClientTemplate(target.sellerEndClientTemplate , `${path}.sellerEndClientTemplate`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sellerAppInstanceTemplate != null && target.sellerAppInstanceTemplate != undefined ){
                
                
                res = Entity_QBP_service.checksellerAppInstanceTemplate(target.sellerAppInstanceTemplate , `${path}.sellerAppInstanceTemplate`) ;
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
          
            case 'QbpBddUrl':
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
          
            case 'sendgridApiUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'appId':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'end_client':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'licenceStoreId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'ssoBddUrl':
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
          
            case 'sellerAppId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'sellerLicenceStoreId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'adminAppId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'adminLicenceStoreId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'infraBddUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'sellerSso_Client_template':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'sellerEndClientTemplate':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'sellerAppInstanceTemplate':
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
          
      
      case 'QbpBddUrl':
       
             return null ;
       
        
       
      
      
      case 'ssoApiUrl':
       
             return null ;
       
        
       
      
      
      case 'licenceApiUrl':
       
             return null ;
       
        
       
      
      
      case 'sendgridApiUrl':
       
             return null ;
       
        
       
      
      
      case 'appId':
       
        
       
              return 'application_instance' ;
              
      
      
      case 'end_client':
       
        
       
              return 'end_client' ;
              
      
      
      case 'licenceStoreId':
       
             return null ;
       
        
       
      
      
      case 'ssoBddUrl':
       
             return null ;
       
        
       
      
      
      case 'client_id':
       
             return null ;
       
        
       
      
      
      case 'client_secret':
       
             return null ;
       
        
       
      
      
      case 'sellerAppId':
       
             return null ;
       
        
       
      
      
      case 'sellerLicenceStoreId':
       
             return null ;
       
        
       
      
      
      case 'adminAppId':
       
             return null ;
       
        
       
      
      
      case 'adminLicenceStoreId':
       
             return null ;
       
        
       
      
      
      case 'infraBddUrl':
       
             return null ;
       
        
       
      
      
      case 'sellerSso_Client_template':
       
        
       
              return 'oidc_Client' ;
              
      
      
      case 'sellerEndClientTemplate':
       
        
       
              return 'end_client' ;
              
      
      
      case 'sellerAppInstanceTemplate':
       
        
       
              return 'application_instance' ;
              
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




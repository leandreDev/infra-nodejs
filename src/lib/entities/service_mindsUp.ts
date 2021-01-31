import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_service } from "./service"


/**
  service minds up metier
*/
export class Entity_service_mindsUp extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_mindsUp' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["urlApi"] != undefined){
          
           obj["urlApi"] = obj["urlApi"].toString() ;
           
        }
        
    
        
        if(obj["urlSsoApi"] != undefined){
          
           obj["urlSsoApi"] = obj["urlSsoApi"].toString() ;
           
        }
        
    
        
        if(obj["urlLicenceService"] != undefined){
          
           obj["urlLicenceService"] = obj["urlLicenceService"].toString() ;
           
        }
        
    
        
        if(obj["urlInfraBdd"] != undefined){
          
           obj["urlInfraBdd"] = obj["urlInfraBdd"].toString() ;
           
        }
        
    
        
        if(obj["urlMailerService"] != undefined){
          
           obj["urlMailerService"] = obj["urlMailerService"].toString() ;
           
        }
        
    
        
        if(obj["urlPdfrip"] != undefined){
          
           obj["urlPdfrip"] = obj["urlPdfrip"].toString() ;
           
        }
        
    
        
        if(obj["reportUrl"] != undefined){
          
           obj["reportUrl"] = obj["reportUrl"].toString() ;
           
        }
        
    
        
        if(obj["urlFsoService"] != undefined){
          
           obj["urlFsoService"] = obj["urlFsoService"].toString() ;
           
        }
        
    
        
        if(obj["applicationClienteConfig"] != undefined){
          
          if(_.isString(obj["applicationClienteConfig"])){
            obj["applicationClienteConfig"] = new mongo.ObjectId(obj["applicationClienteConfig"]);
          }else if(obj["applicationClienteConfig"]._id){
            obj["applicationClienteConfig"] = new mongo.ObjectId(obj["applicationClienteConfig"]._id) ;
          }
          
        }
        
    
        
        if(obj["applicationAdminConfig"] != undefined){
          
          if(_.isString(obj["applicationAdminConfig"])){
            obj["applicationAdminConfig"] = new mongo.ObjectId(obj["applicationAdminConfig"]);
          }else if(obj["applicationAdminConfig"]._id){
            obj["applicationAdminConfig"] = new mongo.ObjectId(obj["applicationAdminConfig"]._id) ;
          }
          
        }
        
    
        
        if(obj["ftpConf"] != undefined){
          
           
              Index.Entity_ftpsConfig.cast(obj["ftpConf"]) ;
              //5bcdb9cfa350082fa67563bd
            
          
        }
        
    
        
        if(obj["appId"] != undefined){
          
          if(_.isString(obj["appId"])){
            obj["appId"] = new mongo.ObjectId(obj["appId"]);
          }else if(obj["appId"]._id){
            obj["appId"] = new mongo.ObjectId(obj["appId"]._id) ;
          }
          
        }
        
    
        
        if(obj["adminAppId"] != undefined){
          
          if(_.isString(obj["adminAppId"])){
            obj["adminAppId"] = new mongo.ObjectId(obj["adminAppId"]);
          }else if(obj["adminAppId"]._id){
            obj["adminAppId"] = new mongo.ObjectId(obj["adminAppId"]._id) ;
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
        
    
        
        if(obj["adminLicenceStoreId"] != undefined){
          
           obj["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["emailSenderName"] != undefined){
          
           obj["emailSenderName"] = obj["emailSenderName"].toString() ;
           
        }
        
    
        
        if(obj["emailSenderEmail"] != undefined){
          
           obj["emailSenderEmail"] = obj["emailSenderEmail"].toString() ;
           
        }
        
    
        
        if(obj["mailIRelance360"] != undefined){
          
          if(_.isString(obj["mailIRelance360"])){
            obj["mailIRelance360"] = new mongo.ObjectId(obj["mailIRelance360"]);
          }else if(obj["mailIRelance360"]._id){
            obj["mailIRelance360"] = new mongo.ObjectId(obj["mailIRelance360"]._id) ;
          }
          
        }
        
    
        
        if(obj["mailInvitation360"] != undefined){
          
          if(_.isString(obj["mailInvitation360"])){
            obj["mailInvitation360"] = new mongo.ObjectId(obj["mailInvitation360"]);
          }else if(obj["mailInvitation360"]._id){
            obj["mailInvitation360"] = new mongo.ObjectId(obj["mailInvitation360"]._id) ;
          }
          
        }
        
    
        
        if(obj["mailInvitationCampaign360"] != undefined){
          
          if(_.isString(obj["mailInvitationCampaign360"])){
            obj["mailInvitationCampaign360"] = new mongo.ObjectId(obj["mailInvitationCampaign360"]);
          }else if(obj["mailInvitationCampaign360"]._id){
            obj["mailInvitationCampaign360"] = new mongo.ObjectId(obj["mailInvitationCampaign360"]._id) ;
          }
          
        }
        
    
        
        if(obj["mailCreation360"] != undefined){
          
          if(_.isString(obj["mailCreation360"])){
            obj["mailCreation360"] = new mongo.ObjectId(obj["mailCreation360"]);
          }else if(obj["mailCreation360"]._id){
            obj["mailCreation360"] = new mongo.ObjectId(obj["mailCreation360"]._id) ;
          }
          
        }
        
    
        
        if(obj["appName"] != undefined){
          
           obj["appName"] = obj["appName"].toString() ;
           
        }
        
    
        
        if(obj["appUrl"] != undefined){
          
           obj["appUrl"] = obj["appUrl"].toString() ;
           
        }
        
    
        
        if(obj["mailInquiry360UserResponseInfo"] != undefined){
          
          if(_.isString(obj["mailInquiry360UserResponseInfo"])){
            obj["mailInquiry360UserResponseInfo"] = new mongo.ObjectId(obj["mailInquiry360UserResponseInfo"]);
          }else if(obj["mailInquiry360UserResponseInfo"]._id){
            obj["mailInquiry360UserResponseInfo"] = new mongo.ObjectId(obj["mailInquiry360UserResponseInfo"]._id) ;
          }
          
        }
        
    
        
        if(obj["mailInquiry360UserResponse"] != undefined){
          
          if(_.isString(obj["mailInquiry360UserResponse"])){
            obj["mailInquiry360UserResponse"] = new mongo.ObjectId(obj["mailInquiry360UserResponse"]);
          }else if(obj["mailInquiry360UserResponse"]._id){
            obj["mailInquiry360UserResponse"] = new mongo.ObjectId(obj["mailInquiry360UserResponse"]._id) ;
          }
          
        }
        
    
        
        if(obj["langUrl"] != undefined && obj["langUrl"] != null && _.isArray(obj["langUrl"])){
          

            obj["langUrl"].forEach((value)=>{
              
                Index.Entity_name_value.cast(value) ;
                
              
            })
          
        }
        
    
  }


 

public static checkurlApi(val:any, path:string =null):string[]{
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


       
 

public static checkurlSsoApi(val:any, path:string =null):string[]{
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


       
 

public static checkurlLicenceService(val:any, path:string =null):string[]{
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


       
 

public static checkurlInfraBdd(val:any, path:string =null):string[]{
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


       
 

public static checkurlMailerService(val:any, path:string =null):string[]{
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


       
 

public static checkurlPdfrip(val:any, path:string =null):string[]{
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


       
 

public static checkreportUrl(val:any, path:string =null):string[]{
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


       
 

public static checkurlFsoService(val:any, path:string =null):string[]{
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


       
 

public static checkapplicationClienteConfig(val:any, path:string =null):string[]{
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


       
 

public static checkapplicationAdminConfig(val:any, path:string =null):string[]{
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


       
 

public static checkftpConf(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_ftpsConfig.check(val , false , path  ) ;
            //5bcdb9cfa350082fa67563bd

          }
          res = [...res , ...result] ;
        
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


       
 

public static checkemailSenderName(val:any, path:string =null):string[]{
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


       
 

public static checkemailSenderEmail(val:any, path:string =null):string[]{
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


       
 

public static checkmailIRelance360(val:any, path:string =null):string[]{
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


       
 

public static checkmailInvitation360(val:any, path:string =null):string[]{
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


       
 

public static checkmailInvitationCampaign360(val:any, path:string =null):string[]{
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


       
 

public static checkmailCreation360(val:any, path:string =null):string[]{
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


       
 

public static checkappName(val:any, path:string =null):string[]{
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


       
 

public static checkappUrl(val:any, path:string =null):string[]{
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


       
 

public static checkmailInquiry360UserResponseInfo(val:any, path:string =null):string[]{
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


       
 

public static checkmailInquiry360UserResponse(val:any, path:string =null):string[]{
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


       
 

public static checklangUrl(val:any, path:string =null):string[]{
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


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          err = Entity_service.check(target, isCompleteObj , path) ;
          
              

              
              if( isCompleteObj && (target.urlApi == null || target.urlApi == undefined) ){
                err.push(path + ".urlApi is required") ;
              }
              

              if(target.urlApi != null && target.urlApi != undefined ){
                
                
                res = Entity_service_mindsUp.checkurlApi(target.urlApi , `${path}.urlApi`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.urlSsoApi == null || target.urlSsoApi == undefined) ){
                err.push(path + ".urlSsoApi is required") ;
              }
              

              if(target.urlSsoApi != null && target.urlSsoApi != undefined ){
                
                
                res = Entity_service_mindsUp.checkurlSsoApi(target.urlSsoApi , `${path}.urlSsoApi`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.urlLicenceService == null || target.urlLicenceService == undefined) ){
                err.push(path + ".urlLicenceService is required") ;
              }
              

              if(target.urlLicenceService != null && target.urlLicenceService != undefined ){
                
                
                res = Entity_service_mindsUp.checkurlLicenceService(target.urlLicenceService , `${path}.urlLicenceService`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.urlInfraBdd == null || target.urlInfraBdd == undefined) ){
                err.push(path + ".urlInfraBdd is required") ;
              }
              

              if(target.urlInfraBdd != null && target.urlInfraBdd != undefined ){
                
                
                res = Entity_service_mindsUp.checkurlInfraBdd(target.urlInfraBdd , `${path}.urlInfraBdd`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.urlMailerService == null || target.urlMailerService == undefined) ){
                err.push(path + ".urlMailerService is required") ;
              }
              

              if(target.urlMailerService != null && target.urlMailerService != undefined ){
                
                
                res = Entity_service_mindsUp.checkurlMailerService(target.urlMailerService , `${path}.urlMailerService`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.urlPdfrip != null && target.urlPdfrip != undefined ){
                
                
                res = Entity_service_mindsUp.checkurlPdfrip(target.urlPdfrip , `${path}.urlPdfrip`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.reportUrl != null && target.reportUrl != undefined ){
                
                
                res = Entity_service_mindsUp.checkreportUrl(target.reportUrl , `${path}.reportUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.urlFsoService == null || target.urlFsoService == undefined) ){
                err.push(path + ".urlFsoService is required") ;
              }
              

              if(target.urlFsoService != null && target.urlFsoService != undefined ){
                
                
                res = Entity_service_mindsUp.checkurlFsoService(target.urlFsoService , `${path}.urlFsoService`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.applicationClienteConfig == null || target.applicationClienteConfig == undefined) ){
                err.push(path + ".applicationClienteConfig is required") ;
              }
              

              if(target.applicationClienteConfig != null && target.applicationClienteConfig != undefined ){
                
                
                res = Entity_service_mindsUp.checkapplicationClienteConfig(target.applicationClienteConfig , `${path}.applicationClienteConfig`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.applicationAdminConfig == null || target.applicationAdminConfig == undefined) ){
                err.push(path + ".applicationAdminConfig is required") ;
              }
              

              if(target.applicationAdminConfig != null && target.applicationAdminConfig != undefined ){
                
                
                res = Entity_service_mindsUp.checkapplicationAdminConfig(target.applicationAdminConfig , `${path}.applicationAdminConfig`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.ftpConf != null && target.ftpConf != undefined ){
                
                
                res = Entity_service_mindsUp.checkftpConf(target.ftpConf , `${path}.ftpConf`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.appId == null || target.appId == undefined) ){
                err.push(path + ".appId is required") ;
              }
              

              if(target.appId != null && target.appId != undefined ){
                
                
                res = Entity_service_mindsUp.checkappId(target.appId , `${path}.appId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.adminAppId == null || target.adminAppId == undefined) ){
                err.push(path + ".adminAppId is required") ;
              }
              

              if(target.adminAppId != null && target.adminAppId != undefined ){
                
                
                res = Entity_service_mindsUp.checkadminAppId(target.adminAppId , `${path}.adminAppId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.end_client != null && target.end_client != undefined ){
                
                
                res = Entity_service_mindsUp.checkend_client(target.end_client , `${path}.end_client`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.licenceStoreId == null || target.licenceStoreId == undefined) ){
                err.push(path + ".licenceStoreId is required") ;
              }
              

              if(target.licenceStoreId != null && target.licenceStoreId != undefined ){
                
                
                res = Entity_service_mindsUp.checklicenceStoreId(target.licenceStoreId , `${path}.licenceStoreId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.adminLicenceStoreId == null || target.adminLicenceStoreId == undefined) ){
                err.push(path + ".adminLicenceStoreId is required") ;
              }
              

              if(target.adminLicenceStoreId != null && target.adminLicenceStoreId != undefined ){
                
                
                res = Entity_service_mindsUp.checkadminLicenceStoreId(target.adminLicenceStoreId , `${path}.adminLicenceStoreId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.emailSenderName == null || target.emailSenderName == undefined) ){
                err.push(path + ".emailSenderName is required") ;
              }
              

              if(target.emailSenderName != null && target.emailSenderName != undefined ){
                
                
                res = Entity_service_mindsUp.checkemailSenderName(target.emailSenderName , `${path}.emailSenderName`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.emailSenderEmail == null || target.emailSenderEmail == undefined) ){
                err.push(path + ".emailSenderEmail is required") ;
              }
              

              if(target.emailSenderEmail != null && target.emailSenderEmail != undefined ){
                
                
                res = Entity_service_mindsUp.checkemailSenderEmail(target.emailSenderEmail , `${path}.emailSenderEmail`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.mailIRelance360 == null || target.mailIRelance360 == undefined) ){
                err.push(path + ".mailIRelance360 is required") ;
              }
              

              if(target.mailIRelance360 != null && target.mailIRelance360 != undefined ){
                
                
                res = Entity_service_mindsUp.checkmailIRelance360(target.mailIRelance360 , `${path}.mailIRelance360`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.mailInvitation360 == null || target.mailInvitation360 == undefined) ){
                err.push(path + ".mailInvitation360 is required") ;
              }
              

              if(target.mailInvitation360 != null && target.mailInvitation360 != undefined ){
                
                
                res = Entity_service_mindsUp.checkmailInvitation360(target.mailInvitation360 , `${path}.mailInvitation360`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.mailInvitationCampaign360 != null && target.mailInvitationCampaign360 != undefined ){
                
                
                res = Entity_service_mindsUp.checkmailInvitationCampaign360(target.mailInvitationCampaign360 , `${path}.mailInvitationCampaign360`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.mailCreation360 != null && target.mailCreation360 != undefined ){
                
                
                res = Entity_service_mindsUp.checkmailCreation360(target.mailCreation360 , `${path}.mailCreation360`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.appName != null && target.appName != undefined ){
                
                
                res = Entity_service_mindsUp.checkappName(target.appName , `${path}.appName`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.appUrl != null && target.appUrl != undefined ){
                
                
                res = Entity_service_mindsUp.checkappUrl(target.appUrl , `${path}.appUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.mailInquiry360UserResponseInfo != null && target.mailInquiry360UserResponseInfo != undefined ){
                
                
                res = Entity_service_mindsUp.checkmailInquiry360UserResponseInfo(target.mailInquiry360UserResponseInfo , `${path}.mailInquiry360UserResponseInfo`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.mailInquiry360UserResponse != null && target.mailInquiry360UserResponse != undefined ){
                
                
                res = Entity_service_mindsUp.checkmailInquiry360UserResponse(target.mailInquiry360UserResponse , `${path}.mailInquiry360UserResponse`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.langUrl != null && target.langUrl != undefined ){
                
                
                target.langUrl.forEach((data, index)=>{
                  res = Entity_service_mindsUp.checklangUrl(target.langUrl[index] , `${path}.langUrl.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
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
          
            case 'urlApi':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'urlSsoApi':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'urlLicenceService':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'urlInfraBdd':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'urlMailerService':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'urlPdfrip':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'reportUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'urlFsoService':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'applicationClienteConfig':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'applicationAdminConfig':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'ftpConf':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_ftpsConfig.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'appId':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'adminAppId':
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
          
            case 'adminLicenceStoreId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'emailSenderName':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'emailSenderEmail':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'mailIRelance360':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'mailInvitation360':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'mailInvitationCampaign360':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'mailCreation360':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'appName':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'appUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'mailInquiry360UserResponseInfo':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'mailInquiry360UserResponse':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'langUrl':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_name_value.castQueryParam(subPath ,value) ;
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
          
      
      case 'urlApi':
       
             return null ;
       
        
       
      
      
      case 'urlSsoApi':
       
             return null ;
       
        
       
      
      
      case 'urlLicenceService':
       
             return null ;
       
        
       
      
      
      case 'urlInfraBdd':
       
             return null ;
       
        
       
      
      
      case 'urlMailerService':
       
             return null ;
       
        
       
      
      
      case 'urlPdfrip':
       
             return null ;
       
        
       
      
      
      case 'reportUrl':
       
             return null ;
       
        
       
      
      
      case 'urlFsoService':
       
             return null ;
       
        
       
      
      
      case 'applicationClienteConfig':
       
        
       
              return 'AppConf_minds_up' ;
              
      
      
      case 'applicationAdminConfig':
       
        
       
              return 'AppConf_minds_up_admin' ;
              
      
      
      case 'ftpConf':
       
        
              
             return Index.Entity_ftpsConfig.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'appId':
       
        
       
              return 'application_instance' ;
              
      
      
      case 'adminAppId':
       
        
       
              return 'application_instance' ;
              
      
      
      case 'end_client':
       
        
       
              return 'end_client' ;
              
      
      
      case 'licenceStoreId':
       
             return null ;
       
        
       
      
      
      case 'adminLicenceStoreId':
       
             return null ;
       
        
       
      
      
      case 'emailSenderName':
       
             return null ;
       
        
       
      
      
      case 'emailSenderEmail':
       
             return null ;
       
        
       
      
      
      case 'mailIRelance360':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'mailInvitation360':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'mailInvitationCampaign360':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'mailCreation360':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'appName':
       
             return null ;
       
        
       
      
      
      case 'appUrl':
       
             return null ;
       
        
       
      
      
      case 'mailInquiry360UserResponseInfo':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'mailInquiry360UserResponse':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'langUrl':
       
        
              
             return Index.Entity_name_value.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




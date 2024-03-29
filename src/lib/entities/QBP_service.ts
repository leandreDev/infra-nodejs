import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;


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
          
          if(_.isString(obj["sellerAppId"])){
            obj["sellerAppId"] = new mongo.ObjectId(obj["sellerAppId"]);
          }else if(obj["sellerAppId"]._id){
            obj["sellerAppId"] = new mongo.ObjectId(obj["sellerAppId"]._id) ;
          }
          
        }
        
    
        
        if(obj["sellerLicenceStoreId"] != undefined){
          
           obj["sellerLicenceStoreId"] = obj["sellerLicenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["adminAppId"] != undefined){
          
          if(_.isString(obj["adminAppId"])){
            obj["adminAppId"] = new mongo.ObjectId(obj["adminAppId"]);
          }else if(obj["adminAppId"]._id){
            obj["adminAppId"] = new mongo.ObjectId(obj["adminAppId"]._id) ;
          }
          
        }
        
    
        
        if(obj["adminLicenceStoreId"] != undefined){
          
           obj["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["infraBddUrl"] != undefined){
          
           obj["infraBddUrl"] = obj["infraBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["sellerSso_Client_template"] != undefined){
          
           obj["sellerSso_Client_template"] = obj["sellerSso_Client_template"].toString() ;
           
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
        
    
        
        if(obj["mangoConf"] != undefined){
          
           
              Index.Entity_MangoConf.cast(obj["mangoConf"]) ;
              //602e35837d6c5b63b790117e
            
          
        }
        
    
        
        if(obj["assuranceApiKey"] != undefined){
          
           obj["assuranceApiKey"] = obj["assuranceApiKey"].toString() ;
           
        }
        
    
        
        if(obj["bigBen"] != undefined){
          
           
              Index.Entity_BigBenConf.cast(obj["bigBen"]) ;
              //6095124a9be3b6f47b75d69f
            
          
        }
        
    
        
        if(obj["dpdServiceUrl"] != undefined){
          
           obj["dpdServiceUrl"] = obj["dpdServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["sftpGS"] != undefined){
          
           
              Index.Entity_ftpConf.cast(obj["sftpGS"]) ;
              //5f646c881d0d10a02389ba8f
            
          
        }
        
    
        
        if(obj["QbpBaseUrl"] != undefined){
          
           obj["QbpBaseUrl"] = obj["QbpBaseUrl"].toString() ;
           
        }
        
    
        
        if(obj["qbpServiceUrl"] != undefined){
          
           obj["qbpServiceUrl"] = obj["qbpServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["sellerDomainPatern"] != undefined){
          
           obj["sellerDomainPatern"] = obj["sellerDomainPatern"].toString() ;
           
        }
        
    
        
        if(obj["fsoServiceUrl"] != undefined){
          
           obj["fsoServiceUrl"] = obj["fsoServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["isInsuranceEnable"] != undefined){
          
           obj["isInsuranceEnable"] = new Boolean(obj["isInsuranceEnable"]).valueOf() ;
          
        }
        
    
        
        if(obj["sendGridConf"] != undefined){
          
           
              Index.Entity_QbpMailer.cast(obj["sendGridConf"]) ;
              //618402d5351c4cb37eab1acb
            
          
        }
        
    
        
        if(obj["featuresConf"] != undefined){
          
           
              Index.Entity_QbpFeaturesConfiguration.cast(obj["featuresConf"]) ;
              //62330e74ea547cc9374f149c
            
          
        }
        
    
        
        if(obj["automationConf"] != undefined){
          
           
              Index.Entity_ConfAutomation.cast(obj["automationConf"]) ;
              //625416540ad16deb7903648a
            
          
        }
        
    
        
        if(obj["floaUrl"] != undefined){
          
           obj["floaUrl"] = obj["floaUrl"].toString() ;
           
        }
        
    
        
        if(obj["floaApiKey"] != undefined){
          
           obj["floaApiKey"] = obj["floaApiKey"].toString() ;
           
        }
        
    
        
        if(obj["floaMangoWalletId"] != undefined){
          
           obj["floaMangoWalletId"] = obj["floaMangoWalletId"].toString() ;
           
        }
        
    
        
        if(obj["qbpPromoWalletId"] != undefined){
          
           obj["qbpPromoWalletId"] = obj["qbpPromoWalletId"].toString() ;
           
        }
        
    
        
        if(obj["qbpPromoMangoUserId"] != undefined){
          
           obj["qbpPromoMangoUserId"] = obj["qbpPromoMangoUserId"].toString() ;
           
        }
        
    
        
        if(obj["avisGarantisSecretEmail"] != undefined){
          
           obj["avisGarantisSecretEmail"] = obj["avisGarantisSecretEmail"].toString() ;
           
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
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
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


       
 

public static checkmangoConf(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_MangoConf.check(val , false , path  ) ;
            //602e35837d6c5b63b790117e

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkassuranceApiKey(val:any, path:string =null):string[]{
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


       
 

public static checkbigBen(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_BigBenConf.check(val , false , path  ) ;
            //6095124a9be3b6f47b75d69f

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkdpdServiceUrl(val:any, path:string =null):string[]{
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


       
 

public static checksftpGS(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_ftpConf.check(val , false , path  ) ;
            //5f646c881d0d10a02389ba8f

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkQbpBaseUrl(val:any, path:string =null):string[]{
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


       
 

public static checkqbpServiceUrl(val:any, path:string =null):string[]{
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


       
 

public static checksellerDomainPatern(val:any, path:string =null):string[]{
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


       
 

public static checkfsoServiceUrl(val:any, path:string =null):string[]{
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


       
 

public static checkisInsuranceEnable(val:any, path:string =null):string[]{
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


       
 

public static checksendGridConf(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_QbpMailer.check(val , false , path  ) ;
            //618402d5351c4cb37eab1acb

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkfeaturesConf(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_QbpFeaturesConfiguration.check(val , false , path  ) ;
            //62330e74ea547cc9374f149c

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkautomationConf(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_ConfAutomation.check(val , false , path  ) ;
            //625416540ad16deb7903648a

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkfloaUrl(val:any, path:string =null):string[]{
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


       
 

public static checkfloaApiKey(val:any, path:string =null):string[]{
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


       
 

public static checkfloaMangoWalletId(val:any, path:string =null):string[]{
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


       
 

public static checkqbpPromoWalletId(val:any, path:string =null):string[]{
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


       
 

public static checkqbpPromoMangoUserId(val:any, path:string =null):string[]{
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


       
 

public static checkavisGarantisSecretEmail(val:any, path:string =null):string[]{
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

              
              
           
              

              

              if(target.mangoConf != null && target.mangoConf != undefined ){
                
                
                res = Entity_QBP_service.checkmangoConf(target.mangoConf , `${path}.mangoConf`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.assuranceApiKey != null && target.assuranceApiKey != undefined ){
                
                
                res = Entity_QBP_service.checkassuranceApiKey(target.assuranceApiKey , `${path}.assuranceApiKey`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.bigBen != null && target.bigBen != undefined ){
                
                
                res = Entity_QBP_service.checkbigBen(target.bigBen , `${path}.bigBen`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.dpdServiceUrl != null && target.dpdServiceUrl != undefined ){
                
                
                res = Entity_QBP_service.checkdpdServiceUrl(target.dpdServiceUrl , `${path}.dpdServiceUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sftpGS != null && target.sftpGS != undefined ){
                
                
                res = Entity_QBP_service.checksftpGS(target.sftpGS , `${path}.sftpGS`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.QbpBaseUrl != null && target.QbpBaseUrl != undefined ){
                
                
                res = Entity_QBP_service.checkQbpBaseUrl(target.QbpBaseUrl , `${path}.QbpBaseUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.qbpServiceUrl != null && target.qbpServiceUrl != undefined ){
                
                
                res = Entity_QBP_service.checkqbpServiceUrl(target.qbpServiceUrl , `${path}.qbpServiceUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sellerDomainPatern != null && target.sellerDomainPatern != undefined ){
                
                
                res = Entity_QBP_service.checksellerDomainPatern(target.sellerDomainPatern , `${path}.sellerDomainPatern`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.fsoServiceUrl == null || target.fsoServiceUrl == undefined) ){
                err.push(path + ".fsoServiceUrl is required") ;
              }
              

              if(target.fsoServiceUrl != null && target.fsoServiceUrl != undefined ){
                
                
                res = Entity_QBP_service.checkfsoServiceUrl(target.fsoServiceUrl , `${path}.fsoServiceUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.isInsuranceEnable != null && target.isInsuranceEnable != undefined ){
                
                
                res = Entity_QBP_service.checkisInsuranceEnable(target.isInsuranceEnable , `${path}.isInsuranceEnable`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sendGridConf != null && target.sendGridConf != undefined ){
                
                
                res = Entity_QBP_service.checksendGridConf(target.sendGridConf , `${path}.sendGridConf`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.featuresConf != null && target.featuresConf != undefined ){
                
                
                res = Entity_QBP_service.checkfeaturesConf(target.featuresConf , `${path}.featuresConf`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.automationConf != null && target.automationConf != undefined ){
                
                
                res = Entity_QBP_service.checkautomationConf(target.automationConf , `${path}.automationConf`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.floaUrl != null && target.floaUrl != undefined ){
                
                
                res = Entity_QBP_service.checkfloaUrl(target.floaUrl , `${path}.floaUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.floaApiKey != null && target.floaApiKey != undefined ){
                
                
                res = Entity_QBP_service.checkfloaApiKey(target.floaApiKey , `${path}.floaApiKey`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.floaMangoWalletId != null && target.floaMangoWalletId != undefined ){
                
                
                res = Entity_QBP_service.checkfloaMangoWalletId(target.floaMangoWalletId , `${path}.floaMangoWalletId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.qbpPromoWalletId != null && target.qbpPromoWalletId != undefined ){
                
                
                res = Entity_QBP_service.checkqbpPromoWalletId(target.qbpPromoWalletId , `${path}.qbpPromoWalletId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.qbpPromoMangoUserId != null && target.qbpPromoMangoUserId != undefined ){
                
                
                res = Entity_QBP_service.checkqbpPromoMangoUserId(target.qbpPromoMangoUserId , `${path}.qbpPromoMangoUserId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.avisGarantisSecretEmail != null && target.avisGarantisSecretEmail != undefined ){
                
                
                res = Entity_QBP_service.checkavisGarantisSecretEmail(target.avisGarantisSecretEmail , `${path}.avisGarantisSecretEmail`) ;
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
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'sellerLicenceStoreId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'adminAppId':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
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
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'sellerEndClientTemplate':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'sellerAppInstanceTemplate':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'mangoConf':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_MangoConf.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'assuranceApiKey':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'bigBen':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_BigBenConf.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'dpdServiceUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'sftpGS':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_ftpConf.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'QbpBaseUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'qbpServiceUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'sellerDomainPatern':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'fsoServiceUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'isInsuranceEnable':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'sendGridConf':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_QbpMailer.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'featuresConf':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_QbpFeaturesConfiguration.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'automationConf':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_ConfAutomation.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'floaUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'floaApiKey':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'floaMangoWalletId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'qbpPromoWalletId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'qbpPromoMangoUserId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'avisGarantisSecretEmail':
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
       
        
       
              return 'application_instance' ;
              
      
      
      case 'sellerLicenceStoreId':
       
             return null ;
       
        
       
      
      
      case 'adminAppId':
       
        
       
              return 'application_instance' ;
              
      
      
      case 'adminLicenceStoreId':
       
             return null ;
       
        
       
      
      
      case 'infraBddUrl':
       
             return null ;
       
        
       
      
      
      case 'sellerSso_Client_template':
       
             return null ;
       
        
       
      
      
      case 'sellerEndClientTemplate':
       
        
       
              return 'end_client' ;
              
      
      
      case 'sellerAppInstanceTemplate':
       
        
       
              return 'application_instance' ;
              
      
      
      case 'mangoConf':
       
        
              
             return Index.Entity_MangoConf.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'assuranceApiKey':
       
             return null ;
       
        
       
      
      
      case 'bigBen':
       
        
              
             return Index.Entity_BigBenConf.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'dpdServiceUrl':
       
             return null ;
       
        
       
      
      
      case 'sftpGS':
       
        
              
             return Index.Entity_ftpConf.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'QbpBaseUrl':
       
             return null ;
       
        
       
      
      
      case 'qbpServiceUrl':
       
             return null ;
       
        
       
      
      
      case 'sellerDomainPatern':
       
             return null ;
       
        
       
      
      
      case 'fsoServiceUrl':
       
             return null ;
       
        
       
      
      
      case 'isInsuranceEnable':
       
             return null ;
       
        
       
      
      
      case 'sendGridConf':
       
        
              
             return Index.Entity_QbpMailer.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'featuresConf':
       
        
              
             return Index.Entity_QbpFeaturesConfiguration.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'automationConf':
       
        
              
             return Index.Entity_ConfAutomation.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'floaUrl':
       
             return null ;
       
        
       
      
      
      case 'floaApiKey':
       
             return null ;
       
        
       
      
      
      case 'floaMangoWalletId':
       
             return null ;
       
        
       
      
      
      case 'qbpPromoWalletId':
       
             return null ;
       
        
       
      
      
      case 'qbpPromoMangoUserId':
       
             return null ;
       
        
       
      
      
      case 'avisGarantisSecretEmail':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




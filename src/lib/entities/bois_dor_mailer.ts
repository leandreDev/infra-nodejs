import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;



/**
  liste de tous les templates de mail pour bois d'or
*/
export class Entity_bois_dor_mailer extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'bois_dor_mailer' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["comptoirOr_info"] != undefined){
          
          if(_.isString(obj["comptoirOr_info"])){
            obj["comptoirOr_info"] = new mongo.ObjectId(obj["comptoirOr_info"]);
          }else if(obj["comptoirOr_info"]._id){
            obj["comptoirOr_info"] = new mongo.ObjectId(obj["comptoirOr_info"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_orderDelivred"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderDelivred"])){
            obj["boisdor_fr_orderDelivred"] = new mongo.ObjectId(obj["boisdor_fr_orderDelivred"]);
          }else if(obj["boisdor_fr_orderDelivred"]._id){
            obj["boisdor_fr_orderDelivred"] = new mongo.ObjectId(obj["boisdor_fr_orderDelivred"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_orderRegister"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderRegister"])){
            obj["boisdor_fr_orderRegister"] = new mongo.ObjectId(obj["boisdor_fr_orderRegister"]);
          }else if(obj["boisdor_fr_orderRegister"]._id){
            obj["boisdor_fr_orderRegister"] = new mongo.ObjectId(obj["boisdor_fr_orderRegister"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_resetPassword"] != undefined){
          
          if(_.isString(obj["boisdor_fr_resetPassword"])){
            obj["boisdor_fr_resetPassword"] = new mongo.ObjectId(obj["boisdor_fr_resetPassword"]);
          }else if(obj["boisdor_fr_resetPassword"]._id){
            obj["boisdor_fr_resetPassword"] = new mongo.ObjectId(obj["boisdor_fr_resetPassword"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_accountCreated"] != undefined){
          
          if(_.isString(obj["boisdor_fr_accountCreated"])){
            obj["boisdor_fr_accountCreated"] = new mongo.ObjectId(obj["boisdor_fr_accountCreated"]);
          }else if(obj["boisdor_fr_accountCreated"]._id){
            obj["boisdor_fr_accountCreated"] = new mongo.ObjectId(obj["boisdor_fr_accountCreated"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_orderRefund"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderRefund"])){
            obj["boisdor_fr_orderRefund"] = new mongo.ObjectId(obj["boisdor_fr_orderRefund"]);
          }else if(obj["boisdor_fr_orderRefund"]._id){
            obj["boisdor_fr_orderRefund"] = new mongo.ObjectId(obj["boisdor_fr_orderRefund"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_orderCancelled"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderCancelled"])){
            obj["boisdor_fr_orderCancelled"] = new mongo.ObjectId(obj["boisdor_fr_orderCancelled"]);
          }else if(obj["boisdor_fr_orderCancelled"]._id){
            obj["boisdor_fr_orderCancelled"] = new mongo.ObjectId(obj["boisdor_fr_orderCancelled"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_orderValidatedForDelivery"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderValidatedForDelivery"])){
            obj["boisdor_fr_orderValidatedForDelivery"] = new mongo.ObjectId(obj["boisdor_fr_orderValidatedForDelivery"]);
          }else if(obj["boisdor_fr_orderValidatedForDelivery"]._id){
            obj["boisdor_fr_orderValidatedForDelivery"] = new mongo.ObjectId(obj["boisdor_fr_orderValidatedForDelivery"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_orderValidatedForPickup"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderValidatedForPickup"])){
            obj["boisdor_fr_orderValidatedForPickup"] = new mongo.ObjectId(obj["boisdor_fr_orderValidatedForPickup"]);
          }else if(obj["boisdor_fr_orderValidatedForPickup"]._id){
            obj["boisdor_fr_orderValidatedForPickup"] = new mongo.ObjectId(obj["boisdor_fr_orderValidatedForPickup"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_orderToCustomer"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderToCustomer"])){
            obj["boisdor_fr_orderToCustomer"] = new mongo.ObjectId(obj["boisdor_fr_orderToCustomer"]);
          }else if(obj["boisdor_fr_orderToCustomer"]._id){
            obj["boisdor_fr_orderToCustomer"] = new mongo.ObjectId(obj["boisdor_fr_orderToCustomer"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_orderToSeller"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderToSeller"])){
            obj["boisdor_fr_orderToSeller"] = new mongo.ObjectId(obj["boisdor_fr_orderToSeller"]);
          }else if(obj["boisdor_fr_orderToSeller"]._id){
            obj["boisdor_fr_orderToSeller"] = new mongo.ObjectId(obj["boisdor_fr_orderToSeller"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_sav"] != undefined){
          
          if(_.isString(obj["boisdor_fr_sav"])){
            obj["boisdor_fr_sav"] = new mongo.ObjectId(obj["boisdor_fr_sav"]);
          }else if(obj["boisdor_fr_sav"]._id){
            obj["boisdor_fr_sav"] = new mongo.ObjectId(obj["boisdor_fr_sav"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_contact"] != undefined){
          
          if(_.isString(obj["boisdor_fr_contact"])){
            obj["boisdor_fr_contact"] = new mongo.ObjectId(obj["boisdor_fr_contact"]);
          }else if(obj["boisdor_fr_contact"]._id){
            obj["boisdor_fr_contact"] = new mongo.ObjectId(obj["boisdor_fr_contact"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_reply_sav"] != undefined){
          
          if(_.isString(obj["boisdor_fr_reply_sav"])){
            obj["boisdor_fr_reply_sav"] = new mongo.ObjectId(obj["boisdor_fr_reply_sav"]);
          }else if(obj["boisdor_fr_reply_sav"]._id){
            obj["boisdor_fr_reply_sav"] = new mongo.ObjectId(obj["boisdor_fr_reply_sav"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_reply_contact"] != undefined){
          
          if(_.isString(obj["boisdor_fr_reply_contact"])){
            obj["boisdor_fr_reply_contact"] = new mongo.ObjectId(obj["boisdor_fr_reply_contact"]);
          }else if(obj["boisdor_fr_reply_contact"]._id){
            obj["boisdor_fr_reply_contact"] = new mongo.ObjectId(obj["boisdor_fr_reply_contact"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_orderToCustomerPending"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderToCustomerPending"])){
            obj["boisdor_fr_orderToCustomerPending"] = new mongo.ObjectId(obj["boisdor_fr_orderToCustomerPending"]);
          }else if(obj["boisdor_fr_orderToCustomerPending"]._id){
            obj["boisdor_fr_orderToCustomerPending"] = new mongo.ObjectId(obj["boisdor_fr_orderToCustomerPending"]._id) ;
          }
          
        }
        
    
        
        if(obj["boisdor_fr_orderToCustomerDiff"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderToCustomerDiff"])){
            obj["boisdor_fr_orderToCustomerDiff"] = new mongo.ObjectId(obj["boisdor_fr_orderToCustomerDiff"]);
          }else if(obj["boisdor_fr_orderToCustomerDiff"]._id){
            obj["boisdor_fr_orderToCustomerDiff"] = new mongo.ObjectId(obj["boisdor_fr_orderToCustomerDiff"]._id) ;
          }
          
        }
        
    
  }


 

public static checkcomptoirOr_info(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_orderDelivred(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_orderRegister(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_resetPassword(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_accountCreated(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_orderRefund(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_orderCancelled(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_orderValidatedForDelivery(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_orderValidatedForPickup(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_orderToCustomer(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_orderToSeller(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_sav(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_contact(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_reply_sav(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_reply_contact(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_orderToCustomerPending(val:any, path:string =null):string[]{
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


       
 

public static checkboisdor_fr_orderToCustomerDiff(val:any, path:string =null):string[]{
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
        
          
          
              

              

              if(target.comptoirOr_info != null && target.comptoirOr_info != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkcomptoirOr_info(target.comptoirOr_info , `${path}.comptoirOr_info`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_orderDelivred != null && target.boisdor_fr_orderDelivred != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_orderDelivred(target.boisdor_fr_orderDelivred , `${path}.boisdor_fr_orderDelivred`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_orderRegister != null && target.boisdor_fr_orderRegister != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_orderRegister(target.boisdor_fr_orderRegister , `${path}.boisdor_fr_orderRegister`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_resetPassword != null && target.boisdor_fr_resetPassword != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_resetPassword(target.boisdor_fr_resetPassword , `${path}.boisdor_fr_resetPassword`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_accountCreated != null && target.boisdor_fr_accountCreated != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_accountCreated(target.boisdor_fr_accountCreated , `${path}.boisdor_fr_accountCreated`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_orderRefund != null && target.boisdor_fr_orderRefund != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_orderRefund(target.boisdor_fr_orderRefund , `${path}.boisdor_fr_orderRefund`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_orderCancelled != null && target.boisdor_fr_orderCancelled != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_orderCancelled(target.boisdor_fr_orderCancelled , `${path}.boisdor_fr_orderCancelled`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_orderValidatedForDelivery != null && target.boisdor_fr_orderValidatedForDelivery != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_orderValidatedForDelivery(target.boisdor_fr_orderValidatedForDelivery , `${path}.boisdor_fr_orderValidatedForDelivery`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_orderValidatedForPickup != null && target.boisdor_fr_orderValidatedForPickup != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_orderValidatedForPickup(target.boisdor_fr_orderValidatedForPickup , `${path}.boisdor_fr_orderValidatedForPickup`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_orderToCustomer != null && target.boisdor_fr_orderToCustomer != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_orderToCustomer(target.boisdor_fr_orderToCustomer , `${path}.boisdor_fr_orderToCustomer`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_orderToSeller != null && target.boisdor_fr_orderToSeller != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_orderToSeller(target.boisdor_fr_orderToSeller , `${path}.boisdor_fr_orderToSeller`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_sav != null && target.boisdor_fr_sav != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_sav(target.boisdor_fr_sav , `${path}.boisdor_fr_sav`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_contact != null && target.boisdor_fr_contact != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_contact(target.boisdor_fr_contact , `${path}.boisdor_fr_contact`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_reply_sav != null && target.boisdor_fr_reply_sav != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_reply_sav(target.boisdor_fr_reply_sav , `${path}.boisdor_fr_reply_sav`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_reply_contact != null && target.boisdor_fr_reply_contact != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_reply_contact(target.boisdor_fr_reply_contact , `${path}.boisdor_fr_reply_contact`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_orderToCustomerPending != null && target.boisdor_fr_orderToCustomerPending != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_orderToCustomerPending(target.boisdor_fr_orderToCustomerPending , `${path}.boisdor_fr_orderToCustomerPending`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.boisdor_fr_orderToCustomerDiff != null && target.boisdor_fr_orderToCustomerDiff != undefined ){
                
                
                res = Entity_bois_dor_mailer.checkboisdor_fr_orderToCustomerDiff(target.boisdor_fr_orderToCustomerDiff , `${path}.boisdor_fr_orderToCustomerDiff`) ;
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
          
            case 'comptoirOr_info':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_orderDelivred':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_orderRegister':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_resetPassword':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_accountCreated':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_orderRefund':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_orderCancelled':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_orderValidatedForDelivery':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_orderValidatedForPickup':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_orderToCustomer':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_orderToSeller':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_sav':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_contact':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_reply_sav':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_reply_contact':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_orderToCustomerPending':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'boisdor_fr_orderToCustomerDiff':
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
          
      
      case 'comptoirOr_info':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_orderDelivred':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_orderRegister':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_resetPassword':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_accountCreated':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_orderRefund':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_orderCancelled':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_orderValidatedForDelivery':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_orderValidatedForPickup':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_orderToCustomer':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_orderToSeller':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_sav':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_contact':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_reply_sav':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_reply_contact':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_orderToCustomerPending':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'boisdor_fr_orderToCustomerDiff':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }




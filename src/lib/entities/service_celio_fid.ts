import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;


import {Entity_service } from "./service"


/**
  service celio fid
*/
export class Entity_service_celio_fid extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_celio_fid' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["bddUrl"] != undefined){
          
           obj["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
        
        if(obj["accessTokenUrl"] != undefined){
          
           obj["accessTokenUrl"] = obj["accessTokenUrl"].toString() ;
           
        }
        
    
        
        if(obj["client_id"] != undefined){
          
           obj["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           obj["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["hybrisUrl"] != undefined){
          
           obj["hybrisUrl"] = obj["hybrisUrl"].toString() ;
           
        }
        
    
        
        if(obj["baseSiteId"] != undefined){
          
           obj["baseSiteId"] = obj["baseSiteId"].toString() ;
           
        }
        
    
        
        if(obj["secretToken"] != undefined){
          
           obj["secretToken"] = obj["secretToken"].toString() ;
           
        }
        
    
        
        if(obj["serverUrl"] != undefined){
          
           obj["serverUrl"] = obj["serverUrl"].toString() ;
           
        }
        
    
        
        if(obj["caPath"] != undefined){
          
           obj["caPath"] = obj["caPath"].toString() ;
           
        }
        
    
        
        if(obj["sponsorPoints"] != undefined){
          
           obj["sponsorPoints"] = new Number(obj["sponsorPoints"]).valueOf();
          
        }
        
    
        
        if(obj["childPoints"] != undefined){
          
           obj["childPoints"] = new Number(obj["childPoints"]).valueOf();
          
        }
        
    
        
        if(obj["cappingThreshold"] != undefined){
          
           obj["cappingThreshold"] = obj["cappingThreshold"].toString() ;
           
        }
        
    
        
        if(obj["sponsorshipFrequencyUnit"] != undefined){
          
           obj["sponsorshipFrequencyUnit"] = new Number(obj["sponsorshipFrequencyUnit"]).valueOf();
          
        }
        
    
        
        if(obj["sponsorshipMaxCount"] != undefined){
          
           obj["sponsorshipMaxCount"] = new Number(obj["sponsorshipMaxCount"]).valueOf();
          
        }
        
    
        
        if(obj["fixedEarnFrequencyUnit"] != undefined){
          
           obj["fixedEarnFrequencyUnit"] = new Number(obj["fixedEarnFrequencyUnit"]).valueOf();
          
        }
        
    
        
        if(obj["fixedEarnValue"] != undefined){
          
           obj["fixedEarnValue"] = new Number(obj["fixedEarnValue"]).valueOf();
          
        }
        
    
        
        if(obj["fixedEarnMaxCount"] != undefined){
          
           obj["fixedEarnMaxCount"] = new Number(obj["fixedEarnMaxCount"]).valueOf();
          
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


       
 

public static checkaccessTokenUrl(val:any, path:string =null):string[]{
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


       
 

public static checkhybrisUrl(val:any, path:string =null):string[]{
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


       
 

public static checkbaseSiteId(val:any, path:string =null):string[]{
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


       
 

public static checksecretToken(val:any, path:string =null):string[]{
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


       
 

public static checkserverUrl(val:any, path:string =null):string[]{
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


       
 

public static checkcaPath(val:any, path:string =null):string[]{
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


       
 

public static checksponsorPoints(val:any, path:string =null):string[]{
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


       
 

public static checkchildPoints(val:any, path:string =null):string[]{
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


       
 

public static checkcappingThreshold(val:any, path:string =null):string[]{
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


       
 

public static checksponsorshipFrequencyUnit(val:any, path:string =null):string[]{
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


       
 

public static checksponsorshipMaxCount(val:any, path:string =null):string[]{
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


       
 

public static checkfixedEarnFrequencyUnit(val:any, path:string =null):string[]{
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


       
 

public static checkfixedEarnValue(val:any, path:string =null):string[]{
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


       
 

public static checkfixedEarnMaxCount(val:any, path:string =null):string[]{
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
        
          err = Entity_service.check(target, isCompleteObj , path) ;
          
              

              

              if(target.bddUrl != null && target.bddUrl != undefined ){
                
                
                res = Entity_service_celio_fid.checkbddUrl(target.bddUrl , `${path}.bddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.accessTokenUrl == null || target.accessTokenUrl == undefined) ){
                err.push(path + ".accessTokenUrl is required") ;
              }
              

              if(target.accessTokenUrl != null && target.accessTokenUrl != undefined ){
                
                
                res = Entity_service_celio_fid.checkaccessTokenUrl(target.accessTokenUrl , `${path}.accessTokenUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.client_id == null || target.client_id == undefined) ){
                err.push(path + ".client_id is required") ;
              }
              

              if(target.client_id != null && target.client_id != undefined ){
                
                
                res = Entity_service_celio_fid.checkclient_id(target.client_id , `${path}.client_id`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.client_secret != null && target.client_secret != undefined ){
                
                
                res = Entity_service_celio_fid.checkclient_secret(target.client_secret , `${path}.client_secret`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.hybrisUrl == null || target.hybrisUrl == undefined) ){
                err.push(path + ".hybrisUrl is required") ;
              }
              

              if(target.hybrisUrl != null && target.hybrisUrl != undefined ){
                
                
                res = Entity_service_celio_fid.checkhybrisUrl(target.hybrisUrl , `${path}.hybrisUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.baseSiteId != null && target.baseSiteId != undefined ){
                
                
                res = Entity_service_celio_fid.checkbaseSiteId(target.baseSiteId , `${path}.baseSiteId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.secretToken != null && target.secretToken != undefined ){
                
                
                res = Entity_service_celio_fid.checksecretToken(target.secretToken , `${path}.secretToken`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.serverUrl != null && target.serverUrl != undefined ){
                
                
                res = Entity_service_celio_fid.checkserverUrl(target.serverUrl , `${path}.serverUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.caPath != null && target.caPath != undefined ){
                
                
                res = Entity_service_celio_fid.checkcaPath(target.caPath , `${path}.caPath`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sponsorPoints != null && target.sponsorPoints != undefined ){
                
                
                res = Entity_service_celio_fid.checksponsorPoints(target.sponsorPoints , `${path}.sponsorPoints`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.childPoints != null && target.childPoints != undefined ){
                
                
                res = Entity_service_celio_fid.checkchildPoints(target.childPoints , `${path}.childPoints`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.cappingThreshold != null && target.cappingThreshold != undefined ){
                
                
                res = Entity_service_celio_fid.checkcappingThreshold(target.cappingThreshold , `${path}.cappingThreshold`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sponsorshipFrequencyUnit != null && target.sponsorshipFrequencyUnit != undefined ){
                
                
                res = Entity_service_celio_fid.checksponsorshipFrequencyUnit(target.sponsorshipFrequencyUnit , `${path}.sponsorshipFrequencyUnit`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sponsorshipMaxCount != null && target.sponsorshipMaxCount != undefined ){
                
                
                res = Entity_service_celio_fid.checksponsorshipMaxCount(target.sponsorshipMaxCount , `${path}.sponsorshipMaxCount`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fixedEarnFrequencyUnit != null && target.fixedEarnFrequencyUnit != undefined ){
                
                
                res = Entity_service_celio_fid.checkfixedEarnFrequencyUnit(target.fixedEarnFrequencyUnit , `${path}.fixedEarnFrequencyUnit`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fixedEarnValue != null && target.fixedEarnValue != undefined ){
                
                
                res = Entity_service_celio_fid.checkfixedEarnValue(target.fixedEarnValue , `${path}.fixedEarnValue`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fixedEarnMaxCount != null && target.fixedEarnMaxCount != undefined ){
                
                
                res = Entity_service_celio_fid.checkfixedEarnMaxCount(target.fixedEarnMaxCount , `${path}.fixedEarnMaxCount`) ;
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
          
            case 'accessTokenUrl':
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
          
            case 'hybrisUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'baseSiteId':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'secretToken':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'serverUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'caPath':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'sponsorPoints':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'childPoints':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'cappingThreshold':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'sponsorshipFrequencyUnit':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'sponsorshipMaxCount':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'fixedEarnFrequencyUnit':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'fixedEarnValue':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'fixedEarnMaxCount':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
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
       
        
       
      
      
      case 'accessTokenUrl':
       
             return null ;
       
        
       
      
      
      case 'client_id':
       
             return null ;
       
        
       
      
      
      case 'client_secret':
       
             return null ;
       
        
       
      
      
      case 'hybrisUrl':
       
             return null ;
       
        
       
      
      
      case 'baseSiteId':
       
             return null ;
       
        
       
      
      
      case 'secretToken':
       
             return null ;
       
        
       
      
      
      case 'serverUrl':
       
             return null ;
       
        
       
      
      
      case 'caPath':
       
             return null ;
       
        
       
      
      
      case 'sponsorPoints':
       
             return null ;
       
        
       
      
      
      case 'childPoints':
       
             return null ;
       
        
       
      
      
      case 'cappingThreshold':
       
             return null ;
       
        
       
      
      
      case 'sponsorshipFrequencyUnit':
       
             return null ;
       
        
       
      
      
      case 'sponsorshipMaxCount':
       
             return null ;
       
        
       
      
      
      case 'fixedEarnFrequencyUnit':
       
             return null ;
       
        
       
      
      
      case 'fixedEarnValue':
       
             return null ;
       
        
       
      
      
      case 'fixedEarnMaxCount':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




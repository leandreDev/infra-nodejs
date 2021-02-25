import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;


import {Entity_service } from "./service"


/**
  retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
*/
export class Entity_mailtoinfra2 extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'mailtoinfra2' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["ssoBdUrl"] != undefined){
          
           obj["ssoBdUrl"] = obj["ssoBdUrl"].toString() ;
           
        }
        
    
        
        if(obj["infraBdUrl"] != undefined){
          
           obj["infraBdUrl"] = obj["infraBdUrl"].toString() ;
           
        }
        
    
        
        if(obj["savyLearnerId"] != undefined){
          
          if(_.isString(obj["savyLearnerId"])){
            obj["savyLearnerId"] = new mongo.ObjectId(obj["savyLearnerId"]);
          }else if(obj["savyLearnerId"]._id){
            obj["savyLearnerId"] = new mongo.ObjectId(obj["savyLearnerId"]._id) ;
          }
          
        }
        
    
        
        if(obj["confMapping"] != undefined && obj["confMapping"] != null && _.isArray(obj["confMapping"])){
          

            obj["confMapping"].forEach((value)=>{
              
                Index.Entity_mail_connexion_conf.cast(value) ;
                
              
            })
          
        }
        
    
  }


 

public static checkssoBdUrl(val:any, path:string =null):string[]{
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


       
 

public static checkinfraBdUrl(val:any, path:string =null):string[]{
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


       
 

public static checksavyLearnerId(val:any, path:string =null):string[]{
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


       
 

public static checkconfMapping(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_mail_connexion_conf.check(val , false , path  ) ;
            //5979bfd206ee6fc48225a476

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
          
              

              
              if( isCompleteObj && (target.ssoBdUrl == null || target.ssoBdUrl == undefined) ){
                err.push(path + ".ssoBdUrl is required") ;
              }
              

              if(target.ssoBdUrl != null && target.ssoBdUrl != undefined ){
                
                
                res = Entity_mailtoinfra2.checkssoBdUrl(target.ssoBdUrl , `${path}.ssoBdUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.infraBdUrl == null || target.infraBdUrl == undefined) ){
                err.push(path + ".infraBdUrl is required") ;
              }
              

              if(target.infraBdUrl != null && target.infraBdUrl != undefined ){
                
                
                res = Entity_mailtoinfra2.checkinfraBdUrl(target.infraBdUrl , `${path}.infraBdUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.savyLearnerId != null && target.savyLearnerId != undefined ){
                
                
                res = Entity_mailtoinfra2.checksavyLearnerId(target.savyLearnerId , `${path}.savyLearnerId`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.confMapping != null && target.confMapping != undefined ){
                
                
                target.confMapping.forEach((data, index)=>{
                  res = Entity_mailtoinfra2.checkconfMapping(target.confMapping[index] , `${path}.confMapping.${index}` ) ;
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
          
            case 'ssoBdUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'infraBdUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'savyLearnerId':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'confMapping':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_mail_connexion_conf.castQueryParam(subPath ,value) ;
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
          
      
      case 'ssoBdUrl':
       
             return null ;
       
        
       
      
      
      case 'infraBdUrl':
       
             return null ;
       
        
       
      
      
      case 'savyLearnerId':
       
        
       
              return 'application' ;
              
      
      
      case 'confMapping':
       
        
              
             return Index.Entity_mail_connexion_conf.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




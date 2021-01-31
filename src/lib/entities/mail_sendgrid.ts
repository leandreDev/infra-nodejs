import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_mail } from "./mail"


/**
  objet envoyé a l'api sendgrid 
*/
export class Entity_mail_sendgrid extends   Entity_mail    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'mail_sendgrid' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_mail.cast(obj , true)
    
    
        
        if(obj["content"] != undefined){
          
           obj["content"] = obj["content"].toString() ;
           
        }
        
    
        
        if(obj["from"] != undefined){
          
           obj["from"] = obj["from"].toString() ;
           
        }
        
    
        
        if(obj["personalizations"] != undefined){
          
           obj["personalizations"] = obj["personalizations"].toString() ;
           
        }
        
    
        
        if(obj["reply_to"] != undefined){
          
           obj["reply_to"] = obj["reply_to"].toString() ;
           
        }
        
    
        
        if(obj["subject"] != undefined){
          
           obj["subject"] = obj["subject"].toString() ;
           
        }
        
    
        
        if(obj["send_at"] != undefined){
          
            obj["send_at"] = new Date(obj["send_at"]) ;
          
        }
        
    
        
        if(obj["template_id"] != undefined){
          
           obj["template_id"] = obj["template_id"].toString() ;
           
        }
        
    
  }


 

public static checkcontent(val:any, path:string =null):string[]{
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


       
 

public static checkfrom(val:any, path:string =null):string[]{
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


       
 

public static checkpersonalizations(val:any, path:string =null):string[]{
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


       
 

public static checkreply_to(val:any, path:string =null):string[]{
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


       
 

public static checksubject(val:any, path:string =null):string[]{
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


       
 

public static checksend_at(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         
          if( ! _.isDate(val)){
            res.push(`${path}  is not a Date`) ;
          }
          
          
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checktemplate_id(val:any, path:string =null):string[]{
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
        
          err = Entity_mail.check(target, isCompleteObj , path) ;
          
              

              

              if(target.content != null && target.content != undefined ){
                
                
                res = Entity_mail_sendgrid.checkcontent(target.content , `${path}.content`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.from != null && target.from != undefined ){
                
                
                res = Entity_mail_sendgrid.checkfrom(target.from , `${path}.from`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.personalizations != null && target.personalizations != undefined ){
                
                
                res = Entity_mail_sendgrid.checkpersonalizations(target.personalizations , `${path}.personalizations`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.reply_to != null && target.reply_to != undefined ){
                
                
                res = Entity_mail_sendgrid.checkreply_to(target.reply_to , `${path}.reply_to`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.subject != null && target.subject != undefined ){
                
                
                res = Entity_mail_sendgrid.checksubject(target.subject , `${path}.subject`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.send_at != null && target.send_at != undefined ){
                
                
                res = Entity_mail_sendgrid.checksend_at(target.send_at , `${path}.send_at`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.template_id != null && target.template_id != undefined ){
                
                
                res = Entity_mail_sendgrid.checktemplate_id(target.template_id , `${path}.template_id`) ;
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
          
            case 'content':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'from':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'personalizations':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'reply_to':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'subject':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'send_at':
              //date
              
              
              
              
              return new Date(value) ;
              
              
              
              
            break;
          
            case 'template_id':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
         
          default:
            return Entity_mail  .castQueryParam(key, value) ;
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
          
      
      case 'content':
       
             return null ;
       
        
       
      
      
      case 'from':
       
             return null ;
       
        
       
      
      
      case 'personalizations':
       
             return null ;
       
        
       
      
      
      case 'reply_to':
       
             return null ;
       
        
       
      
      
      case 'subject':
       
             return null ;
       
        
       
      
      
      case 'send_at':
       
             return null ;
       
        
       
      
      
      case 'template_id':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_mail  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  compte de l'utilisateur
*/
export class Model_oidc_account extends  Base  implements Interface.Ioidc_account {

/**
  compte de l'utilisateur
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["account_id"] != undefined){
          
           this["account_id"] = obj["account_id"].toString() ;
           
        }
        
    
        
        if(obj["birthdate"] != undefined){
          
            this["birthdate"] = new Date(obj["birthdate"]) ;
          
        }
        
    
        
        if(obj["email"] != undefined){
          
           this["email"] = obj["email"].toString() ;
           
        }
        
    
        
        if(obj["email_verified"] != undefined){
          
           this["email_verified"] = new Boolean(obj["email_verified"]).valueOf() ;
          
        }
        
    
        
        if(obj["family_name"] != undefined){
          
           this["family_name"] = obj["family_name"].toString() ;
           
        }
        
    
        
        if(obj["gender"] != undefined){
          
           this["gender"] = obj["gender"].toString() ;
           
        }
        
    
        
        if(obj["given_name"] != undefined){
          
           this["given_name"] = obj["given_name"].toString() ;
           
        }
        
    
        
        if(obj["locale"] != undefined){
          
           this["locale"] = obj["locale"].toString() ;
           
        }
        
    
        
        if(obj["middle_name"] != undefined){
          
           this["middle_name"] = obj["middle_name"].toString() ;
           
        }
        
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["nickname"] != undefined){
          
           this["nickname"] = obj["nickname"].toString() ;
           
        }
        
    
        
        if(obj["phone_number"] != undefined){
          
           this["phone_number"] = obj["phone_number"].toString() ;
           
        }
        
    
        
        if(obj["phone_number_verified"] != undefined){
          
           this["phone_number_verified"] = new Boolean(obj["phone_number_verified"]).valueOf() ;
          
        }
        
    
        
        if(obj["password"] != undefined){
          
           this["password"] = obj["password"].toString() ;
           
        }
        
    
        
        if(obj["picture"] != undefined){
          
           this["picture"] = obj["picture"].toString() ;
           
        }
        
    
        
        if(obj["connector"] != undefined && obj["connector"] != null && _.isArray(obj["connector"])){
          

            this["connector"] = obj["connector"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["social_data"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "oidc_account" ;

        
              /**
        id du compte
        */
               public "account_id":string ;
              
       
              /**
        birthdate
        */
               public "birthdate"?:Date ;
              
       
              /**
        email
        */
               public "email":string ;
              
       
              /**
        email_verified
        */
               public "email_verified"?:boolean ;
              
       
              /**
        family_name
        */
               public "family_name"?:string ;
              
       
              /**
        gender
        */
               public "gender"?:string ;
              
       
              /**
        given_name
        */
               public "given_name"?:string ;
              
       
              /**
        locale
        */
               public "locale"?:string ;
              
       
              /**
        middle_name
        */
               public "middle_name"?:string ;
              
       
              /**
        name
        */
               public "name"?:string ;
              
       
              /**
        nickname
        */
               public "nickname"?:string ;
              
       
              /**
        phone_number
        */
               public "phone_number"?:string ;
              
       
              /**
        phone_number_verified
        */
               public "phone_number_verified"?:boolean ;
              
       
              /**
        l’empreinte du mot de passe
        */
               public "password"?:string ;
              
       
              /**
        url de l'avatar
        */
               public "picture"?:string ;
              
       
              /**
        profile sociaux
        */
               public "connector"?:Interface.Isocial_data[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["account_id"] == null || target["account_id"] == undefined) ){
                  throw new Error(path + "account_id is required") ;
              }
              
              if(target["account_id"] != null && target["account_id"] != undefined ){
              
                let _account_id  = target["account_id"] ;
                

                 if(! _.isString(_account_id)){
                    throw new Error(path+"account_id is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["birthdate"] != null && target["birthdate"] != undefined ){
              
                let _birthdate  = target["birthdate"] ;
                
                if(! _.isDate(_birthdate)){

                      throw new Error(path+"birthdate is not a Date") ;
                      
                }
                
                
                
              
              
           }
           
              
              if( isCompleteObj && (target["email"] == null || target["email"] == undefined) ){
                  throw new Error(path + "email is required") ;
              }
              
              if(target["email"] != null && target["email"] != undefined ){
              
                let _email  = target["email"] ;
                

                 if(! _.isString(_email)){
                    throw new Error(path+"email is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["email_verified"] != null && target["email_verified"] != undefined ){
              
                let _email_verified  = target["email_verified"] ;
                
                  if(! _.isBoolean(_email_verified)){
                    throw new Error(path+"email_verified is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["family_name"] != null && target["family_name"] != undefined ){
              
                let _family_name  = target["family_name"] ;
                

                 if(! _.isString(_family_name)){
                    throw new Error(path+"family_name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["gender"] != null && target["gender"] != undefined ){
              
                let _gender  = target["gender"] ;
                

                 if(! _.isString(_gender)){
                    throw new Error(path+"gender is not a string") ;
                    
                  }
                  
                  
                    let _enum_gender:string[] = ["Mr","Mme"] ;
                    if(_enum_gender.indexOf(_gender)==-1){
                        throw new Error(path+"gender dont match one of Mr , Mme" ) ;
                        
                    }
                  
                 
              
              
           }
           
              
              if(target["given_name"] != null && target["given_name"] != undefined ){
              
                let _given_name  = target["given_name"] ;
                

                 if(! _.isString(_given_name)){
                    throw new Error(path+"given_name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["locale"] != null && target["locale"] != undefined ){
              
                let _locale  = target["locale"] ;
                

                 if(! _.isString(_locale)){
                    throw new Error(path+"locale is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["middle_name"] != null && target["middle_name"] != undefined ){
              
                let _middle_name  = target["middle_name"] ;
                

                 if(! _.isString(_middle_name)){
                    throw new Error(path+"middle_name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["nickname"] != null && target["nickname"] != undefined ){
              
                let _nickname  = target["nickname"] ;
                

                 if(! _.isString(_nickname)){
                    throw new Error(path+"nickname is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["phone_number"] != null && target["phone_number"] != undefined ){
              
                let _phone_number  = target["phone_number"] ;
                

                 if(! _.isString(_phone_number)){
                    throw new Error(path+"phone_number is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["phone_number_verified"] != null && target["phone_number_verified"] != undefined ){
              
                let _phone_number_verified  = target["phone_number_verified"] ;
                
                  if(! _.isBoolean(_phone_number_verified)){
                    throw new Error(path+"phone_number_verified is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["password"] != null && target["password"] != undefined ){
              
                let _password  = target["password"] ;
                

                 if(! _.isString(_password)){
                    throw new Error(path+"password is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["picture"] != null && target["picture"] != undefined ){
              
                let _picture  = target["picture"] ;
                

                 if(! _.isString(_picture)){
                    throw new Error(path+"picture is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["connector"] != null && target["connector"] != undefined ){
              
                  target["connector"].forEach((_connector , index:number)=>{
                  
                  
                    promArr.push( Index["social_data"].check(_connector, isCompleteObj , path+"connector.")
                      .catch((err)=>{
                        throw new Error(path+"connector index: "+ index +"is not social_data")
                        

                      }) )
                  if(_connector._class != null && _connector._class != undefined){
                    promArr.push( Index[_connector._class].check(_connector, isCompleteObj , path+"connector.")
                      .catch((err)=>{
                        throw new Error(path+"connector index: "+ index +"is not a " + _connector._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_oidc_account>{
        return Model_oidc_account.check(target, true, path).then(()=>{
          return new Model_oidc_account(target) ;
        })
      }

   }

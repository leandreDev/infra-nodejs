import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config de l'app minds up
*/
export class Model_AppConf_minds_up extends   Model_application_configuration   implements Interface.IAppConf_minds_up {

/**
  config de l'app minds up
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["introTitle"] != undefined){
          
           this["introTitle"] = obj["introTitle"].toString() ;
           
        }
        
    
        
        if(obj["introText"] != undefined){
          
           this["introText"] = obj["introText"].toString() ;
           
        }
        
    
        
        if(obj["videoUrl"] != undefined){
          
           this["videoUrl"] = obj["videoUrl"].toString() ;
           
        }
        
    
        
        if(obj["rgpd"] != undefined){
          
           this["rgpd"] = obj["rgpd"].toString() ;
           
        }
        
    
        
        if(obj["serviceMindsUpUrl"] != undefined){
          
           this["serviceMindsUpUrl"] = obj["serviceMindsUpUrl"].toString() ;
           
        }
        
    
        
        if(obj["managerObservable"] != undefined){
          
           this["managerObservable"] = new Boolean(obj["managerObservable"]).valueOf() ;
          
        }
        
    
        
        if(obj["managerAutoExchange"] != undefined){
          
           this["managerAutoExchange"] = new Boolean(obj["managerAutoExchange"]).valueOf() ;
          
        }
        
    
        
        if(obj["apiUrl"] != undefined){
          
           this["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
        
        if(obj["module360"] != undefined){
          
           this["module360"] = new Boolean(obj["module360"]).valueOf() ;
          
        }
        
    
        
        if(obj["moduleRepo"] != undefined){
          
           this["moduleRepo"] = new Boolean(obj["moduleRepo"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "AppConf_minds_up" ;

        
              /**
        titre de l'introduction
        */
               public "introTitle"?:string ;
              
       
              /**
        texte de l'introduction
        */
               public "introText"?:string ;
              
       
              /**
        url de la video d intro sur youtub
        */
               public "videoUrl"?:string ;
              
       
              /**
        texte à afficher pour valider la rgpd
        */
               public "rgpd"?:string ;
              
       
              /**
        url du service metier mindsUp
        */
               public "serviceMindsUpUrl":string ;
              
       
              /**
        indique si l'on peut observer son manager
        */
               public "managerObservable"?:boolean ;
              
       
              /**
        défini si le manager peut créer un échange sur lui même
        */
               public "managerAutoExchange"?:boolean ;
              
       
              /**
        url de l'api de la bdd minds Up
        */
               public "apiUrl":string ;
              
       
              /**
        definit si le module 360 est actif
        */
               public "module360"?:boolean ;
              
       
              /**
        définie si le module repo est accéssible
        */
               public "moduleRepo"?:boolean =true;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["introTitle"] != null && target["introTitle"] != undefined ){
              
                let _introTitle  = target["introTitle"] ;
                

                 if(! _.isString(_introTitle)){
                    throw new Error(path+"introTitle is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["introText"] != null && target["introText"] != undefined ){
              
                let _introText  = target["introText"] ;
                

                 if(! _.isString(_introText)){
                    throw new Error(path+"introText is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["videoUrl"] != null && target["videoUrl"] != undefined ){
              
                let _videoUrl  = target["videoUrl"] ;
                

                 if(! _.isString(_videoUrl)){
                    throw new Error(path+"videoUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["rgpd"] != null && target["rgpd"] != undefined ){
              
                let _rgpd  = target["rgpd"] ;
                

                 if(! _.isString(_rgpd)){
                    throw new Error(path+"rgpd is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["serviceMindsUpUrl"] == null || target["serviceMindsUpUrl"] == undefined) ){
                  throw new Error(path + "serviceMindsUpUrl is required") ;
              }
              
              if(target["serviceMindsUpUrl"] != null && target["serviceMindsUpUrl"] != undefined ){
              
                let _serviceMindsUpUrl  = target["serviceMindsUpUrl"] ;
                

                 if(! _.isString(_serviceMindsUpUrl)){
                    throw new Error(path+"serviceMindsUpUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["managerObservable"] != null && target["managerObservable"] != undefined ){
              
                let _managerObservable  = target["managerObservable"] ;
                
                  if(! _.isBoolean(_managerObservable)){
                    throw new Error(path+"managerObservable is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["managerAutoExchange"] != null && target["managerAutoExchange"] != undefined ){
              
                let _managerAutoExchange  = target["managerAutoExchange"] ;
                
                  if(! _.isBoolean(_managerAutoExchange)){
                    throw new Error(path+"managerAutoExchange is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if( isCompleteObj && (target["apiUrl"] == null || target["apiUrl"] == undefined) ){
                  throw new Error(path + "apiUrl is required") ;
              }
              
              if(target["apiUrl"] != null && target["apiUrl"] != undefined ){
              
                let _apiUrl  = target["apiUrl"] ;
                

                 if(! _.isString(_apiUrl)){
                    throw new Error(path+"apiUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["module360"] != null && target["module360"] != undefined ){
              
                let _module360  = target["module360"] ;
                
                  if(! _.isBoolean(_module360)){
                    throw new Error(path+"module360 is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["moduleRepo"] != null && target["moduleRepo"] != undefined ){
              
                let _moduleRepo  = target["moduleRepo"] ;
                
                  if(! _.isBoolean(_moduleRepo)){
                    throw new Error(path+"moduleRepo is not a boolean") ;
                    
                  }
                

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_AppConf_minds_up>{
        return Model_AppConf_minds_up.check(target, true, path).then(()=>{
          return new Model_AppConf_minds_up(target) ;
        })
      }

   }

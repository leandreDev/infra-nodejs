import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  c'est la configuration d'une application Apprenant
*/
export class Model_application_configuration_appApprenant extends   Model_application_configuration   implements Interface.Iapplication_configuration_appApprenant {

/**
  c'est la configuration d'une application Apprenant
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["forumUrl"] != undefined){
          
           this["forumUrl"] = obj["forumUrl"].toString() ;
           
        }
        
    
        
        if(obj["fileServiceUrl"] != undefined){
          
           this["fileServiceUrl"] = obj["fileServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["URL_FileService"] != undefined){
          
           this["URL_FileService"] = obj["URL_FileService"].toString() ;
           
        }
        
    
        
        if(obj["configurationUrlDb"] != undefined){
          
           this["configurationUrlDb"] = obj["configurationUrlDb"].toString() ;
           
        }
        
    
        
        if(obj["urlBase"] != undefined){
          
           this["urlBase"] = obj["urlBase"].toString() ;
           
        }
        
    
        
        if(obj["likeServiceUrl"] != undefined){
          
           this["likeServiceUrl"] = obj["likeServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["aclTemplate"] != undefined){
          
            if(obj._class){
              this["aclTemplate"] =  new Index[obj._class](obj["aclTemplate"]) ;
            }else{
              this["aclTemplate"] =  new Index["_acl"](obj["aclTemplate"]) ;
            }
          
        }
        
    
        
        if(obj["trainingCourseServiceUrl"] != undefined){
          
           this["trainingCourseServiceUrl"] = obj["trainingCourseServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["syncSoketioUrl"] != undefined){
          
           this["syncSoketioUrl"] = obj["syncSoketioUrl"].toString() ;
           
        }
        
    
        
        if(obj["syncSoketioPath"] != undefined){
          
           this["syncSoketioPath"] = obj["syncSoketioPath"].toString() ;
           
        }
        
    
        
        if(obj["tutorVideoCallUrl"] != undefined){
          
           this["tutorVideoCallUrl"] = obj["tutorVideoCallUrl"].toString() ;
           
        }
        
    
        
        if(obj["tutorServiceUrl"] != undefined){
          
           this["tutorServiceUrl"] = obj["tutorServiceUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_appApprenant" ;

        
              /**
        url de service de bdd du forum
        */
               public "forumUrl"?:string ;
              
       
              /**
        url du file service pour le forum
        */
               public "fileServiceUrl"?:string ;
              
       
              /**
        url du file service du drive
        */
               public "URL_FileService"?:string ;
              
       
              /**
        c'est l'url de la base de donnée de l'application
        */
               public "configurationUrlDb":string ;
              
       
              /**
        l'url racine des services
        */
               public "urlBase":string ;
              
       
              /**
        l'url du service de like et note
        */
               public "likeServiceUrl":string ;
              
       
              /**
        template générique a appliquer aux enregistrements
        */
               public "aclTemplate"?:Interface.I_acl;
              
       
              /**
        url du service trainning course
        */
               public "trainingCourseServiceUrl":string ;
              
       
              /**
        url du soketio avec le namespace
        */
               public "syncSoketioUrl":string ;
              
       
              /**
        le path d'acces pour le soket.io
        */
               public "syncSoketioPath":string ;
              
       
              /**
        url du service de video call
        */
               public "tutorVideoCallUrl":string ;
              
       
              /**
        url du service de tutora
        */
               public "tutorServiceUrl":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["forumUrl"] != null && target["forumUrl"] != undefined ){
              
                let _forumUrl  = target["forumUrl"] ;
                

                 if(! _.isString(_forumUrl)){
                    throw new Error(path+"forumUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["fileServiceUrl"] != null && target["fileServiceUrl"] != undefined ){
              
                let _fileServiceUrl  = target["fileServiceUrl"] ;
                

                 if(! _.isString(_fileServiceUrl)){
                    throw new Error(path+"fileServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["URL_FileService"] != null && target["URL_FileService"] != undefined ){
              
                let _URL_FileService  = target["URL_FileService"] ;
                

                 if(! _.isString(_URL_FileService)){
                    throw new Error(path+"URL_FileService is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["configurationUrlDb"] == null || target["configurationUrlDb"] == undefined) ){
                  throw new Error(path + "configurationUrlDb is required") ;
              }
              
              if(target["configurationUrlDb"] != null && target["configurationUrlDb"] != undefined ){
              
                let _configurationUrlDb  = target["configurationUrlDb"] ;
                

                 if(! _.isString(_configurationUrlDb)){
                    throw new Error(path+"configurationUrlDb is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["urlBase"] == null || target["urlBase"] == undefined) ){
                  throw new Error(path + "urlBase is required") ;
              }
              
              if(target["urlBase"] != null && target["urlBase"] != undefined ){
              
                let _urlBase  = target["urlBase"] ;
                

                 if(! _.isString(_urlBase)){
                    throw new Error(path+"urlBase is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["likeServiceUrl"] == null || target["likeServiceUrl"] == undefined) ){
                  throw new Error(path + "likeServiceUrl is required") ;
              }
              
              if(target["likeServiceUrl"] != null && target["likeServiceUrl"] != undefined ){
              
                let _likeServiceUrl  = target["likeServiceUrl"] ;
                

                 if(! _.isString(_likeServiceUrl)){
                    throw new Error(path+"likeServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["aclTemplate"] != null && target["aclTemplate"] != undefined ){
              
                  let _aclTemplate  = target["aclTemplate"] ;
                  
                  
                    promArr.push( Index["_acl"].check(_aclTemplate, isCompleteObj , path+"aclTemplate.")
                      .catch((err)=>{
                        throw new Error(path+"aclTemplate is not ") ;
                        

                      }) )
                  if(_aclTemplate._class != null && _aclTemplate._class != undefined){
                    promArr.push( Index[_aclTemplate._class].check(_aclTemplate, isCompleteObj , path+"aclTemplate.")
                      .catch((err)=>{
                        throw new Error(path+"aclTemplate is not a " + _aclTemplate._class ) ;
                        

                      })
                    )
                  }

                  
              
              
           }
           
              
              if( isCompleteObj && (target["trainingCourseServiceUrl"] == null || target["trainingCourseServiceUrl"] == undefined) ){
                  throw new Error(path + "trainingCourseServiceUrl is required") ;
              }
              
              if(target["trainingCourseServiceUrl"] != null && target["trainingCourseServiceUrl"] != undefined ){
              
                let _trainingCourseServiceUrl  = target["trainingCourseServiceUrl"] ;
                

                 if(! _.isString(_trainingCourseServiceUrl)){
                    throw new Error(path+"trainingCourseServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["syncSoketioUrl"] == null || target["syncSoketioUrl"] == undefined) ){
                  throw new Error(path + "syncSoketioUrl is required") ;
              }
              
              if(target["syncSoketioUrl"] != null && target["syncSoketioUrl"] != undefined ){
              
                let _syncSoketioUrl  = target["syncSoketioUrl"] ;
                

                 if(! _.isString(_syncSoketioUrl)){
                    throw new Error(path+"syncSoketioUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["syncSoketioPath"] == null || target["syncSoketioPath"] == undefined) ){
                  throw new Error(path + "syncSoketioPath is required") ;
              }
              
              if(target["syncSoketioPath"] != null && target["syncSoketioPath"] != undefined ){
              
                let _syncSoketioPath  = target["syncSoketioPath"] ;
                

                 if(! _.isString(_syncSoketioPath)){
                    throw new Error(path+"syncSoketioPath is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["tutorVideoCallUrl"] == null || target["tutorVideoCallUrl"] == undefined) ){
                  throw new Error(path + "tutorVideoCallUrl is required") ;
              }
              
              if(target["tutorVideoCallUrl"] != null && target["tutorVideoCallUrl"] != undefined ){
              
                let _tutorVideoCallUrl  = target["tutorVideoCallUrl"] ;
                

                 if(! _.isString(_tutorVideoCallUrl)){
                    throw new Error(path+"tutorVideoCallUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["tutorServiceUrl"] == null || target["tutorServiceUrl"] == undefined) ){
                  throw new Error(path + "tutorServiceUrl is required") ;
              }
              
              if(target["tutorServiceUrl"] != null && target["tutorServiceUrl"] != undefined ){
              
                let _tutorServiceUrl  = target["tutorServiceUrl"] ;
                

                 if(! _.isString(_tutorServiceUrl)){
                    throw new Error(path+"tutorServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_application_configuration_appApprenant>{
        return Model_application_configuration_appApprenant.check(target, true, path).then(()=>{
          return new Model_application_configuration_appApprenant(target) ;
        })
      }

   }

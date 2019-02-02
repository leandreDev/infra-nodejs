import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  configuration de l'application superAdminMongo
*/
export class Model_application_configuration_super_admin_mongo extends   Model_application_configuration   implements Interface.Iapplication_configuration_super_admin_mongo {

/**
  configuration de l'application superAdminMongo
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["servicesUrl"] != undefined && obj["servicesUrl"] != null && _.isArray(obj["servicesUrl"])){
          
           this["servicesUrl"] = obj["servicesUrl"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["forumUrl"] != undefined){
          
           this["forumUrl"] = obj["forumUrl"].toString() ;
           
        }
        
    
        
        if(obj["fileServiceUrl"] != undefined){
          
           this["fileServiceUrl"] = obj["fileServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["URL_FileService"] != undefined){
          
           this["URL_FileService"] = obj["URL_FileService"].toString() ;
           
        }
        
    
        
        if(obj["nginx"] != undefined && obj["nginx"] != null && _.isArray(obj["nginx"])){
          

            this["nginx"] = obj["nginx"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["name_url"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["supervisor"] != undefined && obj["supervisor"] != null && _.isArray(obj["supervisor"])){
          

            this["supervisor"] = obj["supervisor"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["name_url"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["menu"] != undefined && obj["menu"] != null && _.isArray(obj["menu"])){
          

            this["menu"] = obj["menu"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["ui_menu_mongo_editor"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["entityUrl"] != undefined && obj["entityUrl"] != null && _.isArray(obj["entityUrl"])){
          

            this["entityUrl"] = obj["entityUrl"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["entity_source"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["entityName"] != undefined && obj["entityName"] != null && _.isArray(obj["entityName"])){
          

            this["entityName"] = obj["entityName"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["schema_name"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "application_configuration_super_admin_mongo" ;

        
              /**
        liste des url des services de base mongo
        */
               public "servicesUrl"?:string[];
              
       
              /**
        l'url du forum
        */
               public "forumUrl"?:string ;
              
       
              /**
        l'url du remote fso 
        */
               public "fileServiceUrl"?:string ;
              
       
              /**
        url du file service
        */
               public "URL_FileService"?:string ;
              
       
              /**
        nginx
        */
               public "nginx"?:Interface.Iname_url[];
              
       
              /**
        liste des service de supervision
        */
               public "supervisor"?:Interface.Iname_url[];
              
       
              /**
        menu de l'appli
        */
               public "menu"?:Interface.Iui_menu_mongo_editor[];
              
       
              /**
        entityUrl
        */
               public "entityUrl"?:Interface.Ientity_source[];
              
       
              /**
        permet de paramétrer le rendu des schemas
        */
               public "entityName"?:Interface.Ischema_name[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["servicesUrl"] != null && target["servicesUrl"] != undefined ){
              
                target["servicesUrl"].forEach((_servicesUrl , index:number)=>{
                

                 if(! _.isString(_servicesUrl)){
                    throw new Error(path+"servicesUrl index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
              
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
           
              
              if(target["nginx"] != null && target["nginx"] != undefined ){
              
                  target["nginx"].forEach((_nginx , index:number)=>{
                  
                  
                    promArr.push( Index["name_url"].check(_nginx, isCompleteObj , path+"nginx.")
                      .catch((err)=>{
                        throw new Error(path+"nginx index: "+ index +"is not name_url")
                        

                      }) )
                  if(_nginx._class != null && _nginx._class != undefined){
                    promArr.push( Index[_nginx._class].check(_nginx, isCompleteObj , path+"nginx.")
                      .catch((err)=>{
                        throw new Error(path+"nginx index: "+ index +"is not a " + _nginx._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["supervisor"] != null && target["supervisor"] != undefined ){
              
                  target["supervisor"].forEach((_supervisor , index:number)=>{
                  
                  
                    promArr.push( Index["name_url"].check(_supervisor, isCompleteObj , path+"supervisor.")
                      .catch((err)=>{
                        throw new Error(path+"supervisor index: "+ index +"is not name_url")
                        

                      }) )
                  if(_supervisor._class != null && _supervisor._class != undefined){
                    promArr.push( Index[_supervisor._class].check(_supervisor, isCompleteObj , path+"supervisor.")
                      .catch((err)=>{
                        throw new Error(path+"supervisor index: "+ index +"is not a " + _supervisor._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["menu"] != null && target["menu"] != undefined ){
              
                  target["menu"].forEach((_menu , index:number)=>{
                  
                  
                    promArr.push( Index["ui_menu_mongo_editor"].check(_menu, isCompleteObj , path+"menu.")
                      .catch((err)=>{
                        throw new Error(path+"menu index: "+ index +"is not ui_menu_mongo_editor")
                        

                      }) )
                  if(_menu._class != null && _menu._class != undefined){
                    promArr.push( Index[_menu._class].check(_menu, isCompleteObj , path+"menu.")
                      .catch((err)=>{
                        throw new Error(path+"menu index: "+ index +"is not a " + _menu._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["entityUrl"] != null && target["entityUrl"] != undefined ){
              
                  target["entityUrl"].forEach((_entityUrl , index:number)=>{
                  
                  
                    promArr.push( Index["entity_source"].check(_entityUrl, isCompleteObj , path+"entityUrl.")
                      .catch((err)=>{
                        throw new Error(path+"entityUrl index: "+ index +"is not entity_source")
                        

                      }) )
                  if(_entityUrl._class != null && _entityUrl._class != undefined){
                    promArr.push( Index[_entityUrl._class].check(_entityUrl, isCompleteObj , path+"entityUrl.")
                      .catch((err)=>{
                        throw new Error(path+"entityUrl index: "+ index +"is not a " + _entityUrl._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["entityName"] != null && target["entityName"] != undefined ){
              
                  target["entityName"].forEach((_entityName , index:number)=>{
                  
                  
                    promArr.push( Index["schema_name"].check(_entityName, isCompleteObj , path+"entityName.")
                      .catch((err)=>{
                        throw new Error(path+"entityName index: "+ index +"is not schema_name")
                        

                      }) )
                  if(_entityName._class != null && _entityName._class != undefined){
                    promArr.push( Index[_entityName._class].check(_entityName, isCompleteObj , path+"entityName.")
                      .catch((err)=>{
                        throw new Error(path+"entityName index: "+ index +"is not a " + _entityName._class )
                        

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

      public static create(target:any, path:string=""):Promise<Model_application_configuration_super_admin_mongo>{
        return Model_application_configuration_super_admin_mongo.check(target, true, path).then(()=>{
          return new Model_application_configuration_super_admin_mongo(target) ;
        })
      }

   }

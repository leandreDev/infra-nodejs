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
              
       


       

   }

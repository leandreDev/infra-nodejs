import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_application } from "./Model_application"


/**
  c'est un paquet de carte
*/
export class Model_pack_card extends   Model_application   implements Interface.Ipack_card {

/**
  c'est un paquet de carte
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["imageUrl"] != undefined){
          
           this["imageUrl"] = obj["imageUrl"].toString() ;
           
        }
        
    
        
        if(obj["companyName"] != undefined){
          
           this["companyName"] = obj["companyName"].toString() ;
           
        }
        
    
        
        if(obj["companyId"] != undefined){
          
           this["companyId"] = obj["companyId"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "pack_card" ;

        
              /**
        l'url de l'image
        */
               public "imageUrl"?:string ;
              
       
              /**
        nom de la compagnie dans l'infra de goshaba 
        */
               public "companyName"?:string ;
              
       
              /**
        l'id de la compagnie dans l'infra de goshaba
        */
               public "companyId"?:string ;
              
       


       

   }

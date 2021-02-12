import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_service } from "./Model_service"


/**
  passerelle pour goshaba
*/
export class Model_service_goshabaGateway extends   Model_service   implements Interface.Iservice_goshabaGateway {

/**
  passerelle pour goshaba
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["privateKey"] != undefined){
          
           this["privateKey"] = obj["privateKey"].toString() ;
           
        }
        
    
        
        if(obj["packUrl"] != undefined){
          
           this["packUrl"] = obj["packUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_goshabaGateway" ;

        
              /**
        clef privée d'echange entre les serveurs
        */
               public "privateKey":string ;
              
       
              /**
        url de la collection de pack de carte
        */
               public "packUrl":string ;
              
       


       

   }

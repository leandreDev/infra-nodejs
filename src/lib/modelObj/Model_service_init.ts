import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
*/
export class Model_service_init extends   Model_service   implements Interface.Iservice_init {

/**
  service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "service_init" ;

        


       

   }

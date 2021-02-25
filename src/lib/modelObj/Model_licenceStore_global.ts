import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_licenceStore } from "./Model_licenceStore"


/**
  licence store dont les applications sont le catalogue du client
*/
export class Model_licenceStore_global extends   Model_licenceStore   implements Interface.IlicenceStore_global {

/**
  licence store dont les applications sont le catalogue du client
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "licenceStore_global" ;

        


       

   }

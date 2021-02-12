import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
*/
export class Model_service_serviceOrchestrator extends  Base  implements Interface.Iservice_serviceOrchestrator {

/**
  service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "service_serviceOrchestrator" ;

        


       

   }

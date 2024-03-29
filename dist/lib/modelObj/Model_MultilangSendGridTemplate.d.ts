import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  décrit un template multi langue d'envoie de mail avec sendGrid
*/
export declare class Model_MultilangSendGridTemplate extends Base implements Interface.IMultilangSendGridTemplate {
    /**
      décrit un template multi langue d'envoie de mail avec sendGrid
    */
    constructor(obj?: any);
    _class: string;
    /**
le nom du template
*/
    "name": string;
    /**
liste des Template sendgrid
*/
    "sendGridTemplates"?: Interface.IsendGridTemplate[];
}

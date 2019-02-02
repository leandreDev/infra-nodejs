import * as Interface from "./Interfaces";
import { Model_mail } from "./Model_mail";
/**
  objet envoyé a l'api sendgrid
*/
export declare class Model_mail_sendgrid extends Model_mail implements Interface.Imail_sendgrid {
    /**
      objet envoyé a l'api sendgrid
    */
    constructor(obj?: any);
    _class: string;
    /**
content
*/
    "content"?: string;
    /**
from
*/
    "from"?: string;
    /**
personalizations
*/
    "personalizations"?: string;
    /**
reply_to
*/
    "reply_to"?: string;
    /**
subject
*/
    "subject"?: string;
    /**
la date d'envoie demandé
*/
    "send_at"?: Date;
    /**
template_id
*/
    "template_id"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_mail_sendgrid>;
}

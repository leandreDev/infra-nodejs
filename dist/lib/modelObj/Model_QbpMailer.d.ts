import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  configuration pour l'envoie d emails QBP
*/
export declare class Model_QbpMailer extends Base implements Interface.IQbpMailer {
    /**
      configuration pour l'envoie d emails QBP
    */
    constructor(obj?: any);
    _class: string;
    /**
Email de qbp
*/
    "qbpEmailContact"?: string;
    /**
Adresse mail affiché lorsque l'utilisateur reçois un mail
*/
    "senderEmail"?: string;
    /**
Nom affiche dans les en-tete du mail
*/
    "senderName"?: string;
    /**
Adresse du site , exemple qbp.justplug.info en dev ou quelbonplan.fr en prod
*/
    "qbpBaseUrl"?: string;
    /**
Url de l'api sendgrid pour quelbonplan
*/
    "qbpSendgridApiUrl"?: string;
    /**
Commande annulé
*/
    "orderCanceled"?: string;
    /**
Délais de livraison pour la commande
*/
    "orderDeliveryDelais"?: string;
    /**
Demande de retour SAV
*/
    "afterSalesRequest"?: string;
    /**
Enlèvement colis pour retour 14 jours a bien été pris en charge par le transporteur
*/
    "fourteenDaysBackPickingConfirmed"?: string;
    /**
Demande de rétractation 14 jours a été acceptée
*/
    "fourteenDaysBackRefundAccepted"?: string;
    /**
Bon de transport pour effectuer retour 14 jours
*/
    "fourteenDaysBackShippingLabel"?: string;
    /**
Demande de retour sous 14 jours
*/
    "fourteenDaysBackRequest"?: string;
    /**
Retractations 14 jours refusé
*/
    "fourteenDaysBackRefusal"?: string;
    /**
Demande de rétractation 14 jours remboursé
*/
    "fourteenDaysBackRefund"?: string;
    /**
Demande de retour SAV a été acceptée
*/
    "afterSalesAccepted"?: string;
    /**
Bon de transport pour effectuer votre retour SAV
*/
    "afterSalesShippingLabel"?: string;
    /**
Colis pour votre retour SAV
*/
    "afterSalesPickingConfirmed"?: string;
    /**
Colis a bien été réceptionné par le vendeur.
*/
    "afterSalesDelivered"?: string;
    /**
Demande de retour SAV a été refusée
*/
    "afterSalesRefusal"?: string;
    /**
Retour SAV a été refusée par par le vendeur
*/
    "afterSalesVendorRefusal"?: string;
    /**
Préparation de la commande
*/
    "orderPreparation"?: string;
    /**
Commande délivré
*/
    "orderDelivered"?: string;
    /**
Réiniatialiser mot de passe
*/
    "errorPasswordCustomer"?: string;
    /**
Commande rembourser
*/
    "refund"?: string;
    /**
Message informatif
*/
    "infoShipmentCustomer"?: string;
    /**
Creation de compte client
*/
    "creationAccountCustomer"?: string;
    /**
Commande pris en charge par le transporteur
*/
    "orderShipped"?: string;
    /**
Avis client
*/
    "customerReview"?: string;
    /**
Vous avez reçu un message du client
*/
    "sellerCustomerRequest"?: string;
    /**
Mail pour prévenir DPD d'un ramassage a effectuer en point relais
*/
    "qbpRamassesDpd"?: string;
    /**
Prevenir le vendeur que une commande a été passer
*/
    "sellerOrderPreparation"?: string;
    /**
Demande d'ajout d'un nouveau model de la part d'un vendeur
*/
    "qbpProductRequest"?: string;
    /**
Confirmation de commande
*/
    "confirmOrderCustomer"?: string;
    /**
Notifié DPD pour un enlévement
*/
    "notifyDpd"?: boolean;
    /**
Previens le client quand vendeur lui a répondu
*/
    "sellerMessage"?: string;
    /**
Message comme quoi nous avons bien recus ça demande
*/
    "customerContactMessage"?: string;
    /**
Message de prise de contact a destination de quelbonplan
*/
    "contactMessage"?: string;
    /**
Demande de facture de la part d'un client pour une commande donné
*/
    "customerInvoiceRequest"?: string;
    /**
Message a destination d'un client pour le sav
*/
    "afterSalesMessageCustomer"?: string;
    /**
Message a destination d'un seller pour le sav
*/
    "afterSalesMessageSeller"?: string;
    /**
mail de ramassage en point relais
*/
    "qbpRelaisRamassesDpd"?: string;
    /**
Mail de fermeture de ticket
*/
    "qbpAfterSalesClose"?: string;
    /**
le mail qu'on envoie au client pour quil puisse realiser un virement bancaire pour payer sa commande
*/
    "qbpBankWireInformations"?: string;
    /**
template de mail pour informer le SAV qu'il y a un probleme avec un payin par virement bancaire
*/
    "bankWirePayinError"?: string;
    /**
Colis en retractation delivrer en vendeur
*/
    "retractationDeliveredToSeller"?: string;
    /**
Colis retour sav livre au vendeur
*/
    "savReturnDeliveredToSeller"?: string;
    /**
Confirmation de livraison chez le vendeur
*/
    "fourteenDaysBackConfirmation"?: string;
}

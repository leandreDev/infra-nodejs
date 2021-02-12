

import {UtilsSecu , CtxInterpretor ,IHttpResult , IBase ,HttpServiceBase , HttpServiceAdminBase ,HttpAbstractService ,  MiddleWareConfig } from "@hfdev/utils" ;

import * as Interfaces from "../../lib/modelObj/Interfaces" ;
import {IPlateforme} from './IPlateforme' ;


export class api_collection_plateform  {

	constructor(conf:any ){
	this.url = conf.url ;
	this.secure = conf.secure ;
	

		this.certificat= new HttpServiceBase<Interfaces.Icertificat>( {url:conf.url + "collection/certificat/" , secure:conf.secure} )  ;
		this.admin_certificat= new HttpServiceAdminBase<Interfaces.Icertificat>( {url:conf.url + "admin/certificat/" , secure:conf.secure} )  ;

		
		 
		this.rsa= new HttpServiceBase<Interfaces.Irsa>({url:conf.url + "collection/rsa/" , secure:conf.secure})  ;
		this.admin_rsa= new HttpServiceAdminBase<Interfaces.Irsa>({url:conf.url + "admin/rsa/" , secure:conf.secure})  ;

		 
	

		this.oidc_Client= new HttpServiceBase<Interfaces.Ioidc_Client>( {url:conf.url + "collection/oidc_Client/" , secure:conf.secure} )  ;
		this.admin_oidc_Client= new HttpServiceAdminBase<Interfaces.Ioidc_Client>( {url:conf.url + "admin/oidc_Client/" , secure:conf.secure} )  ;

		
	

		this.oidc_account= new HttpServiceBase<Interfaces.Ioidc_account>( {url:conf.url + "collection/oidc_account/" , secure:conf.secure} )  ;
		this.admin_oidc_account= new HttpServiceAdminBase<Interfaces.Ioidc_account>( {url:conf.url + "admin/oidc_account/" , secure:conf.secure} )  ;

		
	

		this.service_access= new HttpServiceBase<Interfaces.Iservice_access>( {url:conf.url + "collection/service_access/" , secure:conf.secure} )  ;
		this.admin_service_access= new HttpServiceAdminBase<Interfaces.Iservice_access>( {url:conf.url + "admin/service_access/" , secure:conf.secure} )  ;

		
	

		this.protoschema= new HttpServiceBase<Interfaces.Iprotoschema>( {url:conf.url + "collection/protoschema/" , secure:conf.secure} )  ;
		this.admin_protoschema= new HttpServiceAdminBase<Interfaces.Iprotoschema>( {url:conf.url + "admin/protoschema/" , secure:conf.secure} )  ;

		
	

		this.mail= new HttpServiceBase<Interfaces.Imail>( {url:conf.url + "collection/mail/" , secure:conf.secure} )  ;
		this.admin_mail= new HttpServiceAdminBase<Interfaces.Imail>( {url:conf.url + "admin/mail/" , secure:conf.secure} )  ;

		
		 
		this.mail_sendgrid= new HttpServiceBase<Interfaces.Imail_sendgrid>({url:conf.url + "collection/mail_sendgrid/" , secure:conf.secure})  ;
		this.admin_mail_sendgrid= new HttpServiceAdminBase<Interfaces.Imail_sendgrid>({url:conf.url + "admin/mail_sendgrid/" , secure:conf.secure})  ;

		 
	

		this.service_serviceOrchestrator= new HttpServiceBase<Interfaces.Iservice_serviceOrchestrator>( {url:conf.url + "collection/service_serviceOrchestrator/" , secure:conf.secure} )  ;
		this.admin_service_serviceOrchestrator= new HttpServiceAdminBase<Interfaces.Iservice_serviceOrchestrator>( {url:conf.url + "admin/service_serviceOrchestrator/" , secure:conf.secure} )  ;

		
	

		this._view= new HttpServiceBase<Interfaces.I_view>( {url:conf.url + "collection/_view/" , secure:conf.secure} )  ;
		this.admin__view= new HttpServiceAdminBase<Interfaces.I_view>( {url:conf.url + "admin/_view/" , secure:conf.secure} )  ;

		
		 
		this._view_params= new HttpServiceBase<Interfaces.I_view_params>({url:conf.url + "collection/_view_params/" , secure:conf.secure})  ;
		this.admin__view_params= new HttpServiceAdminBase<Interfaces.I_view_params>({url:conf.url + "admin/_view_params/" , secure:conf.secure})  ;

		 
	

		this.licence= new HttpServiceBase<Interfaces.Ilicence>( {url:conf.url + "collection/licence/" , secure:conf.secure} )  ;
		this.admin_licence= new HttpServiceAdminBase<Interfaces.Ilicence>( {url:conf.url + "admin/licence/" , secure:conf.secure} )  ;

		
		 
		this.licence_temporelle= new HttpServiceBase<Interfaces.Ilicence_temporelle>({url:conf.url + "collection/licence_temporelle/" , secure:conf.secure})  ;
		this.admin_licence_temporelle= new HttpServiceAdminBase<Interfaces.Ilicence_temporelle>({url:conf.url + "admin/licence_temporelle/" , secure:conf.secure})  ;

		 
	

		this.MultilangSendGridTemplate= new HttpServiceBase<Interfaces.IMultilangSendGridTemplate>( {url:conf.url + "collection/MultilangSendGridTemplate/" , secure:conf.secure} )  ;
		this.admin_MultilangSendGridTemplate= new HttpServiceAdminBase<Interfaces.IMultilangSendGridTemplate>( {url:conf.url + "admin/MultilangSendGridTemplate/" , secure:conf.secure} )  ;

		
	

		this.application= new HttpServiceBase<Interfaces.Iapplication>( {url:conf.url + "collection/application/" , secure:conf.secure} )  ;
		this.admin_application= new HttpServiceAdminBase<Interfaces.Iapplication>( {url:conf.url + "admin/application/" , secure:conf.secure} )  ;

		
		 
		this.pack_card= new HttpServiceBase<Interfaces.Ipack_card>({url:conf.url + "collection/pack_card/" , secure:conf.secure})  ;
		this.admin_pack_card= new HttpServiceAdminBase<Interfaces.Ipack_card>({url:conf.url + "admin/pack_card/" , secure:conf.secure})  ;

		 
	

		this.TemplateLodash= new HttpServiceBase<Interfaces.ITemplateLodash>( {url:conf.url + "collection/TemplateLodash/" , secure:conf.secure} )  ;
		this.admin_TemplateLodash= new HttpServiceAdminBase<Interfaces.ITemplateLodash>( {url:conf.url + "admin/TemplateLodash/" , secure:conf.secure} )  ;

		
	

		this.end_client= new HttpServiceBase<Interfaces.Iend_client>( {url:conf.url + "collection/end_client/" , secure:conf.secure} )  ;
		this.admin_end_client= new HttpServiceAdminBase<Interfaces.Iend_client>( {url:conf.url + "admin/end_client/" , secure:conf.secure} )  ;

		
	

		this.Request= new HttpServiceBase<Interfaces.IRequest>( {url:conf.url + "collection/Request/" , secure:conf.secure} )  ;
		this.admin_Request= new HttpServiceAdminBase<Interfaces.IRequest>( {url:conf.url + "admin/Request/" , secure:conf.secure} )  ;

		
	

		this.ftpsConfig= new HttpServiceBase<Interfaces.IftpsConfig>( {url:conf.url + "collection/ftpsConfig/" , secure:conf.secure} )  ;
		this.admin_ftpsConfig= new HttpServiceAdminBase<Interfaces.IftpsConfig>( {url:conf.url + "admin/ftpsConfig/" , secure:conf.secure} )  ;

		
	

		this.application_configuration= new HttpServiceBase<Interfaces.Iapplication_configuration>( {url:conf.url + "collection/application_configuration/" , secure:conf.secure} )  ;
		this.admin_application_configuration= new HttpServiceAdminBase<Interfaces.Iapplication_configuration>( {url:conf.url + "admin/application_configuration/" , secure:conf.secure} )  ;

		
		 
		this.application_configuration_phoneCard= new HttpServiceBase<Interfaces.Iapplication_configuration_phoneCard>({url:conf.url + "collection/application_configuration_phoneCard/" , secure:conf.secure})  ;
		this.admin_application_configuration_phoneCard= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_phoneCard>({url:conf.url + "admin/application_configuration_phoneCard/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_appCoach= new HttpServiceBase<Interfaces.Iapplication_configuration_appCoach>({url:conf.url + "collection/application_configuration_appCoach/" , secure:conf.secure})  ;
		this.admin_application_configuration_appCoach= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_appCoach>({url:conf.url + "admin/application_configuration_appCoach/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_super_admin_mongo= new HttpServiceBase<Interfaces.Iapplication_configuration_super_admin_mongo>({url:conf.url + "collection/application_configuration_super_admin_mongo/" , secure:conf.secure})  ;
		this.admin_application_configuration_super_admin_mongo= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_super_admin_mongo>({url:conf.url + "admin/application_configuration_super_admin_mongo/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_antico= new HttpServiceBase<Interfaces.Iapplication_configuration_antico>({url:conf.url + "collection/application_configuration_antico/" , secure:conf.secure})  ;
		this.admin_application_configuration_antico= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_antico>({url:conf.url + "admin/application_configuration_antico/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_appClient= new HttpServiceBase<Interfaces.Iapplication_configuration_appClient>({url:conf.url + "collection/application_configuration_appClient/" , secure:conf.secure})  ;
		this.admin_application_configuration_appClient= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_appClient>({url:conf.url + "admin/application_configuration_appClient/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_appApprenant= new HttpServiceBase<Interfaces.Iapplication_configuration_appApprenant>({url:conf.url + "collection/application_configuration_appApprenant/" , secure:conf.secure})  ;
		this.admin_application_configuration_appApprenant= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_appApprenant>({url:conf.url + "admin/application_configuration_appApprenant/" , secure:conf.secure})  ;

		 
		 
		this.AppConf_minds_up_admin= new HttpServiceBase<Interfaces.IAppConf_minds_up_admin>({url:conf.url + "collection/AppConf_minds_up_admin/" , secure:conf.secure})  ;
		this.admin_AppConf_minds_up_admin= new HttpServiceAdminBase<Interfaces.IAppConf_minds_up_admin>({url:conf.url + "admin/AppConf_minds_up_admin/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_reportApp= new HttpServiceBase<Interfaces.Iapplication_configuration_reportApp>({url:conf.url + "collection/application_configuration_reportApp/" , secure:conf.secure})  ;
		this.admin_application_configuration_reportApp= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_reportApp>({url:conf.url + "admin/application_configuration_reportApp/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_celio2020Admin= new HttpServiceBase<Interfaces.Iapplication_configuration_celio2020Admin>({url:conf.url + "collection/application_configuration_celio2020Admin/" , secure:conf.secure})  ;
		this.admin_application_configuration_celio2020Admin= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_celio2020Admin>({url:conf.url + "admin/application_configuration_celio2020Admin/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_manu_admin= new HttpServiceBase<Interfaces.Iapplication_configuration_manu_admin>({url:conf.url + "collection/application_configuration_manu_admin/" , secure:conf.secure})  ;
		this.admin_application_configuration_manu_admin= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_manu_admin>({url:conf.url + "admin/application_configuration_manu_admin/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_comptoire_or_admin= new HttpServiceBase<Interfaces.Iapplication_configuration_comptoire_or_admin>({url:conf.url + "collection/application_configuration_comptoire_or_admin/" , secure:conf.secure})  ;
		this.admin_application_configuration_comptoire_or_admin= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_comptoire_or_admin>({url:conf.url + "admin/application_configuration_comptoire_or_admin/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_celiofront= new HttpServiceBase<Interfaces.Iapplication_configuration_celiofront>({url:conf.url + "collection/application_configuration_celiofront/" , secure:conf.secure})  ;
		this.admin_application_configuration_celiofront= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_celiofront>({url:conf.url + "admin/application_configuration_celiofront/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_celioback= new HttpServiceBase<Interfaces.Iapplication_configuration_celioback>({url:conf.url + "collection/application_configuration_celioback/" , secure:conf.secure})  ;
		this.admin_application_configuration_celioback= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_celioback>({url:conf.url + "admin/application_configuration_celioback/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_celioadmin= new HttpServiceBase<Interfaces.Iapplication_configuration_celioadmin>({url:conf.url + "collection/application_configuration_celioadmin/" , secure:conf.secure})  ;
		this.admin_application_configuration_celioadmin= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_celioadmin>({url:conf.url + "admin/application_configuration_celioadmin/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_ferrand= new HttpServiceBase<Interfaces.Iapplication_configuration_ferrand>({url:conf.url + "collection/application_configuration_ferrand/" , secure:conf.secure})  ;
		this.admin_application_configuration_ferrand= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_ferrand>({url:conf.url + "admin/application_configuration_ferrand/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_celio= new HttpServiceBase<Interfaces.Iapplication_configuration_celio>({url:conf.url + "collection/application_configuration_celio/" , secure:conf.secure})  ;
		this.admin_application_configuration_celio= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_celio>({url:conf.url + "admin/application_configuration_celio/" , secure:conf.secure})  ;

		 
		 
		this.AppConf_minds_up= new HttpServiceBase<Interfaces.IAppConf_minds_up>({url:conf.url + "collection/AppConf_minds_up/" , secure:conf.secure})  ;
		this.admin_AppConf_minds_up= new HttpServiceAdminBase<Interfaces.IAppConf_minds_up>({url:conf.url + "admin/AppConf_minds_up/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_petit_moulin= new HttpServiceBase<Interfaces.Iapplication_configuration_petit_moulin>({url:conf.url + "collection/application_configuration_petit_moulin/" , secure:conf.secure})  ;
		this.admin_application_configuration_petit_moulin= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_petit_moulin>({url:conf.url + "admin/application_configuration_petit_moulin/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_petit_moulin_admin= new HttpServiceBase<Interfaces.Iapplication_configuration_petit_moulin_admin>({url:conf.url + "collection/application_configuration_petit_moulin_admin/" , secure:conf.secure})  ;
		this.admin_application_configuration_petit_moulin_admin= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_petit_moulin_admin>({url:conf.url + "admin/application_configuration_petit_moulin_admin/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_qbp= new HttpServiceBase<Interfaces.Iapplication_configuration_qbp>({url:conf.url + "collection/application_configuration_qbp/" , secure:conf.secure})  ;
		this.admin_application_configuration_qbp= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_qbp>({url:conf.url + "admin/application_configuration_qbp/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_qbp_admin_seller= new HttpServiceBase<Interfaces.Iapplication_configuration_qbp_admin_seller>({url:conf.url + "collection/application_configuration_qbp_admin_seller/" , secure:conf.secure})  ;
		this.admin_application_configuration_qbp_admin_seller= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_qbp_admin_seller>({url:conf.url + "admin/application_configuration_qbp_admin_seller/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_qbp_admin= new HttpServiceBase<Interfaces.Iapplication_configuration_qbp_admin>({url:conf.url + "collection/application_configuration_qbp_admin/" , secure:conf.secure})  ;
		this.admin_application_configuration_qbp_admin= new HttpServiceAdminBase<Interfaces.Iapplication_configuration_qbp_admin>({url:conf.url + "admin/application_configuration_qbp_admin/" , secure:conf.secure})  ;

		 
	

		this.application_instance= new HttpServiceBase<Interfaces.Iapplication_instance>( {url:conf.url + "collection/application_instance/" , secure:conf.secure} )  ;
		this.admin_application_instance= new HttpServiceAdminBase<Interfaces.Iapplication_instance>( {url:conf.url + "admin/application_instance/" , secure:conf.secure} )  ;

		
	

		this.service= new HttpServiceBase<Interfaces.Iservice>( {url:conf.url + "collection/service/" , secure:conf.secure} )  ;
		this.admin_service= new HttpServiceAdminBase<Interfaces.Iservice>( {url:conf.url + "admin/service/" , secure:conf.secure} )  ;

		
		 
		this.service_sso= new HttpServiceBase<Interfaces.Iservice_sso>({url:conf.url + "collection/service_sso/" , secure:conf.secure})  ;
		this.admin_service_sso= new HttpServiceAdminBase<Interfaces.Iservice_sso>({url:conf.url + "admin/service_sso/" , secure:conf.secure})  ;

		 
		 
		this.service_init= new HttpServiceBase<Interfaces.Iservice_init>({url:conf.url + "collection/service_init/" , secure:conf.secure})  ;
		this.admin_service_init= new HttpServiceAdminBase<Interfaces.Iservice_init>({url:conf.url + "admin/service_init/" , secure:conf.secure})  ;

		 
		 
		this.service_mailtoinfra= new HttpServiceBase<Interfaces.Iservice_mailtoinfra>({url:conf.url + "collection/service_mailtoinfra/" , secure:conf.secure})  ;
		this.admin_service_mailtoinfra= new HttpServiceAdminBase<Interfaces.Iservice_mailtoinfra>({url:conf.url + "admin/service_mailtoinfra/" , secure:conf.secure})  ;

		 
		 
		this.service_licence_token= new HttpServiceBase<Interfaces.Iservice_licence_token>({url:conf.url + "collection/service_licence_token/" , secure:conf.secure})  ;
		this.admin_service_licence_token= new HttpServiceAdminBase<Interfaces.Iservice_licence_token>({url:conf.url + "admin/service_licence_token/" , secure:conf.secure})  ;

		 
		 
		this.service_goshabaGateway= new HttpServiceBase<Interfaces.Iservice_goshabaGateway>({url:conf.url + "collection/service_goshabaGateway/" , secure:conf.secure})  ;
		this.admin_service_goshabaGateway= new HttpServiceAdminBase<Interfaces.Iservice_goshabaGateway>({url:conf.url + "admin/service_goshabaGateway/" , secure:conf.secure})  ;

		 
		 
		this.service_socketIo= new HttpServiceBase<Interfaces.Iservice_socketIo>({url:conf.url + "collection/service_socketIo/" , secure:conf.secure})  ;
		this.admin_service_socketIo= new HttpServiceAdminBase<Interfaces.Iservice_socketIo>({url:conf.url + "admin/service_socketIo/" , secure:conf.secure})  ;

		 
		 
		this.service_supervision= new HttpServiceBase<Interfaces.Iservice_supervision>({url:conf.url + "collection/service_supervision/" , secure:conf.secure})  ;
		this.admin_service_supervision= new HttpServiceAdminBase<Interfaces.Iservice_supervision>({url:conf.url + "admin/service_supervision/" , secure:conf.secure})  ;

		 
		 
		this.service_configuration= new HttpServiceBase<Interfaces.Iservice_configuration>({url:conf.url + "collection/service_configuration/" , secure:conf.secure})  ;
		this.admin_service_configuration= new HttpServiceAdminBase<Interfaces.Iservice_configuration>({url:conf.url + "admin/service_configuration/" , secure:conf.secure})  ;

		 
		 
		this.service_nginxConfigurator= new HttpServiceBase<Interfaces.Iservice_nginxConfigurator>({url:conf.url + "collection/service_nginxConfigurator/" , secure:conf.secure})  ;
		this.admin_service_nginxConfigurator= new HttpServiceAdminBase<Interfaces.Iservice_nginxConfigurator>({url:conf.url + "admin/service_nginxConfigurator/" , secure:conf.secure})  ;

		 
		 
		this.service_push_notification= new HttpServiceBase<Interfaces.Iservice_push_notification>({url:conf.url + "collection/service_push_notification/" , secure:conf.secure})  ;
		this.admin_service_push_notification= new HttpServiceAdminBase<Interfaces.Iservice_push_notification>({url:conf.url + "admin/service_push_notification/" , secure:conf.secure})  ;

		 
		 
		this.service_like= new HttpServiceBase<Interfaces.Iservice_like>({url:conf.url + "collection/service_like/" , secure:conf.secure})  ;
		this.admin_service_like= new HttpServiceAdminBase<Interfaces.Iservice_like>({url:conf.url + "admin/service_like/" , secure:conf.secure})  ;

		 
		 
		this.service_dumy_fso= new HttpServiceBase<Interfaces.Iservice_dumy_fso>({url:conf.url + "collection/service_dumy_fso/" , secure:conf.secure})  ;
		this.admin_service_dumy_fso= new HttpServiceAdminBase<Interfaces.Iservice_dumy_fso>({url:conf.url + "admin/service_dumy_fso/" , secure:conf.secure})  ;

		 
		 
		this.service_sendGrid= new HttpServiceBase<Interfaces.Iservice_sendGrid>({url:conf.url + "collection/service_sendGrid/" , secure:conf.secure})  ;
		this.admin_service_sendGrid= new HttpServiceAdminBase<Interfaces.Iservice_sendGrid>({url:conf.url + "admin/service_sendGrid/" , secure:conf.secure})  ;

		 
		 
		this.service_trainingCoursesService= new HttpServiceBase<Interfaces.Iservice_trainingCoursesService>({url:conf.url + "collection/service_trainingCoursesService/" , secure:conf.secure})  ;
		this.admin_service_trainingCoursesService= new HttpServiceAdminBase<Interfaces.Iservice_trainingCoursesService>({url:conf.url + "admin/service_trainingCoursesService/" , secure:conf.secure})  ;

		 
		 
		this.service_orchestrator= new HttpServiceBase<Interfaces.Iservice_orchestrator>({url:conf.url + "collection/service_orchestrator/" , secure:conf.secure})  ;
		this.admin_service_orchestrator= new HttpServiceAdminBase<Interfaces.Iservice_orchestrator>({url:conf.url + "admin/service_orchestrator/" , secure:conf.secure})  ;

		 
		 
		this.service_socket_io= new HttpServiceBase<Interfaces.Iservice_socket_io>({url:conf.url + "collection/service_socket_io/" , secure:conf.secure})  ;
		this.admin_service_socket_io= new HttpServiceAdminBase<Interfaces.Iservice_socket_io>({url:conf.url + "admin/service_socket_io/" , secure:conf.secure})  ;

		 
		 
		this.service_tutor= new HttpServiceBase<Interfaces.Iservice_tutor>({url:conf.url + "collection/service_tutor/" , secure:conf.secure})  ;
		this.admin_service_tutor= new HttpServiceAdminBase<Interfaces.Iservice_tutor>({url:conf.url + "admin/service_tutor/" , secure:conf.secure})  ;

		 
		 
		this.service_init_js= new HttpServiceBase<Interfaces.Iservice_init_js>({url:conf.url + "collection/service_init_js/" , secure:conf.secure})  ;
		this.admin_service_init_js= new HttpServiceAdminBase<Interfaces.Iservice_init_js>({url:conf.url + "admin/service_init_js/" , secure:conf.secure})  ;

		 
		 
		this.service_infra_admin= new HttpServiceBase<Interfaces.Iservice_infra_admin>({url:conf.url + "collection/service_infra_admin/" , secure:conf.secure})  ;
		this.admin_service_infra_admin= new HttpServiceAdminBase<Interfaces.Iservice_infra_admin>({url:conf.url + "admin/service_infra_admin/" , secure:conf.secure})  ;

		 
		 
		this.mailtoinfra2= new HttpServiceBase<Interfaces.Imailtoinfra2>({url:conf.url + "collection/mailtoinfra2/" , secure:conf.secure})  ;
		this.admin_mailtoinfra2= new HttpServiceAdminBase<Interfaces.Imailtoinfra2>({url:conf.url + "admin/mailtoinfra2/" , secure:conf.secure})  ;

		 
		 
		this.service_planned_tasks= new HttpServiceBase<Interfaces.Iservice_planned_tasks>({url:conf.url + "collection/service_planned_tasks/" , secure:conf.secure})  ;
		this.admin_service_planned_tasks= new HttpServiceAdminBase<Interfaces.Iservice_planned_tasks>({url:conf.url + "admin/service_planned_tasks/" , secure:conf.secure})  ;

		 
		 
		this.Service_scorm_gateway= new HttpServiceBase<Interfaces.IService_scorm_gateway>({url:conf.url + "collection/Service_scorm_gateway/" , secure:conf.secure})  ;
		this.admin_Service_scorm_gateway= new HttpServiceAdminBase<Interfaces.IService_scorm_gateway>({url:conf.url + "admin/Service_scorm_gateway/" , secure:conf.secure})  ;

		 
		 
		this.service_nginxMultiConfigurator= new HttpServiceBase<Interfaces.Iservice_nginxMultiConfigurator>({url:conf.url + "collection/service_nginxMultiConfigurator/" , secure:conf.secure})  ;
		this.admin_service_nginxMultiConfigurator= new HttpServiceAdminBase<Interfaces.Iservice_nginxMultiConfigurator>({url:conf.url + "admin/service_nginxMultiConfigurator/" , secure:conf.secure})  ;

		 
		 
		this.service_client_ftp= new HttpServiceBase<Interfaces.Iservice_client_ftp>({url:conf.url + "collection/service_client_ftp/" , secure:conf.secure})  ;
		this.admin_service_client_ftp= new HttpServiceAdminBase<Interfaces.Iservice_client_ftp>({url:conf.url + "admin/service_client_ftp/" , secure:conf.secure})  ;

		 
		 
		this.service_polo_celio= new HttpServiceBase<Interfaces.Iservice_polo_celio>({url:conf.url + "collection/service_polo_celio/" , secure:conf.secure})  ;
		this.admin_service_polo_celio= new HttpServiceAdminBase<Interfaces.Iservice_polo_celio>({url:conf.url + "admin/service_polo_celio/" , secure:conf.secure})  ;

		 
		 
		this.service_fso= new HttpServiceBase<Interfaces.Iservice_fso>({url:conf.url + "collection/service_fso/" , secure:conf.secure})  ;
		this.admin_service_fso= new HttpServiceAdminBase<Interfaces.Iservice_fso>({url:conf.url + "admin/service_fso/" , secure:conf.secure})  ;

		 
		 
		this.service_pdfrip= new HttpServiceBase<Interfaces.Iservice_pdfrip>({url:conf.url + "collection/service_pdfrip/" , secure:conf.secure})  ;
		this.admin_service_pdfrip= new HttpServiceAdminBase<Interfaces.Iservice_pdfrip>({url:conf.url + "admin/service_pdfrip/" , secure:conf.secure})  ;

		 
		 
		this.service_signin= new HttpServiceBase<Interfaces.Iservice_signin>({url:conf.url + "collection/service_signin/" , secure:conf.secure})  ;
		this.admin_service_signin= new HttpServiceAdminBase<Interfaces.Iservice_signin>({url:conf.url + "admin/service_signin/" , secure:conf.secure})  ;

		 
		 
		this.service_mindsUp= new HttpServiceBase<Interfaces.Iservice_mindsUp>({url:conf.url + "collection/service_mindsUp/" , secure:conf.secure})  ;
		this.admin_service_mindsUp= new HttpServiceAdminBase<Interfaces.Iservice_mindsUp>({url:conf.url + "admin/service_mindsUp/" , secure:conf.secure})  ;

		 
		 
		this.service_webAppConf= new HttpServiceBase<Interfaces.Iservice_webAppConf>({url:conf.url + "collection/service_webAppConf/" , secure:conf.secure})  ;
		this.admin_service_webAppConf= new HttpServiceAdminBase<Interfaces.Iservice_webAppConf>({url:conf.url + "admin/service_webAppConf/" , secure:conf.secure})  ;

		 
		 
		this.swagger_conv= new HttpServiceBase<Interfaces.Iswagger_conv>({url:conf.url + "collection/swagger_conv/" , secure:conf.secure})  ;
		this.admin_swagger_conv= new HttpServiceAdminBase<Interfaces.Iswagger_conv>({url:conf.url + "admin/swagger_conv/" , secure:conf.secure})  ;

		 
		 
		this.service_mongo= new HttpServiceBase<Interfaces.Iservice_mongo>({url:conf.url + "collection/service_mongo/" , secure:conf.secure})  ;
		this.admin_service_mongo= new HttpServiceAdminBase<Interfaces.Iservice_mongo>({url:conf.url + "admin/service_mongo/" , secure:conf.secure})  ;

		 
		 
		this.service_celio_qcm_admin= new HttpServiceBase<Interfaces.Iservice_celio_qcm_admin>({url:conf.url + "collection/service_celio_qcm_admin/" , secure:conf.secure})  ;
		this.admin_service_celio_qcm_admin= new HttpServiceAdminBase<Interfaces.Iservice_celio_qcm_admin>({url:conf.url + "admin/service_celio_qcm_admin/" , secure:conf.secure})  ;

		 
		 
		this.service_ferrand= new HttpServiceBase<Interfaces.Iservice_ferrand>({url:conf.url + "collection/service_ferrand/" , secure:conf.secure})  ;
		this.admin_service_ferrand= new HttpServiceAdminBase<Interfaces.Iservice_ferrand>({url:conf.url + "admin/service_ferrand/" , secure:conf.secure})  ;

		 
		 
		this.service_petit_moulin= new HttpServiceBase<Interfaces.Iservice_petit_moulin>({url:conf.url + "collection/service_petit_moulin/" , secure:conf.secure})  ;
		this.admin_service_petit_moulin= new HttpServiceAdminBase<Interfaces.Iservice_petit_moulin>({url:conf.url + "admin/service_petit_moulin/" , secure:conf.secure})  ;

		 
		 
		this.service_celio_fid= new HttpServiceBase<Interfaces.Iservice_celio_fid>({url:conf.url + "collection/service_celio_fid/" , secure:conf.secure})  ;
		this.admin_service_celio_fid= new HttpServiceAdminBase<Interfaces.Iservice_celio_fid>({url:conf.url + "admin/service_celio_fid/" , secure:conf.secure})  ;

		 
		 
		this.service_celio_qcm= new HttpServiceBase<Interfaces.Iservice_celio_qcm>({url:conf.url + "collection/service_celio_qcm/" , secure:conf.secure})  ;
		this.admin_service_celio_qcm= new HttpServiceAdminBase<Interfaces.Iservice_celio_qcm>({url:conf.url + "admin/service_celio_qcm/" , secure:conf.secure})  ;

		 
		 
		this.service_comptoireOr= new HttpServiceBase<Interfaces.Iservice_comptoireOr>({url:conf.url + "collection/service_comptoireOr/" , secure:conf.secure})  ;
		this.admin_service_comptoireOr= new HttpServiceAdminBase<Interfaces.Iservice_comptoireOr>({url:conf.url + "admin/service_comptoireOr/" , secure:conf.secure})  ;

		 
		 
		this.service_celio_back_task= new HttpServiceBase<Interfaces.Iservice_celio_back_task>({url:conf.url + "collection/service_celio_back_task/" , secure:conf.secure})  ;
		this.admin_service_celio_back_task= new HttpServiceAdminBase<Interfaces.Iservice_celio_back_task>({url:conf.url + "admin/service_celio_back_task/" , secure:conf.secure})  ;

		 
		 
		this.service_celio_fid_admin= new HttpServiceBase<Interfaces.Iservice_celio_fid_admin>({url:conf.url + "collection/service_celio_fid_admin/" , secure:conf.secure})  ;
		this.admin_service_celio_fid_admin= new HttpServiceAdminBase<Interfaces.Iservice_celio_fid_admin>({url:conf.url + "admin/service_celio_fid_admin/" , secure:conf.secure})  ;

		 
		 
		this.service_airport= new HttpServiceBase<Interfaces.Iservice_airport>({url:conf.url + "collection/service_airport/" , secure:conf.secure})  ;
		this.admin_service_airport= new HttpServiceAdminBase<Interfaces.Iservice_airport>({url:conf.url + "admin/service_airport/" , secure:conf.secure})  ;

		 
		 
		this.QBP_service= new HttpServiceBase<Interfaces.IQBP_service>({url:conf.url + "collection/QBP_service/" , secure:conf.secure})  ;
		this.admin_QBP_service= new HttpServiceAdminBase<Interfaces.IQBP_service>({url:conf.url + "admin/QBP_service/" , secure:conf.secure})  ;

		 
	
	}
	protected url:string ;
	protected secure: UtilsSecu = null
	
		/**
		 service d'accès à la collection :certificat
		 desc: certificat
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Irsa      certificat RSA
		 
		 
		*/
		public certificat:HttpServiceBase<Interfaces.Icertificat> ;
		public admin_certificat:HttpServiceAdminBase<Interfaces.Icertificat> ;

		
		 /**
		 service d'accès a la sous-collection :rsa
		 desc: certificat RSA
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public rsa:HttpServiceBase<Interfaces.Irsa> ;
		public admin_rsa:HttpServiceAdminBase<Interfaces.Irsa> ;

		 
	
		/**
		 service d'accès à la collection :oidc_Client
		 desc: description d'un client openId (c'est une application)
		 

		 
		*/
		public oidc_Client:HttpServiceBase<Interfaces.Ioidc_Client> ;
		public admin_oidc_Client:HttpServiceAdminBase<Interfaces.Ioidc_Client> ;

		
	
		/**
		 service d'accès à la collection :oidc_account
		 desc: compte de l'utilisateur
		 

		 
		*/
		public oidc_account:HttpServiceBase<Interfaces.Ioidc_account> ;
		public admin_oidc_account:HttpServiceAdminBase<Interfaces.Ioidc_account> ;

		
	
		/**
		 service d'accès à la collection :service_access
		 desc: décrit les régles de paramètre des servies
		 

		 
		*/
		public service_access:HttpServiceBase<Interfaces.Iservice_access> ;
		public admin_service_access:HttpServiceAdminBase<Interfaces.Iservice_access> ;

		
	
		/**
		 service d'accès à la collection :protoschema
		 desc: protoschema est un méta modéle. il permet de créer les autres modèle de la base
		 

		 
		*/
		public protoschema:HttpServiceBase<Interfaces.Iprotoschema> ;
		public admin_protoschema:HttpServiceAdminBase<Interfaces.Iprotoschema> ;

		
	
		/**
		 service d'accès à la collection :mail
		 desc: collection de mail
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Imail_sendgrid      objet envoyé a l'api sendgrid 
		 
		 
		*/
		public mail:HttpServiceBase<Interfaces.Imail> ;
		public admin_mail:HttpServiceAdminBase<Interfaces.Imail> ;

		
		 /**
		 service d'accès a la sous-collection :mail_sendgrid
		 desc: objet envoyé a l'api sendgrid 
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public mail_sendgrid:HttpServiceBase<Interfaces.Imail_sendgrid> ;
		public admin_mail_sendgrid:HttpServiceAdminBase<Interfaces.Imail_sendgrid> ;

		 
	
		/**
		 service d'accès à la collection :service_serviceOrchestrator
		 desc: service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
		 

		 
		*/
		public service_serviceOrchestrator:HttpServiceBase<Interfaces.Iservice_serviceOrchestrator> ;
		public admin_service_serviceOrchestrator:HttpServiceAdminBase<Interfaces.Iservice_serviceOrchestrator> ;

		
	
		/**
		 service d'accès à la collection :_view
		 desc: créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	I_view_params      view avec des params
		 
		 
		*/
		public _view:HttpServiceBase<Interfaces.I_view> ;
		public admin__view:HttpServiceAdminBase<Interfaces.I_view> ;

		
		 /**
		 service d'accès a la sous-collection :_view_params
		 desc: view avec des params
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public _view_params:HttpServiceBase<Interfaces.I_view_params> ;
		public admin__view_params:HttpServiceAdminBase<Interfaces.I_view_params> ;

		 
	
		/**
		 service d'accès à la collection :licence
		 desc: représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Ilicence_temporelle      c'est une licence qui dure un certain temps
		 
		 
		*/
		public licence:HttpServiceBase<Interfaces.Ilicence> ;
		public admin_licence:HttpServiceAdminBase<Interfaces.Ilicence> ;

		
		 /**
		 service d'accès a la sous-collection :licence_temporelle
		 desc: c'est une licence qui dure un certain temps
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public licence_temporelle:HttpServiceBase<Interfaces.Ilicence_temporelle> ;
		public admin_licence_temporelle:HttpServiceAdminBase<Interfaces.Ilicence_temporelle> ;

		 
	
		/**
		 service d'accès à la collection :MultilangSendGridTemplate
		 desc: décrit un template multi langue d'envoie de mail avec sendGrid
		 

		 
		*/
		public MultilangSendGridTemplate:HttpServiceBase<Interfaces.IMultilangSendGridTemplate> ;
		public admin_MultilangSendGridTemplate:HttpServiceAdminBase<Interfaces.IMultilangSendGridTemplate> ;

		
	
		/**
		 service d'accès à la collection :application
		 desc: liste des applications
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Ipack_card      c'est un paquet de carte
		 
		 
		*/
		public application:HttpServiceBase<Interfaces.Iapplication> ;
		public admin_application:HttpServiceAdminBase<Interfaces.Iapplication> ;

		
		 /**
		 service d'accès a la sous-collection :pack_card
		 desc: c'est un paquet de carte
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public pack_card:HttpServiceBase<Interfaces.Ipack_card> ;
		public admin_pack_card:HttpServiceAdminBase<Interfaces.Ipack_card> ;

		 
	
		/**
		 service d'accès à la collection :TemplateLodash
		 desc: template lodash + nom
		 

		 
		*/
		public TemplateLodash:HttpServiceBase<Interfaces.ITemplateLodash> ;
		public admin_TemplateLodash:HttpServiceAdminBase<Interfaces.ITemplateLodash> ;

		
	
		/**
		 service d'accès à la collection :end_client
		 desc: c'est le client que l'on facture
		 

		 
		*/
		public end_client:HttpServiceBase<Interfaces.Iend_client> ;
		public admin_end_client:HttpServiceAdminBase<Interfaces.Iend_client> ;

		
	
		/**
		 service d'accès à la collection :Request
		 desc: description d'une requete avec request
		 

		 
		*/
		public Request:HttpServiceBase<Interfaces.IRequest> ;
		public admin_Request:HttpServiceAdminBase<Interfaces.IRequest> ;

		
	
		/**
		 service d'accès à la collection :ftpsConfig
		 desc: configuration pour un service sftp
		 

		 
		*/
		public ftpsConfig:HttpServiceBase<Interfaces.IftpsConfig> ;
		public admin_ftpsConfig:HttpServiceAdminBase<Interfaces.IftpsConfig> ;

		
	
		/**
		 service d'accès à la collection :application_configuration
		 desc: c'est la configuration d'une application
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Iapplication_configuration_phoneCard      configuration d'une application phoneCard
		 
		 	Iapplication_configuration_appCoach      c'est la configuration d'une application Coach
		 
		 	Iapplication_configuration_super_admin_mongo      configuration de l'application superAdminMongo
		 
		 	Iapplication_configuration_antico      configuration d'un parcourt anticoruption
		 
		 	Iapplication_configuration_appClient      c'est la configuration d'une application Client
		 
		 	Iapplication_configuration_appApprenant      c'est la configuration d'une application Apprenant
		 
		 	IAppConf_minds_up_admin      config de l'app minds up admin
		 
		 	Iapplication_configuration_reportApp      configuration d'un app template
		 
		 	Iapplication_configuration_celio2020Admin      conf de l'app celio 2020
		 
		 	Iapplication_configuration_manu_admin      cond des comptoire de l'or admin
		 
		 	Iapplication_configuration_comptoire_or_admin      cond des comptoire de l'or admin
		 
		 	Iapplication_configuration_celiofront      configuration de l appli celio front
		 
		 	Iapplication_configuration_celioback      configuration de l appli celio back
		 
		 	Iapplication_configuration_celioadmin      configuration de l appli celio admin
		 
		 	Iapplication_configuration_ferrand      la conf ferrand
		 
		 	Iapplication_configuration_celio      configuration générale application celio
		 
		 	IAppConf_minds_up      config de l'app minds up
		 
		 	Iapplication_configuration_petit_moulin      conf petit_moulin
		 
		 	Iapplication_configuration_petit_moulin_admin      conf petit_moulin_admin
		 
		 	Iapplication_configuration_qbp      config qbp
		 
		 	Iapplication_configuration_qbp_admin_seller      config qbp admin
		 
		 	Iapplication_configuration_qbp_admin      config qbp admin
		 
		 
		*/
		public application_configuration:HttpServiceBase<Interfaces.Iapplication_configuration> ;
		public admin_application_configuration:HttpServiceAdminBase<Interfaces.Iapplication_configuration> ;

		
		 /**
		 service d'accès a la sous-collection :application_configuration_phoneCard
		 desc: configuration d'une application phoneCard
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_phoneCard:HttpServiceBase<Interfaces.Iapplication_configuration_phoneCard> ;
		public admin_application_configuration_phoneCard:HttpServiceAdminBase<Interfaces.Iapplication_configuration_phoneCard> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_appCoach
		 desc: c'est la configuration d'une application Coach
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_appCoach:HttpServiceBase<Interfaces.Iapplication_configuration_appCoach> ;
		public admin_application_configuration_appCoach:HttpServiceAdminBase<Interfaces.Iapplication_configuration_appCoach> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_super_admin_mongo
		 desc: configuration de l'application superAdminMongo
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_super_admin_mongo:HttpServiceBase<Interfaces.Iapplication_configuration_super_admin_mongo> ;
		public admin_application_configuration_super_admin_mongo:HttpServiceAdminBase<Interfaces.Iapplication_configuration_super_admin_mongo> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_antico
		 desc: configuration d'un parcourt anticoruption
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_antico:HttpServiceBase<Interfaces.Iapplication_configuration_antico> ;
		public admin_application_configuration_antico:HttpServiceAdminBase<Interfaces.Iapplication_configuration_antico> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_appClient
		 desc: c'est la configuration d'une application Client
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_appClient:HttpServiceBase<Interfaces.Iapplication_configuration_appClient> ;
		public admin_application_configuration_appClient:HttpServiceAdminBase<Interfaces.Iapplication_configuration_appClient> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_appApprenant
		 desc: c'est la configuration d'une application Apprenant
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_appApprenant:HttpServiceBase<Interfaces.Iapplication_configuration_appApprenant> ;
		public admin_application_configuration_appApprenant:HttpServiceAdminBase<Interfaces.Iapplication_configuration_appApprenant> ;

		 
		 /**
		 service d'accès a la sous-collection :AppConf_minds_up_admin
		 desc: config de l'app minds up admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public AppConf_minds_up_admin:HttpServiceBase<Interfaces.IAppConf_minds_up_admin> ;
		public admin_AppConf_minds_up_admin:HttpServiceAdminBase<Interfaces.IAppConf_minds_up_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_reportApp
		 desc: configuration d'un app template
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_reportApp:HttpServiceBase<Interfaces.Iapplication_configuration_reportApp> ;
		public admin_application_configuration_reportApp:HttpServiceAdminBase<Interfaces.Iapplication_configuration_reportApp> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_celio2020Admin
		 desc: conf de l'app celio 2020
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_celio2020Admin:HttpServiceBase<Interfaces.Iapplication_configuration_celio2020Admin> ;
		public admin_application_configuration_celio2020Admin:HttpServiceAdminBase<Interfaces.Iapplication_configuration_celio2020Admin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_manu_admin
		 desc: cond des comptoire de l'or admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_manu_admin:HttpServiceBase<Interfaces.Iapplication_configuration_manu_admin> ;
		public admin_application_configuration_manu_admin:HttpServiceAdminBase<Interfaces.Iapplication_configuration_manu_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_comptoire_or_admin
		 desc: cond des comptoire de l'or admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_comptoire_or_admin:HttpServiceBase<Interfaces.Iapplication_configuration_comptoire_or_admin> ;
		public admin_application_configuration_comptoire_or_admin:HttpServiceAdminBase<Interfaces.Iapplication_configuration_comptoire_or_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_celiofront
		 desc: configuration de l appli celio front
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_celiofront:HttpServiceBase<Interfaces.Iapplication_configuration_celiofront> ;
		public admin_application_configuration_celiofront:HttpServiceAdminBase<Interfaces.Iapplication_configuration_celiofront> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_celioback
		 desc: configuration de l appli celio back
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_celioback:HttpServiceBase<Interfaces.Iapplication_configuration_celioback> ;
		public admin_application_configuration_celioback:HttpServiceAdminBase<Interfaces.Iapplication_configuration_celioback> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_celioadmin
		 desc: configuration de l appli celio admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_celioadmin:HttpServiceBase<Interfaces.Iapplication_configuration_celioadmin> ;
		public admin_application_configuration_celioadmin:HttpServiceAdminBase<Interfaces.Iapplication_configuration_celioadmin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_ferrand
		 desc: la conf ferrand
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_ferrand:HttpServiceBase<Interfaces.Iapplication_configuration_ferrand> ;
		public admin_application_configuration_ferrand:HttpServiceAdminBase<Interfaces.Iapplication_configuration_ferrand> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_celio
		 desc: configuration générale application celio
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_celio:HttpServiceBase<Interfaces.Iapplication_configuration_celio> ;
		public admin_application_configuration_celio:HttpServiceAdminBase<Interfaces.Iapplication_configuration_celio> ;

		 
		 /**
		 service d'accès a la sous-collection :AppConf_minds_up
		 desc: config de l'app minds up
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public AppConf_minds_up:HttpServiceBase<Interfaces.IAppConf_minds_up> ;
		public admin_AppConf_minds_up:HttpServiceAdminBase<Interfaces.IAppConf_minds_up> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_petit_moulin
		 desc: conf petit_moulin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_petit_moulin:HttpServiceBase<Interfaces.Iapplication_configuration_petit_moulin> ;
		public admin_application_configuration_petit_moulin:HttpServiceAdminBase<Interfaces.Iapplication_configuration_petit_moulin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_petit_moulin_admin
		 desc: conf petit_moulin_admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_petit_moulin_admin:HttpServiceBase<Interfaces.Iapplication_configuration_petit_moulin_admin> ;
		public admin_application_configuration_petit_moulin_admin:HttpServiceAdminBase<Interfaces.Iapplication_configuration_petit_moulin_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_qbp
		 desc: config qbp
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_qbp:HttpServiceBase<Interfaces.Iapplication_configuration_qbp> ;
		public admin_application_configuration_qbp:HttpServiceAdminBase<Interfaces.Iapplication_configuration_qbp> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_qbp_admin_seller
		 desc: config qbp admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_qbp_admin_seller:HttpServiceBase<Interfaces.Iapplication_configuration_qbp_admin_seller> ;
		public admin_application_configuration_qbp_admin_seller:HttpServiceAdminBase<Interfaces.Iapplication_configuration_qbp_admin_seller> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_qbp_admin
		 desc: config qbp admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_qbp_admin:HttpServiceBase<Interfaces.Iapplication_configuration_qbp_admin> ;
		public admin_application_configuration_qbp_admin:HttpServiceAdminBase<Interfaces.Iapplication_configuration_qbp_admin> ;

		 
	
		/**
		 service d'accès à la collection :application_instance
		 desc: c'est le couple application configuration 
		 

		 
		*/
		public application_instance:HttpServiceBase<Interfaces.Iapplication_instance> ;
		public admin_application_instance:HttpServiceAdminBase<Interfaces.Iapplication_instance> ;

		
	
		/**
		 service d'accès à la collection :service
		 desc: identification du service
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Iservice_sso      c'est un sso
		 
		 	Iservice_init      service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
		 
		 	Iservice_mailtoinfra      service qui permet de configurer l'authentification a partir d'un mail
		 
		 	Iservice_licence_token      c'est un service en charge de valider les licences et retourner les configurations des applications web
		 
		 	Iservice_goshabaGateway      passerelle pour goshaba
		 
		 	Iservice_socketIo      communication temps réelle multi format
		 
		 	Iservice_supervision      service_supervision
		 
		 	Iservice_configuration      c'est le service de distribution des configurations des services
		 
		 	Iservice_nginxConfigurator      service_nginxConfigurator
		 
		 	Iservice_push_notification      Service pour gérer les notifications push des applications
		 
		 	Iservice_like      service permettant de liker un objet de la base
		 
		 	Iservice_dumy_fso      simple remote file system a n utiliser que pour des test
		 
		 	Iservice_sendGrid      permet d'envoyer des mail via l'api send grid v3
		 
		 	Iservice_trainingCoursesService      service de gestion des parcourts de formation
		 
		 	Iservice_orchestrator      service d'orchestration
		 
		 	Iservice_socket_io      service messagerie de soket.io
		 
		 	Iservice_tutor      service de gestion des message tutoré
		 
		 	Iservice_init_js      service qui retourne un init.js
		 
		 	Iservice_infra_admin      administration de l'infra
		 
		 	Imailtoinfra2      retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
		 
		 	Iservice_planned_tasks      Service de Taches planifiées
		 
		 	IService_scorm_gateway      service passerelle d'un package scorm vers l'interne
		 
		 	Iservice_nginxMultiConfigurator      configuration d'un service nginx multi configuration
		 
		 	Iservice_client_ftp      client ftps
		 
		 	Iservice_polo_celio      service de tirage au sort de polo
		 
		 	Iservice_fso      remote file system
		 
		 	Iservice_pdfrip      service de creation de pdf
		 
		 	Iservice_signin      service d'enregistrement
		 
		 	Iservice_mindsUp      service minds up metier
		 
		 	Iservice_webAppConf      permet de générer les fichier de conf des app (css, js, ...)
		 
		 	Iswagger_conv      convertisseur de swagger
		 
		 	Iservice_mongo      configure un service mongo
		 
		 	Iservice_celio_qcm_admin      service celio qcm admin
		 
		 	Iservice_ferrand      service ferrand
		 
		 	Iservice_petit_moulin      service petit moulin
		 
		 	Iservice_celio_fid      service celio fid
		 
		 	Iservice_celio_qcm      service celio qcm
		 
		 	Iservice_comptoireOr      service_comptoireOr
		 
		 	Iservice_celio_back_task      service celio back_task
		 
		 	Iservice_celio_fid_admin      service celio fid admin
		 
		 	Iservice_airport      service airport
		 
		 	IQBP_service      service métier de QBP
		 
		 
		*/
		public service:HttpServiceBase<Interfaces.Iservice> ;
		public admin_service:HttpServiceAdminBase<Interfaces.Iservice> ;

		
		 /**
		 service d'accès a la sous-collection :service_sso
		 desc: c'est un sso
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_sso:HttpServiceBase<Interfaces.Iservice_sso> ;
		public admin_service_sso:HttpServiceAdminBase<Interfaces.Iservice_sso> ;

		 
		 /**
		 service d'accès a la sous-collection :service_init
		 desc: service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_init:HttpServiceBase<Interfaces.Iservice_init> ;
		public admin_service_init:HttpServiceAdminBase<Interfaces.Iservice_init> ;

		 
		 /**
		 service d'accès a la sous-collection :service_mailtoinfra
		 desc: service qui permet de configurer l'authentification a partir d'un mail
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_mailtoinfra:HttpServiceBase<Interfaces.Iservice_mailtoinfra> ;
		public admin_service_mailtoinfra:HttpServiceAdminBase<Interfaces.Iservice_mailtoinfra> ;

		 
		 /**
		 service d'accès a la sous-collection :service_licence_token
		 desc: c'est un service en charge de valider les licences et retourner les configurations des applications web
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_licence_token:HttpServiceBase<Interfaces.Iservice_licence_token> ;
		public admin_service_licence_token:HttpServiceAdminBase<Interfaces.Iservice_licence_token> ;

		 
		 /**
		 service d'accès a la sous-collection :service_goshabaGateway
		 desc: passerelle pour goshaba
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_goshabaGateway:HttpServiceBase<Interfaces.Iservice_goshabaGateway> ;
		public admin_service_goshabaGateway:HttpServiceAdminBase<Interfaces.Iservice_goshabaGateway> ;

		 
		 /**
		 service d'accès a la sous-collection :service_socketIo
		 desc: communication temps réelle multi format
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_socketIo:HttpServiceBase<Interfaces.Iservice_socketIo> ;
		public admin_service_socketIo:HttpServiceAdminBase<Interfaces.Iservice_socketIo> ;

		 
		 /**
		 service d'accès a la sous-collection :service_supervision
		 desc: service_supervision
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_supervision:HttpServiceBase<Interfaces.Iservice_supervision> ;
		public admin_service_supervision:HttpServiceAdminBase<Interfaces.Iservice_supervision> ;

		 
		 /**
		 service d'accès a la sous-collection :service_configuration
		 desc: c'est le service de distribution des configurations des services
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_configuration:HttpServiceBase<Interfaces.Iservice_configuration> ;
		public admin_service_configuration:HttpServiceAdminBase<Interfaces.Iservice_configuration> ;

		 
		 /**
		 service d'accès a la sous-collection :service_nginxConfigurator
		 desc: service_nginxConfigurator
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_nginxConfigurator:HttpServiceBase<Interfaces.Iservice_nginxConfigurator> ;
		public admin_service_nginxConfigurator:HttpServiceAdminBase<Interfaces.Iservice_nginxConfigurator> ;

		 
		 /**
		 service d'accès a la sous-collection :service_push_notification
		 desc: Service pour gérer les notifications push des applications
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_push_notification:HttpServiceBase<Interfaces.Iservice_push_notification> ;
		public admin_service_push_notification:HttpServiceAdminBase<Interfaces.Iservice_push_notification> ;

		 
		 /**
		 service d'accès a la sous-collection :service_like
		 desc: service permettant de liker un objet de la base
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_like:HttpServiceBase<Interfaces.Iservice_like> ;
		public admin_service_like:HttpServiceAdminBase<Interfaces.Iservice_like> ;

		 
		 /**
		 service d'accès a la sous-collection :service_dumy_fso
		 desc: simple remote file system a n utiliser que pour des test
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_dumy_fso:HttpServiceBase<Interfaces.Iservice_dumy_fso> ;
		public admin_service_dumy_fso:HttpServiceAdminBase<Interfaces.Iservice_dumy_fso> ;

		 
		 /**
		 service d'accès a la sous-collection :service_sendGrid
		 desc: permet d'envoyer des mail via l'api send grid v3
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_sendGrid:HttpServiceBase<Interfaces.Iservice_sendGrid> ;
		public admin_service_sendGrid:HttpServiceAdminBase<Interfaces.Iservice_sendGrid> ;

		 
		 /**
		 service d'accès a la sous-collection :service_trainingCoursesService
		 desc: service de gestion des parcourts de formation
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_trainingCoursesService:HttpServiceBase<Interfaces.Iservice_trainingCoursesService> ;
		public admin_service_trainingCoursesService:HttpServiceAdminBase<Interfaces.Iservice_trainingCoursesService> ;

		 
		 /**
		 service d'accès a la sous-collection :service_orchestrator
		 desc: service d'orchestration
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_orchestrator:HttpServiceBase<Interfaces.Iservice_orchestrator> ;
		public admin_service_orchestrator:HttpServiceAdminBase<Interfaces.Iservice_orchestrator> ;

		 
		 /**
		 service d'accès a la sous-collection :service_socket_io
		 desc: service messagerie de soket.io
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_socket_io:HttpServiceBase<Interfaces.Iservice_socket_io> ;
		public admin_service_socket_io:HttpServiceAdminBase<Interfaces.Iservice_socket_io> ;

		 
		 /**
		 service d'accès a la sous-collection :service_tutor
		 desc: service de gestion des message tutoré
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_tutor:HttpServiceBase<Interfaces.Iservice_tutor> ;
		public admin_service_tutor:HttpServiceAdminBase<Interfaces.Iservice_tutor> ;

		 
		 /**
		 service d'accès a la sous-collection :service_init_js
		 desc: service qui retourne un init.js
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_init_js:HttpServiceBase<Interfaces.Iservice_init_js> ;
		public admin_service_init_js:HttpServiceAdminBase<Interfaces.Iservice_init_js> ;

		 
		 /**
		 service d'accès a la sous-collection :service_infra_admin
		 desc: administration de l'infra
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_infra_admin:HttpServiceBase<Interfaces.Iservice_infra_admin> ;
		public admin_service_infra_admin:HttpServiceAdminBase<Interfaces.Iservice_infra_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :mailtoinfra2
		 desc: retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public mailtoinfra2:HttpServiceBase<Interfaces.Imailtoinfra2> ;
		public admin_mailtoinfra2:HttpServiceAdminBase<Interfaces.Imailtoinfra2> ;

		 
		 /**
		 service d'accès a la sous-collection :service_planned_tasks
		 desc: Service de Taches planifiées
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_planned_tasks:HttpServiceBase<Interfaces.Iservice_planned_tasks> ;
		public admin_service_planned_tasks:HttpServiceAdminBase<Interfaces.Iservice_planned_tasks> ;

		 
		 /**
		 service d'accès a la sous-collection :Service_scorm_gateway
		 desc: service passerelle d'un package scorm vers l'interne
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public Service_scorm_gateway:HttpServiceBase<Interfaces.IService_scorm_gateway> ;
		public admin_Service_scorm_gateway:HttpServiceAdminBase<Interfaces.IService_scorm_gateway> ;

		 
		 /**
		 service d'accès a la sous-collection :service_nginxMultiConfigurator
		 desc: configuration d'un service nginx multi configuration
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_nginxMultiConfigurator:HttpServiceBase<Interfaces.Iservice_nginxMultiConfigurator> ;
		public admin_service_nginxMultiConfigurator:HttpServiceAdminBase<Interfaces.Iservice_nginxMultiConfigurator> ;

		 
		 /**
		 service d'accès a la sous-collection :service_client_ftp
		 desc: client ftps
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_client_ftp:HttpServiceBase<Interfaces.Iservice_client_ftp> ;
		public admin_service_client_ftp:HttpServiceAdminBase<Interfaces.Iservice_client_ftp> ;

		 
		 /**
		 service d'accès a la sous-collection :service_polo_celio
		 desc: service de tirage au sort de polo
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_polo_celio:HttpServiceBase<Interfaces.Iservice_polo_celio> ;
		public admin_service_polo_celio:HttpServiceAdminBase<Interfaces.Iservice_polo_celio> ;

		 
		 /**
		 service d'accès a la sous-collection :service_fso
		 desc: remote file system
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_fso:HttpServiceBase<Interfaces.Iservice_fso> ;
		public admin_service_fso:HttpServiceAdminBase<Interfaces.Iservice_fso> ;

		 
		 /**
		 service d'accès a la sous-collection :service_pdfrip
		 desc: service de creation de pdf
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_pdfrip:HttpServiceBase<Interfaces.Iservice_pdfrip> ;
		public admin_service_pdfrip:HttpServiceAdminBase<Interfaces.Iservice_pdfrip> ;

		 
		 /**
		 service d'accès a la sous-collection :service_signin
		 desc: service d'enregistrement
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_signin:HttpServiceBase<Interfaces.Iservice_signin> ;
		public admin_service_signin:HttpServiceAdminBase<Interfaces.Iservice_signin> ;

		 
		 /**
		 service d'accès a la sous-collection :service_mindsUp
		 desc: service minds up metier
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_mindsUp:HttpServiceBase<Interfaces.Iservice_mindsUp> ;
		public admin_service_mindsUp:HttpServiceAdminBase<Interfaces.Iservice_mindsUp> ;

		 
		 /**
		 service d'accès a la sous-collection :service_webAppConf
		 desc: permet de générer les fichier de conf des app (css, js, ...)
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_webAppConf:HttpServiceBase<Interfaces.Iservice_webAppConf> ;
		public admin_service_webAppConf:HttpServiceAdminBase<Interfaces.Iservice_webAppConf> ;

		 
		 /**
		 service d'accès a la sous-collection :swagger_conv
		 desc: convertisseur de swagger
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public swagger_conv:HttpServiceBase<Interfaces.Iswagger_conv> ;
		public admin_swagger_conv:HttpServiceAdminBase<Interfaces.Iswagger_conv> ;

		 
		 /**
		 service d'accès a la sous-collection :service_mongo
		 desc: configure un service mongo
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_mongo:HttpServiceBase<Interfaces.Iservice_mongo> ;
		public admin_service_mongo:HttpServiceAdminBase<Interfaces.Iservice_mongo> ;

		 
		 /**
		 service d'accès a la sous-collection :service_celio_qcm_admin
		 desc: service celio qcm admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_celio_qcm_admin:HttpServiceBase<Interfaces.Iservice_celio_qcm_admin> ;
		public admin_service_celio_qcm_admin:HttpServiceAdminBase<Interfaces.Iservice_celio_qcm_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :service_ferrand
		 desc: service ferrand
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_ferrand:HttpServiceBase<Interfaces.Iservice_ferrand> ;
		public admin_service_ferrand:HttpServiceAdminBase<Interfaces.Iservice_ferrand> ;

		 
		 /**
		 service d'accès a la sous-collection :service_petit_moulin
		 desc: service petit moulin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_petit_moulin:HttpServiceBase<Interfaces.Iservice_petit_moulin> ;
		public admin_service_petit_moulin:HttpServiceAdminBase<Interfaces.Iservice_petit_moulin> ;

		 
		 /**
		 service d'accès a la sous-collection :service_celio_fid
		 desc: service celio fid
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_celio_fid:HttpServiceBase<Interfaces.Iservice_celio_fid> ;
		public admin_service_celio_fid:HttpServiceAdminBase<Interfaces.Iservice_celio_fid> ;

		 
		 /**
		 service d'accès a la sous-collection :service_celio_qcm
		 desc: service celio qcm
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_celio_qcm:HttpServiceBase<Interfaces.Iservice_celio_qcm> ;
		public admin_service_celio_qcm:HttpServiceAdminBase<Interfaces.Iservice_celio_qcm> ;

		 
		 /**
		 service d'accès a la sous-collection :service_comptoireOr
		 desc: service_comptoireOr
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_comptoireOr:HttpServiceBase<Interfaces.Iservice_comptoireOr> ;
		public admin_service_comptoireOr:HttpServiceAdminBase<Interfaces.Iservice_comptoireOr> ;

		 
		 /**
		 service d'accès a la sous-collection :service_celio_back_task
		 desc: service celio back_task
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_celio_back_task:HttpServiceBase<Interfaces.Iservice_celio_back_task> ;
		public admin_service_celio_back_task:HttpServiceAdminBase<Interfaces.Iservice_celio_back_task> ;

		 
		 /**
		 service d'accès a la sous-collection :service_celio_fid_admin
		 desc: service celio fid admin
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_celio_fid_admin:HttpServiceBase<Interfaces.Iservice_celio_fid_admin> ;
		public admin_service_celio_fid_admin:HttpServiceAdminBase<Interfaces.Iservice_celio_fid_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :service_airport
		 desc: service airport
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_airport:HttpServiceBase<Interfaces.Iservice_airport> ;
		public admin_service_airport:HttpServiceAdminBase<Interfaces.Iservice_airport> ;

		 
		 /**
		 service d'accès a la sous-collection :QBP_service
		 desc: service métier de QBP
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public QBP_service:HttpServiceBase<Interfaces.IQBP_service> ;
		public admin_QBP_service:HttpServiceAdminBase<Interfaces.IQBP_service> ;

		 
	
	
}


/**
	accès à la vue :Client 
	retourne la donnée du client connecté
*/
export class api_view_Client extends HttpAbstractService {
/**
	accès à la vue :Client 
	
*/	
	constructor( public conf:any ) {
			super( conf )
			this.url = conf.url ;
		}

	protected url:string ;

	protected  globalCtxInt:CtxInterpretor = new CtxInterpretor(process.env) ;

	/**
	génére une requette sur la vue Client
	
	*/
	public get(  query: string = '*', headers: any = {}   ): Promise<IHttpResult<Interfaces.Iend_client>> {

		return this.baseGet<Interfaces.Iend_client>(this.url +  query , headers )
	}

}

/**
	accès à la vue :UserLicence 
	retourne la liste des licences d'un utilisateur pour le client courrant
*/
export class api_view_UserLicence extends HttpAbstractService {
/**
	accès à la vue :UserLicence 
	
*/	
	constructor( public conf:any ) {
			super( conf )
			this.url = conf.url ;
		}

	protected url:string ;

	protected  globalCtxInt:CtxInterpretor = new CtxInterpretor(process.env) ;

	/**
	génére une requette sur la vue UserLicence
	
	*/
	public get( userId:string ,  query: string = '*', headers: any = {}   ): Promise<IHttpResult<Interfaces.Ilicence>> {

		return this.baseGet<Interfaces.Ilicence>(this.url + userId.toString() + "/" +  query , headers )
	}

}



export class api_view_plateform {

	constructor( public conf:any ){
	
	this.Client = new api_view_Client({url:conf.url + "views/Client/" , secure:conf.secure})  ;
		
	this.UserLicence = new api_view_UserLicence({url:conf.url + "views/UserLicence/" , secure:conf.secure})  ;
		
	}

	
	/**
	accès à la vue :Client     retourne la donnée du client connecté
	*/
	public Client:api_view_Client ;
	
	/**
	accès à la vue :UserLicence     retourne la liste des licences d'un utilisateur pour le client courrant
	*/
	public UserLicence:api_view_UserLicence ;
	
	
}


export  class Api_plateforme implements IPlateforme {

	constructor(public conf:any  ){
		this.collections = new api_collection_plateform(conf ) ;
 		this.views = new api_view_plateform(conf) ;
	}



	/**
		liste des collections de l'api
	*/
	public collections:api_collection_plateform ;
	/**
		liste des vues de l'api
	*/
	public views: api_view_plateform ; 
} 
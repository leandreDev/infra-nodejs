"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressRouterApi_service = void 0;
const utils_1 = require("@leandredev/utils");
const express = require("express");
function expressRouterApi_service(currentApp, plateforme) {
    var toJsonRes = currentApp.toJsonRes;
    var toErrRes = currentApp.toErrRes;
    var router = express.Router();
    var bdd_plateforme = plateforme;
    var secu;
    if (!currentApp.secu) {
        currentApp.secu = new utils_1.UtilsSecu(currentApp);
    }
    secu = currentApp.secu;
    var parseBody = (req, res, next) => {
        let buffer = '';
        req.on('data', (buf) => {
            buffer += buf.toString();
        });
        req.on('end', () => {
            try {
                req.body = JSON.parse(buffer);
                next();
            }
            catch (e) {
                next('parseBody error');
            }
        });
    };
    router.get('/collection/certificat/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.certificat.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/certificat/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.certificat.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/certificat/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.certificat.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/certificat', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.certificat.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/certificat/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.certificat.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/certificat/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_certificat.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/certificat/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_certificat.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/rsa/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.rsa.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/rsa/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.rsa.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/rsa/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.rsa.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/rsa', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.rsa.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/rsa/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.rsa.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/rsa/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_rsa.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/rsa/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_rsa.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/oidc_Client/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_Client.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/oidc_Client/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_Client.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/oidc_Client/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_Client.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/oidc_Client', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_Client.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/oidc_Client/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_Client.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/oidc_Client/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_oidc_Client.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/oidc_Client/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_oidc_Client.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/oidc_account/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_account.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/oidc_account/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_account.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/oidc_account/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_account.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/oidc_account', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_account.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/oidc_account/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_account.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/oidc_account/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_oidc_account.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/oidc_account/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_oidc_account.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_access/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_access.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_access/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_access.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_access/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_access.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_access', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_access.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_access/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_access.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_access/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_access.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_access/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_access.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/protoschema/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.protoschema.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/protoschema/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.protoschema.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/protoschema/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.protoschema.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/protoschema', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.protoschema.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/protoschema/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.protoschema.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/protoschema/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_protoschema.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/protoschema/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_protoschema.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/mail/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mail.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/mail/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mail.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/mail/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mail.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/mail', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mail.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/mail/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mail.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/mail/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_mail.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/mail/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_mail.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/mail_sendgrid/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mail_sendgrid.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/mail_sendgrid/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mail_sendgrid.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/mail_sendgrid/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mail_sendgrid.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/mail_sendgrid', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mail_sendgrid.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/mail_sendgrid/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mail_sendgrid.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/mail_sendgrid/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_mail_sendgrid.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/mail_sendgrid/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_mail_sendgrid.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_serviceOrchestrator/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_serviceOrchestrator.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_serviceOrchestrator/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_serviceOrchestrator.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_serviceOrchestrator/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_serviceOrchestrator.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_serviceOrchestrator', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_serviceOrchestrator.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_serviceOrchestrator/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_serviceOrchestrator.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_serviceOrchestrator/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_serviceOrchestrator.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_serviceOrchestrator/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_serviceOrchestrator.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/_view/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections._view.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/_view/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections._view.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/_view/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections._view.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/_view', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections._view.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/_view/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections._view.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/_view/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin__view.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/_view/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin__view.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/_view_params/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections._view_params.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/_view_params/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections._view_params.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/_view_params/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections._view_params.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/_view_params', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections._view_params.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/_view_params/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections._view_params.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/_view_params/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin__view_params.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/_view_params/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin__view_params.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/licence/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.licence.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/licence/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.licence.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/licence/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.licence.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/licence', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.licence.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/licence/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.licence.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/licence/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_licence.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/licence/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_licence.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/licence_temporelle/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.licence_temporelle.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/licence_temporelle/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.licence_temporelle.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/licence_temporelle/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.licence_temporelle.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/licence_temporelle', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.licence_temporelle.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/licence_temporelle/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.licence_temporelle.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/licence_temporelle/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_licence_temporelle.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/licence_temporelle/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_licence_temporelle.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/MultilangSendGridTemplate/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.MultilangSendGridTemplate.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/MultilangSendGridTemplate/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.MultilangSendGridTemplate.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/MultilangSendGridTemplate/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.MultilangSendGridTemplate.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/MultilangSendGridTemplate', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.MultilangSendGridTemplate.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/MultilangSendGridTemplate/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.MultilangSendGridTemplate.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/MultilangSendGridTemplate/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_MultilangSendGridTemplate.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/MultilangSendGridTemplate/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_MultilangSendGridTemplate.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/pack_card/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.pack_card.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/pack_card/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.pack_card.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/pack_card/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.pack_card.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/pack_card', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.pack_card.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/pack_card/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.pack_card.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/pack_card/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_pack_card.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/pack_card/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_pack_card.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/TemplateLodash/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.TemplateLodash.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/TemplateLodash/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.TemplateLodash.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/TemplateLodash/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.TemplateLodash.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/TemplateLodash', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.TemplateLodash.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/TemplateLodash/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.TemplateLodash.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/TemplateLodash/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_TemplateLodash.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/TemplateLodash/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_TemplateLodash.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/end_client/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.end_client.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/end_client/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.end_client.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/end_client/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.end_client.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/end_client', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.end_client.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/end_client/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.end_client.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/end_client/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_end_client.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/end_client/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_end_client.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/Request/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.Request.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/Request/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.Request.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/Request/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.Request.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/Request', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.Request.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/Request/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.Request.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/Request/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_Request.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/Request/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_Request.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/ftpsConfig/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.ftpsConfig.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/ftpsConfig/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.ftpsConfig.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/ftpsConfig/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.ftpsConfig.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/ftpsConfig', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.ftpsConfig.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/ftpsConfig/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.ftpsConfig.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/ftpsConfig/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_ftpsConfig.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/ftpsConfig/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_ftpsConfig.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_phoneCard/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_phoneCard.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_phoneCard/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_phoneCard.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_phoneCard/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_phoneCard.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_phoneCard', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_phoneCard.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_phoneCard/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_phoneCard.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_phoneCard/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_phoneCard.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_phoneCard/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_phoneCard.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_appCoach/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appCoach.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_appCoach/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appCoach.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_appCoach/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appCoach.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_appCoach', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appCoach.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_appCoach/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appCoach.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_appCoach/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_appCoach.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_appCoach/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_appCoach.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_super_admin_mongo/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_super_admin_mongo.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_super_admin_mongo/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_super_admin_mongo.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_super_admin_mongo/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_super_admin_mongo.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_super_admin_mongo', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_super_admin_mongo.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_super_admin_mongo/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_super_admin_mongo.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_super_admin_mongo/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_super_admin_mongo.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_super_admin_mongo/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_super_admin_mongo.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_antico/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_antico.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_antico/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_antico.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_antico/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_antico.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_antico', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_antico.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_antico/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_antico.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_antico/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_antico.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_antico/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_antico.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_appClient/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appClient.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_appClient/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appClient.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_appClient/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appClient.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_appClient', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appClient.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_appClient/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appClient.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_appClient/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_appClient.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_appClient/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_appClient.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_appApprenant/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appApprenant.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_appApprenant/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appApprenant.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_appApprenant/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appApprenant.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_appApprenant', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appApprenant.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_appApprenant/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_appApprenant.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_appApprenant/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_appApprenant.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_appApprenant/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_appApprenant.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/AppConf_minds_up_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.AppConf_minds_up_admin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/AppConf_minds_up_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.AppConf_minds_up_admin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/AppConf_minds_up_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.AppConf_minds_up_admin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/AppConf_minds_up_admin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.AppConf_minds_up_admin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/AppConf_minds_up_admin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.AppConf_minds_up_admin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/AppConf_minds_up_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_AppConf_minds_up_admin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/AppConf_minds_up_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_AppConf_minds_up_admin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_reportApp/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_reportApp.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_reportApp/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_reportApp.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_reportApp/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_reportApp.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_reportApp', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_reportApp.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_reportApp/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_reportApp.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_reportApp/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_reportApp.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_reportApp/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_reportApp.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_celio2020Admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celio2020Admin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_celio2020Admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celio2020Admin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_celio2020Admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celio2020Admin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_celio2020Admin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celio2020Admin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_celio2020Admin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celio2020Admin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_celio2020Admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_celio2020Admin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_celio2020Admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_celio2020Admin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_manu_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_manu_admin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_manu_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_manu_admin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_manu_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_manu_admin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_manu_admin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_manu_admin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_manu_admin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_manu_admin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_manu_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_manu_admin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_manu_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_manu_admin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_comptoire_or_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_comptoire_or_admin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_comptoire_or_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_comptoire_or_admin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_comptoire_or_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_comptoire_or_admin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_comptoire_or_admin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_comptoire_or_admin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_comptoire_or_admin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_comptoire_or_admin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_comptoire_or_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_comptoire_or_admin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_comptoire_or_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_comptoire_or_admin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_celiofront/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celiofront.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_celiofront/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celiofront.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_celiofront/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celiofront.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_celiofront', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celiofront.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_celiofront/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celiofront.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_celiofront/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_celiofront.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_celiofront/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_celiofront.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_celioback/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celioback.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_celioback/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celioback.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_celioback/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celioback.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_celioback', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celioback.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_celioback/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celioback.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_celioback/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_celioback.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_celioback/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_celioback.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_celioadmin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celioadmin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_celioadmin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celioadmin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_celioadmin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celioadmin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_celioadmin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celioadmin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_celioadmin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celioadmin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_celioadmin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_celioadmin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_celioadmin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_celioadmin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_ferrand/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_ferrand.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_ferrand/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_ferrand.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_ferrand/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_ferrand.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_ferrand', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_ferrand.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_ferrand/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_ferrand.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_ferrand/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_ferrand.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_ferrand/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_ferrand.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_celio/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celio.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_celio/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celio.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_celio/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celio.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_celio', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celio.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_celio/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_celio.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_celio/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_celio.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_celio/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_celio.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/AppConf_minds_up/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.AppConf_minds_up.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/AppConf_minds_up/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.AppConf_minds_up.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/AppConf_minds_up/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.AppConf_minds_up.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/AppConf_minds_up', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.AppConf_minds_up.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/AppConf_minds_up/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.AppConf_minds_up.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/AppConf_minds_up/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_AppConf_minds_up.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/AppConf_minds_up/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_AppConf_minds_up.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_petit_moulin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_petit_moulin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_petit_moulin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_petit_moulin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_petit_moulin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_petit_moulin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_petit_moulin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_petit_moulin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_petit_moulin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_petit_moulin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_petit_moulin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_petit_moulin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_petit_moulin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_petit_moulin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_petit_moulin_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_petit_moulin_admin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_petit_moulin_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_petit_moulin_admin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_petit_moulin_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_petit_moulin_admin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_petit_moulin_admin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_petit_moulin_admin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_petit_moulin_admin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_petit_moulin_admin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_petit_moulin_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_petit_moulin_admin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_petit_moulin_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_petit_moulin_admin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_airport_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_airport_admin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_airport_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_airport_admin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_airport_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_airport_admin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_airport_admin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_airport_admin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_airport_admin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_airport_admin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_airport_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_airport_admin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_airport_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_airport_admin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_airport/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_airport.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_airport/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_airport.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_airport/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_airport.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_airport', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_airport.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_airport/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_airport.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_airport/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_airport.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_airport/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_airport.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_boisdor/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_boisdor/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_boisdor/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_boisdor', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_boisdor/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_boisdor/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_boisdor.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_boisdor/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_boisdor.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_r3/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_r3/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_r3/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_r3', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_r3/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_r3/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_r3.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_r3/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_r3.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_boisdor_admin_seller/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor_admin_seller.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_boisdor_admin_seller/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor_admin_seller.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_boisdor_admin_seller/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor_admin_seller.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_boisdor_admin_seller', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor_admin_seller.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_boisdor_admin_seller/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor_admin_seller.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_boisdor_admin_seller/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_boisdor_admin_seller.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_boisdor_admin_seller/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_boisdor_admin_seller.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_qbp_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp_admin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_qbp_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp_admin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_qbp_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp_admin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_qbp_admin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp_admin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_qbp_admin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp_admin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_qbp_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_qbp_admin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_qbp_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_qbp_admin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_qbp_admin_seller/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp_admin_seller.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_qbp_admin_seller/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp_admin_seller.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_qbp_admin_seller/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp_admin_seller.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_qbp_admin_seller', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp_admin_seller.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_qbp_admin_seller/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp_admin_seller.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_qbp_admin_seller/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_qbp_admin_seller.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_qbp_admin_seller/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_qbp_admin_seller.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_boisdor_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor_admin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_boisdor_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor_admin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_boisdor_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor_admin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_boisdor_admin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor_admin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_boisdor_admin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_boisdor_admin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_boisdor_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_boisdor_admin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_boisdor_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_boisdor_admin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_qbp/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_qbp/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_qbp/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_qbp', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_qbp/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_qbp.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_qbp/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_qbp.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_qbp/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_qbp.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_r3_admin_seller/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3_admin_seller.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_r3_admin_seller/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3_admin_seller.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_r3_admin_seller/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3_admin_seller.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_r3_admin_seller', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3_admin_seller.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_r3_admin_seller/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3_admin_seller.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_r3_admin_seller/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_r3_admin_seller.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_r3_admin_seller/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_r3_admin_seller.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_r3_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3_admin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_r3_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3_admin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_r3_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3_admin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_r3_admin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3_admin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_r3_admin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_r3_admin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_r3_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_r3_admin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_r3_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_r3_admin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_configuration_dcbm_static/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_dcbm_static.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_configuration_dcbm_static/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_dcbm_static.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_configuration_dcbm_static/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_dcbm_static.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_configuration_dcbm_static', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_dcbm_static.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_configuration_dcbm_static/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_configuration_dcbm_static.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_configuration_dcbm_static/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_dcbm_static.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_configuration_dcbm_static/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_configuration_dcbm_static.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/application_instance/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_instance.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/application_instance/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_instance.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/application_instance/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_instance.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/application_instance', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_instance.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/application_instance/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.application_instance.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/application_instance/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_instance.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/application_instance/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_application_instance.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_sso/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_sso.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_sso/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_sso.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_sso/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_sso.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_sso', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_sso.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_sso/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_sso.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_sso/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_sso.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_sso/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_sso.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_init/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_init.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_init/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_init.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_init/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_init.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_init', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_init.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_init/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_init.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_init/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_init.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_init/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_init.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_mailtoinfra/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mailtoinfra.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_mailtoinfra/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mailtoinfra.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_mailtoinfra/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mailtoinfra.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_mailtoinfra', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mailtoinfra.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_mailtoinfra/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mailtoinfra.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_mailtoinfra/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_mailtoinfra.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_mailtoinfra/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_mailtoinfra.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_licence_token/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_licence_token.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_licence_token/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_licence_token.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_licence_token/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_licence_token.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_licence_token', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_licence_token.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_licence_token/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_licence_token.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_licence_token/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_licence_token.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_licence_token/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_licence_token.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_goshabaGateway/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_goshabaGateway.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_goshabaGateway/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_goshabaGateway.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_goshabaGateway/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_goshabaGateway.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_goshabaGateway', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_goshabaGateway.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_goshabaGateway/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_goshabaGateway.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_goshabaGateway/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_goshabaGateway.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_goshabaGateway/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_goshabaGateway.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_socketIo/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_socketIo.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_socketIo/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_socketIo.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_socketIo/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_socketIo.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_socketIo', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_socketIo.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_socketIo/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_socketIo.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_socketIo/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_socketIo.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_socketIo/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_socketIo.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_supervision/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_supervision.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_supervision/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_supervision.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_supervision/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_supervision.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_supervision', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_supervision.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_supervision/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_supervision.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_supervision/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_supervision.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_supervision/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_supervision.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_configuration/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_configuration.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_configuration/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_configuration.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_configuration/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_configuration.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_configuration', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_configuration.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_configuration/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_configuration.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_configuration/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_configuration.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_configuration/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_configuration.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_nginxConfigurator/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_nginxConfigurator.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_nginxConfigurator/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_nginxConfigurator.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_nginxConfigurator/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_nginxConfigurator.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_nginxConfigurator', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_nginxConfigurator.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_nginxConfigurator/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_nginxConfigurator.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_nginxConfigurator/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_nginxConfigurator.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_nginxConfigurator/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_nginxConfigurator.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_push_notification/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_push_notification.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_push_notification/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_push_notification.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_push_notification/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_push_notification.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_push_notification', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_push_notification.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_push_notification/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_push_notification.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_push_notification/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_push_notification.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_push_notification/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_push_notification.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_like/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_like.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_like/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_like.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_like/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_like.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_like', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_like.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_like/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_like.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_like/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_like.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_like/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_like.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_dumy_fso/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_dumy_fso.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_dumy_fso/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_dumy_fso.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_dumy_fso/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_dumy_fso.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_dumy_fso', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_dumy_fso.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_dumy_fso/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_dumy_fso.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_dumy_fso/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_dumy_fso.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_dumy_fso/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_dumy_fso.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_sendGrid/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_sendGrid.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_sendGrid/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_sendGrid.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_sendGrid/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_sendGrid.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_sendGrid', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_sendGrid.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_sendGrid/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_sendGrid.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_sendGrid/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_sendGrid.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_sendGrid/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_sendGrid.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_trainingCoursesService/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_trainingCoursesService.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_trainingCoursesService/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_trainingCoursesService.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_trainingCoursesService/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_trainingCoursesService.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_trainingCoursesService', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_trainingCoursesService.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_trainingCoursesService/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_trainingCoursesService.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_trainingCoursesService/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_trainingCoursesService.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_trainingCoursesService/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_trainingCoursesService.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_orchestrator/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_orchestrator.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_orchestrator/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_orchestrator.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_orchestrator/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_orchestrator.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_orchestrator', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_orchestrator.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_orchestrator/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_orchestrator.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_orchestrator/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_orchestrator.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_orchestrator/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_orchestrator.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_socket_io/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_socket_io.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_socket_io/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_socket_io.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_socket_io/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_socket_io.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_socket_io', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_socket_io.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_socket_io/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_socket_io.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_socket_io/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_socket_io.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_socket_io/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_socket_io.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_tutor/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_tutor.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_tutor/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_tutor.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_tutor/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_tutor.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_tutor', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_tutor.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_tutor/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_tutor.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_tutor/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_tutor.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_tutor/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_tutor.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_init_js/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_init_js.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_init_js/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_init_js.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_init_js/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_init_js.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_init_js', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_init_js.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_init_js/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_init_js.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_init_js/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_init_js.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_init_js/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_init_js.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_infra_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_infra_admin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_infra_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_infra_admin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_infra_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_infra_admin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_infra_admin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_infra_admin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_infra_admin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_infra_admin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_infra_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_infra_admin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_infra_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_infra_admin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/mailtoinfra2/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mailtoinfra2.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/mailtoinfra2/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mailtoinfra2.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/mailtoinfra2/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mailtoinfra2.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/mailtoinfra2', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mailtoinfra2.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/mailtoinfra2/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.mailtoinfra2.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/mailtoinfra2/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_mailtoinfra2.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/mailtoinfra2/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_mailtoinfra2.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_planned_tasks/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_planned_tasks.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_planned_tasks/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_planned_tasks.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_planned_tasks/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_planned_tasks.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_planned_tasks', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_planned_tasks.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_planned_tasks/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_planned_tasks.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_planned_tasks/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_planned_tasks.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_planned_tasks/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_planned_tasks.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/Service_scorm_gateway/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.Service_scorm_gateway.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/Service_scorm_gateway/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.Service_scorm_gateway.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/Service_scorm_gateway/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.Service_scorm_gateway.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/Service_scorm_gateway', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.Service_scorm_gateway.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/Service_scorm_gateway/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.Service_scorm_gateway.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/Service_scorm_gateway/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_Service_scorm_gateway.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/Service_scorm_gateway/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_Service_scorm_gateway.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_nginxMultiConfigurator/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_nginxMultiConfigurator.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_nginxMultiConfigurator/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_nginxMultiConfigurator.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_nginxMultiConfigurator/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_nginxMultiConfigurator.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_nginxMultiConfigurator', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_nginxMultiConfigurator.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_nginxMultiConfigurator/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_nginxMultiConfigurator.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_nginxMultiConfigurator/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_nginxMultiConfigurator.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_nginxMultiConfigurator/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_nginxMultiConfigurator.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_client_ftp/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_client_ftp.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_client_ftp/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_client_ftp.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_client_ftp/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_client_ftp.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_client_ftp', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_client_ftp.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_client_ftp/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_client_ftp.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_client_ftp/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_client_ftp.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_client_ftp/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_client_ftp.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_polo_celio/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_polo_celio.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_polo_celio/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_polo_celio.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_polo_celio/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_polo_celio.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_polo_celio', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_polo_celio.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_polo_celio/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_polo_celio.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_polo_celio/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_polo_celio.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_polo_celio/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_polo_celio.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_fso/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_fso.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_fso/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_fso.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_fso/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_fso.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_fso', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_fso.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_fso/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_fso.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_fso/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_fso.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_fso/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_fso.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_pdfrip/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_pdfrip.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_pdfrip/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_pdfrip.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_pdfrip/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_pdfrip.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_pdfrip', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_pdfrip.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_pdfrip/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_pdfrip.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_pdfrip/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_pdfrip.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_pdfrip/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_pdfrip.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_signin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_signin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_signin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_signin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_signin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_signin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_signin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_signin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_signin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_signin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_signin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_signin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_signin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_signin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_mindsUp/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mindsUp.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_mindsUp/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mindsUp.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_mindsUp/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mindsUp.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_mindsUp', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mindsUp.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_mindsUp/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mindsUp.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_mindsUp/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_mindsUp.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_mindsUp/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_mindsUp.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_webAppConf/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_webAppConf.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_webAppConf/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_webAppConf.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_webAppConf/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_webAppConf.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_webAppConf', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_webAppConf.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_webAppConf/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_webAppConf.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_webAppConf/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_webAppConf.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_webAppConf/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_webAppConf.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/swagger_conv/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.swagger_conv.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/swagger_conv/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.swagger_conv.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/swagger_conv/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.swagger_conv.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/swagger_conv', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.swagger_conv.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/swagger_conv/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.swagger_conv.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/swagger_conv/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_swagger_conv.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/swagger_conv/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_swagger_conv.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_mongo/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mongo.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_mongo/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mongo.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_mongo/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mongo.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_mongo', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mongo.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_mongo/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_mongo.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_mongo/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_mongo.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_mongo/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_mongo.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_celio_qcm_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_qcm_admin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_celio_qcm_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_qcm_admin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_celio_qcm_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_qcm_admin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_celio_qcm_admin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_qcm_admin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_celio_qcm_admin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_qcm_admin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_celio_qcm_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_celio_qcm_admin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_celio_qcm_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_celio_qcm_admin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_ferrand/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_ferrand.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_ferrand/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_ferrand.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_ferrand/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_ferrand.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_ferrand', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_ferrand.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_ferrand/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_ferrand.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_ferrand/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_ferrand.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_ferrand/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_ferrand.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_petit_moulin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_petit_moulin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_petit_moulin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_petit_moulin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_petit_moulin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_petit_moulin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_petit_moulin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_petit_moulin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_petit_moulin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_petit_moulin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_petit_moulin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_petit_moulin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_petit_moulin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_petit_moulin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_celio_qcm/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_qcm.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_celio_qcm/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_qcm.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_celio_qcm/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_qcm.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_celio_qcm', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_qcm.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_celio_qcm/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_qcm.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_celio_qcm/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_celio_qcm.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_celio_qcm/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_celio_qcm.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_comptoireOr/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_comptoireOr.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_comptoireOr/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_comptoireOr.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_comptoireOr/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_comptoireOr.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_comptoireOr', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_comptoireOr.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_comptoireOr/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_comptoireOr.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_comptoireOr/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_comptoireOr.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_comptoireOr/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_comptoireOr.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_airport/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_airport.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_airport/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_airport.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_airport/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_airport.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_airport', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_airport.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_airport/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_airport.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_airport/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_airport.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_airport/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_airport.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_celio_back_task/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_back_task.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_celio_back_task/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_back_task.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_celio_back_task/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_back_task.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_celio_back_task', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_back_task.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_celio_back_task/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_back_task.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_celio_back_task/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_celio_back_task.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_celio_back_task/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_celio_back_task.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_celio_fid/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_fid.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_celio_fid/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_fid.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_celio_fid/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_fid.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_celio_fid', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_fid.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_celio_fid/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_fid.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_celio_fid/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_celio_fid.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_celio_fid/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_celio_fid.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/dpd_dervice/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.dpd_dervice.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/dpd_dervice/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.dpd_dervice.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/dpd_dervice/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.dpd_dervice.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/dpd_dervice', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.dpd_dervice.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/dpd_dervice/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.dpd_dervice.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/dpd_dervice/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_dpd_dervice.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/dpd_dervice/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_dpd_dervice.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_celio_fid_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_fid_admin.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_celio_fid_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_fid_admin.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_celio_fid_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_fid_admin.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_celio_fid_admin', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_fid_admin.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_celio_fid_admin/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_celio_fid_admin.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_celio_fid_admin/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_celio_fid_admin.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_celio_fid_admin/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_celio_fid_admin.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/boisdor_service/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.boisdor_service.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/boisdor_service/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.boisdor_service.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/boisdor_service/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.boisdor_service.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/boisdor_service', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.boisdor_service.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/boisdor_service/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.boisdor_service.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/boisdor_service/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_boisdor_service.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/boisdor_service/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_boisdor_service.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/QBP_service/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.QBP_service.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/QBP_service/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.QBP_service.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/QBP_service/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.QBP_service.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/QBP_service', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.QBP_service.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/QBP_service/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.QBP_service.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/QBP_service/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_QBP_service.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/QBP_service/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_QBP_service.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/service_qcbm/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_qcbm.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/service_qcbm/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_qcbm.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/service_qcbm/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_qcbm.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/service_qcbm', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_qcbm.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/service_qcbm/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.service_qcbm.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/service_qcbm/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_qcbm.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/service_qcbm/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_service_qcbm.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/r3_service/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.r3_service.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/r3_service/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.r3_service.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/r3_service/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.r3_service.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/r3_service', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.r3_service.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/r3_service/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.r3_service.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/r3_service/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_r3_service.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/r3_service/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_r3_service.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/bois_dor_mailer/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.bois_dor_mailer.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/bois_dor_mailer/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.bois_dor_mailer.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/bois_dor_mailer/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.bois_dor_mailer.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/bois_dor_mailer', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.bois_dor_mailer.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/bois_dor_mailer/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.bois_dor_mailer.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/bois_dor_mailer/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_bois_dor_mailer.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/bois_dor_mailer/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_bois_dor_mailer.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    return router;
}
exports.expressRouterApi_service = expressRouterApi_service;

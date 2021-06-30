/*
** automatic proxy configuration from proxyconf-uba.siemens.net on 20210415
*/
function FindProxyForURL(url, host) {
 var proxy = "PROXY atl1.coia.siemens.net:9400; PROXY atl2.coia.siemens.net:9400; PROXY sfo2.coia.siemens.net:9400";
 
 if (shExpMatch(host, "*siemens.cn")) { return "DIRECT"; }
 
 
 if (shExpMatch(host, "localhost")) { return "DIRECT"; }
 if (shExpMatch(host, "localhost.*")) { return "DIRECT"; }
 if (shExpMatch(host, "127.0.0.*")) { return "DIRECT"; }
 if (isPlainHostName(host)) { return "DIRECT"; }

 if (shExpMatch(host, "prosanweb.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "prosanwebtest.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "prosanwebtest12c.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "plm-sra-web.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "plm-sra-qa-web.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "*.statoil.no")) { return "DIRECT"; }
 if (shExpMatch(host, "connectit.statoilhydro.com")) { return "DIRECT"; }
 if (shExpMatch(host, "spconnect.statoilhydro.com")) { return "DIRECT"; }
 if (shExpMatch(host, "csg33.statoilhydro.com")) { return "DIRECT"; }
 if (shExpMatch(host, "csg34.statoilhydro.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sol.hydro.com")) { return "DIRECT"; }
 if (shExpMatch(host, "soil.hydro.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sp-st07.statoil.com")) { return "DIRECT"; }
 if (shExpMatch(host, "*.ad.roke.co.uk")) { return "DIRECT"; }
 if (shExpMatch(host, "ds-awf.diag.local")) { return "PROXY 146.254.237.37:8080"; }
 if (shExpMatch(host, "10.191.192.76")) { return "PROXY 146.254.237.37:8080"; }
 if (shExpMatch(host, "psoh-vista.dbnet.com")) { return "DIRECT"; }
 if (shExpMatch(host, "mein-industriepark.de")) { return "DIRECT"; }
 if (shExpMatch(host, "campus.infraserv.com")) { return "DIRECT"; }
 if (shExpMatch(host, "maps.infraserv.com")) { return "DIRECT"; }
 if (shExpMatch(host, "*.corpintra.net")) { return "DIRECT"; }
 if (shExpMatch(host, "bmz.voestalpine.com")) { return "PROXY 158.226.81.3:81"; }
 if (shExpMatch(host, "career.siemens.fr")) { return proxy; }
 if (shExpMatch(host, "extranet.siemens.fr")) { return proxy; }
 if (shExpMatch(host, "www.cfi.siemens.fr")) { return proxy; }
 if (shExpMatch(host, "siemens.stttrainer.se")) { return "DIRECT"; }
 if (shExpMatch(host, "146.254.147.199")) { return "DIRECT"; }
 if (shExpMatch(host, "www.medicalradiation.com")) { return "DIRECT"; }
 if (shExpMatch(host, "cpo-portal.it-solutions.atos.net")) { return "DIRECT"; }
 if (shExpMatch(host, "cpo-lb.it-solutions.atos.net")) { return "DIRECT"; }
 if (shExpMatch(host, "epm2.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "aida.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "cs.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "workspace.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "epm3.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "v-entry.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "sbm.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "ics-tools2.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "gaindc-cr.ww932.my-it-solutions.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "demchp99064web.ww930.my-it-solutions.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "ebweb.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "amoda.siemens-it-solutions.com")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "pca-dev.it-solutions.siemens.com")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "demchp99053srv.de.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "sia-stage.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "sia-test.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "sia-prod1.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "mipc.it-solutions.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "esb-test.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "sps-th.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "esb.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "gia-ps.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "orderapproval.it-solutions.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "distributors.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "pca.it-solutions.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "pca-interfaces.it-solutions.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "czag-portal.it-solutions.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "atf-portal.it-solutions.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "csedweb.it-solutions.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "eai-channel.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "smdcws.it-solutions.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "mysupport-int.it-solutions.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "orderapproval-int.it-solutions.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "sap01117.de.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "eai-channel-qa.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "eai-qa.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "eai-dev.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "eai.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "eai-channel-dev.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "eai-channel-ref.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "saldoweb.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "globalview.it-solutions.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "svn.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "cypress.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "siemens-portal.it-solutions.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "operational-service-desk.it-solutions.atos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "omstracking.it-solutions.myatos.net")) { return "PROXY 139.22.54.1:81"; }
 if (shExpMatch(host, "*.wdf.sap.corp")) { return "PROXY 147.54.140.143:923"; }
 if (shExpMatch(host, "extranet.thomsonreuters.biz")) { return "DIRECT"; }
 if (shExpMatch(host, "cp.thomsonreuters.net")) { return "DIRECT"; }
 if (shExpMatch(host, "*.corporate.paceglobal.com")) { return "DIRECT"; }
 if (shExpMatch(host, "knowledge.reuters.net")) { return "DIRECT"; }
 if (shExpMatch(host, "usd-uat.global.ao-srv.com")) { return "DIRECT"; }
 if (shExpMatch(host, "webring.mob1.elisa.fi")) { return "DIRECT"; }
 if (shExpMatch(host, "webacdkonsoli.mob1.elisa.fi")) { return "DIRECT"; }
 if (shExpMatch(host, "cprx2.mob1.elisa.fi")) { return "DIRECT"; }
 if (shExpMatch(host, "cprx1.mob1.elisa.fi")) { return "DIRECT"; }
 if (shExpMatch(host, "ipms.bshg.com")) { return "DIRECT"; }
 if (shExpMatch(host, "ipms-t.bshg.com")) { return "DIRECT"; }
 if (shExpMatch(host, "ocsaas.elisa.fi")) { return "DIRECT"; }
 if (shExpMatch(host, "itpam-preprod.global.ao-srv.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.trench.at")) { return "DIRECT"; }
 if (shExpMatch(host, "*.es.railad.com")) { return "PROXY 139.16.225.135:81"; }
 if (shExpMatch(host, "snaplogic-dev.hccloud.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "snaplogic-test.hccloud.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "snaplogic-stage.hccloud.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "snaplogic-prod.hccloud.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "am-management.hccloud.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "*.hccloud.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*.teamplay.siemens.com")) { return proxy; }
 if (shExpMatch(host, "irdmadmaxdev01v.railad.com")) { return "PROXY 139.16.225.135:81"; }
 if (shExpMatch(host, "irdmadmaxdev02v.railad.com")) { return "PROXY 139.16.225.135:81"; }
 if (shExpMatch(host, "irdmadmaxdev03v.railad.com")) { return "PROXY 139.16.225.135:81"; }
 if (shExpMatch(host, "esmadvmmwiki.railad.com")) { return "PROXY 139.16.225.135:81"; }
 if (shExpMatch(host, "esmadvmsvn2.railad.com")) { return "PROXY 139.16.225.135:81"; }
 if (shExpMatch(host, "*.cg-cloud.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*.industrycloud-dev.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*.integration.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*.teamplay-demo.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*.winddialogue.com")) { return proxy; }
 if (shExpMatch(host, "*.cloudservices.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*.industrycloud-staging.siemens.com")) { return proxy; }
 if (shExpMatch(host, "mobileaccess.energy.siemens.com")) { return proxy; }
 if (shExpMatch(host, "mobileaccessqa.energy.siemens.com")) { return proxy; }
 if (shExpMatch(host, "mobileaccessdev.energy.siemens.com")) { return proxy; }
 if (shExpMatch(host, "ibs-qms.industrysoftware.automation.siemens.com")) { return proxy; }
 if (shExpMatch(host, "www.healthcare.siemens.*")) { return proxy; }
 if (shExpMatch(host, "lifenet-test.healthcare.siemens.com")) { return proxy; }
 if (shExpMatch(host, "lifenet-integration.healthcare.siemens.com")) { return proxy; }
 if (shExpMatch(host, "lifenet.healthcare.siemens.com")) { return proxy; }
 if (shExpMatch(host, "test.healthcare.siemens.com")) { return proxy; }
 if (shExpMatch(host, "tfs13.sdmc.ao-srv.com")) { return "DIRECT"; }
 if (shExpMatch(host, "*.public.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*.ds4ic.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*.ds4icdev.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*.ds4icqa.siemens.com")) { return proxy; }
 if (shExpMatch(host, "esmadvmsvn1.railad.com")) { return "PROXY 139.16.225.135:81"; }
 if (shExpMatch(host, "esmadvmsyn.railad.com")) { return "PROXY 139.16.225.135:81"; }
 if (shExpMatch(host, "itinnovationdays.siemens.com")) { return proxy; }
 if (shExpMatch(host, "m.siemenswelt.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*.cft.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*.btcloud.siemens.com")) { return proxy; }
 if (shExpMatch(host, "hitsmqas.healthcare.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "hitsmdev.healthcare.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "hitsmprd.healthcare.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.*eb*.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "eb*-int1.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*-ebintegration1.siemens.com")) { return proxy; }
 if (shExpMatch(host, "eb*-uat1.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*-ebuat1.siemens.com")) { return proxy; }
 if (shExpMatch(host, "eb*-uat2.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*-ebuat2.siemens.com")) { return proxy; }
 if (shExpMatch(host, "eb*-dr.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*-ebdr.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*-eb.siemens.com")) { return proxy; }
 if (shExpMatch(host, "eb.siemens.com")) { return proxy; }
 if (shExpMatch(host, "ebstatic.siemens.com")) { return proxy; }
 if (shExpMatch(host, "ebauthoring.siemens.com")) { return proxy; }
 if (shExpMatch(host, "136.157.202.233")) { return "DIRECT"; }
 if (shExpMatch(host, "136.157.202.234")) { return "DIRECT"; }
 if (shExpMatch(host, "161.134.1.51")) { return "DIRECT"; }
 if (shExpMatch(host, "161.134.1.52")) { return "DIRECT"; }
 if (shExpMatch(host, "194.138.185.68")) { return "DIRECT"; }
 if (shExpMatch(host, "194.138.185.69")) { return "DIRECT"; }
 if (shExpMatch(host, "session.rservices.com")) { return "DIRECT"; }
 if (shExpMatch(host, "*.session.rservices.com")) { return "DIRECT"; }
 if (shExpMatch(host, "*.siemens-adgt.com")) { return "DIRECT"; }
 if (shExpMatch(host, "eb*-int2.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*.corptax.com")) { return "PROXY atl1.coia.siemens.net:9400; PROXY ny2.coia.siemens.net:9400"; }
 if (shExpMatch(host, "*thesteveportal.plm.automation.siemens.com")) { return proxy; }
 if (shExpMatch(host, "bt.siemens.com.cn")) { return proxy; }
 if (shExpMatch(host, "www.bt.siemens.com.cn")) { return proxy; }
 if (shExpMatch(host, "*.iws.siemens.ch")) { return proxy; }
 if (shExpMatch(host, "gpvm-confluence.chemtech.com.br")) { return "DIRECT"; }
 if (shExpMatch(host, "client.kontiki.com")) { return "DIRECT"; }
 if (shExpMatch(host, "144.177.38.176")) { return "DIRECT"; }
 if (shExpMatch(host, "myid.industrysoftware.automation.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "myidtest.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "myidtest-qa.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "myid*.siemens.com")) { return proxy; }
 if (shExpMatch(host, "bmecat-siemens-bp.tanner.de")) { return "DIRECT"; }
 if (shExpMatch(host, "*.hcmfg.net")) { return "DIRECT"; }
 if (shExpMatch(host, "usggswmfgweb.corp-am.corp.dom")) { return "DIRECT"; }
 if (shExpMatch(host, "tools.edge.siemens.cloud")) { return "DIRECT"; }
 if (shExpMatch(host, "sbakdxsx.corp-eu.corp.dom")) { return "DIRECT"; }
 if (shExpMatch(host, "descwiki.corp-eu.corp.dom")) { return "DIRECT"; }
 if (shExpMatch(host, "*.trench-group.net")) { return "DIRECT"; }
 if (shExpMatch(host, "compliance-tools.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "compliance-tools-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "lds-mlh.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.pcs7.siemens.com")) { return "DIRECT"; }
 if (shExpMatch(host, "pcs7.siemens.com")) { return proxy; }
 if (shExpMatch(host, "*.pcs7.siemens.com")) { return proxy; }
 if (shExpMatch(host, "adfs.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "stgz.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "*digitalportal.mobility.siemens.com")) { return "PROXY zrh1.coia.siemens.net:9400"; }
 if (shExpMatch(host, "rds.russelectric.com")) { return "DIRECT"; }
 if (shExpMatch(host, "apexdev.oci.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "apexqa.oci.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "apex.oci.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "author.intranet.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "collaborator.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "nst.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "iam.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "gpc-dev.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "gpc-qa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "ord.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "esprit.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "financeportal.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "damex.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "usi.oci.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "esoatestsvcmail.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "artifactory.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "esoasvcmail.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "esoa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "esoasvc.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "esoatest.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "ereporting.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "orgdb.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "tableau.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "simplex.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "spt.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "spec.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "specq.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "pfc.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "pfcq.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "tableau-rt.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "damex-e.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "damex-q.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "jab.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "p2p-compliance.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sitax.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sitax-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "orgdb-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "orgdb-dev.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "tax-applications.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "tax-applications-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "tax-applications-dev.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "financeportal-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sato.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sato-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sato-dev.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sato-ds.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sato-test-ds.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sato-dev-ds.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "ce2-web.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "cem-web.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "se3-web.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "se2-web.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "oe3-web.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "oe2-web.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.ccm.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "nst-qa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "webbook-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "webbook.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sapdm-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sapdm.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "insiderdevqa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "insiderlist.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "l-collaboration.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "findit.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "lkb.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.bugzero-prod.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "loa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "esprit-web.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "eol.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "collaborator.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "iam-qa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "lacos.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "lacos-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "socrates.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "lic-jetb-ger01.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "gdw-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "gdw.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "gscdx-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "gscdx.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "pcmd-dev.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "pcmd-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "pcmd.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "ams-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "ams.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "eb-portal.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.nexus3.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "siemops.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "siemops-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "esoatools.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "esoadev.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "setis.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "setis-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "monitoring-icinga.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "usacontractgeneratordbxl.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "usacontractgenerator.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "case.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "ce1.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.market-intelligence.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet-t.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet-q.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "wse11q.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "wse12q.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "wse10.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "wse11.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "wse12.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "case.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "case-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "author-t.intranet.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "author-q.intranet.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.setsheetqa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "case-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "absencemanager.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "ulv-process.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "onelan.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "*.digitsphere.siemens.cloud")) { return "DIRECT"; }
 if (shExpMatch(host, "qms-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "qms.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.setsheet.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.seplanningtool.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.senpi.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.seplanningtoolqa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.senpiqa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.segestioncalidadqa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.controldivisas.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.transformadoresqa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "spg-tools.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "wacx.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "wace.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "pims.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "proarc7.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.transformadoresqa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "internalcareers.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "oslo.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "pro-win.integration.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "int-win.integration.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "www.transformadores.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.sesolucionesgsscm.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.sesolucionesgsscmqa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.sesigeo.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.sesigeoqa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.transformadores.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "gallery.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sportal.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sportal-dev.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sportal-qa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "setp-os1.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "setp-os2.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "setp-osi.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "s4ed40-dev.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "s4ed4w-dev.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "eas-ufa-dev.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "eas-ufa-prod.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "eas-ufa-qa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "eas-prod.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "eas-qa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "eas-dev.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "elvis.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "p5e.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "s4ed4s-dev.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "s4ed4t-dev.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "app.siemens-energy.cn")) { return "DIRECT"; }
 if (shExpMatch(host, "eforms.siemens-energy.ir")) { return "DIRECT"; }
 if (shExpMatch(host, "dij.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "icmms-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.icmms.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "citadelbanking.com")) { return "PROXY sg1.coia.siemens.net; PROXY sg2.coia.siemens.net"; }
 if (shExpMatch(host, "intranet.mmagneticosdianGPqa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.countex.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.countexqa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "intranet.mmagneticosdianGP.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "eas-qa.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "myfinance-jedox.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "nicelabel.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "sppaview.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "*.on.siemens.cloud")) { return "DIRECT"; }
 if (shExpMatch(host, "*.technology.siemens.cloud")) { return "DIRECT"; }
 if (shExpMatch(host, "szkb.ch")) { return "PROXY zrh1.coia.siemens.net"; }
 if (shExpMatch(host, "*.szkb.ch")) { return "PROXY zrh1.coia.siemens.net"; }
 if (shExpMatch(host, "myvdi.siemensgamesa.com")) { return "DIRECT"; }
 if (shExpMatch(host, "rcm-ap.fdnet.com")) { return "DIRECT"; }
 if (shExpMatch(host, "lic-prea-wan01.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "matillion-dev.pgda.siemens-energy.cloud")) { return "DIRECT"; }
 if (shExpMatch(host, "matillion-prod.pgda.siemens-energy.cloud")) { return "DIRECT"; }
 if (shExpMatch(host, "support.pg.siemens.cloud")) { return "DIRECT"; }
 if (shExpMatch(host, "rcm-americas.fdnet.com")) { return "DIRECT"; }
 if (shExpMatch(host, "trench-group.net")) { return "DIRECT"; }
 if (shExpMatch(host, "eurostar-test.nexala.com")) { return "PROXY lon1.coia.siemens.net"; }
 if (shExpMatch(host, "elearning.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "planningtools.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "seapps-staging.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "seapps.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "seapps-test.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "fsp-cloud.siemens-energy.com")) { return "DIRECT"; }
 if (shExpMatch(host, "collabnova.siemens-energy.com")) { return "DIRECT"; }

if ( shExpMatch(host, "www.siemens.ie")
 || shExpMatch(host, "telefoner.siemens.se")
 || shExpMatch(host, "www.science-award.siemens.ru")
 || shExpMatch(host, "www.ad.siemens.com.cn")
 || shExpMatch(host, "recruit.siemens.co.jp")
 || shExpMatch(host, "www2.sibt.com")
 || shExpMatch(host, "www.smpa.siemens.com")
 || shExpMatch(host, "www.automation.siemens.com.cn")
 || shExpMatch(host, "www.siemens.cl")
 || shExpMatch(host, "ii-it-ftp-site.siemens.com.ar")
 || shExpMatch(host, "ts3.siemens.com.ar")
 || shExpMatch(host, "www.siemens.co.th")
 || shExpMatch(host, "support.asp.siemensmedical.com")
 || shExpMatch(host, "www.siemens.com.tr")
 || shExpMatch(host, "www.siemens.com.au")
 || shExpMatch(host, "download.siemens.com.au")
 || shExpMatch(host, "www.siemens.co.nz")
 || shExpMatch(host, "www.services.siemens.co.nz")
 || shExpMatch(host, "www.siemens.kz")
 || shExpMatch(host, "www.extranet.siemens.pt")
 || shExpMatch(host, "www.siemens.co.id")
 || shExpMatch(host, "www.siemens.com.ph")
 || shExpMatch(host, "careers.siemens.co.jp")
 || shExpMatch(host, "www.education.siemens.com.br")
 || shExpMatch(host, "ntsc.fl.icn.siemens.com")
 || shExpMatch(host, "csweb1.fl.icn.siemens.com")
 || shExpMatch(host, "www.siemens.com.co")
 || shExpMatch(host, "www02.sbt.siemens.com")
 || shExpMatch(host, "communications.usa.siemens.com")
 || shExpMatch(host, "enterprise.siemens.com")
 || shExpMatch(host, "networks.usa.siemens.com")
 || shExpMatch(host, "carrier.usa.siemens.com")
 || shExpMatch(host, "nge.usa.siemens.com")
 || shExpMatch(host, "securenetworks.usa.siemens.com")
 || shExpMatch(host, "wifi.usa.siemens.com")
 || shExpMatch(host, "ecollateral.enterprise.siemens.com")
 || shExpMatch(host, "optical.usa.siemens.com")
 || shExpMatch(host, "ayone.siemens.com")
 || shExpMatch(host, "sbskundportal.siemens.se")
 || shExpMatch(host, "extranet.sbt.siemens.de")
 || shExpMatch(host, "extranet.nsl.sbt.siemens.de")
 || shExpMatch(host, "flender.com")
 || shExpMatch(host, "www.flender.com")
 || shExpMatch(host, "www.winergy-ag.com")
 || shExpMatch(host, "corp.siemens.com.sg")
 || shExpMatch(host, "ibis.siemens.com")
 || shExpMatch(host, "www.evosoft.com")
 || shExpMatch(host, "portal.evosoft.com")
 || shExpMatch(host, "lyra.evosoft.com")
 || shExpMatch(host, "www.brandcenter-nokia.siemens.com")
 || shExpMatch(host, "www.loher.de")
 || shExpMatch(host, "www.loher.com")
 || shExpMatch(host, "wista.siemens.de")
 || shExpMatch(host, "www.wista.siemens.de")
 || shExpMatch(host, "share.siemens.be")
 || shExpMatch(host, "cio-day.siemens.at")
 || shExpMatch(host, "newsletter.siemens.at")
 || shExpMatch(host, "einkauf.siemens.at")
 || shExpMatch(host, "icnmontage.siemens.at")
 || shExpMatch(host, "logitrack.siemens.at")
 || shExpMatch(host, "picturedatabase.siemens.co.za")
 || shExpMatch(host, "www.careers.siemens.com.cn")
 || shExpMatch(host, "evolve.it-solutions.usa.siemens.com")
 || shExpMatch(host, "enterprise-bp-portal.siemens.co.uk")
 || shExpMatch(host, "www.communications.siemens.co.uk")
) { return proxy; }
if ( shExpMatch(host, "aunz.siemens.com")
 || shExpMatch(host, "www.aunz.siemens.com")
 || shExpMatch(host, "au.siemens.com")
 || shExpMatch(host, "authoringau.siemens.com")
 || shExpMatch(host, "training.siemens.be")
 || shExpMatch(host, "www.sislhelpdesk.siemens.co.in")
 || shExpMatch(host, "exports.siemens.co.in")
 || shExpMatch(host, "extranet.senservice1.siemens.com")
 || shExpMatch(host, "creative.diagnostics.siemens.com")
 || shExpMatch(host, "www.enterprise-reports.siemens.co.uk")
 || shExpMatch(host, "enterprise-reports.siemens.co.uk")
 || shExpMatch(host, "w3.siemens.ru")
 || shExpMatch(host, "sbt.siemens.ru")
 || shExpMatch(host, "healthcare.siemens.ru")
 || shExpMatch(host, "pgl.siemens.ru")
 || shExpMatch(host, "ptd.siemens.ru")
 || shExpMatch(host, "science-award.siemens.ru")
 || shExpMatch(host, "www.nsl.siemens.de")
 || shExpMatch(host, "sat.it-solutions.siemens.com")
 || shExpMatch(host, "www2.ad.siemens.com.cn")
 || shExpMatch(host, "csr.siemens.ru")
 || shExpMatch(host, "www.csr.siemens.ru")
 || shExpMatch(host, "www.elearning.siemens.co.th")
 || shExpMatch(host, "elearning.siemens.co.th")
 || shExpMatch(host, "americas-gss.siemens.com")
 || shExpMatch(host, "gsi.siemens.com")
 || shExpMatch(host, "www.gsi.siemens.com")
 || shExpMatch(host, "pgtracker.siemens.at")
 || shExpMatch(host, "agency.it-solutions.usa.siemens.com")
 || shExpMatch(host, "www.enterprise-portal.siemens.co.uk")
 || shExpMatch(host, "benefitsnews.siemens.us")
 || shExpMatch(host, "www.oez.com")
 || shExpMatch(host, "www.oez.cz")
 || shExpMatch(host, "www.siemens.co.jp")
 || shExpMatch(host, "easyshop.siemens.com.br")
 || shExpMatch(host, "siemens.co.kr")
 || shExpMatch(host, "www.siemens.co.kr")
 || shExpMatch(host, "www.siemens.com.tw")
 || shExpMatch(host, "www.siemens.com.sg")
 || shExpMatch(host, "smart.it-solutions.siemens.com")
 || shExpMatch(host, "extranet-us.siemens.com")
 || shExpMatch(host, "bi-client.usa.siemens.com")
 || shExpMatch(host, "bi.usa.siemens.com")
 || shExpMatch(host, "bi-olap.usa.siemens.com")
 || shExpMatch(host, "www.elearning.siemens.com.cn")
 || shExpMatch(host, "www.siemens.com.my")
 || shExpMatch(host, "siemens.com.my")
 || shExpMatch(host, "www.oez.sk")
 || shExpMatch(host, "ctmsv3.it-solutions.usa.siemens.com")
 || shExpMatch(host, "appshare.energy.siemens.com")
 || shExpMatch(host, "www.siemens.com.bd")
 || shExpMatch(host, "id.siemens.com")
 || shExpMatch(host, "sg.siemens.com")
 || shExpMatch(host, "ea.automation.siemens.com")
 || shExpMatch(host, "training-ea.automation.siemens.com")
 || shExpMatch(host, "assembly.siemens.dk")
 || shExpMatch(host, "energycentre.siemens.ie")
 || shExpMatch(host, "iadt.siemens.ru")
 || shExpMatch(host, "www.iadt.siemens.ru")
 || shExpMatch(host, "ens-ext.siemens.com")
 || shExpMatch(host, "www.flender-graff.com")
 || shExpMatch(host, "itil.it-solutions.usa.siemens.com")
 || shExpMatch(host, "w1.siemens.com.cn")
 || shExpMatch(host, "education.diagnostics.siemens.com")
 || shExpMatch(host, "education1.diagnostics.siemens.com")
) { return proxy; }
if ( shExpMatch(host, "apps.siemens.fi")
 || shExpMatch(host, "aunz.siemens.com.au")
 || shExpMatch(host, "www.buildingtechnologies.siemens.ru")
 || shExpMatch(host, "www.sbt.siemens.ru")
 || shExpMatch(host, "buildingtechnologies.siemens.ru")
 || shExpMatch(host, "cyberjunkyard.siemens.co.za")
 || shExpMatch(host, "sbtch-ecommerce.siemens.at")
 || shExpMatch(host, "bps-eu.atos.net")
 || shExpMatch(host, "bps-na.atos.net")
 || shExpMatch(host, "www.siemens.ro")
 || shExpMatch(host, "spdlreise.siemens.at")
 || shExpMatch(host, "uratest-emea.siemens.com")
 || shExpMatch(host, "www.mms.energy.siemens.com")
 || shExpMatch(host, "bps-apac.atos.net")
 || shExpMatch(host, "bps-test1.atos.net")
 || shExpMatch(host, "webedge-at.siemens.com")
 || shExpMatch(host, "webedge-in.siemens.com")
 || shExpMatch(host, "webedge-us.siemens.com")
 || shExpMatch(host, "155.45.168.40")
 || shExpMatch(host, "155.45.168.43")
 || shExpMatch(host, "155.45.168.55")
 || shExpMatch(host, "155.45.168.56")
 || shExpMatch(host, "155.45.168.57")
 || shExpMatch(host, "155.45.168.58")
 || shExpMatch(host, "155.45.168.59")
 || shExpMatch(host, "155.45.168.60")
 || shExpMatch(host, "155.45.168.61")
 || shExpMatch(host, "155.45.168.62")
 || shExpMatch(host, "webedge-fth.it-solutions.atos.net")
 || shExpMatch(host, "avedge-fth.it-solutions.atos.net")
 || shExpMatch(host, "bpa-eu.atos.net")
 || shExpMatch(host, "bps-eu.siemens.com")
 || shExpMatch(host, "bps-apac.siemens.com")
 || shExpMatch(host, "bps-nam.siemens.com")
 || shExpMatch(host, "ura-na.it-solutions.atos.net")
 || shExpMatch(host, "tsgateway.siemens.ie")
 || shExpMatch(host, "secure.siemens.ie")
 || shExpMatch(host, "www.siemens.cz")
 || shExpMatch(host, "www1.siemens.cz")
 || shExpMatch(host, "reference.siemens.cz")
 || shExpMatch(host, "visions.siemens.cz")
 || shExpMatch(host, "newsletter-industry.siemens.ch")
 || shExpMatch(host, "osd-ak.automation.siemens.com")
 || shExpMatch(host, "osd-akstage.automation.siemens.com")
 || shExpMatch(host, "press.siemens.us")
 || shExpMatch(host, "infrastructure-cities.siemens.com.cn")
 || shExpMatch(host, "www.infrastructure-cities.siemens.com.cn")
 || shExpMatch(host, "www.low-medium-voltage.siemens.ru")
 || shExpMatch(host, "www.sinvert-webmonitor.usa.siemens.com")
 || shExpMatch(host, "qr.siemens.ch")
 || shExpMatch(host, "spi-mse-ng-ext.siemens.at")
 || shExpMatch(host, "cco.siemens.es")
 || shExpMatch(host, "cms.sbt.siemens.com")
 || shExpMatch(host, "transformers.siemens.ru")
 || shExpMatch(host, "power-transmission.siemens.ru")
 || shExpMatch(host, "treasury-recruitment.siemens.com")
 || shExpMatch(host, "remoteservices5-mss-bt.usa.siemens.com")
 || shExpMatch(host, "remoteservices1-mss-bt.usa.siemens.com")
 || shExpMatch(host, "remoteservices2-mss-bt.usa.siemens.com")
 || shExpMatch(host, "remoteservices3-mss-bt.usa.siemens.com")
 || shExpMatch(host, "remoteservices4-mss-bt.usa.siemens.com")
 || shExpMatch(host, "www.rusturbomash.com")
 || shExpMatch(host, "vestigo.siemensmetering.co.uk")
 || shExpMatch(host, "bps-emea.siemens.com")
 || shExpMatch(host, "bps.siemens.com")
) { return proxy; }
if ( shExpMatch(host, "siegle.industrysoftware.automation.siemens.com")
 || shExpMatch(host, "community.plm.automation.siemens.com")
 || shExpMatch(host, "epc.bt.siemens.com")
 || shExpMatch(host, "bps-dev.siemens.com")
 || shExpMatch(host, "bpa-dev.atos.net")
 || shExpMatch(host, "bps-dev.atos.net")
 || shExpMatch(host, "hportal.siemens.co.uk")
 || shExpMatch(host, "www.energy.siemens.com.cn")
 || shExpMatch(host, "maexchen.siemens.ro")
 || shExpMatch(host, "www.bamct.siemens.ro")
 || shExpMatch(host, "avedge.evosoft.com")
 || shExpMatch(host, "sip.evosoft.com")
 || shExpMatch(host, "ecamec.flender-graff.com")
 || shExpMatch(host, "www.inview.siemens.de")
 || shExpMatch(host, "dl.plm.automation.siemens.com")
 || shExpMatch(host, "store.plm.automation.siemens.com")
 || shExpMatch(host, "eigss.flender-graff.com")
 || shExpMatch(host, "extranet.content.bt.siemens.de")
 || shExpMatch(host, "alpha01remoteaccess.epsnetwork.com")
 || shExpMatch(host, "alpha02remoteaccess.epsnetwork.com")
 || shExpMatch(host, "alpharemoteaccess.epsnetwork.com")
 || shExpMatch(host, "alpharender.epsnetwork.com")
 || shExpMatch(host, "usagiving.healthcare.siemens.com")
 || shExpMatch(host, "siemens-flex.siemens.it")
 || shExpMatch(host, "www.sip.energy.siemens.com")
 || shExpMatch(host, "slimqa.diagnostics.siemens.com")
 || shExpMatch(host, "virtualcity.siemens.com")
 || shExpMatch(host, "events.siemens.nl")
 || shExpMatch(host, "bt-service.siemens.nl")
 || shExpMatch(host, "www.fk.oez.cz")
 || shExpMatch(host, "www.slim.diagnostics.siemens.com")
 || shExpMatch(host, "slim.diagnostics.siemens.com")
 || shExpMatch(host, "intosite.plm.automation.siemens.com")
 || shExpMatch(host, "webshop1.diagnostics.siemens.com")
 || shExpMatch(host, "www.asp.siemensmedical.com")
 || shExpMatch(host, "healthmatters.siemens.nl")
 || shExpMatch(host, "innovationmatters.siemens.nl")
 || shExpMatch(host, "mobilitymatters.siemens.nl")
 || shExpMatch(host, "dimensions.siemens.nl")
 || shExpMatch(host, "test-healthmatters.siemens.nl")
 || shExpMatch(host, "test-innovationmatters.siemens.nl")
 || shExpMatch(host, "test-mobilitymatters.siemens.nl")
 || shExpMatch(host, "test-dimensions.siemens.nl")
 || shExpMatch(host, "cookies.siemens.com")
 || shExpMatch(host, "downloada.industrysoftware.automation.siemens.com")
 || shExpMatch(host, "www.westermeer-siteinduction.siemens.com")
 || shExpMatch(host, "www.siteinduction.siemens.com")
 || shExpMatch(host, "low-medium-voltage.siemens.ru")
 || shExpMatch(host, "iamwind.energy.siemens.com")
 || shExpMatch(host, "www.survey.siemens.de")
 || shExpMatch(host, "teamplay.siemens.com")
 || shExpMatch(host, "hccloud.siemens.com")
 || shExpMatch(host, "cpq.healthcare.siemens.com")
 || shExpMatch(host, "healthcare.siemens.ch")
 || shExpMatch(host, "healthcare.siemens.co.jp")
 || shExpMatch(host, "healthcare.siemens.co.kr")
 || shExpMatch(host, "healthcare.siemens.co.uk")
 || shExpMatch(host, "healthcare.siemens.com")
 || shExpMatch(host, "healthcare.siemens.com.au")
 || shExpMatch(host, "healthcare.siemens.com.mx")
 || shExpMatch(host, "healthcare.siemens.de")
 || shExpMatch(host, "healthcare.siemens.es")
 || shExpMatch(host, "healthcare.siemens.fr")
 || shExpMatch(host, "healthcare.siemens.it")
 || shExpMatch(host, "healthcare.siemens.nl")
) { return proxy; }
if ( shExpMatch(host, "healthcare.siemens.pl")
 || shExpMatch(host, "healthcare.siemens.se")
 || shExpMatch(host, "medmuseum.siemens.com")
 || shExpMatch(host, "oem-products.siemens.com")
 || shExpMatch(host, "patienteninfo.siemens.de")
 || shExpMatch(host, "shop.healthcare.siemens.com")
 || shExpMatch(host, "static-test.healthcare.siemens.com")
 || shExpMatch(host, "static.healthcare.siemens.com")
 || shExpMatch(host, "usa.healthcare.siemens.com")
 || shExpMatch(host, "www.healthcare.siemens.ch")
 || shExpMatch(host, "www.healthcare.siemens.co.jp")
 || shExpMatch(host, "www.healthcare.siemens.co.kr")
 || shExpMatch(host, "www.healthcare.siemens.co.uk")
 || shExpMatch(host, "www.healthcare.siemens.com")
 || shExpMatch(host, "www.healthcare.siemens.com.au")
 || shExpMatch(host, "www.healthcare.siemens.com.mx")
 || shExpMatch(host, "www.healthcare.siemens.de")
 || shExpMatch(host, "www.healthcare.siemens.es")
 || shExpMatch(host, "www.healthcare.siemens.fr")
 || shExpMatch(host, "www.healthcare.siemens.it")
 || shExpMatch(host, "www.healthcare.siemens.nl")
 || shExpMatch(host, "www.healthcare.siemens.pl")
 || shExpMatch(host, "www.healthcare.siemens.se")
 || shExpMatch(host, "www.medmuseum.siemens.com")
 || shExpMatch(host, "www.oem-products.siemens.com")
 || shExpMatch(host, "www.patienteninfo.siemens.de")
 || shExpMatch(host, "www.siemens.dz")
 || shExpMatch(host, "queryportal.siemensmetering.co.uk")
 || shExpMatch(host, "emm.siemens.com")
 || shExpMatch(host, "emmc.siemens.com")
 || shExpMatch(host, "emmt.siemens.com")
 || shExpMatch(host, "emmtc.siemens.com")
 || shExpMatch(host, "www.hspkoeln.de")
 || shExpMatch(host, "www.healthcare.siemens.com.sg")
 || shExpMatch(host, "healthcare.siemens.com.sg")
 || shExpMatch(host, "www.healthcare.siemens.ca")
 || shExpMatch(host, "healthcare.siemens.ca")
 || shExpMatch(host, "www.i2mpect.eu")
 || shExpMatch(host, "latam01.smartstorage.siemens.com")
 || shExpMatch(host, "catalogue-healthcare.siemens.fr")
 || shExpMatch(host, "support-cn.industry.siemens.com")
 || shExpMatch(host, "cloudservices.siemens.com")
 || shExpMatch(host, "www.it.siemens.de")
 || shExpMatch(host, "brandville.siemens.com")
 || shExpMatch(host, "corporate.siemens.com.au")
 || shExpMatch(host, "www.corporate.siemens.com.au")
 || shExpMatch(host, "digitalgrid.siemens.pl")
 || shExpMatch(host, "www.digitalgrid.siemens.pl")
 || shExpMatch(host, "high-voltage.siemens.pl")
 || shExpMatch(host, "www.high-voltage.siemens.pl")
 || shExpMatch(host, "latam01.smartstorage.one-hc.com")
 || shExpMatch(host, "camstar.industrysoftware.automation.siemens.com")
 || shExpMatch(host, "windtrainingdemand.siemens.com")
 || shExpMatch(host, "soutez.siemens.cz")
 || shExpMatch(host, "apply.siemens.ru")
 || shExpMatch(host, "apac01.smartstorage.one-hc.com")
 || shExpMatch(host, "apac01.smartstorage.siemens.com")
 || shExpMatch(host, "cn01.smartstorage.siemens.com")
 || shExpMatch(host, "itinnovationdays.siemens.com")
 || shExpMatch(host, "webshop.diagnostics.siemens.de")
 || shExpMatch(host, "webshop.diagnostics.siemens.com")
 || shExpMatch(host, "webshopqa.diagnostics.siemens.com")
 || shExpMatch(host, "webshopqa1.diagnostics.siemens.com")
 || shExpMatch(host, "educationqa.diagnostics.siemens.com")
 || shExpMatch(host, "educationqa1.diagnostics.siemens.com")
) { return proxy; }
if ( shExpMatch(host, "eservices.diagnostics.siemens.com")
 || shExpMatch(host, "eservices1.diagnostics.siemens.com")
 || shExpMatch(host, "eservicesqa.diagnostics.siemens.com")
 || shExpMatch(host, "eservicesqa1.diagnostics.siemens.com")
 || shExpMatch(host, "onlineordering.diagnostics.siemens.com")
 || shExpMatch(host, "onlineordering1.diagnostics.siemens.com")
 || shExpMatch(host, "wmqa.diagnostics.siemens.com")
 || shExpMatch(host, "clinicalaffairs.diagnostics.siemens.com")
 || shExpMatch(host, "clinicalaffairsqa.diagnostics.siemens.com")
 || shExpMatch(host, "siedial.siemens.com")
 || shExpMatch(host, "blogs.siemens.com")
 || shExpMatch(host, "jira-gdmc.siemens.com")
 || shExpMatch(host, "jira-gdmc-test.siemens.com")
 || shExpMatch(host, "jira-gms.siemens.com")
 || shExpMatch(host, "confluence-gdmc.siemens.com")
 || shExpMatch(host, "confluence-gdmc-test.siemens.com")
 || shExpMatch(host, "confluence-gms.siemens.com")
 || shExpMatch(host, "myproduction.siemens.com")
 || shExpMatch(host, "dbicloud.siemens.com")
 || shExpMatch(host, "myvideo.siemens.com")
 || shExpMatch(host, "polarion.plm.automation.siemens.com")
 || shExpMatch(host, "*.lifenet.healthcare.siemens.com")
 || shExpMatch(host, "www.oem-products.siemens.com.cn")
 || shExpMatch(host, "gebouwentechniek.siemens.nl")
 || shExpMatch(host, "energymatters.siemens.nl")
 || shExpMatch(host, "test-gebouwentechniek.siemens.nl")
 || shExpMatch(host, "test-energymatters.siemens.nl")
 || shExpMatch(host, "*.sinalytics.siemens.com")
 || shExpMatch(host, "*.mindsphere.siemens.com")
 || shExpMatch(host, "*.metapro4pd.siemens.com")
 || shExpMatch(host, "taskmarket.siemens.com")
 || shExpMatch(host, "smartguard.siemens.com")
 || shExpMatch(host, "www.smartguard.siemens.com")
 || shExpMatch(host, "smart-grid.siemens.ru")
 || shExpMatch(host, "surveys.siemens.com")
 || shExpMatch(host, "*.gmscloud.siemens.com")
 || shExpMatch(host, "diagnostika.siemens.cz")
 || shExpMatch(host, "www.w2.siemens.com.cn")
 || shExpMatch(host, "w2.siemens.com.cn")
 || shExpMatch(host, "www.oem-xray-components.siemens.com")
 || shExpMatch(host, "www.oem-xray-components.siemens.com.cn")
 || shExpMatch(host, "login.siemenswelt.siemens.com")
 || shExpMatch(host, "*-yp.siemens.com")
 || shExpMatch(host, "static.siemens.com")
 || shExpMatch(host, "*.catestsite.siemens.com")
 || shExpMatch(host, "catestsite.siemens.com")
 || shExpMatch(host, "sieformatie.siemens.nl")
 || shExpMatch(host, "test-sieformatie.siemens.nl")
 || shExpMatch(host, "online-magazines.siemens.nl")
 || shExpMatch(host, "test-online-magazines.siemens.nl")
 || shExpMatch(host, "electricitymatters.siemens.nl")
 || shExpMatch(host, "test-electricitymatters.siemens.nl")
 || shExpMatch(host, "*.thesteveportal.plm.automation.siemens.com")
 || shExpMatch(host, "www.bt.siemens.com.cn")
 || shExpMatch(host, "*.bt.siemens.com.cn")
 || shExpMatch(host, "teamsite.healthcare.siemens.com")
 || shExpMatch(host, "teamsite-t.healthcare.siemens.com")
 || shExpMatch(host, "teamsite-app.healthcare.siemens.com")
 || shExpMatch(host, "teamsite-t-app.healthcare.siemens.com")
 || shExpMatch(host, "login-teamsite.healthcare.siemens.com")
 || shExpMatch(host, "login-t-teamsite.healthcare.siemens.com")
 || shExpMatch(host, "smartcity-test.mobility.siemens.com")
 || shExpMatch(host, "smartcity.mobility.siemens.com")
 || shExpMatch(host, "citrix.guascor.com")
 || shExpMatch(host, "maps.siemens.com")
) { return proxy; }
if ( shExpMatch(host, "origin.maps.siemens.com")
 || shExpMatch(host, "elc.siemens.com")
 || shExpMatch(host, "scout.siemens.dk")
 || shExpMatch(host, "portal.siemens.com")
 || shExpMatch(host, "portal-qa.siemens.com")
 || shExpMatch(host, "portal-dev.siemens.com")
 || shExpMatch(host, "cportal.siemens.com")
 || shExpMatch(host, "cportal-qa.siemens.com")
 || shExpMatch(host, "cportal-dev.siemens.com")
 || shExpMatch(host, "www.cinematic-rendering.siemens.com")
 || shExpMatch(host, "quiz.siemens.com")
 || shExpMatch(host, "sguard.siemens.com")
 || shExpMatch(host, "mediadatabase-wp.siemens.com")
 || shExpMatch(host, "*.mvp10.siemens.com")
 || shExpMatch(host, "fileshare.siemens.com")
 || shExpMatch(host, "learningcampusreports.siemens.fr")
 || shExpMatch(host, "learningcampus.siemens.fr")
 || shExpMatch(host, "www.spectrumpowerlisbon2017.siemens.com")
 || shExpMatch(host, "extranet.siemens.co.ae")
 || shExpMatch(host, "*.extranet.siemens.co.ae")
 || shExpMatch(host, "*.stencil.siemens.com")
 || shExpMatch(host, "portal.oez.cz")
 || shExpMatch(host, "*.portal.oez.cz")
 || shExpMatch(host, "srt-healthineers.siemens.com")
 || shExpMatch(host, "osd-akint.automation.siemens.com")
 || shExpMatch(host, "atpvs.siemens.com")
 || shExpMatch(host, "mdx.plm.automation.siemens.com")
 || shExpMatch(host, "mdx2.plm.automation.siemens.com")
 || shExpMatch(host, "barcodes.siemens.com")
 || shExpMatch(host, "barcodes-q.siemens.com")
 || shExpMatch(host, "botanica.siemens.com")
 || shExpMatch(host, "hit.sbt.siemens.com")
 || shExpMatch(host, "eadvantageq.siemens.com")
 || shExpMatch(host, "eadvantageq-import.siemens.com")
 || shExpMatch(host, "navigator-test.siemens.com")
 || shExpMatch(host, "navigator-test-import.siemens.com")
 || shExpMatch(host, "apps.siemens.be")
 || shExpMatch(host, "eadvantage.siemens.com")
 || shExpMatch(host, "eadvantage-import.siemens.com")
 || shExpMatch(host, "navigator.siemens.com")
 || shExpMatch(host, "wg-dev.siemens.com")
 || shExpMatch(host, "wg.siemens.com")
 || shExpMatch(host, "tavs.siemens.com")
 || shExpMatch(host, "myshare.siemens.com")
 || shExpMatch(host, "test-fileshare.siemens.com")
 || shExpMatch(host, "stencil.siemens.com")
 || shExpMatch(host, "cportal.energy.siemens.com")
 || shExpMatch(host, "cportal-qa.energy.siemens.com")
 || shExpMatch(host, "cportal-dev.energy.siemens.com")
 || shExpMatch(host, "mybuilding.siemens.com")
 || shExpMatch(host, "traptdev.siemens.com")
 || shExpMatch(host, "ecard-generator.siemens.com")
 || shExpMatch(host, "jobs.oez.cz")
 || shExpMatch(host, "*.mybuilding.siemens.com")
 || shExpMatch(host, "busbarcheck.siemens.com")
 || shExpMatch(host, "www.i-base.siemens.com")
 || shExpMatch(host, "atpvs.siemens.de")
 || shExpMatch(host, "pricing-light.siemens.com")
 || shExpMatch(host, "smc.siemens.de")
 || shExpMatch(host, "www.primavera-energy.siemens.com")
 || shExpMatch(host, "www.primavera-energy-int.siemens.com")
 || shExpMatch(host, "login-qa.siemens.com")
 || shExpMatch(host, "www.convergence-creators.siemens.com")
 || shExpMatch(host, "bookings.siemensmetering.co.uk")
 || shExpMatch(host, "solutionlink.siemens.com")
) { return proxy; }
if ( shExpMatch(host, "cert-portal.siemens.com")
 || shExpMatch(host, "carl-api-test.siemens.com")
 || shExpMatch(host, "www.smc.siemens.de")
 || shExpMatch(host, "carl-api-prod.siemens.com")
 || shExpMatch(host, "pss-store.siemens.com")
 || shExpMatch(host, "*.dmp.siemens.com")
 || shExpMatch(host, "sw.oez.cz")
 || shExpMatch(host, "cc.oez.cz")
 || shExpMatch(host, "login.siemens.com")
 || shExpMatch(host, "etestonline.siemens.com")
 || shExpMatch(host, "www.safir-demo-v3.siemens.com")
 || shExpMatch(host, "application-wvs-award.siemens.com")
 || shExpMatch(host, "staging-wvs-award.siemens.com")
 || shExpMatch(host, "*.dc.siemens.com")
 || shExpMatch(host, "*.kmatrix.siemens.ch")
 || shExpMatch(host, "*.etestonline.siemens.com")
 || shExpMatch(host, "wkauth.industrysoftware.automation.siemens.com")
 || shExpMatch(host, "tass.plm.automation.siemens.com")
 || shExpMatch(host, "thebobportal.plm.automation.siemens.com")
 || shExpMatch(host, "emsys.siemens.ro")
 || shExpMatch(host, "sguard-app.siemens.com")
 || shExpMatch(host, "i-edit.siemens.com")
 || shExpMatch(host, "extranet.gbm.bt.siemens.de")
 || shExpMatch(host, "servicerequestdev-industry.siemens.com")
 || shExpMatch(host, "servicerequesttest-industry.siemens.com")
 || shExpMatch(host, "servicerequest-industry.siemens.com")
 || shExpMatch(host, "login-dev.siemens.com")
 || shExpMatch(host, "new.siemens.com")
 || shExpMatch(host, "*.new.siemens.com")
 || shExpMatch(host, "*.mo-cs-*.public.siemens.com")
 || shExpMatch(host, "doclib.healthcare.siemens.com")
 || shExpMatch(host, "try-lifenet.healthcare.siemens.com")
 || shExpMatch(host, "lifenet-quality.siemens-healthineers.com")
 || shExpMatch(host, "www.corporate.siemens-healthineers.com")
 || shExpMatch(host, "www.siemens-healthineers.*")
 || shExpMatch(host, "magazine.siemens.be")
 || shExpMatch(host, "test-magazine.siemens.be")
 || shExpMatch(host, "*.references.siemens.com")
 || shExpMatch(host, "references.siemens.com")
 || shExpMatch(host, "*.sws.siemens.com")
 || shExpMatch(host, "*.login.siemens.com")
 || shExpMatch(host, "*.login-qa.siemens.com")
 || shExpMatch(host, "*.login-dev.siemens.com")
 || shExpMatch(host, "preferences.siemens.ch")
 || shExpMatch(host, "profiles.siemens.com")
 || shExpMatch(host, "profilessrvs.siemens.com")
 || shExpMatch(host, "pricing-light-qa.siemens.com")
 || shExpMatch(host, "primavera-rdweb.siemens.com")
 || shExpMatch(host, "www.weblogx.siemens.com")
 || shExpMatch(host, "*.preferences.siemens.ch")
 || shExpMatch(host, "netstorage.industrysoftware.automation.siemens.com")
 || shExpMatch(host, "news.siemens.co.uk")
 || shExpMatch(host, "mda.siemens.com")
 || shExpMatch(host, "www.smartapplications.siemens.com")
 || shExpMatch(host, "*.w2g.siemens.com")
 || shExpMatch(host, "profilessrvsstage.siemens.com")
 || shExpMatch(host, "profilesstage.siemens.com")
 || shExpMatch(host, "cc-events.siemens.ru")
 || shExpMatch(host, "www.qa-primavera-energy-int.siemens.com")
 || shExpMatch(host, "www.qa-primavera-energy.siemens.com")
 || shExpMatch(host, "iap-pxy-mow1.siemens.ru")
 || shExpMatch(host, "www.industry.siemens.ru")
 || shExpMatch(host, "industry.siemens.ru")
 || shExpMatch(host, "www.med.siemens.ru")
 || shExpMatch(host, "med.siemens.ru")
) { return proxy; }
if ( shExpMatch(host, "www.partners-sbt.siemens.ru")
 || shExpMatch(host, "partners-sbt.siemens.ru")
 || shExpMatch(host, "megafon-communications.siemens.ru")
 || shExpMatch(host, "www.pgl.siemens.ru")
 || shExpMatch(host, "test.industry.siemens.ru")
 || shExpMatch(host, "old.industry.siemens.ru")
 || shExpMatch(host, "new.industry.siemens.ru")
 || shExpMatch(host, "forum.industry.siemens.ru")
 || shExpMatch(host, "www.healthcare.siemens.ru")
 || shExpMatch(host, "www.ptd.siemens.ru")
 || shExpMatch(host, "efie.siemens.ru")
 || shExpMatch(host, "hvp.siemens.ru")
 || shExpMatch(host, "www.hvp.siemens.ru")
 || shExpMatch(host, "www.power-transmission.siemens.ru")
 || shExpMatch(host, "m.science-award.siemens.ru")
 || shExpMatch(host, "www.smart-grid.siemens.ru")
 || shExpMatch(host, "house.siemens.ru")
 || shExpMatch(host, "www.house.siemens.ru")
 || shExpMatch(host, "qmeeting.siemens.ru")
 || shExpMatch(host, "dfpd.siemens.ru")
 || shExpMatch(host, "www.dfpd.siemens.ru")
 || shExpMatch(host, "multimedia.email-bt.siemens.ru")
 || shExpMatch(host, "email-bt.siemens.ru")
 || shExpMatch(host, "dfpd-events.siemens.ru")
 || shExpMatch(host, "dfpd-partners.siemens.ru")
 || shExpMatch(host, "dfpd-forum.siemens.ru")
 || shExpMatch(host, "*.im.siemens.com")
 || shExpMatch(host, "service-ips.cloud.siemens.com")
 || shExpMatch(host, "shop.pointofcare.healthcare.siemens.com.sg")
 || shExpMatch(host, "shop.medicalimaging.healthcare.siemens.com.sg")
 || shExpMatch(host, "flex.siemens.com")
 || shExpMatch(host, "shsustesting.siemens-healthineers.com")
 || shExpMatch(host, "ultrasoundproductideas.siemens-healthineers.com")
 || shExpMatch(host, "usproductideas.siemens-healthineers.com")
 || shExpMatch(host, "wso-uat.siemens.com")
 || shExpMatch(host, "wso.siemens.com")
 || shExpMatch(host, "usproductideasmanagement.siemens-healthineers.com")
 || shExpMatch(host, "camstarsandboxmom.cloud.siemens.com")
 || shExpMatch(host, "cn01.smartstorage.one-hc.com")
 || shExpMatch(host, "solidedge.siemens.com")
 || shExpMatch(host, "websuite-ips.cloud.siemens.com")
 || shExpMatch(host, "mobapp-ips.cloud.siemens.com")
 || shExpMatch(host, "lifenet.siemens-healthineers.com")
 || shExpMatch(host, "static.siemens-healthineers.com")
 || shExpMatch(host, "assets.siemens.com")
 || shExpMatch(host, "*.assets.siemens.com")
 || shExpMatch(host, "sharencare.siemens.de")
 || shExpMatch(host, "siemens.eu")
 || shExpMatch(host, "www.siemens.eu")
 || shExpMatch(host, "www.smart-hotel.siemens.fr")
 || shExpMatch(host, "servopresssizing.siemens.com")
 || shExpMatch(host, "cerberusportal.siemens.com")
 || shExpMatch(host, "logistics.siemens.co.kr")
 || shExpMatch(host, "spotfire.mo-cs-prd.public.siemens.com")
 || shExpMatch(host, "login.siemens-healthineers.com")
 || shExpMatch(host, "atpvs-au.siemens.com")
 || shExpMatch(host, "atpvs.siemens.com.sg")
 || shExpMatch(host, "tst.siemens.com")
 || shExpMatch(host, "doclib.siemens-healthineers.com")
 || shExpMatch(host, "userforum.siemens-healthineers.com")
 || shExpMatch(host, "www.doclib.siemens-healthineers.com")
 || shExpMatch(host, "www.lifenet.siemens-healthineers.com")
 || shExpMatch(host, "www.userforum.siemens-healthineers.com")
 || shExpMatch(host, "peg-author.siemens.com")
 || shExpMatch(host, "peg.siemens.com")
) { return proxy; }
if ( shExpMatch(host, "*.tst.siemens.com")
 || shExpMatch(host, "ebiz.industry.siemens.com.cn")
 || shExpMatch(host, "smc.dev.siemens.de")
 || shExpMatch(host, "smc.uat.siemens.de")
 || shExpMatch(host, "dis18.siemens.fr")
 || shExpMatch(host, "demo-ids.siemens-healthineers.com")
 || shExpMatch(host, "sprint-ids.siemens-healthineers.com")
 || shExpMatch(host, "latest-ids.siemens-healthineers.com")
 || shExpMatch(host, "ingenuity.siemens.com")
 || shExpMatch(host, "www.wechat.siemens.com.cn")
 || shExpMatch(host, "forms.siemens.ru")
 || shExpMatch(host, "oct.siemens.be")
 || shExpMatch(host, "premiumservices.siemens.com")
 || shExpMatch(host, "*.premiumservices.siemens.com")
 || shExpMatch(host, "product-ids.siemens-healthineers.com")
 || shExpMatch(host, "de-apps.siemens.com.cn")
 || shExpMatch(host, "swo.de-apps.siemens.com.cn")
 || shExpMatch(host, "swo-iam.de-apps.siemens.com.cn")
 || shExpMatch(host, "epa.de-apps.siemens.com.cn")
 || shExpMatch(host, "wsa.de-apps.siemens.com.cn")
 || shExpMatch(host, "upc.de-apps.siemens.com.cn")
 || shExpMatch(host, "connectedbatteries.siemens.co.uk")
 || shExpMatch(host, "www.connectedbatteries.siemens.co.uk")
 || shExpMatch(host, "www.miniprogram.siemens.com.cn")
 || shExpMatch(host, "mac.siemens.com")
 || shExpMatch(host, "www.sinasavedev.siemens.com")
 || shExpMatch(host, "www.sinasavestage.siemens.com")
 || shExpMatch(host, "www.sinasave.siemens.com")
 || shExpMatch(host, "ehsgnb.siemens.fr")
 || shExpMatch(host, "ids-demo.siemens-healthineers.com")
 || shExpMatch(host, "ids-sprint.siemens-healthineers.com")
 || shExpMatch(host, "ids-product.siemens-healthineers.com")
 || shExpMatch(host, "ids-latest.siemens-healthineers.com")
 || shExpMatch(host, "www.siemens.rs")
 || shExpMatch(host, "dsop.dpv.siemens.com.cn")
 || shExpMatch(host, "test-myregistration.siemens.com")
 || shExpMatch(host, "myregistration.siemens.com")
 || shExpMatch(host, "cc.oez.sk")
 || shExpMatch(host, "ids-cerner-sandbox.siemens-healthineers.com")
 || shExpMatch(host, "ids-ehealth-sandbox.siemens-healthineers.com")
 || shExpMatch(host, "boss.siemens.com")
 || shExpMatch(host, "smartflow.siemens.com")
 || shExpMatch(host, "aemweb.industrysoftware.automation.siemens.com")
 || shExpMatch(host, "*.aemweb.industrysoftware.automation.siemens.com")
 || shExpMatch(host, "dex.siemens.com")
 || shExpMatch(host, "*.dex.siemens.com")
 || shExpMatch(host, "grenoble.siemens.fr")
 || shExpMatch(host, "rh-grenoble.siemens.fr")
 || shExpMatch(host, "myshare-cms.siemens.com")
 || shExpMatch(host, "smc.siemens.com")
 || shExpMatch(host, "jira.de-apps.siemens.com.cn")
 || shExpMatch(host, "www.logistics-airports-solutions.siemens.com")
 || shExpMatch(host, "siconnect.siemens.nl")
 || shExpMatch(host, "*.myid.siemens.com")
 || shExpMatch(host, "*.myid-qa.siemens.com")
 || shExpMatch(host, "*.myid-dev.siemens.com")
 || shExpMatch(host, "dev.i18n.siemens.com")
 || shExpMatch(host, "stage.i18n.siemens.com")
 || shExpMatch(host, "i18n.siemens.com")
 || shExpMatch(host, "circulars-q.siemens.com")
 || shExpMatch(host, "*.circulars-q.siemens.com")
 || shExpMatch(host, "sidigitalcatalog.siemens.it")
 || shExpMatch(host, "dev-fileshare.siemens.com")
 || shExpMatch(host, "mac.siemens.com.hk")
 || shExpMatch(host, "forms.healthcare.siemens.ru")
) { return proxy; }
if ( shExpMatch(host, "partners.finance.siemens.ru")
 || shExpMatch(host, "hello.siemens.com")
 || shExpMatch(host, "*.hello.siemens.com")
 || shExpMatch(host, "axciteme.siemens.com")
 || shExpMatch(host, "dfpd-service.siemens.ru")
 || shExpMatch(host, "pfsense.siemens.com.eg")
 || shExpMatch(host, "pa-innovation.siemens.com")
 || shExpMatch(host, "www.health4all.siemens.com.br")
 || shExpMatch(host, "srs.siemens-healthineers.com")
 || shExpMatch(host, "*.srs.siemens-healthineers.com")
 || shExpMatch(host, "sitrain.siemens.dz")
 || shExpMatch(host, "assetperformance.navigator.siemens.com")
 || shExpMatch(host, "dchub.siemens.com")
 || shExpMatch(host, "*.dchub.siemens.com")
 || shExpMatch(host, "comosengineeringportal.siemens.com")
 || shExpMatch(host, "sensformerqa.cloud.siemens.com")
 || shExpMatch(host, "login-d.siemens-healthineers.com")
 || shExpMatch(host, "login-qa.siemens-healthineers.com")
 || shExpMatch(host, "download.siemens-healthineers.com")
 || shExpMatch(host, "sensformeraws.cloud.siemens.com")
 || shExpMatch(host, "sensworld.cloud.siemens.com")
 || shExpMatch(host, "www.tpsecuritynotification.siemens.com")
 || shExpMatch(host, "www.patienteninfo.siemens-healthineers.com")
 || shExpMatch(host, "www.oem-products.siemens-healthineers.com")
 || shExpMatch(host, "www.medmuseum.siemens-healthineers.com")
 || shExpMatch(host, "assetperformance-tableau.navigator.siemens.com")
 || shExpMatch(host, "*.assetperformance-tableau.navigator.siemens.com")
 || shExpMatch(host, "regulations-q.siemens.com")
 || shExpMatch(host, "*.regulations-q.siemens.com")
 || shExpMatch(host, "regulations-admin-q.siemens.com")
 || shExpMatch(host, "*.regulations-admin-q.siemens.com")
 || shExpMatch(host, "regulations.siemens.com")
 || shExpMatch(host, "*.regulations.siemens.com")
 || shExpMatch(host, "regulations-admin.siemens.com")
 || shExpMatch(host, "*.regulations-admin.siemens.com")
 || shExpMatch(host, "circulars.siemens.com")
 || shExpMatch(host, "*.circulars.siemens.com")
 || shExpMatch(host, "innovation.siemens.com")
 || shExpMatch(host, "ecosystem.siemens.com")
 || shExpMatch(host, "articlenumber.siemens.com")
 || shExpMatch(host, "*.articlenumber.siemens.com")
 || shExpMatch(host, "siprotec-digitaltwin.siemens.com")
 || shExpMatch(host, "*.siprotec-digitaltwin.siemens.com")
 || shExpMatch(host, "siecure.siemens.com")
 || shExpMatch(host, "energy.siemens.com")
 || shExpMatch(host, "www.energy.siemens.com")
 || shExpMatch(host, "remoteservices11-mss-bt.usa.siemens.com")
 || shExpMatch(host, "cs-ml-americas.siemens-healthineers.com")
 || shExpMatch(host, "smartmining.siemens.com")
 || shExpMatch(host, "buildingoperator.siemens.com")
 || shExpMatch(host, "preview-buildingoperator.siemens.com")
 || shExpMatch(host, "vestigo-live-combined-aaas.siemensmetering.co.uk")
 || shExpMatch(host, "www.simicas-managemyplant.industry.siemens.com")
 || shExpMatch(host, "mindconnectrail.siemens.nl")
 || shExpMatch(host, "mindconnectwebsocket.siemens.nl")
 || shExpMatch(host, "tableauserver.siemens.nl")
 || shExpMatch(host, "siconnectwebsocket.siemens.nl")
 || shExpMatch(host, "easysparesmarketplacetst.siemens.com")
 || shExpMatch(host, "forum.siemens-healthineers.com")
 || shExpMatch(host, "easysparesmarketplacedev.siemens.com")
 || shExpMatch(host, "share.siemens.com")
 || shExpMatch(host, "manuals.siemens.com")
 || shExpMatch(host, "iam.de-apps.siemens.com.cn")
 || shExpMatch(host, "confluence.de-apps.siemens.com.cn")
 || shExpMatch(host, "railmall.siemens.com")
) { return proxy; }
if ( shExpMatch(host, "ipcdownload.siemens.com")
 || shExpMatch(host, "tankmon.siemens.com")
 || shExpMatch(host, "watmon.siemens.com")
 || shExpMatch(host, "digitalservices-des.siemens.com")
 || shExpMatch(host, "press.siemens.com")
 || shExpMatch(host, "*.press.siemens.com")
 || shExpMatch(host, "intranet.weblogx.siemens.com")
 || shExpMatch(host, "easysparesmarketplace.siemens.com")
 || shExpMatch(host, "www.airborne.siemens.fr")
 || shExpMatch(host, "www.smart-office.siemens.fr")
 || shExpMatch(host, "www.smart-hospital.siemens.fr")
 || shExpMatch(host, "cert-portal.integration.siemens.com")
 || shExpMatch(host, "analytics.industrysoftware.automation.siemens.com")
 || shExpMatch(host, "dsde.dpv.siemens.com.cn")
 || shExpMatch(host, "*.srs.one-hc.com")
 || shExpMatch(host, "diswlogintest.siemens.com")
 || shExpMatch(host, "speiseplan.siemens.de")
 || shExpMatch(host, "neo.siemens.com")
 || shExpMatch(host, "pcs.siemens.com")
 || shExpMatch(host, "siwell.siemens.at")
 || shExpMatch(host, "ampowdermanagement.siemens.com")
 || shExpMatch(host, "diswlogin.siemens.com")
 || shExpMatch(host, "spf-gate.siemens.de")
 || shExpMatch(host, "useit.siemens.com")
 || shExpMatch(host, "sidex.siemens-healthineers.com")
 || shExpMatch(host, "buildingtwin.siemens.com")
 || shExpMatch(host, "*.buildingtwin.siemens.com")
 || shExpMatch(host, "digitaltwin.siemens.com")
 || shExpMatch(host, "*.digitaltwin.siemens.com")
 || shExpMatch(host, "rcm-scp.siemens.com")
 || shExpMatch(host, "w2g.siemens.com")
 || shExpMatch(host, "*.pcs.siemens.com")
 || shExpMatch(host, "*.neo.siemens.com")
 || shExpMatch(host, "myneo.siemens.com")
 || shExpMatch(host, "*.myneo.siemens.com")
 || shExpMatch(host, "*.ingenuityx.siemens.com")
 || shExpMatch(host, "*.siveillance.siemens.com")
 || shExpMatch(host, "edge.industry.siemens.com")
 || shExpMatch(host, "grtt.siemens-healthineers.com")
 || shExpMatch(host, "pkn.siemens.com")
 || shExpMatch(host, "*.pkn.siemens.com")
 || shExpMatch(host, "eventhub.siemens.com")
 || shExpMatch(host, "sintesoportal.siemens.com")
 || shExpMatch(host, "sieasy.siemens.net")
 || shExpMatch(host, "desigofireportal.siemens.com")
 || shExpMatch(host, "www.rcamdynamic.siemens.com")
 || shExpMatch(host, "sensproducts.cloud.siemens.com")
 || shExpMatch(host, "climatixic.siemens.com.cn")
 || shExpMatch(host, "*.climatixic.siemens.com.cn")
 || shExpMatch(host, "qa-xfracas.diagnostics.siemens.com")
 || shExpMatch(host, "data.eb.siemens.com")
 || shExpMatch(host, "sensproductionbackend.cloud.siemens.com")
 || shExpMatch(host, "*.sw.siemens.com")
 || shExpMatch(host, "*.crme2.siemens-healthineers.com")
 || shExpMatch(host, "www.mobility.siemens.com")
 || shExpMatch(host, "smartsimulatormi.siemens-healthineers.com")
 || shExpMatch(host, "ric-usa.siemens.com")
 || shExpMatch(host, "m2mprod.cloud.siemens.com")
 || shExpMatch(host, "search.siemens.com")
 || shExpMatch(host, "m.siemens.com")
 || shExpMatch(host, "m.usa.siemens.com")
 || shExpMatch(host, "siemens.co.in")
 || shExpMatch(host, "www.siemens.co.in")
 || shExpMatch(host, "siemens.co.uk")
 || shExpMatch(host, "www.siemens.co.uk")
) { return proxy; }
if ( shExpMatch(host, "siemens.co.za")
 || shExpMatch(host, "www.siemens.co.za")
 || shExpMatch(host, "siemens.com")
 || shExpMatch(host, "www.siemens.com")
 || shExpMatch(host, "siemens.fi")
 || shExpMatch(host, "www.siemens.fi")
 || shExpMatch(host, "siemens.fr")
 || shExpMatch(host, "www.siemens.fr")
 || shExpMatch(host, "siemens.ie")
 || shExpMatch(host, "siemens.pl")
 || shExpMatch(host, "www.siemens.pl")
 || shExpMatch(host, "usa.siemens.com")
 || shExpMatch(host, "www.usa.siemens.com")
 || shExpMatch(host, "varena-service-dev.siemens.com")
 || shExpMatch(host, "varena-service-test.siemens.com")
 || shExpMatch(host, "varena-service-int.siemens.com")
 || shExpMatch(host, "varena-service-prod.siemens.com")
 || shExpMatch(host, "fracas.diagnostics.siemens.com")
 || shExpMatch(host, "smartordertracking.siemens.com")
 || shExpMatch(host, "www.cyptportal.siemens.com")
 || shExpMatch(host, "cyptportal.siemens.com")
 || shExpMatch(host, "quickpay.siemens.com")
 || shExpMatch(host, "phct.siemens-healthineers.com")
 || shExpMatch(host, "siemens.co.ir")
 || shExpMatch(host, "www.siemens.co.ir")
 || shExpMatch(host, "metroamsterdam.siemens.nl")
 || shExpMatch(host, "mylearningworld.siemens.com")
 || shExpMatch(host, "www.spf-gate.siemens.de")
 || shExpMatch(host, "opcenterdmo.cloud.siemens.com")
 || shExpMatch(host, "smartcheck-dev.siemens.com")
 || shExpMatch(host, "smartcheck.siemens.com")
 || shExpMatch(host, "www.lowvoltage.siemens.com")
 || shExpMatch(host, "www.trench-group.com")
 || shExpMatch(host, "trench-group.com")
 || shExpMatch(host, "primaveracitrix.siemens.com")
 || shExpMatch(host, "*.login.siemens-healthineers.com")
 || shExpMatch(host, "*.login-d.siemens-healthineers.com")
 || shExpMatch(host, "*.login-qa.siemens-healthineers.com")
 || shExpMatch(host, "bifrost.siemens.com")
 || shExpMatch(host, "smartsimulator.siemens-healthineers.com")
 || shExpMatch(host, "www.dipec.siemens.co.in")
 || shExpMatch(host, "sensproducts.siemens.com")
 || shExpMatch(host, "*.sensproducts.siemens.com")
 || shExpMatch(host, "dsc-kpi-tracker.siemens.com")
 || shExpMatch(host, "www.dsc-kpi-tracker.siemens.com")
 || shExpMatch(host, "*.x-rayanalytics.siemens-healthineers.com")
 || shExpMatch(host, "*-sensproducts.siemens.com.cn")
 || shExpMatch(host, "dda.siemens.com")
 || shExpMatch(host, "*.dda.siemens.com")
 || shExpMatch(host, "spectrum-power.siemens.no")
 || shExpMatch(host, "grid-control.siemens.no")
 || shExpMatch(host, "sebspp.siemens.com")
 || shExpMatch(host, "scps-tpm.siemens.com.cn")
 || shExpMatch(host, "snapshare.siemens.com")
 || shExpMatch(host, "www.snapshare.siemens.com")
 || shExpMatch(host, "int-snapshare.siemens.com")
 || shExpMatch(host, "www.int-snapshare.siemens.com")
 || shExpMatch(host, "www.tron.siemens.com")
 || shExpMatch(host, "www.uat.mobility.siemens.com")
 || shExpMatch(host, "www.dev.mobility.siemens.com")
 || shExpMatch(host, "www.aelicensingportaldev.siemens-healthineers.com")
 || shExpMatch(host, "www.aelicensingportal.siemens-healthineers.com")
 || shExpMatch(host, "sg-swyft.siemens.com")
 || shExpMatch(host, "staging-sg-swyft.siemens.com")
 || shExpMatch(host, "mdmaas.siemens.com")
) { return proxy; }
if ( shExpMatch(host, "*.mdmaas.siemens.com")
 || shExpMatch(host, "syngo-sw-distribution.siemens-healthineers.com")
 || shExpMatch(host, "www.siemens.com.hk")
 || shExpMatch(host, "veronica-assistant.siemens.com")
 || shExpMatch(host, "diarytasks.siemens.com")
 || shExpMatch(host, "flexichecklist.siemens.com")
 || shExpMatch(host, "www.click2connect.siemens.co.in")
 || shExpMatch(host, "www.metapro4pdqa.siemens.com")
 || shExpMatch(host, "supplier.flender.com")
 || shExpMatch(host, "partner.flender.com")
 || shExpMatch(host, "test.flender.com")
 || shExpMatch(host, "statics-q.siemens.com.cn")
 || shExpMatch(host, "statics.siemens.com.cn")
 || shExpMatch(host, "cecertificate.siemens-healthineers.com")
 || shExpMatch(host, "dij.siemens.com")
 || shExpMatch(host, "s2c.siemens.com")
 || shExpMatch(host, "s2c-qa.siemens.com")
 || shExpMatch(host, "siemensstadt.siemens.com")
 || shExpMatch(host, "www.siemensstadt.siemens.com")
 || shExpMatch(host, "events.siemens-healthineers.com.au")
 || shExpMatch(host, "storeiq.siemens.com")
 || shExpMatch(host, "consult.siemens-healthineers.com")
 || shExpMatch(host, "test-medmuseum.siemens-healthineers.com")
 || shExpMatch(host, "assets.bpcloudapps.siemens.com")
 || shExpMatch(host, "preview.mobility.siemens.com")
 || shExpMatch(host, "url4719.siemens-healthineers.com")
 || shExpMatch(host, "14141546.siemens-healthineers.com")
 || shExpMatch(host, "sonarqube-cloud.healthcare.siemens.com")
 || shExpMatch(host, "corp-t.siemens-healthineers.com")
 || shExpMatch(host, "bpcloudapps.siemens.com")
 || shExpMatch(host, "*.bpcloudapps.siemens.com")
 || shExpMatch(host, "labhub.siemens.com")
 || shExpMatch(host, "*.labhub.siemens.com")
 || shExpMatch(host, "tpm-api-scps.siemens.com.cn")
 || shExpMatch(host, "mobility.siemens.com")
 || shExpMatch(host, "mcpweb.siemens.com")
 || shExpMatch(host, "industry.siemens.co.kr")
 || shExpMatch(host, "*.industry.siemens.co.kr")
 || shExpMatch(host, "bootstrap.siemens.com")
 || shExpMatch(host, "bootstrap-dev.siemens.com")
 || shExpMatch(host, "bootstrap-int.siemens.com")
 || shExpMatch(host, "bootstrap-product-int.siemens.com")
 || shExpMatch(host, "*.tunnel.siemens.com")
 || shExpMatch(host, "*.tunnel-dev.siemens.com")
 || shExpMatch(host, "*.tunnel-int.siemens.com")
 || shExpMatch(host, "*.tunnel-product-int.siemens.com")
 || shExpMatch(host, "tunnel.siemens.com")
 || shExpMatch(host, "tunnel-dev.siemens.com")
 || shExpMatch(host, "tunnel-int.siemens.com")
 || shExpMatch(host, "tunnel-product-int.siemens.com")
 || shExpMatch(host, "meet.siemens.com")
 || shExpMatch(host, "*.meet.siemens.com")
 || shExpMatch(host, "cnqa.smartstorage.siemens.com")
 || shExpMatch(host, "scorm.siemens.com")
 || shExpMatch(host, "motion.siemens.com")
 || shExpMatch(host, "jobs.siemens.com")
 || shExpMatch(host, "siteapp.energy.siemens.com")
 || shExpMatch(host, "ux.siemens-healthineers.com")
 || shExpMatch(host, "xrb.siemens.com.sg")
 || shExpMatch(host, "xrbtest.siemens.com.sg")
 || shExpMatch(host, "mycasinocard.siemens.de")
 || shExpMatch(host, "mycasinocard-qat.siemens.de")
 || shExpMatch(host, "babblebot.siemens.com")
 || shExpMatch(host, "ausbildung.siemens.com")
 || shExpMatch(host, "www.ausbildung.siemens.com")
) { return proxy; }
if ( shExpMatch(host, "fludex.flender.com")
 || shExpMatch(host, "fpp.flender.com")
 || shExpMatch(host, "crsp-sslvpn-fth-p.siemens.com")
 || shExpMatch(host, "crsp-sslvpn-nwke-p.siemens.com")
 || shExpMatch(host, "forum-dev.siemens-healthineers.com")
 || shExpMatch(host, "forum-test.siemens-healthineers.com")
 || shExpMatch(host, "www.xpacademy.siemens-healthineers.com")
 || shExpMatch(host, "ecar.siemens.com")
 || shExpMatch(host, "*.ecar.siemens.com")
 || shExpMatch(host, "mymobase.com")
 || shExpMatch(host, "*.mymobase.com")
 || shExpMatch(host, "sensproducts.siemens.com.cn")
 || shExpMatch(host, "ifs.siemens.com.cn")
 || shExpMatch(host, "*.ifs.siemens.com.cn")
 || shExpMatch(host, "diapp.siemens.com.cn")
 || shExpMatch(host, "la-service.siemens.com.cn")
 || shExpMatch(host, "www.magnetomworld.siemens-healthineers.com")
 || shExpMatch(host, "ndmt.navigator.siemens.com")
 || shExpMatch(host, "*.ndmt.navigator.siemens.com")
 || shExpMatch(host, "mod-beta.siemens.com")
 || shExpMatch(host, "*.mod-beta.siemens.com")
 || shExpMatch(host, "www2.flender.com")
 || shExpMatch(host, "ndmt-gateway.navigator.siemens.com")
 || shExpMatch(host, "*.ndmt-gateway.navigator.siemens.com")
 || shExpMatch(host, "skb-dev.healthcare.siemens.com")
 || shExpMatch(host, "*.skb-dev.healthcare.siemens.com")
 || shExpMatch(host, "doclib-dev.siemens-healthineers.com")
 || shExpMatch(host, "skb.siemens-healthineers.com")
 || shExpMatch(host, "*.skb.siemens-healthineers.com")
 || shExpMatch(host, "skb-q.siemens-healthineers.com")
 || shExpMatch(host, "*.skb-q.siemens-healthineers.com")
 || shExpMatch(host, "pocinf-ontime.siemens-healthineers.com")
 || shExpMatch(host, "pocinf-sub.siemens-healthineers.com")
 || shExpMatch(host, "ausbildung.siemens.de")
 || shExpMatch(host, "www.ausbildung.siemens.de")
 || shExpMatch(host, "wap.siemens.com.cn")
 || shExpMatch(host, "*.ubc.siemens.com.cn")
 || shExpMatch(host, "cloud-gateway.auxmyid.siemens.com")
 || shExpMatch(host, "api.cloud-gateway.auxmyid.siemens.com")
 || shExpMatch(host, "cloud-gateway.auxmyid-qa.siemens.com")
 || shExpMatch(host, "api.cloud-gateway.auxmyid-qa.siemens.com")
 || shExpMatch(host, "*.lpc.siemens.com.cn")
 || shExpMatch(host, "docs.siemens.com")
 || shExpMatch(host, "*.fleet-test.siemens-healthineers.com")
 || shExpMatch(host, "fleet.siemens-healthineers.com")
 || shExpMatch(host, "news.siemens-healthineers.com")
 || shExpMatch(host, "*.news.siemens-healthineers.com")
 || shExpMatch(host, "wwwdev.siemens.com")
 || shExpMatch(host, "v-arena-mp1.siemens.com")
 || shExpMatch(host, "workplace.automation.siemens.com")
 || shExpMatch(host, "eea.siemens.com")
 || shExpMatch(host, "digitalizationconsulting.cloud.siemens.com")
 || shExpMatch(host, "cco.siemens.com")
 || shExpMatch(host, "eeaudevel.siemens.com")
 || shExpMatch(host, "eeau.siemens.com")
 || shExpMatch(host, "eeademo.siemens.com")
 || shExpMatch(host, "eeadatain1.siemens.com")
 || shExpMatch(host, "eeadatain2.siemens.com")
 || shExpMatch(host, "eeasupport.siemens.com")
 || shExpMatch(host, "mendix.siemens.com")
 || shExpMatch(host, "cosmos.siemens-healthineers.com")
 || shExpMatch(host, "*.cosmos.siemens-healthineers.com")
 || shExpMatch(host, "dc.siemens-healthineers.com")
 || shExpMatch(host, "*.dc.siemens-healthineers.com")
 || shExpMatch(host, "sieportal*.siemens.com")
) { return proxy; }
if ( shExpMatch(host, "*.sieportal*.siemens.com")
 || shExpMatch(host, "*.aap.siemens-healthineers.com")
 || shExpMatch(host, "siemenswelt.siemens.com")
 || shExpMatch(host, "siemensworld.siemens.com")
 || shExpMatch(host, "www.shop-corpath.siemens-healthineers.com")
 || shExpMatch(host, "industry-suites.siemens.com")
 || shExpMatch(host, "payment.siemens.com")
 || shExpMatch(host, "*.payment.siemens.com")
 || shExpMatch(host, "portfolioguide.siemens.com")
 || shExpMatch(host, "sidex-admin.siemens-healthineers.com")
 || shExpMatch(host, "idp.siemens.com")
 || shExpMatch(host, "www.carbonxapp.siemens.com")
 || shExpMatch(host, "shop-corpath.siemens-healthineers.com")
 || shExpMatch(host, "cportal-s.siemens.com")
 || shExpMatch(host, "*sensproducts.siemens.com.cn")
 || shExpMatch(host, "testguide.siemens.com")
 || shExpMatch(host, "automail-master-dev.siemens-healthineers.com")
 || shExpMatch(host, "backoffice.siemens-healthineers.com")
 || shExpMatch(host, "shop.siemens-healthineers.com")
 || shExpMatch(host, "*.backoffice.siemens-healthineers.com")
 || shExpMatch(host, "*.api.siemens-healthineers.com")
 || shExpMatch(host, "*.shop.siemens-healthineers.com")
 || shExpMatch(host, "talent.siemens.com")
 || shExpMatch(host, "events-test.siemens-healthineers.com")
 || shExpMatch(host, "events.siemens-healthineers.com")
 || shExpMatch(host, "*.events-test.siemens-healthineers.com")
 || shExpMatch(host, "*.events.siemens-healthineers.com")
 || shExpMatch(host, "references.siemens.ru")
 || shExpMatch(host, "stv-tk.siemens.ru")
 || shExpMatch(host, "www.desk4u-test.siemens.de")
 || shExpMatch(host, "www.rsc-dortmund-bookingsystem.siemens.de")
 || shExpMatch(host, "learning-tools.siemens.com")
 || shExpMatch(host, "learning-tools-stage.siemens.com")
 || shExpMatch(host, "www.ssme.healthcare.siemens.com.cn")
 || shExpMatch(host, "partner.healthcare.siemens.com.cn")
 || shExpMatch(host, "cpc.healthcare.siemens.com.cn")
 || shExpMatch(host, "automail-master.siemens-healthineers.com")
 || shExpMatch(host, "mendix.siemens.com.cn")
 || shExpMatch(host, "*.mendix.siemens.com.cn")
 || shExpMatch(host, "workplace-booking.siemens-healthineers.com")
 || shExpMatch(host, "www.graphicdesign.siemens.com")
 || shExpMatch(host, "www.gravitoservices.siemens.com")
 || shExpMatch(host, "ask.siemens.com")
 || shExpMatch(host, "desk4u.erlm.siemens.de")
 || shExpMatch(host, "www.partnerfinder.automation.siemens.com")
 || shExpMatch(host, "www.partnercollaboration.siemens.com")
 || shExpMatch(host, "www.partnerfinder.automation.siemens.de")
 || shExpMatch(host, "crosslink.mobility.siemens.com")
 || shExpMatch(host, "www.ims-cs.healthcare.siemens.com.cn")
 || shExpMatch(host, "fairtouch.siemens.com")
 || shExpMatch(host, "mts.virtualfair.siemens.com")
 || shExpMatch(host, "*.webinar.siemens.com")
 || shExpMatch(host, "newscenter.siemens.com")
 || shExpMatch(host, "*.newscenter.siemens.com")
 || shExpMatch(host, "skb-q.healthcare.siemens.com")
 || shExpMatch(host, "*.skb.healthcare.siemens.com")
 || shExpMatch(host, "skb.healthcare.siemens.com")
 || shExpMatch(host, "*.skb-q.healthcare.siemens.com")
 || shExpMatch(host, "myadpro.siemens.com")
 || shExpMatch(host, "azureanalytics.siemens.com")
 || shExpMatch(host, "www.virtualvisit.siemens-healthineers.com.br")
 || shExpMatch(host, "*.virtualevent.siemens.com")
 || shExpMatch(host, "dev-mendix.siemens.com.cn")
 || shExpMatch(host, "*.dev-mendix.siemens.com.cn")
 || shExpMatch(host, "idp-qa.siemens.com")
) { return proxy; }
if ( shExpMatch(host, "sg.webinar.siemens.com")
 || shExpMatch(host, "amtc.siemens.com.sg")
 || shExpMatch(host, "workplace-booking-qa.siemens-healthineers.com")
 || shExpMatch(host, "workplace-booking-dev.siemens-healthineers.com")
 || shExpMatch(host, "fiori.flender.com")
 || shExpMatch(host, "rew-registration.siemens.ru")
 || shExpMatch(host, "servicetool.auxmyid.siemens.com")
 || shExpMatch(host, "doclib-test.siemens-healthineers.com")
 || shExpMatch(host, "webplayer.fairtouch.siemens.com")
 || shExpMatch(host, "videoplayer.fairtouch.siemens.com")
 || shExpMatch(host, "epoc-promap.siemens-healthineers.com")
 || shExpMatch(host, "mymotor.siemens.com")
 || shExpMatch(host, "sandbox-cockpit.siemens.com")
 || shExpMatch(host, "dev-cockpit.siemens.com")
 || shExpMatch(host, "test-cockpit.siemens.com")
 || shExpMatch(host, "cockpit.siemens.com")
 || shExpMatch(host, "advflow.flow-suite.siemens.com")
 || shExpMatch(host, "la-service-q.siemens.com.cn")
 || shExpMatch(host, "jumpserver-uat.siemens.com.cn")
 || shExpMatch(host, "la-service-uat.siemens.com.cn")
 || shExpMatch(host, "la-uat.siemens.com.cn")
 || shExpMatch(host, "ptm.siemens.com.cn")
 || shExpMatch(host, "myapp.siemens.com.cn")
 || shExpMatch(host, "uim.siemens.com.cn")
 || shExpMatch(host, "uim-uat.siemens.com.cn")
 || shExpMatch(host, "uim-q.siemens.com.cn")
 || shExpMatch(host, "myportal.siemens.com.cn")
 || shExpMatch(host, "ctsalesguide-test.siemens-healthineers.com")
 || shExpMatch(host, "ctsalesguide-dev.siemens-healthineers.com")
 || shExpMatch(host, "meps.siemens.com")
 || shExpMatch(host, "sales-premier-league.siemens.ru")
 || shExpMatch(host, "cdn.siemens.com")
 || shExpMatch(host, "*.cdn.siemens.com")
 || shExpMatch(host, "bms-shop.siemens.ru")
 || shExpMatch(host, "guide.siemens.com")
 || shExpMatch(host, "jobs.siemens.com.cn")
 || shExpMatch(host, "qa-jobs.siemens.com.cn")
 || shExpMatch(host, "customerportal-its.siemens.com")
 || shExpMatch(host, "customerportal-its-test.siemens.com")
 || shExpMatch(host, "moscow-bms-shop.siemens.ru")
 || shExpMatch(host, "iqcert-test.siemens-healthineers.com")
 || shExpMatch(host, "iqcert-dev.siemens-healthineers.com")
 || shExpMatch(host, "projektportal-test.mobility.siemens.com")
 || shExpMatch(host, "projektportal.mobility.siemens.com")
 || shExpMatch(host, "e20.diapp.siemens.com.cn")
 || shExpMatch(host, "e20-qa.diapp.siemens.com.cn")
 || shExpMatch(host, "gateway.diapp.siemens.com.cn")
 || shExpMatch(host, "gateway-qa.diapp.siemens.com.cn")
 || shExpMatch(host, "image.diapp.siemens.com.cn")
 || shExpMatch(host, "stv-tt.siemens.ru")
 || shExpMatch(host, "dataquality-control.navigator.siemens.com")
 || shExpMatch(host, "login-demo.siemens-healthineers.com")
 || shExpMatch(host, "*.login-demo.siemens-healthineers.com")
 || shExpMatch(host, "gbs.showroom.siemens.com")
 || shExpMatch(host, "shift.siemens-healthineers.com")
 || shExpMatch(host, "*.iws.siemens.ch")
 || shExpMatch(host, "mail.siemens.ru")
 || shExpMatch(host, "*.simon.siemens.ch")
 || shExpMatch(host, "imp.siemens.com")
 || shExpMatch(host, "pss.siemens.com")
 || shExpMatch(host, "*.pss.siemens.com")
 || shExpMatch(host, "deop.siemens.com")
 || shExpMatch(host, "*.deop.siemens.com")
 || shExpMatch(host, "kazan-bms-shop.siemens.ru")
 || shExpMatch(host, "ekaterinburg-bms-shop.siemens.ru")
) { return proxy; }
if ( shExpMatch(host, "nizhny-novgorod-bms-shop.siemens.ru")
 || shExpMatch(host, "rostov-na-donu-bms-shop.siemens.ru")
 || shExpMatch(host, "moscow-bms-shop.siemens.ru")
 || shExpMatch(host, "novosibirsk-bms-shop.siemens.ru")
 || shExpMatch(host, "sankt-peterburg-bms-shop.siemens.ru")
 || shExpMatch(host, "clinitest.siemens-healthineers.com")
 || shExpMatch(host, "www.clinitest.siemens-healthineers.com")
 || shExpMatch(host, "*.powermind-ps-cn1.siemens.com.cn")
 || shExpMatch(host, "*.energymanager.siemens.com")
 || shExpMatch(host, "simit.siemens.com")
 || shExpMatch(host, "*.simit.siemens.com")
 || shExpMatch(host, "mdm.siemens.com")
 || shExpMatch(host, "*.mdm.siemens.com")
 || shExpMatch(host, "energymanager.siemens.com")
 || shExpMatch(host, "portfolioguideappstage.siemens.com")
 || shExpMatch(host, "portfolioguideapp.siemens.com")
 || shExpMatch(host, "siprotec-function-point-manager.siemens.com")
 || shExpMatch(host, "*.siprotec-function-point-manager.siemens.com")
 || shExpMatch(host, "scm-apps.test.ext.siemens-healthineers.com")
 || shExpMatch(host, "cm-apps.prod.ext.siemens-healthineers.com")
 || shExpMatch(host, "bpc-si.siemens.ru")
 || shExpMatch(host, "doclib-userservice-test.siemens-healthineers.com")
 || shExpMatch(host, "rdgw.del.public.siemens.com")
) { return proxy; }

if ( shExpMatch(host, "*.abatos.com")
 || shExpMatch(host, "abatos.com")
 || shExpMatch(host, "*.acuson.com")
 || shExpMatch(host, "acuson.com")
 || shExpMatch(host, "*.alarmcom.com")
 || shExpMatch(host, "alarmcom.com")
 || shExpMatch(host, "*.alarmcom.de")
 || shExpMatch(host, "alarmcom.de")
 || shExpMatch(host, "*.berlinwerk-siemensstadt.com")
 || shExpMatch(host, "berlinwerk-siemensstadt.com")
 || shExpMatch(host, "*.berlinwerk-siemensstadt.de")
 || shExpMatch(host, "berlinwerk-siemensstadt.de")
 || shExpMatch(host, "*.cerberus.ch")
 || shExpMatch(host, "cerberus.ch")
 || shExpMatch(host, "*.cosmodu.eu")
 || shExpMatch(host, "cosmodu.eu")
 || shExpMatch(host, "*.d-rco.com")
 || shExpMatch(host, "d-rco.com")
 || shExpMatch(host, "*.d-rcoapps.com")
 || shExpMatch(host, "d-rcoapps.com")
 || shExpMatch(host, "*.d-rconnect.com")
 || shExpMatch(host, "d-rconnect.com")
 || shExpMatch(host, "*.d-rconnectapps.com")
 || shExpMatch(host, "d-rconnectapps.com")
 || shExpMatch(host, "*.empros.com")
 || shExpMatch(host, "empros.com")
 || shExpMatch(host, "*.epmsen.com.br")
 || shExpMatch(host, "epmsen.com.br")
 || shExpMatch(host, "*.epsnetwork.com")
 || shExpMatch(host, "epsnetwork.com")
 || shExpMatch(host, "*.evosec.net")
 || shExpMatch(host, "evosec.net")
 || shExpMatch(host, "*.evosoft.com")
 || shExpMatch(host, "evosoft.com")
 || shExpMatch(host, "*.flender-graff.com")
 || shExpMatch(host, "flender-graff.com")
 || shExpMatch(host, "*.flender-guss.com")
 || shExpMatch(host, "flender-guss.com")
 || shExpMatch(host, "*.flender-service.com")
 || shExpMatch(host, "flender-service.com")
 || shExpMatch(host, "*.flender.com")
 || shExpMatch(host, "flender.com")
 || shExpMatch(host, "*.fueruns-shop.de")
 || shExpMatch(host, "fueruns-shop.de")
 || shExpMatch(host, "*.gepas.com")
 || shExpMatch(host, "gepas.com")
 || shExpMatch(host, "*.gepas.de")
 || shExpMatch(host, "gepas.de")
 || shExpMatch(host, "*.guascor.com")
 || shExpMatch(host, "guascor.com")
 || shExpMatch(host, "*.guascorservicios.com")
 || shExpMatch(host, "guascorservicios.com")
 || shExpMatch(host, "*.hspkoeln.de")
 || shExpMatch(host, "hspkoeln.de")
 || shExpMatch(host, "*.i2mpect.eu")
 || shExpMatch(host, "i2mpect.eu")
 || shExpMatch(host, "*.industrial-it-center.net")
 || shExpMatch(host, "industrial-it-center.net")
 || shExpMatch(host, "*.iscosa.com.sa")
 || shExpMatch(host, "iscosa.com.sa")
 || shExpMatch(host, "*.landisstaefa.com")
 || shExpMatch(host, "landisstaefa.com")
 || shExpMatch(host, "*.loher.com")
 || shExpMatch(host, "loher.com")
 || shExpMatch(host, "*.loher.de")
 || shExpMatch(host, "loher.de")
) { return "DIRECT"; }
if ( shExpMatch(host, "*.my-siemens.com")
 || shExpMatch(host, "my-siemens.com")
 || shExpMatch(host, "*.mymobase.com")
 || shExpMatch(host, "mymobase.com")
 || shExpMatch(host, "*.net.plm.eds.com")
 || shExpMatch(host, "net.plm.eds.com")
 || shExpMatch(host, "*.oez.com")
 || shExpMatch(host, "oez.com")
 || shExpMatch(host, "*.oez.cz")
 || shExpMatch(host, "oez.cz")
 || shExpMatch(host, "*.oez.sk")
 || shExpMatch(host, "oez.sk")
 || shExpMatch(host, "*.one-hc.com")
 || shExpMatch(host, "one-hc.com")
 || shExpMatch(host, "*.one-hc.net")
 || shExpMatch(host, "one-hc.net")
 || shExpMatch(host, "*.onehc.net")
 || shExpMatch(host, "onehc.net")
 || shExpMatch(host, "*.ppal.directory")
 || shExpMatch(host, "ppal.directory")
 || shExpMatch(host, "*.railad.com")
 || shExpMatch(host, "railad.com")
 || shExpMatch(host, "*.rpz.siemens.net")
 || shExpMatch(host, "rpz.siemens.net")
 || shExpMatch(host, "*.rusturbomash.com")
 || shExpMatch(host, "rusturbomash.com")
 || shExpMatch(host, "*.s-partners.net")
 || shExpMatch(host, "s-partners.net")
 || shExpMatch(host, "*.sbs.de")
 || shExpMatch(host, "sbs.de")
 || shExpMatch(host, "*.sbs.sk")
 || shExpMatch(host, "sbs.sk")
 || shExpMatch(host, "*.sbsitalia.it")
 || shExpMatch(host, "sbsitalia.it")
 || shExpMatch(host, "*.sfs-uk.com")
 || shExpMatch(host, "sfs-uk.com")
 || shExpMatch(host, "*.sgpvt.at")
 || shExpMatch(host, "sgpvt.at")
 || shExpMatch(host, "*.shs-online.de")
 || shExpMatch(host, "shs-online.de")
 || shExpMatch(host, "*.sibt.com")
 || shExpMatch(host, "sibt.com")
 || shExpMatch(host, "*.siemens-emis.com")
 || shExpMatch(host, "siemens-emis.com")
 || shExpMatch(host, "*.siemens-energy.net")
 || shExpMatch(host, "siemens-energy.net")
 || shExpMatch(host, "*.siemens-finance.pl")
 || shExpMatch(host, "siemens-finance.pl")
 || shExpMatch(host, "*.siemens-healthcare.com")
 || shExpMatch(host, "siemens-healthcare.com")
 || shExpMatch(host, "*.siemens-healthineers.ae")
 || shExpMatch(host, "siemens-healthineers.ae")
 || shExpMatch(host, "*.siemens-healthineers.at")
 || shExpMatch(host, "siemens-healthineers.at")
 || shExpMatch(host, "*.siemens-healthineers.ba")
 || shExpMatch(host, "siemens-healthineers.ba")
 || shExpMatch(host, "*.siemens-healthineers.be")
 || shExpMatch(host, "siemens-healthineers.be")
 || shExpMatch(host, "*.siemens-healthineers.ca")
 || shExpMatch(host, "siemens-healthineers.ca")
 || shExpMatch(host, "*.siemens-healthineers.ch")
 || shExpMatch(host, "siemens-healthineers.ch")
 || shExpMatch(host, "*.siemens-healthineers.cl")
 || shExpMatch(host, "siemens-healthineers.cl")
 || shExpMatch(host, "*.siemens-healthineers.co.in")
 || shExpMatch(host, "siemens-healthineers.co.in")
) { return "DIRECT"; }
if ( shExpMatch(host, "*.siemens-healthineers.co.kr")
 || shExpMatch(host, "siemens-healthineers.co.kr")
 || shExpMatch(host, "*.siemens-healthineers.co.uk")
 || shExpMatch(host, "siemens-healthineers.co.uk")
 || shExpMatch(host, "*.siemens-healthineers.co.za")
 || shExpMatch(host, "siemens-healthineers.co.za")
 || shExpMatch(host, "*.siemens-healthineers.com")
 || shExpMatch(host, "siemens-healthineers.com")
 || shExpMatch(host, "*.siemens-healthineers.com.ar")
 || shExpMatch(host, "siemens-healthineers.com.ar")
 || shExpMatch(host, "*.siemens-healthineers.com.au")
 || shExpMatch(host, "siemens-healthineers.com.au")
 || shExpMatch(host, "*.siemens-healthineers.com.br")
 || shExpMatch(host, "siemens-healthineers.com.br")
 || shExpMatch(host, "*.siemens-healthineers.com.cn")
 || shExpMatch(host, "siemens-healthineers.com.cn")
 || shExpMatch(host, "*.siemens-healthineers.com.co")
 || shExpMatch(host, "siemens-healthineers.com.co")
 || shExpMatch(host, "*.siemens-healthineers.com.ec")
 || shExpMatch(host, "siemens-healthineers.com.ec")
 || shExpMatch(host, "*.siemens-healthineers.com.mx")
 || shExpMatch(host, "siemens-healthineers.com.mx")
 || shExpMatch(host, "*.siemens-healthineers.com.my")
 || shExpMatch(host, "siemens-healthineers.com.my")
 || shExpMatch(host, "*.siemens-healthineers.com.pe")
 || shExpMatch(host, "siemens-healthineers.com.pe")
 || shExpMatch(host, "*.siemens-healthineers.com.sa")
 || shExpMatch(host, "siemens-healthineers.com.sa")
 || shExpMatch(host, "*.siemens-healthineers.com.sg")
 || shExpMatch(host, "siemens-healthineers.com.sg")
 || shExpMatch(host, "*.siemens-healthineers.com.tr")
 || shExpMatch(host, "siemens-healthineers.com.tr")
 || shExpMatch(host, "*.siemens-healthineers.com.uy")
 || shExpMatch(host, "siemens-healthineers.com.uy")
 || shExpMatch(host, "*.siemens-healthineers.com.ve")
 || shExpMatch(host, "siemens-healthineers.com.ve")
 || shExpMatch(host, "*.siemens-healthineers.cz")
 || shExpMatch(host, "siemens-healthineers.cz")
 || shExpMatch(host, "*.siemens-healthineers.de")
 || shExpMatch(host, "siemens-healthineers.de")
 || shExpMatch(host, "*.siemens-healthineers.dk")
 || shExpMatch(host, "siemens-healthineers.dk")
 || shExpMatch(host, "*.siemens-healthineers.es")
 || shExpMatch(host, "siemens-healthineers.es")
 || shExpMatch(host, "*.siemens-healthineers.eu")
 || shExpMatch(host, "siemens-healthineers.eu")
 || shExpMatch(host, "*.siemens-healthineers.fi")
 || shExpMatch(host, "siemens-healthineers.fi")
 || shExpMatch(host, "*.siemens-healthineers.fr")
 || shExpMatch(host, "siemens-healthineers.fr")
 || shExpMatch(host, "*.siemens-healthineers.hu")
 || shExpMatch(host, "siemens-healthineers.hu")
 || shExpMatch(host, "*.siemens-healthineers.ie")
 || shExpMatch(host, "siemens-healthineers.ie")
 || shExpMatch(host, "*.siemens-healthineers.it")
 || shExpMatch(host, "siemens-healthineers.it")
 || shExpMatch(host, "*.siemens-healthineers.jp")
 || shExpMatch(host, "siemens-healthineers.jp")
 || shExpMatch(host, "*.siemens-healthineers.nl")
 || shExpMatch(host, "siemens-healthineers.nl")
 || shExpMatch(host, "*.siemens-healthineers.no")
 || shExpMatch(host, "siemens-healthineers.no")
 || shExpMatch(host, "*.siemens-healthineers.pl")
 || shExpMatch(host, "siemens-healthineers.pl")
 || shExpMatch(host, "*.siemens-healthineers.pt")
 || shExpMatch(host, "siemens-healthineers.pt")
) { return "DIRECT"; }
if ( shExpMatch(host, "*.siemens-healthineers.ru")
 || shExpMatch(host, "siemens-healthineers.ru")
 || shExpMatch(host, "*.siemens-healthineers.se")
 || shExpMatch(host, "siemens-healthineers.se")
 || shExpMatch(host, "*.siemens-healthineers.si")
 || shExpMatch(host, "siemens-healthineers.si")
 || shExpMatch(host, "*.siemens-healthineers.us")
 || shExpMatch(host, "siemens-healthineers.us")
 || shExpMatch(host, "*.siemens-mobile.com")
 || shExpMatch(host, "siemens-mobile.com")
 || shExpMatch(host, "*.siemens-ppal.com")
 || shExpMatch(host, "siemens-ppal.com")
 || shExpMatch(host, "*.siemens-psc.com")
 || shExpMatch(host, "siemens-psc.com")
 || shExpMatch(host, "*.siemens-real-estate.com")
 || shExpMatch(host, "siemens-real-estate.com")
 || shExpMatch(host, "*.siemens-sbs.ch")
 || shExpMatch(host, "siemens-sbs.ch")
 || shExpMatch(host, "*.siemens-sharenet.com")
 || shExpMatch(host, "siemens-sharenet.com")
 || shExpMatch(host, "*.siemens.at")
 || shExpMatch(host, "siemens.at")
 || shExpMatch(host, "*.siemens.ba")
 || shExpMatch(host, "siemens.ba")
 || shExpMatch(host, "*.siemens.be")
 || shExpMatch(host, "siemens.be")
 || shExpMatch(host, "*.siemens.bg")
 || shExpMatch(host, "siemens.bg")
 || shExpMatch(host, "*.siemens.ca")
 || shExpMatch(host, "siemens.ca")
 || shExpMatch(host, "*.siemens.ch")
 || shExpMatch(host, "siemens.ch")
 || shExpMatch(host, "*.siemens.cl")
 || shExpMatch(host, "siemens.cl")
 || shExpMatch(host, "*.siemens.co.ae")
 || shExpMatch(host, "siemens.co.ae")
 || shExpMatch(host, "*.siemens.co.id")
 || shExpMatch(host, "siemens.co.id")
 || shExpMatch(host, "*.siemens.co.in")
 || shExpMatch(host, "siemens.co.in")
 || shExpMatch(host, "*.siemens.co.ir")
 || shExpMatch(host, "siemens.co.ir")
 || shExpMatch(host, "*.siemens.co.jp")
 || shExpMatch(host, "siemens.co.jp")
 || shExpMatch(host, "*.siemens.co.kr")
 || shExpMatch(host, "siemens.co.kr")
 || shExpMatch(host, "*.siemens.co.nz")
 || shExpMatch(host, "siemens.co.nz")
 || shExpMatch(host, "*.siemens.co.th")
 || shExpMatch(host, "siemens.co.th")
 || shExpMatch(host, "*.siemens.co.uk")
 || shExpMatch(host, "siemens.co.uk")
 || shExpMatch(host, "*.siemens.co.uz")
 || shExpMatch(host, "siemens.co.uz")
 || shExpMatch(host, "*.siemens.co.za")
 || shExpMatch(host, "siemens.co.za")
 || shExpMatch(host, "*.siemens.com")
 || shExpMatch(host, "siemens.com")
 || shExpMatch(host, "*.siemens.com.ar")
 || shExpMatch(host, "siemens.com.ar")
 || shExpMatch(host, "*.siemens.com.au")
 || shExpMatch(host, "siemens.com.au")
 || shExpMatch(host, "*.siemens.com.bd")
 || shExpMatch(host, "siemens.com.bd")
 || shExpMatch(host, "*.siemens.com.bh")
 || shExpMatch(host, "siemens.com.bh")
) { return "DIRECT"; }
if ( shExpMatch(host, "*.siemens.com.bo")
 || shExpMatch(host, "siemens.com.bo")
 || shExpMatch(host, "*.siemens.com.br")
 || shExpMatch(host, "siemens.com.br")
 || shExpMatch(host, "*.siemens.com.cn")
 || shExpMatch(host, "siemens.com.cn")
 || shExpMatch(host, "*.siemens.com.co")
 || shExpMatch(host, "siemens.com.co")
 || shExpMatch(host, "*.siemens.com.ec")
 || shExpMatch(host, "siemens.com.ec")
 || shExpMatch(host, "*.siemens.com.eg")
 || shExpMatch(host, "siemens.com.eg")
 || shExpMatch(host, "*.siemens.com.hk")
 || shExpMatch(host, "siemens.com.hk")
 || shExpMatch(host, "*.siemens.com.kw")
 || shExpMatch(host, "siemens.com.kw")
 || shExpMatch(host, "*.siemens.com.lb")
 || shExpMatch(host, "siemens.com.lb")
 || shExpMatch(host, "*.siemens.com.mx")
 || shExpMatch(host, "siemens.com.mx")
 || shExpMatch(host, "*.siemens.com.my")
 || shExpMatch(host, "siemens.com.my")
 || shExpMatch(host, "*.siemens.com.om")
 || shExpMatch(host, "siemens.com.om")
 || shExpMatch(host, "*.siemens.com.pe")
 || shExpMatch(host, "siemens.com.pe")
 || shExpMatch(host, "*.siemens.com.ph")
 || shExpMatch(host, "siemens.com.ph")
 || shExpMatch(host, "*.siemens.com.pk")
 || shExpMatch(host, "siemens.com.pk")
 || shExpMatch(host, "*.siemens.com.qa")
 || shExpMatch(host, "siemens.com.qa")
 || shExpMatch(host, "*.siemens.com.sa")
 || shExpMatch(host, "siemens.com.sa")
 || shExpMatch(host, "*.siemens.com.sg")
 || shExpMatch(host, "siemens.com.sg")
 || shExpMatch(host, "*.siemens.com.tr")
 || shExpMatch(host, "siemens.com.tr")
 || shExpMatch(host, "*.siemens.com.tw")
 || shExpMatch(host, "siemens.com.tw")
 || shExpMatch(host, "*.siemens.com.ua")
 || shExpMatch(host, "siemens.com.ua")
 || shExpMatch(host, "*.siemens.com.uy")
 || shExpMatch(host, "siemens.com.uy")
 || shExpMatch(host, "*.siemens.com.uz")
 || shExpMatch(host, "siemens.com.uz")
 || shExpMatch(host, "*.siemens.com.ve")
 || shExpMatch(host, "siemens.com.ve")
 || shExpMatch(host, "*.siemens.cz")
 || shExpMatch(host, "siemens.cz")
 || shExpMatch(host, "*.siemens.de")
 || shExpMatch(host, "siemens.de")
 || shExpMatch(host, "*.siemens.dk")
 || shExpMatch(host, "siemens.dk")
 || shExpMatch(host, "*.siemens.dz")
 || shExpMatch(host, "siemens.dz")
 || shExpMatch(host, "*.siemens.es")
 || shExpMatch(host, "siemens.es")
 || shExpMatch(host, "*.siemens.eu")
 || shExpMatch(host, "siemens.eu")
 || shExpMatch(host, "*.siemens.fi")
 || shExpMatch(host, "siemens.fi")
 || shExpMatch(host, "*.siemens.fr")
 || shExpMatch(host, "siemens.fr")
 || shExpMatch(host, "*.siemens.gr")
 || shExpMatch(host, "siemens.gr")
) { return "DIRECT"; }
if ( shExpMatch(host, "*.siemens.hr")
 || shExpMatch(host, "siemens.hr")
 || shExpMatch(host, "*.siemens.ie")
 || shExpMatch(host, "siemens.ie")
 || shExpMatch(host, "*.siemens.iq")
 || shExpMatch(host, "siemens.iq")
 || shExpMatch(host, "*.siemens.it")
 || shExpMatch(host, "siemens.it")
 || shExpMatch(host, "*.siemens.kz")
 || shExpMatch(host, "siemens.kz")
 || shExpMatch(host, "*.siemens.lu")
 || shExpMatch(host, "siemens.lu")
 || shExpMatch(host, "*.siemens.me")
 || shExpMatch(host, "siemens.me")
 || shExpMatch(host, "*.siemens.net")
 || shExpMatch(host, "siemens.net")
 || shExpMatch(host, "*.siemens.nl")
 || shExpMatch(host, "siemens.nl")
 || shExpMatch(host, "*.siemens.no")
 || shExpMatch(host, "siemens.no")
 || shExpMatch(host, "*.siemens.om")
 || shExpMatch(host, "siemens.om")
 || shExpMatch(host, "*.siemens.pl")
 || shExpMatch(host, "siemens.pl")
 || shExpMatch(host, "*.siemens.pt")
 || shExpMatch(host, "siemens.pt")
 || shExpMatch(host, "*.siemens.ro")
 || shExpMatch(host, "siemens.ro")
 || shExpMatch(host, "*.siemens.rs")
 || shExpMatch(host, "siemens.rs")
 || shExpMatch(host, "*.siemens.ru")
 || shExpMatch(host, "siemens.ru")
 || shExpMatch(host, "*.siemens.se")
 || shExpMatch(host, "siemens.se")
 || shExpMatch(host, "*.siemens.si")
 || shExpMatch(host, "siemens.si")
 || shExpMatch(host, "*.siemens.sk")
 || shExpMatch(host, "siemens.sk")
 || shExpMatch(host, "*.siemens.sn")
 || shExpMatch(host, "siemens.sn")
 || shExpMatch(host, "*.siemens.ua")
 || shExpMatch(host, "siemens.ua")
 || shExpMatch(host, "*.siemens.us")
 || shExpMatch(host, "siemens.us")
 || shExpMatch(host, "*.siemensfinancialservices.co.uk")
 || shExpMatch(host, "siemensfinancialservices.co.uk")
 || shExpMatch(host, "*.siemensmedical.com")
 || shExpMatch(host, "siemensmedical.com")
 || shExpMatch(host, "*.siemensmetering.co.uk")
 || shExpMatch(host, "siemensmetering.co.uk")
 || shExpMatch(host, "*.siemensmobility.dk")
 || shExpMatch(host, "siemensmobility.dk")
 || shExpMatch(host, "*.siemenspro.at")
 || shExpMatch(host, "siemenspro.at")
 || shExpMatch(host, "*.siemensstadt2.com")
 || shExpMatch(host, "siemensstadt2.com")
 || shExpMatch(host, "*.siemenswelt.de")
 || shExpMatch(host, "siemenswelt.de")
 || shExpMatch(host, "*.siemensza.net")
 || shExpMatch(host, "siemensza.net")
 || shExpMatch(host, "*.sim-immobilien.de")
 || shExpMatch(host, "sim-immobilien.de")
 || shExpMatch(host, "*.simit.de")
 || shExpMatch(host, "simit.de")
 || shExpMatch(host, "*.sisl.co.in")
 || shExpMatch(host, "sisl.co.in")
) { return "DIRECT"; }
if ( shExpMatch(host, "*.sitest.net")
 || shExpMatch(host, "sitest.net")
 || shExpMatch(host, "*.sitraffic.be")
 || shExpMatch(host, "sitraffic.be")
 || shExpMatch(host, "*.sni.co.uk")
 || shExpMatch(host, "sni.co.uk")
 || shExpMatch(host, "*.spls.de")
 || shExpMatch(host, "spls.de")
 || shExpMatch(host, "*.sta-augsburg.de")
 || shExpMatch(host, "sta-augsburg.de")
 || shExpMatch(host, "*.stadtfabrik-siemensstadt.com")
 || shExpMatch(host, "stadtfabrik-siemensstadt.com")
 || shExpMatch(host, "*.stadtfabrik-siemensstadt.de")
 || shExpMatch(host, "stadtfabrik-siemensstadt.de")
 || shExpMatch(host, "*.swh.sk")
 || shExpMatch(host, "swh.sk")
 || shExpMatch(host, "*.sykatec.de")
 || shExpMatch(host, "sykatec.de")
 || shExpMatch(host, "*.teamworks.at")
 || shExpMatch(host, "teamworks.at")
 || shExpMatch(host, "*.telematik.ruf.ch")
 || shExpMatch(host, "telematik.ruf.ch")
 || shExpMatch(host, "*.test-siemens-healthineers.com")
 || shExpMatch(host, "test-siemens-healthineers.com")
 || shExpMatch(host, "*.trench-group.com")
 || shExpMatch(host, "trench-group.com")
 || shExpMatch(host, "*.ugs.com")
 || shExpMatch(host, "ugs.com")
 || shExpMatch(host, "*.vvk.com")
 || shExpMatch(host, "vvk.com")
 || shExpMatch(host, "*.weissgmbh.de")
 || shExpMatch(host, "weissgmbh.de")
 || shExpMatch(host, "*.windad.org")
 || shExpMatch(host, "windad.org")
 || shExpMatch(host, "*.winergy-ag.com")
 || shExpMatch(host, "winergy-ag.com")
 || shExpMatch(host, "*.yunextraffic.com")
 || shExpMatch(host, "yunextraffic.com")
 || shExpMatch(host, "*.zukunftsfeld-siemensstadt.com")
 || shExpMatch(host, "zukunftsfeld-siemensstadt.com")
 || shExpMatch(host, "*.zukunftsfeld-siemensstadt.de")
 || shExpMatch(host, "zukunftsfeld-siemensstadt.de")
) { return "DIRECT"; }

if (shExpMatch(host, "129.214.*")
 || shExpMatch(host, "132.186.*")
 || shExpMatch(host, "136.157.*")
 || shExpMatch(host, "137.223.*")
 || shExpMatch(host, "140.231.*")
 || shExpMatch(host, "141.29.*")
 || shExpMatch(host, "144.145.*")
 || shExpMatch(host, "146.253.*")
 || shExpMatch(host, "147.54.*")
 || shExpMatch(host, "148.56.*")
 || shExpMatch(host, "157.163.*")
 || shExpMatch(host, "157.226.*")
 || shExpMatch(host, "158.92.*")
 || shExpMatch(host, "161.218.*")
 || shExpMatch(host, "165.218.*")
 || shExpMatch(host, "100.70.*")
 || shExpMatch(host, "100.74.*")
 || shExpMatch(host, "100.75.*")
 || shExpMatch(host, "100.71.*")
 || shExpMatch(host, "100.72.*")
 || shExpMatch(host, "100.73.*")
 || shExpMatch(host, "100.76.*")
 || shExpMatch(host, "100.77.*")
 || shExpMatch(host, "194.204.69.*")
 || shExpMatch(host, "194.240.150.*")
) { return "DIRECT"; }

 if (!isResolvable(host)) { return proxy; }
 var resolved_host = dnsResolve(host);
 if (isInNet(resolved_host, "127.0.0.0","255.0.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "172.16.0.0","255.240.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "10.0.0.0","255.0.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "192.168.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "129.73.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "139.10.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "139.21.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "139.22.0.0","255.254.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "139.24.0.0","255.254.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "141.73.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "146.254.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "149.212.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "149.246.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "158.226.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "194.204.67.0","255.255.255.128")) { return "DIRECT"; }
 if (isInNet(resolved_host, "209.243.192.0","255.255.192.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "161.134.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "165.226.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "163.242.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "155.45.168.32","255.255.255.224")) { return proxy; }
 if (isInNet(resolved_host, "155.45.180.64","255.255.255.224")) { return proxy; }
 if (isInNet(resolved_host, "155.45.180.128","255.255.255.240")) { return proxy; }
 if (isInNet(resolved_host, "155.45.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "139.16.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "194.138.35.128","255.255.255.128")) { return "DIRECT"; }
 if (isInNet(resolved_host, "65.63.72.0","255.255.252.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "193.210.179.0","255.255.255.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "193.181.208.0","255.255.240.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "159.43.0.0","255.255.192.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "192.155.137.0","255.255.255.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "192.155.138.0","255.255.255.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "129.214.232.0","255.255.255.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "161.218.180.0","255.255.255.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "194.138.37.148","255.255.255.252")) { return "DIRECT"; }
 if (isInNet(resolved_host, "194.138.37.152","255.255.255.254")) { return "DIRECT"; }
 if (isInNet(resolved_host, "167.87.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "194.138.11.0","255.255.255.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "129.103.0.0","255.255.0.0")) { return "DIRECT"; }
 if (isInNet(resolved_host, "192.129.41.0","255.255.255.0")) { return "DIRECT"; }

 if ( shExpMatch(host, "*.ch") ) { return "PROXY zrh1.coia.siemens.net:9400; PROXY ffm1.coia.siemens.net:9400"; }

 return proxy;

}

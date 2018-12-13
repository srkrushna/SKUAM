/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"SKU_AUTOM/SKU_AUTOMATION/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"SKU_AUTOM/SKU_AUTOMATION/test/integration/pages/InitialView",
	"SKU_AUTOM/SKU_AUTOMATION/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "SKU_AUTOM.SKU_AUTOMATION.view.",
		autoWait: true
	});
});
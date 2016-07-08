// Copyright 2016 Documize Inc. <legal@documize.com>. All rights reserved.
//
// This software (Documize Community Edition) is licensed under 
// GNU AGPL v3 http://www.gnu.org/licenses/agpl-3.0.en.html
//
// You can operate outside the AGPL restrictions by purchasing
// Documize Enterprise Edition and obtaining a commercial license
// by contacting <sales@documize.com>. 
//
// https://documize.com

import Ember from 'ember';

export default Ember.Controller.extend({
	userService: Ember.inject.service('user'),
	email: "",
	sayThanks: false,

	actions: {
		forgot: function () {
			var self = this;
			var email = this.get('email');

			if (is.empty(email)) {
				$("#email").addClass("error").focus();
				return;
			}

			self.set('sayThanks', true);
			this.set('email', '');

			this.get('userService').forgotPassword(email);
		}
	}
});
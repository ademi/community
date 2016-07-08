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
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	userService: Ember.inject.service('user'),

	beforeModel: function () {
		if (!this.session.isAdmin) {
			this.transitionTo('auth.login');
		}
	},

	model: function () {
		return this.get('userService').getAll();
	},

	activate: function () {
		document.title = "Users | Documize";
	}
});
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
	searchService: Ember.inject.service('search'),
	queryParams: ['filter'],
	filter: "",
	results: [],

	onKeywordChange: function () {
		Ember.run.debounce(this, this.fetch, 750);
	}.observes('filter'),

	fetch() {
		this.audit.record('searched');
		let self = this;

		this.get('searchService').find(this.get('filter')).then(function (response) {
			self.set('results', response);
		});
	}
});
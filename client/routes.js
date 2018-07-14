Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function(){
	// reviews
	this.route('reviews', {
		path: '/',
		template: 'reviews'
	});


	// Profile
	this.route('profile', {
		path: '/profile',
		template: 'profile'
	});

	// Rankings
	this.route('rankings', {
		path: '/rankings',
		template: 'rankings'
	});

	// Search
	this.route('search', {
		path: '/search',
		template: 'search'
	});

	this.route('approved', {
		path: '/approved',
		template: 'approved'
	});

	this.route('unapproved', {
		path: '/unapproved',
		template: 'unapproved'
	});
});

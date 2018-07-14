if (Meteor.isServer) {
	
	Meteor.publish('Reviews', function() {

			return Reviews.find();

	});

	Meteor.publish('Comments', function() {

			return Comments.find();

	});

	Meteor.publish('Users', function() {

			return Meteor.users.find();

	});

}

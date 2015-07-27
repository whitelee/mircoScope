Meteor.publish('posts',function(){
	return Posts.find();
});

Meteor.publish('allPosts',function(){
	return Posts.find({'author':'Tom'},{fields:{data:false}});
});

Meteor.publish('somePosts',function(){
	return Posts.find({'author':'Tom'});
});

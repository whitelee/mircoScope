if(Posts.find().count() === 0){
	Posts.insert({
		title:"Introducing Telescope",
		author:"Sacha Greif",
		url:"http://sachagreif.com/introducing-telescope/"
	});
	
	Posts.insert({
		title:"Meteor",
		author:"Tom Colema",
		url:"http://meteor.com"
	});
	Posts.insert({
                title:"Meteor book",
                author:"Tom white",
                url:"http://themeteorbook.com"
        });

}

db.unicorns.find({
	gender:{$eq: "f"},
	vampires: {$gte: 40, $lt:70}
}).sort({name:-1})

db.unicorns.find({
  dob:{$lt: new Date(2000,0,1)}
})

db.unicorns.find({
	loves: "carrot"
})

db.unicorns.find({
	$and:[{loves: "carrot"},{loves:"apple"}]
})

db.unicorns.find({
	name: {$regex: /ro+odles/i}
})
var formidable = require('formidable'),
	util = require('util'),
	express = require('express'),
	router = express.Router(),
	fs = require('fs'),
	User = models.User;
	

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' })
});

router.get('/user',function (req ,res ) {
	var response = []
	User.find({},function (err, users) {
		users.forEach(function(user) {
			response.push({
				id : user._id,
				name : user.name,
				foto : 'data:image/jpeg;base64,'+user.foto.toString('base64')
			})
		})
		res.json(response || '')
	})
})

router.get('/user/:id',function (req, res ) {
	User.findOne({_id: req.params.id},function (err, user) {
		if(err) throw err;
		res.render('user',{
			id : user._id,
			name : user.name,
			foto : 'data:image/jpeg;base64,'+user.foto.toString('base64') 
		})
	})
})
router.delete('/user/:id',function (req, res ) {
	User.remove({_id: req.params.id},function (err, result) {
		if(err) throw err;
		else{
			res.render('dashboard',{ result : result});	
		}
		
	})
});
router.get('/dashboard',function (req , res) {
	res.render('dashboard');	
});

router.post('/user', function (req,res,next) {
	
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
    var img = files.todo;

     	fs.readFile(img.path, function(err, data){
	     	User.create({
	     		name : fields.name,
	     		foto : data
	     	},function(err, user) {
	     		if(err) next(err);
	     		if(user) res.redirect('/dashboard')	     		
	     	});

	    });
    });
	
});

module.exports = router;

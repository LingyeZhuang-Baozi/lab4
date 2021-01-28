
/*
 * Make a controller called 'viewProject' → app.js
 */

// exports.viewProject = function(req, res){
// 	res.render("project");
// }

exports.viewProject = function(req, res){
	var name = req.params.name;
	console.log ("The project name is: " + name);
	res.render("project", {
		"projectName": name
	});
}
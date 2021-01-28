
/*
 * GET home page.
 */

exports.view = function(req, res){

  // URL parameters: Get the namefrom the URL.
  // (Controller logic: Prapare anything need to hand off to template.)
  var nameToShow = req.params.userName;

  // Render template: Load ra HTML and indert variables.
  res.render('index', {
  	'name': nameToShow,
  });
};

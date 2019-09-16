// Lets import our controller. views.py in Django, *_controller.rb in Ruby
// This demo controller exports functions for us to use.
var our_controller = require('../controllers/controller.js');

module.exports = function(app) {
  // /home is the url we are looking for and our_controller.home_function is
  // the function that will run when the server receives a get request.
  app.get('/', our_controller.index_function);
  app.get('/animals/new', our_controller.new_function);
  app.post('/animal', our_controller.add_animal);
  app.get('/animals/:id', our_controller.show_animal);
  app.get('/animals/edit/:id', our_controller.edit_animal);
  app.post('/animals/:id', our_controller.update_animal);
  app.get('/animals/destroy/:id', our_controller.destroy_animal);

  
}
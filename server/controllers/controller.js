var Animal = require('../models/animal.js');

module.exports = {
    index_function: function(req, res) {
        animals = Animal.find({}, function(err, animals){
            if (err) {
                res.redirect('/index')
            }
            else {
                res.render('index', {all_animals: animals});
            }
        });
    },
    new_function: function(req, res){
        res.render('new')
    },
    add_animal: function(req, res) {
        // console.log("req.body is", res.body)
        let new_animal = new Animal();
        console.log("Animal before assignment is", new_animal);
        new_animal.name = req.body.animal;
        console.log("Animal before being saved is", new_animal);
        new_animal.save()
        .then(newAnimalData => {console.log('Animal Created: ', newAnimalData.name), res.redirect('/')})
        .catch(err => res.json(err));
    },
    show_animal: function(req, res) {
        console.log("req id :", req.params.id)
        oneanimal = Animal.findOne({_id: req.params.id}, function(err, oneanimal){
            console.log(oneanimal.name)
            if(err) {
                res.redirect('/')
            }
            else {
                res.render('show', {animal: oneanimal});
            }
        });
    },
    edit_animal: function(req, res) {
        console.log("req id :", req.params.id)
        oneanimal = Animal.findOne({_id: req.params.id}, function(err, oneanimal){
            console.log(oneanimal.name)
            if(err) {
                res.redirect('/')
            }
            else {
                res.render('edit', {animal: oneanimal});
            }
        });
    },
    update_animal: function(req, res) {
        console.log("req id :", req.params.id)
        Animal.findOne({_id: req.params.id})
        .then(animal => {
            animal.name = req.body.animal;
            return animal.save();
        })
        .then(saveResult => {console.log('Animal updated to: ', saveResult)}, res.redirect('/'))
        .catch(err => res.json(err));
    },

    destroy_animal: function(req, res) {
        console.log("req id : ", req.params.id)
        Animal.deleteOne({_id: req.params.id})
        .then(deleteAnimal => {console.log(deleteAnimal)}, res.redirect('/'))
        .catch(err => res.json(err));
    }
    // edit_animal: function(req, res) {
    //     console.log('req id:', req.params.id)rs
    //     animal = Animal.findOneAndUpdate({_id: req.params.id});

    // }

}
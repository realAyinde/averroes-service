const db = require("../models");
const Character = db.characters;
const Op = db.Sequelize.Op;
// Create and Save a new Character
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Character
  const character = {
    serial_no: req.body.serial_no,
    name: req.body.name,
    img_url: req.body.img_url,
    about: req.body.about,
    ability: req.body.ability,
    appearance: req.body.appearance,
    others: req.body.others,
    published: req.body.published ? req.body.published : false
  };
  // Save Character in the database
  Character.create(character)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Character."
      });
    });
};
// Retrieve all Characters from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  //Character.findAll({ where: condition })
  Character.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving characters."
      });
    });
};
// Find a single Character with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Character.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Character with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Character with id=" + id
      });
    });
};
// Update a Character by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Character.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Character was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Character with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Character with id=" + id
      });
    });
};
// Delete a Character with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Characters from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Characters
exports.findAllPublished = (req, res) => {
  Character.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving characters."
      });
    });
};
const { User } = require('../models');

module.exports = {
    getUser(req, res) {
      Course.find()
        .then((User) => res.json(User))
        .catch((err) => res.status(500).json(err));
    },
    // Get a course
    getSingleUser(req, res) {
      Course.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(course)
        )
        .catch((err) => res.status(500).json(err));
    },
};
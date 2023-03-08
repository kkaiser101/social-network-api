const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
    },
    username: [{
        type: String,
        required: true,
    }],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);

const User = model('user', userSchema);

module.exports = User;
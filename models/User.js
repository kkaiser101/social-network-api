const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true, 
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
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
const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    handle: String,
    description: String,
    website: String,
    logoUri: {
      type: Object,
    },
    socials: {
        type: Object,
    },
    payButton: String,
    payDisclosure: String,
    details: {
        type: Object,
    },
    summary: {
        type: Object,
    },
    activity: {
        type: Object,
    }
});

module.exports = mongoose.model('Project', projectSchema);

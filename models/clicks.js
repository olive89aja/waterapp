var mongoose = require('mongoose');
var Schema = mongoose.Schema;

    var ClicksSchema = new Schema({
        posted_at: Date,
        Clicks: Number,
        author: String
    });

    var Clicks = mongoose.model("Clicks", ClicksSchema);

    module.exports = Clicks;

    
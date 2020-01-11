var mongoose = require('mongoose');
var Schema = mongoose.Schema;

    var ClicksSchema = new Schema({
        posted_at: Date,
        clicks: {Number, default:0},
        author: {type: String, unique:true}
    });

    var Clicks = mongoose.model("Clicks", ClicksSchema);

    module.exports = Clicks;

    
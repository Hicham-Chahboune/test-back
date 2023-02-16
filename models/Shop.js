const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopSchema = new Schema({

 shop_name: { type: String, required: true },
 shop_adress: { type: String, required: true },
 company_name: { type: String, required: true },
 shop_manager_surname: { type: String, required: true },
 shop_manager_name: { type: String, required: true },
 shop_id: { type: String, required: true },
 shop_picture: { type: String, required: true },
 total_shop_score: { type: Number, required: true },
data: [
    {
    mean_shop: { type: String, required: Number },
    R: { type: String, required: Number },
    }]
});

module.exports = mongoose.model('Shop', shopSchema);

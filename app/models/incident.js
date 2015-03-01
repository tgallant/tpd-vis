// Incident Model

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var IncidentSchema = new Schema({
	primarykey: Number,
	inci_id: Number,
	call_id: String,
	address_public: String,
	date_rept: Date,
	hour_rept: Number,
	date_occu: Date,
	hour_occu: Number,
	date_fnd: Date, 
	hour_fnd: Number,
	neighborhd: String,
	agency: String,
	offense: String,
	statusdesc: String,
	capriority: Number,
	naturecode: String,
	naturecodedesc: String,
	howreceive: String,
	csdisposit: String,
	csdispdesc: String,
	actdate: Date,
	acttime: Number,
	emdivision: String,
	emunit: String,
	x: Number,
	y: Number,
	adduser: String,
	appstate: String,
	addtime: Date,
	loc_method: String,
	add_ns: Number,
	add_dir_ns: String,
	add_ew: Number,
	add_dir_ew: String,
	nha_name: String
});

ArticleSchema.virtual('date')
.get(function(){
	return this._id.getTimestamp();
});

mongoose.model('Article', ArticleSchema);


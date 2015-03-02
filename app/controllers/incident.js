var express = require('express'),
mongoose = require('mongoose');
paginate = require('express-paginate'),
router = express.Router(),
Incident = mongoose.model('Incident');

module.exports = function (app) {
  app.use(paginate.middleware(10, 50));
  app.use('/api/incidents', router);
};

router.get('/', function(req, res, next) {

  Incident.paginate({}, req.query.page, req.query.limit, function(err, pageCount, incidents, itemCount) {

    if (err) return next(err);

    res.format({
      json: function() {
        res.json({
          object: 'list',
          has_more: paginate.hasNextPages(req)(pageCount),
          data: incidents
        });
      }
    });
  });
});
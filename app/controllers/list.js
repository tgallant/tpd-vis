var express = require('express'),
router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/list', function (req, res, next) {
  res.render('list', {
    title: 'Incident Listing'
  });
});
module.exports = function(app) {  
  // here we list our individual sets of routes to use
  require('./routes/physician')(app);
  require('./routes/patient')(app);
};
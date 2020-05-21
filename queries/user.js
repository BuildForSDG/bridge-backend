const db = require('../models');
 let User=db.User;
  exports.getUserById = id => User.findOne({
    where: { id },
  });
 
  exports.getUserByEmail = email => User.findOne({
    where: { email },
  });
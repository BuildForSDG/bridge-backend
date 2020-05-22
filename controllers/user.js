import bcrypt from 'bcrypt';

export const userSignup = (req, res) => res.send('User registration');
const User = require('../queries/user');

export const userLogin = (req, res) => {
  const login = req.body;
  //  ensure that email and password are valid
  //  Users can login to the app with valid email/password
  //  Users cannot login to the app with blank or missing email
  //  Users cannot login to the app with a blank or incorrect password
  const validEmail = typeof login.email === 'string' && login.email.trim() !== '';
  const validPassword =
    typeof login.password === 'string' && login.password.trim() !== '' && login.password.trim().length >= 6;
  if (validEmail && validPassword) {
    //  for valid email and passsword, check if email exists in the database
    User.getUserByEmail(req.body.email).then((user) => {
      //  if user exists, create and store session
      if (user) {
        //  compare password with hashed password
        bcrypt.compare(req.body.password, user.password_hash).then((result) => {
          if (result) {
            //  setting the "set-cookie header"

            //  client side should allow cookies to be set on the clientside
            res.cookie('user_id', user.id, {
              httpOnly: true,
              signed: true
              // secure:true secure when in production
            });
            //  response object is sent with user id if the login is successful;
            res.json({
              id: user.id,
              message: 'Logging in...'
            });
          } else {
            res.json({
              message: 'Invalid email or password...'
            });
          }
        });

        //  if user does not exist, error message.
      } else if (!user) {
        res.json({
          message: 'invalid email or password'
        });
      }
    });
  } else {
    console.log('invalid login test');
    res.json({
      message: 'error'
    });
  }
};

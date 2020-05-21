import express from 'express';
import { userSignup } from '../controllers/user';
import {userLogin} from '../controllers/user'

const userRoutes = express.Router();

// update this route to post
userRoutes.get('/signup', userSignup);

// add more user routes
userRoutes.post('/login', userLogin);

export default userRoutes;

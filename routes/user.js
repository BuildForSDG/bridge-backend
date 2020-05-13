import express from 'express';
import { userSignup } from '../controllers/user';

const userRoutes = express.Router();

// update this route to post
userRoutes.get('/auth/signup', userSignup);

// add more user routes

export default userRoutes;

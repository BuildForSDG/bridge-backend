import express from 'express';
import {userLogin} from '../controllers/user'

const userRoutes = express.Router();

// add more user routes
userRoutes.post('/login', userLogin);

export default userRoutes;

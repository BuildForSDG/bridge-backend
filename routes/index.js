import express from 'express';
import userRoutes from './user';
// import other route group

const routes = express.Router();

routes.use('/', userRoutes);
// add other route e.g routes.use('/admin', adminRoutes)

export default routes;

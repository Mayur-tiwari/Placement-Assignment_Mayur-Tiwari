import express from 'express';
import { createuser, deleteuserdetails, getallusers, getuserdetails } from '../controllers/user.js';

const router = express.Router();


router.get('/users/all',getallusers)

router.post('/users/new',createuser)

router.get('/userid/:id',getuserdetails)

router.delete('/userid/:id',deleteuserdetails)


export default router;

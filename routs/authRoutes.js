const { Router } = require('express');
const authController = require('../controllers/authContoller.js');
const router = Router();
// chat page
router.get('/chatPage',authController.chatPage_get);
// login page
router.get('/login',authController.login_get)
//login handle 
router.post('/login',authController.login_post);
// logout handle
router.post('/logout',authController.logout_post);
router.get('/chat',authController.chat_get)
module.exports = router; 

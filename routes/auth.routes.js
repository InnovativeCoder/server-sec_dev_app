const express = require('express')
const router = express.Router()

//Validation
const {
    validRegister,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid')

// Load Contollers
const {registerController, activationController, signinController, forgotPasswordController, resetPasswordController, googleController, facebookController} = require('../controllers/auth.controller.js')

router.post('/register', registerController)
router.post('/activation', activationController)
router.post('/login', signinController)
router.put('/password/forget', forgotPasswordController)
router.put('/password/reset', resetPasswordController)
router.post('/googlelogin', googleController)
router.post('/facebooklogin', facebookController)

module.exports = router
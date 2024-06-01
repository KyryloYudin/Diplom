const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const profileController = require('../controllers/profile-controller');
const router = new Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

router.get('/profile/:id', authMiddleware, profileController.getProfile);
router.put('/profile/:id', authMiddleware,
    body('email').optional().isEmail(),
    body('avatar').optional().isString(),
    body('userName').optional().isString(),
    body('course').optional().isString(),
    body('group').optional().isString(),
    body('faculty').optional().isString(),
    body('chair').optional().isString(),
    body('specialBlock').optional().isString(),
    body('special').optional().isString(),
    body('educationProgramm').optional().isString(),
    body('studyLevel').optional().isString(),
    body('studyForm').optional().isString(),
    body('cost').optional().isString(),
    profileController.updateProfile
);
router.delete('/profile/:id', authMiddleware, profileController.deleteProfile);

router.post('/profile', authMiddleware,
    body('userId').isString(),
    body('email').optional().isEmail(),
    body('avatar').optional().isString(),
    body('userName').optional().isString(),
    body('course').optional().isString(),
    body('group').optional().isString(),
    body('faculty').optional().isString(),
    body('chair').optional().isString(),
    body('specialBlock').optional().isString(),
    body('special').optional().isString(),
    body('educationProgramm').optional().isString(),
    body('studyLevel').optional().isString(),
    body('studyForm').optional().isString(),
    body('cost').optional().isString(),
    profileController.createProfile
);

module.exports = router;

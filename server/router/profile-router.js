const express = require('express');
const router = express.Router();
const Profile = require('../models/profile-model');

// GET: Получить все профили пользователей
router.get('/profiles', async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET: Получить профиль пользователя по его email
router.get('/profiles/:email', async (req, res) => {
    try {
        const profile = await Profile.findOne({ email: req.params.email });
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST: Создать новый профиль пользователя
router.post('/profiles', async (req, res) => {
    const profile = new Profile({
        email: req.body.email,
        avatar: req.body.avatar,
        userName: req.body.userName,
        course: req.body.course,
        group: req.body.group,
        faculty: req.body.faculty,
        chair: req.body.chair,
        specialBlock: req.body.specialBlock,
        special: req.body.special,
        educatianProgramm: req.body.educatianProgramm,
        studyLevel: req.body.studyLevel,
        studyForm: req.body.studyForm,
        cost: req.body.cost
        // Другие поля профиля
    });

    try {
        const newProfile = await profile.save();
        res.status(201).json(newProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT: Обновить профиль пользователя по его email
router.put('/profiles/:email', async (req, res) => {
    try {
        const updatedProfile = await Profile.findOneAndUpdate(
            { email: req.params.email },
            req.body,
            { new: true }
        );
        res.json(updatedProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE: Удалить профиль пользователя по его email
router.delete('/profiles/:email', async (req, res) => {
    try {
        await Profile.findOneAndDelete({ email: req.params.email });
        res.json({ message: 'Profile deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

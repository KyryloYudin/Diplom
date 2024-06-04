const User = require('../models/user-model');
const Profile = require('../models/profile-model');

class ProfileController {
    async getProfile(req, res) {
        try {
            const userId = req.user.id;
            const profile = await Profile.findOne({ user: userId });
            if (!profile) {
                return res.status(404).json({ message: 'Profile not found' });
            }
            res.json(profile);
        } catch (e) {
            res.status(500).send(e.message);
        }
    }

    async updateProfile(req, res) {
        try {
            const { email, avatar, userName, course, group, faculty, chair, specialBlock, special, educationProgramm, studyLevel, studyForm, cost } = req.body;
            const user = await User.findById(req.params.id).populate('profile');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const profile = await Profile.findById(user.profile._id);
            if (!profile) {
                return res.status(404).json({ message: 'Profile not found' });
            }

            profile.email = email || profile.email;
            profile.avatar = avatar || profile.avatar;
            profile.userName = userName || profile.userName;
            profile.course = course || profile.course;
            profile.group = group || profile.group;
            profile.faculty = faculty || profile.faculty;
            profile.chair = chair || profile.chair;
            profile.specialBlock = specialBlock || profile.specialBlock;
            profile.special = special || profile.special;
            profile.educationProgramm = educationProgramm || profile.educationProgramm;
            profile.studyLevel = studyLevel || profile.studyLevel;
            profile.studyForm = studyForm || profile.studyForm;
            profile.cost = cost || profile.cost;

            await profile.save();
            res.json(profile);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    async deleteProfile(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            await Profile.findByIdAndDelete(user.profile);
            user.profile = null;
            await user.save();
            res.json({ message: 'Profile deleted' });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    async createProfile(req, res) {
        try {
            const { userId, email, avatar, userName, course, group, faculty, chair, specialBlock, special, educationProgramm, studyLevel, studyForm, cost } = req.body;
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).send('User not found');
            }

            const profile = await Profile.create({
                email,
                avatar,
                userName,
                course,
                group,
                faculty,
                chair,
                specialBlock,
                special,
                educationProgramm,
                studyLevel,
                studyForm,
                cost,
                user: user._id
            });

            user.profile = profile._id;
            await user.save();

            res.status(201).send(profile);
        } catch (error) {
            console.error(error); // Вывод ошибки в консоль
            res.status(500).send({ message: 'Server error', error: error.message });
        }
    }
}

module.exports = new ProfileController();

const Grade = require('../models/grade-model');
const Profile = require('../models/profile-model');

class GradeController {
    // Создание новой оценки
    async addGrade(req, res) {
        try {
            const { profileId, semestr, nameLesson, nameTeacher, contact, ez, grade, nation, ects } = req.body;

            // Получаем профиль по profileId
            const profile = await Profile.findById(profileId);
            if (!profile) {
                return res.status(404).json({ message: 'Profile not found' });
            }

            // Создаем запись об оценке
            const newGrade = await Grade.create({
                profileId: profile._id,
                userName: profile.userName,
                semestr,
                nameLesson,
                nameTeacher,
                contact,
                ez,
                grade,
                nation,
                ects
            });

            res.status(201).json(newGrade);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    // Получение всех оценок для профиля
    async getGrades(req, res) {
        try {
            const { profileId } = req.params;

            // Получаем все оценки для профиля
            const grades = await Grade.find({ profileId });
            if (grades.length === 0) {
                return res.status(404).json({ message: 'No grades found for this profile' });
            }

            res.json(grades);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    // Получение одной оценки по ID
    async getGrade(req, res) {
        try {
            const { gradeId } = req.params;

            // Получаем оценку по ID
            const grade = await Grade.findById(gradeId);
            if (!grade) {
                return res.status(404).json({ message: 'Grade not found' });
            }

            res.json(grade);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    // Обновление оценки по ID
    async updateGrade(req, res) {
        try {
            const { gradeId } = req.params;
            const { semestr, nameLesson, nameTeacher, contact, ez, grade, nation, ects } = req.body;

            // Обновляем оценку по ID
            const updatedGrade = await Grade.findByIdAndUpdate(
                gradeId,
                { semestr, nameLesson, nameTeacher, contact, ez, grade, nation, ects },
                { new: true, runValidators: true }
            );

            if (!updatedGrade) {
                return res.status(404).json({ message: 'Grade not found' });
            }

            res.json(updatedGrade);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    // Удаление оценки по ID
    async deleteGrade(req, res) {
        try {
            const { gradeId } = req.params;

            // Удаляем оценку по ID
            const deletedGrade = await Grade.findByIdAndDelete(gradeId);

            if (!deletedGrade) {
                return res.status(404).json({ message: 'Grade not found' });
            }

            res.json({ message: 'Grade deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
}

module.exports = new GradeController();

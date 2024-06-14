const Rating = require('../models/rating-model');
const Group = require('../models/group-model');
const Profile = require('../models/profile-model');
const Grade = require('../models/grade-model');

class RatingController {
    // Метод для создания рейтинга
    async createRating(req, res) {
        try {
            const { year, specialBlock, groups, semester } = req.body;
            const newRating = new Rating({ year, specialBlock, groups, semester });

            // Проверяем, что группы существуют
            for (const groupId of groups) {
                const group = await Group.findById(groupId);
                if (!group) {
                    return res.status(400).json({ message: `Group with id ${groupId} not found` });
                }
            }

            const savedRating = await newRating.save();
            res.status(201).json(savedRating);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }

    // Метод для получения всех рейтингов
    async getRating(req, res) {
        try {
            const { specialBlock, semester } = req.query;
            const ratings = await Rating.find({ specialBlock, semester }).populate('groups');

            const results = await Promise.all(ratings.map(async rating => {
                const groups = await Group.find({ _id: { $in: rating.groups } }).populate('profiles');

                const profilesWithGrades = await Promise.all(groups.flatMap(group => group.profiles).map(async profile => {
                    const grades = await Grade.find({ profileId: profile._id, semestr: semester });

                    const totalCredits = grades.reduce((sum, grade) => sum + grade.credit, 0);
                    const weightedSum = grades.reduce((sum, grade) => sum + (grade.grade * grade.credit), 0);
                    const ratingValue = totalCredits ? (0.9 * (weightedSum / totalCredits)) + 4 : 0;

                    let nation;
                    if (ratingValue >= 90) {
                        nation = '5.00';
                    } else if (ratingValue >= 75) {
                        nation = '4.00';
                    } else if (ratingValue >= 60) {
                        nation = '3.00';
                    } else if (ratingValue >= 50) {
                        nation = '2.00';
                    } else {
                        nation = '1.00';
                    }

                    return {
                        userName: profile.userName,
                        group: profile.group,
                        rating: ratingValue.toFixed(2),
                        nation
                    };
                }));

                return {
                    ratingId: rating._id,
                    year: rating.year,
                    specialBlock: rating.specialBlock,
                    semester: rating.semester,
                    profiles: profilesWithGrades
                };
            }));

            res.json(results);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }

    // Метод для получения рейтинга по ID
    async getRatingById(req, res) {
        try {
            const { id } = req.params;
            const rating = await Rating.findById(id).populate('groups');
            if (!rating) {
                return res.status(404).json({ message: 'Rating not found' });
            }

            const groups = await Group.find({ _id: { $in: rating.groups } }).populate('profiles');

            const profilesWithGrades = await Promise.all(groups.flatMap(group => group.profiles).map(async profile => {
                const grades = await Grade.find({ profileId: profile._id, semestr: rating.semester });

                const totalCredits = grades.reduce((sum, grade) => sum + grade.credit, 0);
                const weightedSum = grades.reduce((sum, grade) => sum + (grade.grade * grade.credit), 0);
                const ratingValue = totalCredits ? (0.9 * (weightedSum / totalCredits)) + 4 : 0;

                let nation;
                if (ratingValue >= 90) {
                    nation = '5.00';
                } else if (ratingValue >= 75) {
                    nation = '4.00';
                } else if (ratingValue >= 60) {
                    nation = '3.00';
                } else if (ratingValue >= 50) {
                    nation = '2.00';
                } else {
                    nation = '1.00';
                }

                return {
                    userName: profile.userName,
                    group: profile.group,
                    rating: ratingValue.toFixed(2),
                    nation
                };
            }));

            res.json({
                ratingId: rating._id,
                year: rating.year,
                specialBlock: rating.specialBlock,
                semester: rating.semester,
                profiles: profilesWithGrades
            });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }
}

module.exports = new RatingController();

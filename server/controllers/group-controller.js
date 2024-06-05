const Profile = require('../models/profile-model');
const Group = require('../models/group-model');

class groupController {
    async createGroup(req, res) {
        try {
            const { groupName, profileIds } = req.body;

            // Проверяем, что профили не принадлежат другой группе
            const profiles = await Profile.find({ _id: { $in: profileIds } });

            for (const profile of profiles) {
                if (profile.group) {
                    return res.status(400).json({ message: `Profile ${profile.userName} already belongs to a group` });
                }
            }

            // Формируем массив профилей для группы
            const groupProfiles = profiles.map(profile => ({
                profileId: profile._id,
                userName: profile.userName
            }));

            // Создаем группу
            const group = await Group.create({ groupName, profiles: groupProfiles });

            // Обновляем профили, чтобы добавить значение groupName в поле group
            await Profile.updateMany(
                { _id: { $in: profileIds } },
                { group: groupName }
            );

            res.status(201).json(group);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    async getGroup(req, res) {
        try {
            const groupId = req.params.groupId;
            const group = await Group.findById(groupId).populate('profiles.profileId');
            if (!group) {
                return res.status(404).json({ message: 'Group not found' });
            }
            res.json(group);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    
}

module.exports = new groupController();

const Profile = require('../models/profile-model');
const Group = require('../models/group-model');
const mongoose = require('mongoose');


class groupController {
    async createGroup(req, res) {
    const session = await mongoose.startSession();
    session.startTransaction();
    
    try {
        const { groupName, profileIds } = req.body;

        // Проверяем, что профили не принадлежат другой группе
        const profiles = await Profile.find({ _id: { $in: profileIds }, group: { $exists: true } }).session(session);
        if (profiles.length > 0) {
            throw new Error(`Profiles ${profiles.map(profile => profile.userName).join(', ')} already belong to a group`);
        }

        // Создаем группу
        const group = await Group.create([{ groupName, profiles: profileIds }], { session });

        // Обновляем профили, чтобы добавить значение groupName в поле group
        await Profile.updateMany({ _id: { $in: profileIds } }, { group: groupName }, { session });

        await session.commitTransaction();
        session.endSession();

        res.status(201).json(group);
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        res.status(500).json({ message: 'Server error', error: error.message });
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

    async getAllGroups(req, res) {
        try {
            const groups = await Group.find();
            res.json(groups);
        } catch (error) {
            console.error('Failed to fetch groups:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    
}

module.exports = new groupController();

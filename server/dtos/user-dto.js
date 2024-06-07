module.exports = class UserDto{
    email;
    id;
    isActivated;
    profile;

    constructor(model){
        this.email=model.email;
        this.id=model.id;
        this.isActivated=model.isActivated;
        this.profile=model.profile;
    }
}
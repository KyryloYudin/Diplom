export interface IProfile {
    find(arg0: (profile: IProfile) => boolean): unknown;
    id: string;
    user: string;
    email: string;
    avatar: string;
    userName: string;
    course: string;
    group: string;
    faculty: string;
    chair: string;
    specialBlock: string;
    special: string;
    educationProgramm: string;
    studyLevel: string;
    studyForm: string;
    cost: string;
}
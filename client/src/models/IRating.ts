// src/interfaces/IRating.ts

export interface IProfile {
    userName: string;
    group: string;
    rating: string;
    nation: string;
}

export interface IRating {
    ratingId: string;
    year: string;
    specialBlock: string;
    semester: number;
    profiles: IProfile[];
}

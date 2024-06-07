import { AxiosResponse } from 'axios';
import $api from "../http";
import { IGrade } from '../models/IGrade';

class GradeService {
    static fetchGrades(profileId: string): Promise<AxiosResponse<IGrade[]>> {
        return $api.get<IGrade[]>(`/grades/profile/${profileId}`);
    }

    static getGrade(gradeId: string): Promise<AxiosResponse<IGrade>> {
        return $api.get<IGrade>(`/grades/${gradeId}`);
    }

    static addGrade(profileId: string, gradeData: Partial<IGrade>): Promise<AxiosResponse<IGrade>> {
        return $api.post<IGrade>(`/profiles/${profileId}/grades`, gradeData);
    }

    static updateGrade(gradeId: string, gradeData: Partial<IGrade>): Promise<AxiosResponse<IGrade>> {
        return $api.put<IGrade>(`/grades/${gradeId}`, gradeData);
    }

    static deleteGrade(gradeId: string): Promise<AxiosResponse<void>> {
        return $api.delete<void>(`/grades/${gradeId}`);
    }
}

export default GradeService;

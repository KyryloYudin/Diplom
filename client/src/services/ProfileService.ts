import { AxiosResponse } from "axios";
import $api from "../http";
import { IProfile } from "../models/IProfile";

export default class ProfileService {
    static fetchProfiles(userId: string): Promise<AxiosResponse<IProfile[]>> {
        return $api.get<IProfile[]>(`/profile/${userId}`);
    }
}

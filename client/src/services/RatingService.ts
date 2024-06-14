import { AxiosResponse } from "axios";
import $api from "../http";
import { IRating } from "../models/IRating";

export default class RatingService {
    static fetchRatings(semester: number, specialBlock: string): Promise<AxiosResponse<IRating[]>> {
        return $api.get<IRating[]>(`/ratings?specialBlock=${specialBlock}&semester=${semester}`);
    }
}

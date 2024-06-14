import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";
import { IGrade } from "../models/IGrade";
import { IRating } from "../models/IRating";
import RatingService from "../services/RatingService";
import ProfileService from "../services/ProfileService";
import { IProfile } from "../models/IProfile";


export default class Store {
    user = {} as IUser;
    profile = {} as IProfile;
    isAuth = false;
    isLoading = false;
    grades: IGrade[] = [];
    ratings: IRating[] = [];
    error: string | null = null;
    

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    setGrades(grades: IGrade[]) {
        this.grades = grades;
    }

    getUserId() {
        return this.user.id;
    }

    getProfileId() {
        return this.user.profile;
    }
    setProfile(profile: IProfile) {
        this.profile = profile;
    }

    setRatings(ratings: IRating[]) {
        this.ratings = ratings;
    }

    setError(error: string | null) {
        this.error = error;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

    async fetchRatings(semester: number) {
        if (!this.profile) {
            return;
        }
        this.setLoading(true);
        this.setError(null);
        try {
            const response = await RatingService.fetchRatings(semester, this.profile.specialBlock);
            this.setRatings(response.data);
        } catch (error: any) {
            this.setError(error.message);
        } finally {
            this.setLoading(false);
        }
    }

    async fetchUserProfile(userId: string) {
        this.setLoading(true);
        this.setError(null);
        try {
            const response = await ProfileService.fetchProfile(userId);
            this.setProfile(response.data);
        } catch (error: any) {
            this.setError(error.message);
        } finally {
            this.setLoading(false);
        }
    }

}

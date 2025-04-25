import { api } from "./config";

export const setLanguage = async (language) => {
    try {
        const res = await api.post("/public/users/language", {} ,{
            params: { language },
            withCredentials: true
        });
        return res.data;
    } catch(error) {
        console.log("언어 설정 실패", error)
        throw error;
    }
};
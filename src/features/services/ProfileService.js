const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000/api";

class ProfileService {
    static async request(path, options = {}) {
        const response = await fetch(`${API_URL}${path}`, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            ...options,
        });

        const data = await ProfileService.parseResponse(response);

        if (!response.ok) {
            throw new Error(data?.message ?? "Error al comunicarse con el servidor");
        }

        return data;
    }

    static async parseResponse(response) {
        const contentType = response.headers.get("content-type");

        if (!contentType?.includes("application/json")) {
            return null;
        }

        return response.json();
    }

    static register(userData) {
        return ProfileService.request("/users", {
            method: "POST",
            body: JSON.stringify(userData),
        });
    }

    static login(credentials) {
        return ProfileService.request("/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials),
        });
    }

    static getProfile(userId) {
        return ProfileService.request(`/users/${userId}`);
    }

    static updateProfile(userId, profileData) {
        return ProfileService.request(`/users/${userId}`, {
            method: "PUT",
            body: JSON.stringify(profileData),
        });
    }

    static saveProfileInterests(userId, interests) {
        return ProfileService.updateProfile(userId, { interests });
    }
}

export default ProfileService;

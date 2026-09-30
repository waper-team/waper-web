import { http, HttpResponse } from "msw";

export const handlers = [
    http.post(
        "http://localhost:3000/api/auth/login",
        async () => {
            return HttpResponse.json({
                user: {
                    _id: "test-user-123",
                    email: "test@waper.com",
                },
            });
        }
    ),
];

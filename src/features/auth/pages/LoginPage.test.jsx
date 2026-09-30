import { afterEach, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { http, HttpResponse } from "msw";
import { server } from "../../../test/mocks/server";
import LoginPage from "./LoginPage";

afterEach(() => {
    cleanup();
    localStorage.clear();
});

function renderLogin() {
    return render(
        <MemoryRouter initialEntries={["/login"]}>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<h1>Perfil de usuario</h1>} />
            </Routes>
        </MemoryRouter>
    );
}

async function fillLogin(user, email = "test@waper.com", password = "123456") {
    await user.type(screen.getByLabelText("Correo electrónico"), email);
    await user.type(screen.getByLabelText("Contraseña"), password);
}

describe("LoginPage", () => {
    test("renderiza los campos de correo y contraseña y el botón de acceso", () => {
        renderLogin();

        expect(screen.getByLabelText("Correo electrónico")).toBeInTheDocument();
        expect(screen.getByLabelText("Contraseña")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Iniciar sesión" })).toBeInTheDocument();
    });

    test("permite completar el formulario", async () => {
        const user = userEvent.setup();
        renderLogin();

        await fillLogin(user);

        expect(screen.getByLabelText("Correo electrónico")).toHaveValue("test@waper.com");
        expect(screen.getByLabelText("Contraseña")).toHaveValue("123456");
    });

    test("guarda el usuario y navega al perfil tras un login exitoso", async () => {
        const user = userEvent.setup();
        renderLogin();

        await fillLogin(user);
        await user.click(screen.getByRole("button", { name: "Iniciar sesión" }));

        expect(await screen.findByRole("heading", { name: "Perfil de usuario" })).toBeInTheDocument();
        expect(localStorage.getItem("waperUserId")).toBe("test-user-123");
    });

    test("muestra el mensaje del backend cuando las credenciales son incorrectas", async () => {
        const user = userEvent.setup();
        server.use(
            http.post("http://localhost:3000/api/auth/login", () =>
                HttpResponse.json({ message: "Credenciales incorrectas" }, { status: 401 })
            )
        );
        renderLogin();

        await fillLogin(user, "incorrecto@waper.com", "incorrecta");
        await user.click(screen.getByRole("button", { name: "Iniciar sesión" }));

        expect(await screen.findByText("Credenciales incorrectas")).toBeInTheDocument();
    });

    test("muestra loading y deshabilita el botón mientras espera la respuesta", async () => {
        const user = userEvent.setup();
        let releaseRequest;
        const pendingRequest = new Promise((resolve) => {
            releaseRequest = resolve;
        });
        server.use(
            http.post("http://localhost:3000/api/auth/login", async () => {
                await pendingRequest;
                return HttpResponse.json({ user: { _id: "test-user-123" } });
            })
        );
        renderLogin();

        await fillLogin(user);
        await user.click(screen.getByRole("button", { name: "Iniciar sesión" }));

        const loadingButton = await screen.findByRole("button", { name: "Iniciando sesión..." });
        expect(loadingButton).toBeDisabled();

        releaseRequest();
    });
});

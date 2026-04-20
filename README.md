<div align="center">

# 🔥 WAPER

### *Hacé amigos, no seguidores.*

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-En%20desarrollo-orange?style=for-the-badge)

</div>

---

## 💬 ¿Qué es WAPER?

**WAPER** es una red social centrada en conexiones reales. Nada de seguidores anónimos ni likes vacíos — acá das y recibís una **solicitud de amistad**, la aceptás, y recién ahí empezás a conectar. Inspirado en la esencia del Facebook original, pero pensado para la generación del chat.

El corazón de WAPER son los **chats**. Cada amistad es una conversación. Cada conversación construye algo.

> Este repositorio contiene **únicamente el frontend** de la aplicación.

---

## ✨ Filosofía y features clave

### 🤝 Amigos, no seguidores
El modelo de conexión es bidireccional: para ser amigo de alguien, ambos tienen que aceptar. Sin seguidores unilaterales, sin audiencias. Solo vínculos reales.

### 🔥 Rachas
Cada par de amigos que chatea día a día construye una **racha**. La racha indica cuántos días consecutivos llevan hablando — visible públicamente, pero sin revelar con quién. Solo la **racha más alta** aparece en el perfil del usuario.

### 🖼️ Intereses
Cada perfil tiene una sección de **intereses**: una galería de fotos que muestra quién es esa persona más allá del chat. Una forma visual y genuina de conocer a alguien antes (o después) de hablar.

---

## 🗂️ Sobre este repositorio

| | |
|---|---|
| 📦 **Tipo** | Frontend |
| ⚛️ **Framework** | React + Vite |
| 🌿 **Rama principal** | `main` |
| 🔧 **Rama de desarrollo** | `develop` |

---

## 🌿 Flujo de trabajo

```
main          ← producción, estable
  ↑
develop       ← integración del equipo
  ↑
feature/xxx   ← desarrollo de cada funcionalidad
```

1. Cada feature se desarrolla en su propia rama desde `develop`
2. Se abre una **Pull Request** hacia `develop`
3. Un miembro del equipo revisa y aprueba
4. Cuando `develop` está estable, se mergea a `main` via PR

---

## 🚀 Cómo empezar

```bash
# Clonar el repositorio
git clone git@github.com:waper-team/waper-web.git

# Entrar al proyecto
cd waper-web

# Instalar dependencias
npm install

# Correr en desarrollo
npm run dev
```

---

## 📁 Estructura del proyecto

```
waper-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── App.jsx
├── .gitignore
├── package.json
└── README.md
```

---

<div align="center">

Made with ❤️ by the WAPER team

</div>
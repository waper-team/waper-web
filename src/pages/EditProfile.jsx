import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import profilePic from '../assets/profile.jpg'
import { Navbar } from '../components'

const initialProfile = {
  fullName: 'Juan Cruz',
  username: '@juan_26',
  email: 'juan.cruz@uap.edu.ar',
  bio: 'Apasionado por la tecnologia, el futbol y los desafios que generan impacto.',
}

const initialInterests = [
  { id: 'football', label: 'Futbol', icon: FootballIcon },
  { id: 'basket', label: 'Basket', icon: BasketIcon },
  { id: 'swim', label: 'Nadar', icon: SwimIcon },
]

function EditProfile() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('profile')
  const [profile, setProfile] = useState(initialProfile)
  const [interests, setInterests] = useState(initialInterests)

  const bioLength = useMemo(() => profile.bio.length, [profile.bio])

  const updateField = (field) => (event) => {
    setProfile((current) => ({
      ...current,
      [field]: event.target.value,
    }))
  }

  const removeInterest = (interestId) => {
    setInterests((current) =>
      current.filter((interest) => interest.id !== interestId),
    )
  }

  const handleSave = () => {
    navigate('/profile')
  }

  return (
    <div className="min-h-screen bg-[#f8faff] pb-28 text-[#00135c]">
      <main className="mx-auto flex min-h-screen w-full max-w-[460px] flex-col px-5 pt-7">
        <header className="mb-7 flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3">
            <button
              type="button"
              onClick={() => navigate('/profile')}
              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#00135c] transition active:scale-95"
              aria-label="Volver al perfil"
            >
              <ArrowLeftIcon />
            </button>

            <div className="min-w-0">
              <h1 className="text-[30px] font-black leading-tight">
                Editar perfil
              </h1>
              <p className="mt-1 text-[14px] font-medium leading-snug text-[#627099]">
                Actualiza tu informacion y conta quien sos.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="mt-1 shrink-0 rounded-[8px] bg-[#0037ff] px-5 py-3 text-[15px] font-bold text-white shadow-[0_10px_20px_rgba(0,55,255,0.25)] transition active:scale-95"
          >
            Guardar
          </button>
        </header>

        <section className="mb-5 rounded-[8px] border border-[#edf1fb] bg-white p-5 shadow-[0_12px_30px_rgba(32,52,112,0.05)]">
          <div className="grid grid-cols-[132px_1fr] items-center gap-5 max-[390px]:grid-cols-1">
            <div className="relative mx-auto h-[132px] w-[132px]">
              <img
                src={profilePic}
                alt="Foto de perfil"
                className="h-full w-full rounded-full object-cover"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0037ff] shadow-[0_8px_22px_rgba(25,43,92,0.18)]"
                aria-label="Cambiar foto"
              >
                <CameraIcon />
              </button>
            </div>

            <div>
              <h2 className="text-[18px] font-black">Foto de perfil</h2>
              <p className="mt-2 text-[14px] font-medium leading-relaxed text-[#627099]">
                Esta sera tu imagen visible para otros usuarios.
              </p>
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#0037ff] px-5 py-3 text-[14px] font-bold text-[#0037ff] transition active:scale-95"
              >
                <CameraIcon size={18} />
                Cambiar foto
              </button>
            </div>
          </div>
        </section>

        <section className="mb-5 rounded-[8px] border border-[#edf1fb] bg-white p-5 shadow-[0_12px_30px_rgba(32,52,112,0.05)]">
          <h2 className="mb-5 text-[19px] font-black">Informacion personal</h2>

          <ProfileField
            label="Nombre completo"
            value={profile.fullName}
            onChange={updateField('fullName')}
          />
          <ProfileField
            label="Nombre de usuario"
            value={profile.username}
            onChange={updateField('username')}
          />
          <ProfileField
            label="Correo electronico"
            type="email"
            value={profile.email}
            onChange={updateField('email')}
          />

          <label className="block">
            <span className="mb-2 block text-[13px] font-semibold text-[#627099]">
              Biografia
            </span>
            <textarea
              value={profile.bio}
              onChange={updateField('bio')}
              maxLength={160}
              rows={5}
              className="w-full resize-none rounded-[8px] border border-[#e2e7f2] bg-white px-4 py-3 text-[15px] font-semibold leading-relaxed text-[#00135c] outline-none transition focus:border-[#0037ff] focus:ring-4 focus:ring-[#0037ff]/10"
            />
          </label>

          <p className="mt-2 text-right text-[13px] font-semibold text-[#627099]">
            {bioLength}/160
          </p>
        </section>

        <section className="rounded-[8px] border border-[#edf1fb] bg-white p-5 shadow-[0_12px_30px_rgba(32,52,112,0.05)]">
          <h2 className="text-[19px] font-black">Intereses y hobbies</h2>
          <p className="mt-1 text-[14px] font-medium text-[#627099]">
            Contanos que te gusta hacer y que te interesa.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {interests.map(({ id, label, icon }) => (
              <span
                key={id}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#f3f6ff] px-4 text-[14px] font-bold text-[#0037ff]"
              >
                {icon()}
                {label}
                <button
                  type="button"
                  onClick={() => removeInterest(id)}
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  aria-label={`Eliminar ${label}`}
                >
                  <CloseIcon />
                </button>
              </span>
            ))}

            <button
              type="button"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-dashed border-[#cbd5e1] bg-white px-5 text-[14px] font-bold text-[#0037ff] transition active:scale-95"
            >
              <PlusIcon />
              Agregar interes
            </button>
          </div>
        </section>
      </main>

      <Navbar
        activeTab={activeTab}
        onAdd={() => console.log('Crear nuevo')}
        onTabChange={(tab) => setActiveTab(tab)}
      />
    </div>
  )
}

function ProfileField({ label, type = 'text', value, onChange }) {
  return (
    <label className="mb-5 block">
      <span className="mb-2 block text-[13px] font-semibold text-[#627099]">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="h-14 w-full rounded-[8px] border border-[#e2e7f2] bg-white px-4 text-[15px] font-semibold text-[#00135c] outline-none transition focus:border-[#0037ff] focus:ring-4 focus:ring-[#0037ff]/10"
      />
    </label>
  )
}

function ArrowLeftIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
      <path
        d="M19 12H5M12 19L5 12L12 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function CameraIcon({ size = 21 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M7 7L8.5 4.5H15.5L17 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7H7Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="13"
        r="3.4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function FootballIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 7L16 10L14.5 15H9.5L8 10L12 7Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M4.7 10.3L8 10M16 10L19.3 10.3M9.5 15L7.6 18.2M14.5 15L16.4 18.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function BasketIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 3V21M3 12H21M5.5 6.5C8.8 8.8 10.5 13.3 9 20M18.5 6.5C15.2 8.8 13.5 13.3 15 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function SwimIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 17C5.5 16 6.5 16 8 17C9.5 18 10.5 18 12 17C13.5 16 14.5 16 16 17C17.5 18 18.5 18 20 17M4 20C5.5 19 6.5 19 8 20C9.5 21 10.5 21 12 20C13.5 19 14.5 19 16 20C17.5 21 18.5 21 20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M8 14L12 10L16 14M13 6.5C13 7.32843 12.3284 8 11.5 8C10.6716 8 10 7.32843 10 6.5C10 5.67157 10.6716 5 11.5 5C12.3284 5 13 5.67157 13 6.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.4"
      />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
    </svg>
  )
}

export default EditProfile

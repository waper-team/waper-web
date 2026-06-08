import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import '../App.css'
import { getProfile } from '../services/profileService'

import {
    Header,
    Interests,
    Navbar,
    Posts,
    ProfileImage,
    Stats,
    UserInfo,
} from '../components'

function Profile() {
    const [activeTab, setActiveTab] = useState('profile')
    const [profile, setProfile] = useState(null)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { profileId = '6a26cdc0e953d58f42ac971e' } = useParams()

    useEffect(() => {
        let isMounted = true

        getProfile(profileId)
            .then((loadedProfile) => {
                if (!isMounted) return

                setProfile(loadedProfile)
                setError('')
            })
            .catch(() => {
                if (!isMounted) return

                setError('No se pudo cargar el perfil.')
            })

        return () => {
            isMounted = false
        }
    }, [profileId])

    return (
        <div
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#f5f7ff]
                pb-28
            "
        >
            <div
                className="
                    absolute
                    left-[-120px]
                    top-[-120px]
                    h-[260px]
                    w-[260px]
                    rounded-full
                    bg-[#0037ff]
                "
            />

            <div
                className="
                    absolute
                    right-[-100px]
                    top-[320px]
                    h-[220px]
                    w-[220px]
                    rounded-full
                    border
                    border-gray-200
                    opacity-40
                "
            />

            <div
                className="
                    absolute
                    left-10
                    top-52
                    grid
                    grid-cols-4
                    gap-3
                    opacity-60
                "
            >
                {Array.from({ length: 16 }).map((_, index) => (
                    <div
                        key={index}
                        className="
                            h-2
                            w-2
                            rounded-full
                            bg-blue-500
                        "
                    />
                ))}
            </div>

            <div className="relative z-10">
                <Header onEditProfile={() => navigate(`/profile/${profileId}/edit`)} />
            </div>

            <div
                className="
                    relative
                    z-10
                    mt-6
                    flex
                    flex-col
                    items-center
                "
            >
                {error && (
                    <p className="mb-4 rounded-[8px] bg-red-50 px-4 py-3 text-[13px] font-semibold text-red-600">
                        {error}
                    </p>
                )}
                <ProfileImage src={profile?.profileImage} />
                <UserInfo profile={profile} />
                <Stats
                    friendsCount={profile?.friendsCount}
                    streakCount={profile?.streakCount}
                />
                <Interests interests={profile?.interests} />
                <Posts />
            </div>

            <Navbar
                activeTab={activeTab}
                onTabChange={(tab) => setActiveTab(tab)}
                onAdd={() => console.log('Crear nuevo')}
            />
        </div>
    )
}

export default Profile

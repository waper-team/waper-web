import { useState } from 'react'

import '../App.css'

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
                <Header />
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
                <ProfileImage />
                <UserInfo />
                <Stats />
                <Interests />
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

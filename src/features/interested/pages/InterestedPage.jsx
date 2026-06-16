import { useMemo, useState } from "react";

import InterestsLayout from "../components/InterestsLayout.jsx";
import InterestHeader from "../components/InterestHeader.jsx";
import InterestCategoryGrid from "../components/InterestCategoryGrid.jsx";
import InterestListItem from "../components/InterestListItem.jsx";

import Button from "../../../components/UI/Button.jsx";
import SearchInput from "../../../components/UI/SearchInput.jsx";
import SelectionTitle from "../../../components/UI/SelectionTitle.jsx";
import CarouselIndicator from "../../../components/UI/CarouselIndicator.jsx";
import { Navbar } from "../../../components";

//iconos
import {
    Palette,
    Camera,
    Music,
    Dumbbell,
    ChefHat,
    Plane,
    Laptop,
    Gamepad2,
} from "lucide-react";

// imágenes
import arte from "../../../assets/interests/arte.png";
import fotografia from "../../../assets/interests/fotografia.png";
import musica from "../../../assets/interests/musica.png";
import deporte from "../../../assets/interests/deporte.png";
import cocinar from "../../../assets/interests/cocinar.png";
import viajes from "../../../assets/interests/viajes.png";
import tecnologia from "../../../assets/interests/tecnologia.png";
import videojuego from "../../../assets/interests/videojuego.png";

function InterestedPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedInterests, setSelectedInterests] = useState([]);

    const categories = [
        {
            id: 1,
            name: "Arte",
            icon: Palette,
        },
        {
            id: 2,
            name: "Foto",
            icon: Camera,
        },
        {
            id: 3,
            name: "Música",
            icon: Music,
        },
        {
            id: 4,
            name: "Deportes",
            icon: Dumbbell,
        },
        {
            id: 5,
            name: "Cocina",
            icon: ChefHat,
        },
        {
            id: 6,
            name: "Viajes",
            icon: Plane,
        },
        {
            id: 7,
            name: "Tech",
            icon: Laptop,
        },
        {
            id: 8,
            name: "Gaming",
            icon: Gamepad2,
        },
    ];

    const interestsByCategory = {
        1: [
            {
                id: 101,
                title: "Pintura",
                description:
                    "Expresá tu creatividad en cada pincelada.",
                icon: arte,
            },
            {
                id: 102,
                title: "Escultura",
                description:
                    "Creá obras y descubrí nuevas formas.",
                icon: arte,
            },
            {
                id: 103,
                title: "Dibujo",
                description:
                    "Convertí ideas en ilustraciones increíbles.",
                icon: arte,
            },
        ],

        2: [
            {
                id: 201,
                title: "Retratos",
                description:
                    "Capturá emociones y momentos únicos.",
                icon: fotografia,
            },
            {
                id: 202,
                title: "Paisajes",
                description:
                    "Descubrí la belleza de cada lugar.",
                icon: fotografia,
            },
            {
                id: 203,
                title: "Fotografía Urbana",
                description:
                    "Encontrá arte en cada rincón de la ciudad.",
                icon: fotografia,
            },
        ],

        3: [
            {
                id: 301,
                title: "Guitarra",
                description:
                    "Aprendé acordes y conectá con la música.",
                icon: musica,
            },
            {
                id: 302,
                title: "Piano",
                description:
                    "Explorá melodías y nuevas composiciones.",
                icon: musica,
            },
            {
                id: 303,
                title: "Canto",
                description:
                    "Descubrí tu voz y expresate cantando.",
                icon: musica,
            },
        ],

        4: [
            {
                id: 401,
                title: "Running",
                description:
                    "Superate y corré tu mejor versión.",
                icon: deporte,
            },
            {
                id: 402,
                title: "Tenis",
                description:
                    "Pasión, ritmo y concentración.",
                icon: deporte,
            },
            {
                id: 403,
                title: "Ciclismo",
                description:
                    "Explorá, disfrutá y avanzá.",
                icon: deporte,
            },
        ],

        5: [
            {
                id: 501,
                title: "Pastelería",
                description:
                    "Creá postres y sorprendé a todos.",
                icon: cocinar,
            },
            {
                id: 502,
                title: "Comida Italiana",
                description:
                    "Aprendé recetas clásicas y modernas.",
                icon: cocinar,
            },
            {
                id: 503,
                title: "Parrilla",
                description:
                    "Convertite en el rey del asado.",
                icon: cocinar,
            },
        ],

        6: [
            {
                id: 601,
                title: "Mochilera",
                description:
                    "Viví aventuras alrededor del mundo.",
                icon: viajes,
            },
            {
                id: 602,
                title: "Road Trips",
                description:
                    "Descubrí lugares únicos en cada ruta.",
                icon: viajes,
            },
            {
                id: 603,
                title: "Playas",
                description:
                    "Explorá destinos paradisíacos.",
                icon: viajes,
            },
        ],

        7: [
            {
                id: 701,
                title: "Programación",
                description:
                    "Construí proyectos increíbles.",
                icon: tecnologia,
            },
            {
                id: 702,
                title: "IA",
                description:
                    "Descubrí el futuro de la tecnología.",
                icon: tecnologia,
            },
            {
                id: 703,
                title: "Ciberseguridad",
                description:
                    "Protegé sistemas y datos.",
                icon: tecnologia,
            },
        ],

        8: [
            {
                id: 801,
                title: "RPG",
                description:
                    "Viví historias y aventuras épicas.",
                icon: videojuego,
            },
            {
                id: 802,
                title: "E-Sports",
                description:
                    "Competí al más alto nivel.",
                icon: videojuego,
            },
            {
                id: 803,
                title: "Indie Games",
                description:
                    "Descubrí experiencias únicas.",
                icon: videojuego,
            },
        ],
    };

    const interests = useMemo(() => {
        if (!selectedCategory) return [];
        return interestsByCategory[selectedCategory] ?? [];
    }, [selectedCategory]);

    const handleCategorySelect = (id) => {
        setSelectedCategory(id);
        setSelectedInterests([]);
    };

    const handleInterestSelect = (id) => {
        setSelectedInterests((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const handleSave = () => {
        console.log({
            category: selectedCategory,
            interests: selectedInterests,
        });
    };

    return (
        <InterestsLayout>
            <div className="flex min-h-screen flex-col pb-32">
                <InterestHeader />

                <div className="mt-6">
                    <SearchInput />
                </div>

                <section className="mt-8">
                    <SelectionTitle>
                        Explorar Categorías
                    </SelectionTitle>

                    <div className="mt-5">
                        <InterestCategoryGrid
                            categories={categories}
                            selected={
                                selectedCategory
                                    ? [selectedCategory]
                                    : []
                            }
                            onSelect={handleCategorySelect}
                        />
                    </div>
                </section>

                <div className="mt-8">
                    <CarouselIndicator />
                </div>

                {selectedCategory && (
                    <section className="mt-10">
                        <div
                            className="
                            flex
                            items-center
                            justify-between
                            gap-4
                        "
                        >
                            <SelectionTitle>
                                Intereses
                            </SelectionTitle>

                            <Button
                                onClick={handleSave}
                                disabled={!selectedInterests.length}
                                className="
                                h-9
                                px-4
                                text-xs
                                shrink-0
                            "
                            >
                                Guardar
                            </Button>
                        </div>

                        <div className="mt-5 flex flex-col gap-2">
                            {interests.map((interest) => (
                                <InterestListItem
                                    key={interest.id}
                                    title={interest.title}
                                    checked={selectedInterests.includes(
                                        interest.id
                                    )}
                                    onChange={() =>
                                        handleInterestSelect(
                                            interest.id
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </section>
                )}

                <div className="h-28 shrink-0" />

                <Navbar />
            </div>
        </InterestsLayout>
    );
}

export default InterestedPage;
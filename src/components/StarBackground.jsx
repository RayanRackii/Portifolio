import { useEffect, useState } from "react";

export const StarBackground = ({isDarkMode}) => {
    const [stars, setStars] = useState([]);
    const [starsFalling, setStarsFalling] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [lefs, setLeafs] = useState([]);

    const savedTheme = localStorage.getItem("theme");


    useEffect(() => {
        generateStars();
        generateMeteors();
        generateLeafs();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerHeight * window.innerWidth) / 10000
        );

        const newStars = [];
        const fallingStars = [];
        
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        for (let i = 0; i < (numberOfStars/2); i++) {
            fallingStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStarsFalling(fallingStars);
        setStars(newStars);
    }

    const generateLeafs = () => {
         const numberOfLeafs = Math.floor(
            (window.innerHeight * window.innerWidth) / 100000
        );

        const newLeafs = [];
        for (let i = 0; i < numberOfLeafs; i++) {
            newLeafs.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 5,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setLeafs(newLeafs);
    }

    const generateMeteors = () => {
        const numberOfMeteors = 4;

        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 1,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setMeteors(newMeteors);
    }

    return ( 
        isDarkMode ? 
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {stars.map((star) => (
                    <div key={star.id} className="star animate-pulse"
                        style={{
                            left: star.x + "%",
                            top: star.y + "%",
                            width: star.size + "px",
                            height: star.size + "px",
                            opacity: star.opacity,
                            animationDuration: star.animationDuration + "s",
                        }}
                    />
                ))}

                {starsFalling.map((star) => (
                    <div key={star.id} className="star animate-meteor"
                        style={{
                            left: star.x + "%",
                            top: star.y + "%",
                            width: star.size + "px",
                            height: star.size + "px",
                            opacity: star.opacity,
                            animationDuration: star.animationDuration + "s",
                        }}
                    />
                ))}

                {meteors.map((meteor) => (
                    <div key={meteor.id} className="meteor animate-meteor"
                        style={{
                            left: meteor.x + "%",
                            top: meteor.y + "%",
                            width: meteor.size * 50 + "px",
                            height: meteor.size + "px",
                            animationDelay: meteor.delay,
                            animationDuration: meteor.animationDuration + "s",
                        }}
                    />
                ))}
            </div>
        :
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {lefs.map((leaf, idx) => (
                    <div
                        key={leaf.id}
                        className={`leaf animate-leaf`}
                        style={{
                            left: leaf.x + "%",
                            top: leaf.y + "%",
                            width: leaf.size * (idx % 3 === 0 ? 1 : idx % 2 === 0 ? 0.75 : 0.5) + 20 + "px",
                            height: leaf.size * (idx % 3 === 0 ? 1 : idx % 2 === 0 ? 0.75 : 0.5) + 10 + "px",
                            opacity: leaf.opacity,
                            animationDuration: leaf.animationDuration + "s",
                            background:
                                idx % 4 === 0
                                    ? "linear-gradient(to bottom right, #990, #564500)"
                                    : idx % 2 === 0
                                    ? "linear-gradient(to bottom right, #5e9900, #2b5600)"
                                    : "linear-gradient(to bottom right, #309900, #005600)",
                        }}
                    >
                    </div>
                ))}
            </div>
    );
}
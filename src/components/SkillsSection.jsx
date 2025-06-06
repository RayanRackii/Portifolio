import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "JavaScript", level: "95", category: "front-end" },
  { name: "React", level: "80", category: "front-end" },
  { name: "Node.js", level: "10", category: "back-end" },
  { name: "Python", level: "25", category: "back-end" },
  { name: "CSS", level: "95", category: "front-end" },
  { name: "HTML", level: "95", category: "front-end" },
  { name: "TypeScript", level: "95", category: "front-end" },
  { name: "MongoDB", level: "95", category: "database" },
];

const categories = ["all", "front-end", "tools", "back-end", "database"];
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) =>
    activeCategory === "all" || skill.category === activeCategory
);

  return (
    <section id="skills" className="py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-primary"> Skills </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary hover:text-white"
              )
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover z-10"
            >
              <div className="text-left mb-4">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-in-out] transition-all duration-500"
                  style={
                    skill.level ? { width: `${skill.level}%` } : { width: "0%" }
                  }
                ></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Level: {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

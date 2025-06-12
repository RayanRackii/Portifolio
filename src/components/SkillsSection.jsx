import { useState } from "react";
import { cn } from "../lib/utils";
import {
  FileQuestionIcon,
  LucideMessageCircleQuestion,
  MessageCircleQuestion,
  MessageCircleQuestionIcon,
  ShieldQuestionIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
const skills = [
  { name: "JavaScript", level: "50", category: "front-end" },
  { name: "React", level: "40", category: "front-end" },
  { name: "Python", level: "75", category: "back-end" },
  { name: "Excel", level: "75", category: "Tools" },
  { name: "PowerBI", level: "50", category: "Tools" },
  { name: "CSS", level: "70", category: "front-end" },
  { name: "HTML", level: "70", category: "front-end" },
  { name: "Java", level: "35", category: "back-end" },
  { name: "MySQL", level: "55", category: "database" },
  { name: "PostgreSQL", level: "45", category: "database" },
  { name: "VS Code", level: "85", category: "Tools" },
  { name: "GitHub", level: "50", category: "Tools" },
  { name: "Docker", level: "25", category: "Tools" },
];

const categories = ["all", "front-end", "Tools", "back-end", "database"];
export const SkillsSection = () => {
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center justify-between">
          <span className="flex-1 text-center">
            {t("skills.Title")}{" "}
            <span className="text-primary"> {t("skills.titleHighlight")} </span>
          </span>
          <div className="relative group">
            <MessageCircleQuestionIcon className="text-3xl md:text-5xl ml-4 cursor-pointer" />
            <span
              className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 top-full mt-2 w-64 sm:w-80 md:w-96 py-2 sm:py-3 px-3 sm:px-5 rounded bg-primary text-foreground text-xs sm:text-sm shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-pre-line z-50 font-semibold text-left max-w-[90vw]"
              dangerouslySetInnerHTML={{ __html: t("skills.tooltip") }}
            />
          </div>
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
              )}
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

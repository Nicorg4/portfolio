import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";

const skills = [

    { name: "JavaScript", level: 5, category: "frontend" },
    { name: "TypeScript", level: 4, category: "frontend" },
    { name: "React", level: 5, category: "frontend" },
    { name: "Next.js", level: 3, category: "frontend" },
    { name: "HTML5", level: 5, category: "frontend" },
    { name: "CSS3", level: 3, category: "frontend" },
    { name: "RESTful APIs", level: 4, category: "backend" },
    { name: "MySQL", level: 5, category: "backend" },
    { name: "Node.js", level: 5, category: "backend" },
    { name: "Vitest", level: 2, category: "frontend" },
    { name: "Express", level: 5, category: "backend" },
    { name: "Python", level: 4, category: "backend" },
    { name: "MongoDB", level: 3, category: "backend" },
    { name: "Astro", level: 2, category: "frontend" },
    { name: "PostgreSQL", level: 3, category: "backend" },
    { name: "Jest", level: 3, category: "backend" },
    { name: "IAM", level: 2, category: "cybersecurity" },
    { name: "AD/LDAP", level: 1, category: "cybersecurity" },
    { name: "CIA Triad", level: 2, category: "cybersecurity" },
    { name: "Firewalls", level: 1, category: "cybersecurity" },
    { name: "Threat Detection", level: 1, category: "cybersecurity" },
    { name: "SIEM (Chronicle, Splunk)", level: 1, category: "cybersecurity" },
    { name: "SOAR Tools", level: 1, category: "cybersecurity" },
    { name: "Wireshark", level: 3, category: "cybersecurity" },
    { name: "tcpdump", level: 2, category: "cybersecurity" },
    { name: "Suricata", level: 1, category: "cybersecurity" },
    { name: "Ubuntu", level: 3, category: "cybersecurity" },
    { name: "OWASP Top 10", level: 3, category: "cybersecurity" },
    { name: "NIST CSF", level: 2, category: "cybersecurity" },
    { name: "IDS", level: 2, category: "cybersecurity" },
    { name: "AWS Cloud", level: 3, category: "cloud" },
    { name: "Google Cloud Platform", level: 2, category: "cloud" },
    { name: "Cloud IAM (GCP)", level: 2, category: "cloud" },
    { name: "Cloud Monitoring (GCP)", level: 2, category: "cloud" },
    { name: "Git", level: 5, category: "tools" },
    { name: "GitHub", level: 5, category: "tools" },
    { name: "Postman", level: 5, category: "tools" },
    { name: "Bash", level: 2, category: "tools" },
    { name: "Linux CLI", level: 3, category: "tools" }

];

const categories = ["all", "frontend", "backend", "cybersecurity", "cloud", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [searchTerm, setSearchTerm] = useState("");

const SkillLevelBar = ({ level }) => {
  const barCount = level;
  const totalBars = 5;

return (
    <div className="flex items-center gap-1">
        <div className="flex gap-1">
            {[...Array(totalBars)].map((_, index) => (
                <div
                    key={index}
                    className={cn(
                        "w-3 h-6 transition-colors duration-300",
                        index < barCount ? "bg-primary" : "bg-muted/30"
                    )}
                />
            ))}
        </div>
    </div>
);
};

    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            let columns;

            if (width >= 1024) {
                columns = 3;
            } else if (width >= 640) {
                columns = 2;
            } else {
                columns = 1;
            }

            setItemsPerPage(3 * columns);
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    const filteredSkills = skills
        .filter((skill) => activeCategory === "all" || skill.category === activeCategory)
        .filter((skill) => skill.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedSkills = filteredSkills.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const clearSearch = () => {
        setSearchTerm("");
        setCurrentPage(1);
    };

    return (
        <section id="skills" className="md:py-40 py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="text-center mb-8"></div>
                {/* Buscador */}
                <div className="relative max-w-md mx-auto mb-8">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search skills..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full pl-10 pr-10 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        />
                        {searchTerm && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Filtros por categoría */}
                <div className="flex-wrap justify-center gap-4 mb-12 hidden md:flex">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => handleCategoryChange(category)}
                            className={cn(
                                "px-5 py-2 rounded-lg transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "border ligthmode-border hover:bg-primary/30 cursor-pointer"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Mensaje cuando no hay resultados */}
                {filteredSkills.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">
                            No skills found matching "{searchTerm}"
                        </p>
                        <button
                            onClick={clearSearch}
                            className="mt-4 text-primary hover:underline"
                        >
                            Clear search
                        </button>
                    </div>
                )}

                {/* Grid de skills */}
                <div className="h-[330px]">
                    {filteredSkills.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {paginatedSkills.map((skill, key) => (
                                <div
                                    key={key}
                                    className="bg-card rounded-lg shadow-xs card-hover ligthmode-border"
                                >
                                    <div className="flex flex-col items-center justify-center h-full py-5">
                                        <h3 className="font-semibold text-lg pb-1">{skill.name}</h3>
                                        <span className={cn(
                                            "px-2 py-1 text-sm border border-primary",
                                            )}>
                                            <SkillLevelBar level={skill.level} />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {/* Paginación */}
                {totalPages > 1 && filteredSkills.length > 0 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={cn(
                                    "px-4 py-2 rounded-lg transition-colors duration-300",
                                    currentPage === index + 1
                                        ? "bg-primary text-primary-foreground"
                                        : "border ligthmode-border hover:bg-primary/30 cursor-pointer"
                                )}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
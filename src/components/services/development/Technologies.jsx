import React from "react";

const Technologies = () => {
  const items = [
    { icon: "/assets/img/services/development/001-algorithm.png", title: "JavaScript/TypeScript Framework" },
    { icon: "/assets/img/services/development/002-blog.png", title: "iOS / Android" },
    { icon: "/assets/img/services/development/003-sitemap.png", title: "Python/FastAPI" },
    { icon: "/assets/img/services/development/004-layout.png", title: "PHP Framework" },
    { icon: "/assets/img/services/development/005-data.png", title: "Java/Spring" },
    { icon: "/assets/img/services/development/006-browser.png", title: "Build and CI/CD" },
    { icon: "/assets/img/services/development/007-idea.png", title: "Observability and Analytics" },
    { icon: "/assets/img/services/development/008-code.png", title: "Security" },
  ];

  const rows = [items.slice(0, 4), items.slice(4, 8)];

  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-600">Our Technologies</h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-500">
            Our distributed team of developers have the skills you’ve been looking for regardless of the size or scope
            of the project. We specialize in these key areas to deliver superb web application development services.
          </p>
        </div>

        <div className="mt-14">
          {rows.map((row, rIdx) => (
            <div key={rIdx} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200">
              {row.map((it, cIdx) => (
                <TechItem key={cIdx} icon={it.icon} title={it.title} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechItem = ({ icon, title, active = false }) => {
  const base = "relative transition-all duration-700 ease-out";
  const hover = "hover:bg-white hover:shadow-[30px_30px_20px_rgba(0,0,0,0.12)]";
  const activeCls = active ? "bg-white shadow-[26px_26px_70px_rgba(0,0,0,0.12)]" : "";

  return (
    <div className={`${base} ${hover} ${activeCls}`}>
      {/* Increased padding */}
      <div className="px-12 py-10">
        {/* Larger icon */}
        <div className="h-16 w-16 mb-5">
          <img src={icon} alt="" className="h-full w-full object-contain" loading="lazy" />
        </div>
        {/* Slightly larger title */}
        <h3 className="text-[19px] font-semibold text-slate-500 whitespace-pre-line leading-[1.4]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Technologies;

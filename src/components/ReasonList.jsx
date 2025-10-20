import React from "react";

const RightFitSectioun = () => {
  const items = [
    { img: "/icons/tech.svg",  title: "Latest Technology",  desc: "We utilize modern open source toolkits from the biggest names in tech to build your app the right way.",  chip: "from-[#7C4DFF] to-[#6A35F4]" },
    { img: "/icons/team.svg",  title: "Distributed Talent", desc: "Our team structure keeps costs down while allowing us to pull talent globally from competitive markets.",      chip: "from-[#FFB300] to-[#FF8F00]" },
    { img: "/icons/value.svg", title: "High Value",         desc: "Our upfront design strategy ensures accurate estimates and keeps your project on time and within budget.",     chip: "from-[#BDBDBD] to-[#9E9E9E]" },
    { img: "/icons/lean.svg",  title: "Lean Methods",       desc: "Lean management processes reduce overhead while providing visibility into your project's progress.",         chip: "from-[#7AD3EA] to-[#58C1E0]" },
  ];

  return (
    <section className="py-16 md:py-18">
      <div className="mx-auto max-w-[1180px] px-6">
        {/* 35% / 65% split on lg+ */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[35%_65%] lg:gap-16">
          {/* Left 35% */}
          <div className="max-w-xl">
            <h2 className="text-[30px] leading-tight md:text-[38px] font-semibold text-slate-600 mb-3">
              A Few Reasons <br/> 
              Why We Might Be <br/>
              The Right Fit for <br/> 
              Your Company:
            </h2>
            <p className="text-[15px] leading-7 text-slate-500">
              We have a few unique characteristics working in your favor. Learn how our modern toolkits, lean development methods, accurate estimates and distributed team structure make our services the ideal choice for your business.
            </p>
          </div>

          {/* Right 65% — 2x2 grid, no inner padding */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
            {items.map((it, i) => (
              <FeatureCard key={i} {...it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ img, title, desc, chip }) => {
  return (
    <div className="group transition-shadow duration-300 ease-out hover:shadow-[14px_14px_44px_rgba(0,0,0,0.12)]">
      <div className="flex flex-col items-center text-center p-4">
        {/* Big chip, image on top */}
        <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${chip} shadow-sm grid place-items-center`}>
          {img ? (
            <img src={img} alt="" className="w-14 h-14 object-contain invert brightness-0" loading="lazy" />
          ) : (
            <span className="w-14 h-14 rounded-full bg-white/40" />
          )}
        </div>

        <h3 className="mt-4 text-[22px] md:text-[24px] font-semibold text-slate-600">{title}</h3>
        <p className="mt-2 text-[16px] leading-7 text-slate-500 max-w-[460px]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default RightFitSectioun;

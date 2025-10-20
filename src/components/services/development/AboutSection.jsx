import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[42%_1fr] lg:gap-16">
          {/* Left image card */}
          <div className="w-full">
            <div className="overflow-hidden rounded-xl shadow-sm">
              {/* replace with your asset */}
              <img
                src="/images/team.jpg"
                alt="Our team"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right copy */}
          <div className="text-slate-600">
            {/* Intro */}
            <p className="text-[15px] leading-7 text-slate-500">
              We offers high-quality web and mobile application development services to
              small and midsize companies at a value unmatched in the industry. By using
              modern toolkits that complement our lean development style, we are able to
              ship cutting-edge, affordable assets.
            </p>

            {/* Experience */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-600">Experience</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-500">
              Our powerhouse team distributed around the world keeps our rates as
              competitive as possible while allowing us to pull talent from the most
              competitive markets. To deliver high standards we use open-source toolkits
              from the biggest names in tech. We build once for the web, then can deploy
              native versions to platforms of your choice including iPhone, Android and more.
            </p>

            {/* Expectations */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-600">Expectations</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-500">
              Our custom web and mobile application development services bring more efficiency and
              accessibility than typical SaaS. By working closely with stakeholders we
              deliver assets that put value with the business, helping you get more out of
              your technology investments. Whether you’re in tech or modernizing your
              workplace through proprietary software, we have the know-how to build tools
              that lead to growth and scalability.
            </p>

            {/* Value */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-600">Value</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-500">
              We offer a reliable alternative to other web app services. By building only
              what you ask for, we quickly introduce users to the platform and build your
              MVP from there. Thanks to our methods, you get the experience of onshore
              developers with the cost-effective value of a rockstar offshore team.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-500">
              Have a project ready to develop? Share a little information about your plans
              and we can prepare a faster quote than brewing a cup of coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

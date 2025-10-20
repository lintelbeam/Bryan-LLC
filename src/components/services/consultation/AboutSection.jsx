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
                Through close partnerships and a dedication to creating long-term solutions, 
                Vice Software provides software development consulting services to small and 
                midsize companies at an highly competitive rate. By implementing the latest 
                technologies and mentoring internal IT teams, we focus on instilling more 
                value into each company we work with and keeping their intellectual property (IP) inhouse.
            </p>

            {/* Experience */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-600">Experience</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-500">
                Our experienced consultants have worked with companies of all sizes, recreating 
                our formula for success each time. When it comes to software development, 
                we believe the most valuable currency is knowledge, so when we partner with a 
                business to guide their development, we dedicate ourselves to the process, 
                lending them our experience and lessons we’ve learned along the way. With our 
                approach, we are able to help our clients determine where and how they should 
                be investing in an application so that their architecture will align with their 
                business goals. Vice Software is committed to giving businesses a long-term 
                strategy, so when they’re no longer benefiting from our software development 
                consulting services, they’ll have the skills and knowledge to grow and scale.
            </p>

            {/* Expectations */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-600">Expectations</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-500">
                Our clients expect our software development consulting services to guide them 
                confidently through the process and take their own preferences and style into 
                account. Each project begins with a principal architect working closely with 
                our clients to learn about their business goals and make recommendations moving 
                forward. Our experienced offshore team works with our onshore consulting 
                architects to deliver assets that will have the most value for the business, 
                adhering to industry best practices and giving you only what you’ve asked for.
            </p>

            {/* Value */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-600">Value</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-500">
                Vice Software offers a more reliable, valuable alternative to other affordable 
                software consulting options. Our software development consulting services are 
                catered to fit the needs of our clients, utilizing a variety of tools and skills 
                to help your business succeed. Due to our unique development methods, we are 
                able to give our clients the experience of onshore consultants with the 
                cost-effective value of a rockstar offshore team.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-500">
                In need of our consulting services? Get started by giving us just a little 
                information about your company and your needs, and we can have a quote 
                prepared faster than delivery pizza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

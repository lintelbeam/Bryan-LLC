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
                As your legacy systems become older and more cumbersome, 
                your business needs to institute an application modernization 
                strategy to restore usability, reduce costs and complexity, 
                increase flexibility and enable cross-platform collaboration. 
                We evaluate your software thoroughly and assists you in developing 
                and instituting a long-lasting, enduring strategy to modernize 
                your antiquated applications.
            </p>

            {/* Experience */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-600">Experience</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-500">
                Over the years, we’ve seen many instances of 
                companies running their business processes with 
                older assets, and we understand the dilemma these 
                business face; to renovate or rebuild. Your
                 application modernization strategy can take 
                 several different routes, and our application modernization 
                 experts work with your business to determine the most cost-effective
                  and scalable methods. Utilizing the latest technologies and best 
                  practices, we ensure the process of migrating and updating your 
                  data adds no extra strain to your business practices while creating 
                  more value for you in the future.
            </p>

            {/* Expectations */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-600">Expectations</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-500">
                To determine and implement a successful application modernization
                 strategy, our team of experts and consultants work closely 
                 with our clients, monitoring their team to establish 
                 their business goals and how to best accomplish them. 
                 We are able to create assets that put value with the business 
                 rather than individual employees and help modernize the 
                 workplace through investments in new tools and technologies. 
                 Whether your application simply requires migrating to cloud 
                 storage or a total rebuild, our experienced architects find 
                 the solution that fits your business.
            </p>

            {/* Value */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-600">Value</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-500">
                We offer a more reliable, valuable alternative to other affordable
                 software modernization options. We treat each modernization project
                  as a unique case, utilizing a variety of tools and skills to aid 
                  the application modernization strategy we’ve worked together with
                   our clients to create. Due to our unique development methods, 
                   we are able to give our clients the experience of onshore architects 
                   with the cost-effective value of a rockstar offshore team.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-500">
                Does your legacy application need an upgrade? Get started by giving us just a 
                little information about your business and your needs, and we can have a quote 
                prepared faster than Chinese takeout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

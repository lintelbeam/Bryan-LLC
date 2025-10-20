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
                With UI/UX design playing such a key role in maximizing ROI, 
                easing onboarding processes and increasing user satisfaction,
                We give special consideration to providing exceptional 
                UI and UX services. We will carefully analyze the needs of your 
                business as well as the needs of your users to develop an app 
                design built for quality interactions.
            </p>

            {/* Experience */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-600">Experience</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-500">
                Over countless projects, our experienced team of UI and UX designers 
                have worked with companies around the world to design products that 
                make lives a little easier for their users. We have the skills and 
                knowledge necessary to ensure the goals of an application are 
                identified and accomplished. Our clean code ensures that no matter 
                the platform, your application will look and feel as intended and 
                operate smoothly, and our knowledge of best practices modern toolkits 
                guarantee you won’t be paying for anything your company doesn’t need.
            </p>

            {/* Expectations */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-600">Expectations</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-500">
                Our UI and UX services focus on delivering a flexible platform that can 
                be customized to fit the goals and needs of our clients. Our team of 
                designers work closely with our clients to gain a thorough understanding 
                of your business goals and users journey to develop a unique design strategy. 
                Throughout the process of wireframing, writing code and developing assets, 
                We focus on creating a powerful user experience amplified by intuitive, 
                nuanced design. Whether your app requires a modern makeover or you are 
                developing an application completely from scratch, our UI and UX designers 
                can provide the creative insights your project needs.
            </p>

            {/* Value */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-600">Value</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-500">
                We ensure our clients receive the highest quality UI and UX services. 
                We create a streamlined, user-centric experience for your application 
                at an unparalleled value. You’ll be able to introduce your product to 
                your users faster and with their feedback, you can continue to optimize 
                the application. By focusing only on what you and your users need, 
                we are able to create a graphically successful and cost-effective product.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-500">
                Does your project need a designer’s touch? Get started by giving us just a 
                little information about your project and design ideas, and we can have a 
                quote prepared faster than car insurance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

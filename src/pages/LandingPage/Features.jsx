import React from "react";

const Features = () => {
  const featuresData = [
    {
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
      icon: "icon-access-anywhere",
    },
    {
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      icon: "icon-security",
    },
    {
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
      icon: "icon-collaboration",
    },
    {
      title: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      icon: "icon-any-file",
    },
  ];

  return (
    <div className="grid gap-20 px-[35px] sm:px-40 md:px-44 lg:px-60 xl:px-[340px] md:grid-cols-2">
      {featuresData.map((feature, index) => (
        <div
          className="flex flex-col items-center text-center gap-8"
          key={index}
        >
          <div>
            <img
              src={`icons/${feature.icon}.svg`}
              aria-hidden="true"
              className="h-[50px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[17px]">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;

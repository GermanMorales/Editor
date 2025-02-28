import React from 'react';

import config from './config/index.json';

const Features = ({ webData }) => {
  const { features } =  config;
  const { title, subtitle, description, items: featuresList } = features;

  return (
    <div className="py-12 bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {webData?.contact_us.texto}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            
              <a
                //href={""/*feature.url*/}
                key={"Número"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4">
                    <img
                      className="inline-block h-6 w-6 rounded-full"
                      src={"/assets/images/phone.png"}
                      alt={"Número"}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {"Número"}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {webData?.footer.numero}
                </dd>
              </a>

              <a
                //href={""/*feature.url*/}
                key={"Email"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4">
                    <img
                      className="inline-block h-6 w-6 rounded-full"
                      src={"/assets/images/email.png"}
                      alt={"Email"}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {"Email"}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {webData?.footer.correo/*feature.description*/}
                </dd>
              </a>

              <a
                href={webData?.link1 || "https://facebook.com"/*feature.url*/}
                key={"Facebook"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4">
                    <img
                      className="inline-block h-6 w-6 rounded-full"
                      src={"/assets/images/facebook.jpg"}
                      alt={"Facebook"}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {"Facebook"}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {webData?.link1 || "https://facebook.com"/*feature.description*/}
                </dd>
              </a>

              <a
                href={webData?.link2 || "https://instagram.com"/*feature.url*/}
                key={"Instagram"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4">
                    <img
                      className="inline-block h-6 w-6 rounded-full"
                      src={"/assets/images/insta.png"}
                      alt={"Instagram"}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {"Instagram"}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {webData?.link2 || "https://instagram.com"/*feature.description*/}
                </dd>
              </a>
            
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;

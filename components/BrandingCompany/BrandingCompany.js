import Marquee from "react-fast-marquee";

const BrandCompany = () => {
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  return (
    <section className="my-24 ">
      <div className="ml-4 md:ml-0 ">
        <h1 className="text-3xl font-bold">Our Brand Company</h1>
        <p>Visit our valuable company</p>
      </div>
      <Marquee className="flex select-none " speed={120}>
        <div
          className={`shrink-0 flex items-center justify-around whitespace-nowrap w-full`}
        >
          {row1.map((logo, i) => (
            <div
              key={i}
              className="grid w-32 px-4 py-6 md:w-52 place-items-center"
            >
              <picture>
                <img
                  className="object-contain w-full h-full px-4 rounded-lg shadow-lg aspect-video"
                  src={logo}
                  alt="s"
                />
              </picture>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee
        className="flex w-full mx-auto select-none"
        speed={80}
        direction="right"
      >
        <div
          className={`shrink-0 flex items-center justify-around whitespace-nowrap w-full`}
        >
          {row2.map((logo,i) => (
            <div
              key={i}
              className="grid w-32 px-4 py-6 md:w-52 place-items-center"
            >
              <picture>
                <img
                  className="object-contain w-full h-full px-4 rounded-lg shadow-lg aspect-video"
                  src={logo}
                  alt="s"
                />
              </picture>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default BrandCompany;

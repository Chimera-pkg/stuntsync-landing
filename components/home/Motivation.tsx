const motivationItems = [
  {
    iconPath: '/icons/icon-baby.svg',
    title: 'Stunting Early Detection',
    subtitle:
      'You can check the stunting status of your beloved child.',
  },
  {
    iconPath: '/icons/icon-monit.svg',
    title: 'Monitoring Progress',
    subtitle:
      'You can also monitor regularly to ensure your child stays healthy and free from stunting.',
  },
  {
    iconPath: '/icons/icon-cust.svg',
    title: 'Institution-Customizable Monitoring',
    subtitle:
      'Through collaboration with various health institutions, we involve healthcare professionals to provide recommendations that can be filled flexibly based on direct examinations.',
  },
];

export default function Motivation() {
  return (
    <section className="py-14 bg-neutral-light-grayish-blue lg:py-24">
      <div className="container text-center lg:text-left">
        <div className="grid lg:grid-cols-2 mb-12 lg:mb-16">
          <div className="col-span-1">
            <h2 className="text-3xl lg:text-4xl text-primary-dark-blue pb-5">
              Why choose StuntSync?
            </h2>
            <p className="text-neutral-grayish-blue text-sm lg:text-base leading-5">
              We leverage AI to stands as a revolutionary application designed to assist parents and 
healthcare institutions in detecting and addressing the issue of stunting in children.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-9 lg:gap-6 lg:grid-cols-3">
          {motivationItems.map((item) => (
            <div key={item.title} className="justify-center">
              <div className="flex justify-center lg:justify-start">
                <img src={item.iconPath} alt="" />
              </div>

              <h2 className="text-lg text-primary-dark-blue py-4 lg:pt-9 lg:pb-6 lg:text-xl lg:font-bold">
                {item.title}
              </h2>
              <p className="text-neutral-grayish-blue text-sm font-light lg:text-base leading-5">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

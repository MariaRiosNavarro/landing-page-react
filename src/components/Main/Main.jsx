import "./Main.scss";

const features = [
  { title: "Brand Identify", logo: "/icons/brush.svg" },
  { title: "Ilustration", logo: "/icons/object-select.svg" },
  { title: "Marketing", logo: "/icons/megaphone.svg" },
  { title: "Web Design", logo: "/icons/globe-line.svg" },
];

const Main = () => {
  return (
    <>
      <div className="main">
        <h3>What We Do</h3>
        <h2>We´ve got Everything you need to launch and grow your business</h2>
        <section className="grid-section">
          {features.map((feature, index) => (
            <article key={index}>
              <img src={feature.logo} alt={feature.title} />
              <h4>{feature.title}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                fugit possimus! Aliquid eveniet quos quis quidem at doloremque
                fugit recusandae laudantium. Placeat, esse facere impedit
                aliquam veniam labore earum soluta reprehenderit asperiores,
                nemo rem harum eaque.
              </p>
            </article>
          ))}
        </section>
      </div>
    </>
  );
};

export default Main;

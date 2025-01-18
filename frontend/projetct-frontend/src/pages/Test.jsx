import { useState, useEffect } from "react";

const Test = () => {
  const services = [
    {
      title: "Nettoyage de Données pour un Ensemble de Données sur les Voitures",
      description:
        "Dans le monde d'aujourd'hui, axé sur les données, la qualité de vos données influence directement la précision de vos analyses.",
      icon: (
        <svg
          fill="#000000"
          height="80px"
          width="80px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <circle cx="256" cy="256" r="200" />
        </svg>
      ),
      link: "/Data_Cleaning/Houses",
    },
    {
      title: "Analyser des Données des Voitures",
      description:
        "Explorez et comprenez les données liées aux voitures grâce à des visualisations intuitives.",
      image: "/static/images/data-compression.png",
      link: "/Analyse/cars",
    },
    {
      title: "Prédisez les Prix des Voitures avec un Modele de Machine Learning Avancées",
      description:
        "Découvrez notre solution innovante pour prédire les prix des voitures grâce à des techniques avancées.",
      image: "/static/images/file.png",
      link: "/Models/Cars-model",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
    const carousel = document.getElementById("carousel");
    if (carousel) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }
    updateDots(index);
  };

  const updateDots = (index) => {
    services.forEach((_, idx) => {
      const dot = document.getElementById(`dot-${idx}`);
      if (dot) {
        dot.style.backgroundColor = idx === index ? "black" : "gray";
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % services.length;
      handleSlideChange(nextIndex);
    }, 3000); // Swap every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="h-screen p-10 bg-[url('/section4-bg.png')] bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto relative">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">
            <span className="text-blue-500">Services</span>
          </h2>
        </div>

        <div className="overflow-hidden relative">
          <div
            id="carousel"
            className="flex transition-transform duration-700 ease-in-out"
            style={{ width: `${services.length * 100}%` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className=" w-full p-6 bg-white shadow-lg rounded-lg text-center"
              >
                <div className="img-box mb-4">
                  {service.icon ? (
                    service.icon
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="mx-auto h-20"
                    />
                  )}
                </div>
                <div className="detail-box">
                  <h5 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h5>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href={service.link}
                    className="text-blue-500 hover:underline font-semibold"
                  >
                    Afficher
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-500"
              id={`dot-${index}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Test;

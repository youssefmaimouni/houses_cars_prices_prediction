// pages/Home.js
import React ,{ useEffect, useState } from "react";
import { motion ,useAnimation} from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import { IconCloud } from "../components/magicui";
// import "../../public/static/css/home.css"
"use client";
import { InteractiveGridPattern } from "../components/interactive-grid-pattern";

const images = [
  "/react-logo.png",
  "/python-logo.png",
  "/flask-logo.png",
  "/jupyter-logo.png",
  "/vite-logo.png",
  "/scikit-learn-logo.png",
  "/tenserflow-logo.png",
  "/taillwind-logo.png",
  "/javasript-logo.png",
  "/ts-logo.png",
  "/html-logo.png",
  "/css-logo.png",
];

const Home = () => {
  const cn = (...args) => args.filter(Boolean).join(' ');
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Trigger animation based on scroll position
    if (scrollY > 200) {
      controls.start({ opacity: 1, x: 0, transition: { duration: 1 } });
    } else {
      controls.start({ opacity: 0, x: -100, transition: { duration: 1 } });
    }
  }, [scrollY, controls]);
  return (
        <div className="bg-gray-100 text-gray-800">
                {/* <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-blue-500"
      /> */}
          {/* Hero Section */}
          <motion.section
        className="bg-white h-screen :bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{opacity:1}}
        transition={{ duration: 1 }}
      >
         <video
        className="absolute z-0 top-0 left-0 h-full w-full object-cover"
        src="/istockphoto-1961001965-640_adpp_is.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
      ></video>
        <div className="grid max-w-screen-xl z-50 px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <motion.div
            className="mr-auto place-self-center z-50 lg:col-span-7"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl :text-white z-50">
              Prédiction des prix <br />des voitures et des maisons
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl :text-gray-400 z-50">
              Ce projet de prédiction des prix des voitures et des maisons à
              l'aide de modèles d'apprentissage automatique.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 z-50">
              <motion.a
                href="https://github.com/youssefmaimouni/houses_cars_prices_prediction"
                className="inline-flex items-center justify-center w-full px-5 py-3 z-50 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 :text-white :border-gray-700 :hover:bg-gray-700 :focus:ring-gray-800"
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className=" z-50 w-4 h-4 mr-2 text-gray-500 :text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                View on GitHub
              </motion.a>
            </div>
          </motion.div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex z-50">
            <motion.img
              src="/home.jpg"
              alt="hero image"
              initial={{ opacity: 0 }}
              animate={{opacity:1}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
        </div>
      </motion.section>
      {/* Second Section */}
      <section className="bg-[url('/section1-bg.png')] bg-no-repeat bg-cover bg-center h-screen ">
        <div className="container grid grid-cols-2 items-center h-screen  mx-auto px-6 z-50">
          {/* Titre de la section */}
          <div>
            <motion.div
              className="text-center mb-8 z-50"
              initial={{ opacity: 0, y: -50 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-100 z-50">
                Nettoyage de Données pour un Ensemble de Données sur les Voitures
              </h2>
              <p className="text-lg text-gray-200 mt-2 z-50">
                Libérez le Pouvoir des Données Propres
              </p>
            </motion.div>

            {/* Description de la section */}
            <motion.div
              className="max-w-4xl mx-auto text-gray-300 z-50"
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="mb-6  z-50">
                Dans le monde d'aujourd'hui, axé sur les données, la qualité de vos
                données influence directement la précision de vos analyses. Notre
                processus complet de nettoyage de données pour les ensembles de
                données sur les voitures garantit une base solide pour des analyses
                et des prédictions fiables.
              </p>
            </motion.div>
            <motion.div
              className="text-center mt-8  z-50"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <a
                href="/Data_Cleaning/Cars"
                className="px-6 py-3 bg-slate-600 text-white rounded-md shadow-md hover:bg-slate-700 transition z-50"
              >
                Explorer le Notebook
              </a>
            </motion.div>
          </div>

          {/* Grille des fonctionnalités */}
          <motion.div
            className="grid gap-8 z-50"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, delay: 1 }}
          >
            {/* Section "Ce Que Nous Offrons" */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-400 mb-4 z-50">
                Ce Que Nous Offrons
              </h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2 z-50">
                <li>
                  <strong>Nettoyage de Données Simplifié :</strong> Exploitez la
                  puissance de Python et Pandas pour gérer les valeurs manquantes,
                  les anomalies et les incohérences facilement.
                </li>
                <li>
                  <strong>Expertise en Données Automobiles :</strong> Des prix aux
                  spécifications, nous sommes spécialisés dans le nettoyage des
                  ensembles de données adaptés au secteur automobile.
                </li>
                <li>
                  <strong>Gestion Optimisée des Fichiers CSV :</strong> Chargez et
                  transformez rapidement de grands ensembles de données comme le
                  <code> avito_car_dataset_ALL.csv </code> pour une analyse fluide.
                </li>
              </ul>
            </div>

            {/* Section "Points Forts" */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-400 mb-4 z-50">
                Points Forts
              </h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2 z-50">
                <li>
                  <strong>Workflow Rationalisé :</strong> Suivez notre approche
                  structurée pour importer, prétraiter et analyser vos données en
                  respectant les meilleures pratiques de l'industrie.
                </li>
                <li>
                  <strong>Solutions Personnalisables :</strong> Ajustez nos
                  modèles de code pour répondre à vos besoins spécifiques en
                  matière de données et d'activités.
                </li>
                <li>
                  <strong>Données Prêtes à l'Analyse :</strong> Assurez-vous que
                  vos ensembles de données sont prêts pour l'analyse, libérant
                  ainsi des informations exploitables et une puissance
                  prédictive.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-gray-50  h-screen">
      <video
        className="absolute z-0 left-0 h-screen w-full object-cover"
        src="/istockphoto-1961001965-640_adpp_is.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
      ></video>
        <div className="grid grid-cols-2 items-center h-screen  mx-auto px-6  z-50">
          <motion.div
            className="container mx-auto px-6 pt-8 lg:px-20 text-start z-50"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4 z-50">
              Analyser des Données des Voitures
            </h1>
            <p className="text-lg text-gray-600 mb-8 z-50">
              Explorez et comprenez les données liées aux voitures grâce à des
              visualisations intuitives et des statistiques descriptives. Plongez
              dans les tendances et obtenez des perspectives claires pour des
              prises de décision éclairées.
            </p>
            <motion.div
              className="text-center mt-8 z-50"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="/Analyse/cars"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition z-50"
              >
                Découvrir les Analyses
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=" z-50"
          >
            <img src="/cars_analyse.png" alt="hero image" />
          </motion.div>
        </div>
      </section>
      <section className="bg-[url('/section2-bg.png')] bg-no-repeat bg-cover bg-center h-screen ">
        <div className="grid grid-cols-2 items-center h-screen  mx-auto px-6">
          <motion.div
            className="container mx-auto px-6 pt-8 lg:px-20 text-start"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
           <h1 className="text-2xl font-bold text-gray-100 mb-4">
           Prédisez les Prix des Voitures avec un Modele de Machine Learning Avancées
      </h1>
      <p className="mb-4 text-gray-50">
      Découvrez notre solution innovante pour prédire les prix des voitures grâce à des techniques avancées de machine learning. Ce projet intègre un modèle de réseau neuronal sophistiqué construit avec TensorFlow, conçu pour fournir des estimations précises et fiables des prix des véhicules.
      </p>
      <h2 className="text-xl font-semibold text-gray-200 mb-2">
      Points Clés :
      </h2>
      <ul className="list-disc list-inside mb-4 text-gray-50">
      <li><strong>Préparation des Données</strong>: Prétraitement des caractéristiques pour des performances optimales.</li>
              <li><strong>Entraînement du Modèle</strong>: Basé sur une architecture robuste de régression.</li>
              <li><strong>Évaluation des Performances</strong>: Testé pour garantir des résultats applicables dans le monde réel.</li>
              <li><strong>Prédictions en Temps Réel</strong>: Fournit des insights exploitables pour acheteurs et vendeurs.</li>
      </ul>
      <h3 className="text-xl font-semibold text-gray-100 mb-4">
              Pourquoi Choisir ce Modèle ?
            </h3>
            <p className="text-gray-50">
              Cette approche basée sur machine learning simplifie l’évaluation des véhicules en s’appuyant sur des analyses approfondies, 
              assurant transparence et confiance dans les décisions de tarification.
            </p>
            <motion.div
              className="text-center mt-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a
                href="/Models/Cars-model"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition"
              >
                Utilise le Modele
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img src="/cars_model_image.webp" alt="hero image" />
          </motion.div>
        </div>
      </section>
      <section className="bg-gray-50 h-screen">
      <video
        className="absolute z-0  left-0 h-full w-full object-cover"
        src="/istockphoto-1961001965-640_adpp_is.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
      ></video>
      <div className="container grid grid-cols-2 gap-3 items-center h-screen mx-auto px-6 z-50">
        {/* Titre de la section */}
        <div>
          <motion.div
            className="text-center mb-8 z-50"
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 z-50">
              Nettoyage de Données pour le Secteur Immobilier
            </h2>
            <p className="text-lg text-gray-700 mt-2 z-50">
              Transformez vos données brutes en insights exploitables.
            </p>
          </motion.div>

          {/* Description de la section */}
          <motion.div
            className="max-w-4xl mx-auto text-gray-800 z-50"
            initial={{ opacity: 0, x: -50 }}
            animate={{opacity:1,x:1}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="mb-6 text-gray-950 z-999">
              Dans un marché immobilier compétitif, des données fiables sont
              essentielles pour prendre des décisions éclairées. Ce projet se
              concentre sur le nettoyage et la préparation de données immobilières
              provenant de Casablanca pour une analyse précise.
            </p>
          </motion.div>
          <motion.div
            className="text-center mt-8 z-50"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a
              href="/Data_Cleaning/Houses"
              className="px-6 py-3 bg-slate-600 text-white rounded-md shadow-md hover:bg-slate-700 transition z-50"
            >
              Explorer le Notebook
            </a>
          </motion.div>
        </div>

        {/* Grille des fonctionnalités */}
        <motion.div
          className="grid gap-8 z-50"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Section "Ce Que Nous Offrons" */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 z-50">
              Ce Que Nous Offrons
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 z-50">
              <li>
                <strong>Nettoyage de Données Professionnel :</strong> Gérez les
                valeurs manquantes et anomalies avec des outils avancés.
              </li>
              <li>
                <strong>Spécialisation en Immobilier :</strong> Traitez les
                attributs tels que les prix, types de propriétés, et
                géolocalisation.
              </li>
              <li>
                <strong>Workflow Efficace :</strong> Chargez et transformez
                rapidement des ensembles de données volumineux pour des analyses
                fluides.
              </li>
            </ul>
          </div>

          {/* Section "Points Forts" */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 z-50">
              Points Forts
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 z-50">
              <li>
                <strong>Approche Structurée :</strong> Adoptez un processus
                clair pour préparer vos données.
              </li>
              <li>
                <strong>Flexibilité :</strong> Ajustez les scripts pour répondre
                aux besoins spécifiques du projet.
              </li>
              <li>
                <strong>Précision Optimisée :</strong> Garantissez une base
                fiable pour des analyses prédictives.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
      <section className="bg-gray-100 h-screen ">
      <div className="container grid grid-cols-2 items-center h-screen  mx-auto px-6">
      <motion.div
            className="container mx-auto px-6  lg:px-20 text-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{opacity:1,x:50}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">les outils de devloppement</h1>
            <ul className="text-gray-700 text-lg font-semibold pl-10">
              <li>Python</li>
              <li>Flask</li>
              <li>React</li>
              <li>Jupyter</li>
              <li>Vite</li>
              <li>Scikit-learn</li>
              <li>Tenserflow</li>
              <li>Taillwind</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>

      </motion.div>
        <div className="relative flex  max-w-lg max-h-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 py-20 ">
              <IconCloud  imageArray={images} />
         </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

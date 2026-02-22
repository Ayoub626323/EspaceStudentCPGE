import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

const problemesCards = [
  {
    title: "Problèmes d'algèbre linéaire",
    author: "Professeur Ahmed",
    description:
      "Problèmes de diagonalisation, réduction et applications linéaires pour les concours.",
    date: "18/06/2025",
    readingTime: "25 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Problèmes de mécanique",
    author: "Professeur Fatima",
    description:
      "Problèmes de mécanique du point, oscillateurs et systèmes à plusieurs corps.",
    date: "15/06/2025",
    readingTime: "30 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Problèmes d'électromagnétisme",
    author: "Professeur Karim",
    description:
      "Électrostatique, magnétostatique et ondes : problèmes d'application.",
    date: "12/06/2025",
    readingTime: "28 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Problèmes d'analyse",
    author: "Professeur Leila",
    description:
      "Suites, séries, intégrales et équations différentielles : problèmes corrigés.",
    date: "10/06/2025",
    readingTime: "35 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Problèmes de thermodynamique",
    author: "Professeur Omar",
    description:
      "Machines thermiques, transferts et applications des lois de la thermodynamique.",
    date: "08/06/2025",
    readingTime: "22 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Problèmes de chimie organique",
    author: "Professeur Nadia",
    description:
      "Mécanismes réactionnels, synthèses et stéréochimie : problèmes d'application.",
    date: "05/06/2025",
    readingTime: "26 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Problèmes de probabilités",
    author: "Professeur Youssef",
    description:
      "Variables aléatoires, lois de probabilité et applications aux concours.",
    date: "03/06/2025",
    readingTime: "24 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Problèmes de géométrie",
    author: "Professeur Samira",
    description:
      "Géométrie affine, euclidienne et applications aux concours d'ingénieurs.",
    date: "01/06/2025",
    readingTime: "20 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Problèmes d'optique",
    author: "Professeur Hassan",
    description:
      "Optique géométrique et ondulatoire : problèmes corrigés pour la prépa.",
    date: "28/05/2025",
    readingTime: "23 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
];

function ProblemesCard({
  title,
  author,
  description,
  date,
  readingTime,
  image,
}: {
  title: string;
  author: string;
  description: string;
  date: string;
  readingTime: string;
  image: string;
}) {
  return (
    <div className="block rounded-md border border-gray-300 p-4 shadow-sm dark:border-gray-700 dark:bg-white/[0.03] sm:p-6">
      <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
        <div className="sm:order-last sm:shrink-0">
          <img
            alt=""
            src={image}
            className="size-16 rounded-full object-cover sm:size-20"
          />
        </div>

        <div className="mt-4 sm:mt-0">
          <p className="text-xs font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            MPSI/PCSI
          </p>
          <h3 className="mt-1 text-lg font-medium text-pretty text-gray-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
            Par {author}
          </p>

          <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>

      <dl className="mt-6 flex gap-4 lg:gap-6">
        <div className="flex items-center gap-2">
          <dt className="text-gray-700 dark:text-gray-400">
            <span className="sr-only"> Published on </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </dt>
          <dd className="text-xs text-gray-700 dark:text-gray-400">{date}</dd>
        </div>

        <div className="flex items-center gap-2">
          <dt className="text-gray-700 dark:text-gray-400">
            <span className="sr-only"> Reading time </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
          </dt>
          <dd className="text-xs text-gray-700 dark:text-gray-400">
            {readingTime}
          </dd>
        </div>
      </dl>

      <a
        href="#"
        className="mt-6 inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 dark:border-indigo-500 dark:bg-indigo-600 dark:hover:bg-transparent dark:hover:text-indigo-400"
      >
        Consulter
      </a>
    </div>
  );
}

export default function Problemes() {
  return (
    <div>
      <PageMeta
        title="Problemes | CPGE Horizon"
        description="Problemes page for CPGE Horizon"
      />
      <PageBreadcrumb pageTitle="Problemes" />
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problemesCards.map((card) => (
            <ProblemesCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

const concoursCards = [
  {
    title: "Concours Centrale-Supélec",
    author: "Écoles Centrale",
    description:
      "Annales et sujets des concours Centrale-Supélec pour la préparation aux grandes écoles d'ingénieurs.",
    date: "15/06/2025",
    readingTime: "45 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Concours Mines-Ponts",
    author: "Écoles des Mines",
    description:
      "Sujets corrigés des concours Mines-Ponts pour Mines Paris, Ponts et Chaussées.",
    date: "12/06/2025",
    readingTime: "40 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Concours X-ENS",
    author: "Polytechnique & ENS",
    description:
      "Annales des concours Polytechnique et Écoles Normales Supérieures.",
    date: "10/06/2025",
    readingTime: "50 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Concours CCP",
    author: "Banque CCP",
    description:
      "Sujets des concours communs polytechniques pour les écoles d'ingénieurs.",
    date: "08/06/2025",
    readingTime: "35 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Concours E3A",
    author: "Banque E3A",
    description:
      "Annales du concours E3A pour les écoles d'ingénieurs post-prépa.",
    date: "05/06/2025",
    readingTime: "38 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Concours Banque PT",
    author: "Banque PT",
    description:
      "Sujets des concours PT pour les classes préparatoires technologie.",
    date: "03/06/2025",
    readingTime: "42 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Concours Agro-Veto",
    author: "Agro & Vétérinaires",
    description:
      "Annales des concours des écoles agronomiques et vétérinaires.",
    date: "01/06/2025",
    readingTime: "40 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Concours G2E",
    author: "Géologie & Environnement",
    description:
      "Sujets corrigés des concours G2E pour les écoles de géologie.",
    date: "28/05/2025",
    readingTime: "36 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
  {
    title: "Concours BCE",
    author: "Banque BCE",
    description:
      "Annales des concours de la banque BCE pour les écoles de commerce.",
    date: "25/05/2025",
    readingTime: "44 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
  },
];

function ConcoursCard({
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
            Concours
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

export default function Concours() {
  return (
    <div>
      <PageMeta
        title="Concours | CPGE Horizon"
        description="Concours page for CPGE Horizon"
      />
      <PageBreadcrumb pageTitle="Concours" />
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {concoursCards.map((card) => (
            <ConcoursCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

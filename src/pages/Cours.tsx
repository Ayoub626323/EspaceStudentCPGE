import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

const coursCards = [
  {
    title: "Logique et ensembles",
    description:
      "Propositions, prédicats, démonstrations et théorie des ensembles.",
  },
  {
    title: "Calcul algébrique",
    description:
      "Polynômes, équations, factorisation et manipulation d'expressions.",
  },
  {
    title: "Nombres complexes",
    description:
      "Forme algébrique, forme polaire et applications géométriques.",
  },
  {
    title: "Techniques d'analyse",
    description:
      "Développements limités, équivalents et techniques de calcul.",
  },
  {
    title: "Calcul intégral",
    description:
      "Primitives, intégrales définies et intégration par parties.",
  },
  {
    title: "Suites numériques",
    description:
      "Convergence, récurrence et calcul des limites de suites.",
  },
  {
    title: "Limites et dérivabilité",
    description:
      "Limite d'une fonction, continuité et nombre dérivé.",
  },
  {
    title: "Arithmétique dans Z",
    description:
      "Divisibilité, congruence, PGCD et PPCM.",
  },
  {
    title: "Structure algébriques",
    description:
      "Groupes, anneaux et corps : structures fondamentales.",
  },
];

function CoursCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-white/[0.03]">
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
        MPSI/PCSI
      </p>
      <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#"
          className="inline-flex items-center rounded-sm border border-indigo-600 bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 dark:border-indigo-500 dark:bg-indigo-600 dark:hover:bg-transparent dark:hover:text-indigo-400"
        >
          <svg
            className="me-2 size-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 0 1 0 1.971l-11.54 6.347a1.125 1.125 0 0 1-1.667-.985V5.653Z"
            />
          </svg>
          Voir les videos
        </a>
        <a
          href="#"
          className="inline-flex items-center rounded-sm border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-white/5"
        >
          <svg
            className="me-2 size-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Télécharger PDF
        </a>
      </div>
    </div>
  );
}

export default function Cours() {
  return (
    <div>
      <PageMeta
        title="Cours | CPGE Horizon"
        description="Cours page for CPGE Horizon"
      />
      <PageBreadcrumb pageTitle="Cours" />
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coursCards.map((card) => (
            <CoursCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

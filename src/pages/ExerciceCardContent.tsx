import { Link, useParams } from "react-router";
import PageMeta from "../components/common/PageMeta";
import { exerciceCards } from "../data/exercices";
import { detailCards } from "../data/detailCards";

export default function ExerciceCardContent() {
  const { id, cardId } = useParams<{ id: string; cardId: string }>();
  const exercice = exerciceCards.find((ex) => ex.id === id);
  const card = detailCards.find((c) => c.id === cardId);

  if (!exercice || !card) {
    return (
      <div>
        <PageMeta title="Contenu non trouvé | CPGE Horizon" />
        <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Contenu non trouvé
            </h2>
            <Link
              to="/exercices"
              className="mt-4 inline-block text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
            >
              ← Retour aux exercices
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageMeta
        title={`${card.title} | CPGE Horizon`}
        description={card.description}
      />
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">
          {card.title}
        </h2>
        <nav>
          <ol className="flex items-center gap-1.5">
            <li>
              <Link
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="text-sm text-gray-500 dark:text-gray-400">/</li>
            <li>
              <Link
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                to="/exercices"
              >
                Exercices
              </Link>
            </li>
            <li className="text-sm text-gray-500 dark:text-gray-400">/</li>
            <li>
              <Link
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                to={`/exercices/${id}`}
              >
                {exercice.title}
              </Link>
            </li>
            <li className="text-sm text-gray-500 dark:text-gray-400">/</li>
            <li className="text-sm text-gray-800 dark:text-white/90">
              {card.title}
            </li>
          </ol>
        </nav>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="p-5 xl:p-0">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <svg
                className="size-7 text-indigo-600 dark:text-indigo-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                MPSI/PCSI
              </p>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {card.title}
              </h1>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                {card.description}
              </p>
            </div>

            {card.content && (
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Contenu
                </h3>
                <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                  {card.content}
                </p>
              </div>
            )}

            <div className="pt-4">
              <Link
                to={`/exercices/${id}`}
                className="inline-flex items-center rounded-sm border border-indigo-600 px-8 py-3 text-sm font-medium text-indigo-600 transition hover:bg-indigo-600 hover:text-white dark:border-indigo-500 dark:text-indigo-400 dark:hover:bg-indigo-600 dark:hover:text-white"
              >
                ← Retour à {exercice.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

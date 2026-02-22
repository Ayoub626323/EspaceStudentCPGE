import { Link, useParams } from "react-router";
import PageMeta from "../components/common/PageMeta";
import { exerciceCards } from "../data/exercices";
import { detailCards } from "../data/detailCards";

export default function ExerciceDetail() {
  const { id } = useParams<{ id: string }>();
  const exercice = exerciceCards.find((ex) => ex.id === id);

  if (!exercice) {
    return (
      <div>
        <PageMeta title="Exercice non trouvé | CPGE Horizon" />
        <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Exercice non trouvé
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
        title={`${exercice.title} | CPGE Horizon`}
        description={exercice.description}
      />
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">
          Détails de l'exercice
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
            <li className="text-sm text-gray-800 dark:text-white/90">
              {exercice.title}
            </li>
          </ol>
        </nav>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="p-5 xl:p-0">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <img
              src={exercice.image}
              alt=""
              className="size-24 shrink-0 rounded-full object-cover md:size-32"
            />
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                MPSI/PCSI
              </p>
              <h1 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                {exercice.title}
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Par {exercice.author}
              </p>

              <dl className="mt-4 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <dt className="text-gray-700 dark:text-gray-400">
                    <span className="sr-only">Publié le</span>
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
                  <dd className="text-sm text-gray-700 dark:text-gray-400">
                    {exercice.date}
                  </dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="text-gray-700 dark:text-gray-400">
                    <span className="sr-only">Temps de lecture</span>
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
                  <dd className="text-sm text-gray-700 dark:text-gray-400">
                    {exercice.readingTime}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              {exercice.description}
            </p>

            {exercice.content && (
              <>
                <h3 className="mt-8 mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                  Contenu détaillé
                </h3>
                <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                  {exercice.content}
                </p>
              </>
            )}

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {detailCards.map((card) => (
                <div
                  key={card.id}
                  className="block rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-700 dark:bg-white/[0.03]"
                >
                  <svg
                    className="mb-3 size-7 text-gray-600 dark:text-gray-400"
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
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    {card.description}
                  </p>
                  <Link
                    to={`/exercices/${id}/card/${card.id}`}
                    className="inline-flex items-center rounded-sm border border-indigo-600 bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 dark:border-indigo-500 dark:bg-indigo-600 dark:hover:bg-transparent dark:hover:text-indigo-400"
                  >
                    Accéder
                    <svg
                      className="ms-2 size-4"
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
                        d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                to="/exercices"
                className="inline-block rounded-sm border border-indigo-600 px-8 py-3 text-sm font-medium text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
              >
                ← Retour aux exercices
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import { exerciceCards } from "../data/exercices";

function ExerciceCard({
  id,
  title,
  author,
  description,
  date,
  readingTime,
  image,
}: {
  id: string;
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

      <Link
        to={`/exercices/${id}`}
        className="mt-6 inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600"
      >
        Consulter
      </Link>
    </div>
  );
}

export default function Exercices() {
  return (
    <div>
      <PageMeta
        title="Exercices | CPGE Horizon"
        description="Exercices page for CPGE Horizon"
      />
      <PageBreadcrumb pageTitle="Exercices" />
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exerciceCards.map((card) => (
            <ExerciceCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

export default function Abonement() {
  return (
    <div>
      <PageMeta
        title="Abonement | CPGE Horizon"
        description="Abonement page for CPGE Horizon"
      />
      <PageBreadcrumb pageTitle="Abonement" />
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="block shrink-0 max-w-2xl rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-700 dark:bg-white/[0.03]">
          <h5 className="mb-3 text-2xl font-semibold tracking-tight leading-8 text-gray-900 dark:text-white">
            Mon pak actuel
          </h5>

          <div className="mb-4 space-y-2">
            <div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Nom du pak :
              </span>
              <span className="ml-2 text-gray-900 dark:text-white">
                Pak Premium
              </span>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Status :
              </span>
              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                Actif
              </span>
            </div>
          </div>

          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Accédez à tous les cours, exercices et ressources de la plateforme
            CPGE Horizon avec votre abonnement actuel.
          </p>

          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-transparent bg-indigo-600 px-4 py-2.5 text-sm font-medium leading-5 text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 dark:bg-indigo-600 dark:hover:bg-indigo-700"
          >
            Voir detail pak
            <svg
              className="ms-1.5 size-4"
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
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="/images/undraw_pricing-page.svg"
              alt="Pricing illustration"
              className="max-h-[400px] w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

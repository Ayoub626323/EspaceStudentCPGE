import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

function OrientationCard({
  title,
  description,
  image,
  alt,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="flex w-72 min-w-0 flex-col overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow-sm dark:border-gray-700 dark:bg-gray-900/50 sm:w-80">
      <a href="#" className="block h-40 shrink-0 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={image}
          alt={alt}
        />
      </a>
      <div className="flex flex-1 flex-col p-6 text-center">
        <span className="inline-flex w-fit items-center self-center rounded border border-indigo-200 bg-indigo-50 px-1.5 py-0.5 text-xs font-medium text-indigo-600 dark:border-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
          <svg
            className="me-1 size-3"
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
              strokeWidth="2"
              d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
            />
          </svg>
          Trending
        </span>
        <a href="#">
          <h5 className="mb-2 mt-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-4 line-clamp-3 flex-1 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex w-fit items-center self-center rounded-lg border border-transparent bg-indigo-600 px-4 py-2.5 text-sm font-medium leading-5 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500"
        >
          Découvrir
          <svg
            className="-me-0.5 ms-1.5 size-4 rtl:rotate-180"
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
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function TipeConseil() {
  return (
    <div>
      <PageMeta
        title="Tipe & conseil | CPGE Horizon"
        description="Tipe & conseil page for CPGE Horizon"
      />
      <PageBreadcrumb pageTitle="Tipe & conseil" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-5xl text-center">
          <h3 className="mb-2 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Orientation CNC & CF
          </h3>
          <p className="mb-8 text-base font-medium text-gray-600 dark:text-gray-300 sm:text-lg">
            Orientation-Affectation-CNC
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <OrientationCard
              title="Affectation ENSIAS"
              description="L'École Nationale Supérieure d'Informatique et d'Analyse des Systèmes forme des ingénieurs d'État en informatique et systèmes d'information."
              image="https://ecolesuperieure.ma/wp-content/uploads/2016/05/ensias-823x420.jpg"
              alt="ENSIAS"
            />
            <OrientationCard
              title="Affectation ENSEM"
              description="L'École Nationale Supérieure d'Électricité et de Mécanique forme des ingénieurs d'État en génie électrique et mécanique."
              image="https://yt3.googleusercontent.com/hiW4gwby-ax0RcEPVnGOQ2fn4SV5dd-87daFhrEY9vTy0qd29RtuXUZ6CSi5iV46l6c9CGWD=s900-c-k-c0x00ffffff-no-rj"
              alt="ENSEM"
            />
            <OrientationCard
              title="Affectation EHTP"
              description="L'École Hassania des Travaux Publics forme des ingénieurs d'État spécialisés en génie civil, bâtiment et travaux publics."
              image="https://ecolesuperieure.ma/wp-content/uploads/2016/12/ehtp-823x420.jpg"
              alt="EHTP"
            />
            <OrientationCard
              title="Affectation INPT"
              description="L'Institut National des Postes et Télécommunications forme des ingénieurs d'État en télécommunications et technologies de l'information."
              image="https://ecolesuperieure.ma/wp-content/uploads/2016/12/ehtp-823x420.jpg"
              alt="INPT"
            />
            <OrientationCard
              title="Affectation EMI"
              description="L'École Mohammadia d'Ingénieurs forme des ingénieurs d'État polyvalents en génie industriel, électrique et mécanique."
              image="https://upload.wikimedia.org/wikipedia/fr/thumb/0/05/EMI.PNG/250px-EMI.PNG"
              alt="EMI"
            />
            <OrientationCard
              title="Affectation INSEA"
              description="L'Institut National de Statistique et d'Économie Appliquée forme des ingénieurs statisticiens-économistes et data scientists."
              image="https://upload.wikimedia.org/wikipedia/commons/0/05/INSEA_logo.png"
              alt="INSEA"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

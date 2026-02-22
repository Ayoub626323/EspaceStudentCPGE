import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

export default function Support() {
  return (
    <div>
      <PageMeta
        title="Support | CPGE Horizon"
        description="Page de support pour CPGE Horizon"
      />
      <PageBreadcrumb pageTitle="Support" />
      <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contactez-nous
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Un problème technique ? Des retours sur une fonctionnalité bêta ? Des détails sur notre offre ? N'hésitez pas à nous contacter.
          </p>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <form action="#" className="flex-1 space-y-8 max-w-screen-md" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Votre email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="nom@exemple.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Indiquez-nous comment nous pouvons vous aider"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Votre message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Laissez un commentaire..."
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Envoyer le message
            </button>
          </form>
            <div
              className="flex flex-1 min-w-0 flex-col items-center justify-center p-6 rounded-lg border border-gray-200 bg-gray-50 shadow-theme-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] transition-colors"
            >
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white leading-8 text-center">
                Coordonnées
              </h5>
              <div className="space-y-2 text-gray-600 dark:text-gray-400 text-center">
                <p><a href="tel:0613776147" className="hover:text-brand-500">0613776147</a></p>
                <p><a href="mailto:sabri.fst@uhp.ac.ma" className="hover:text-brand-500">sabri.fst@uhp.ac.ma</a></p>
                <p><a href="tel:+212656512646" className="hover:text-brand-500">+212 656-512646</a></p>
                <p><a href="tel:+212682092732" className="hover:text-brand-500">+212 682-092732</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

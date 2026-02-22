import { useState } from "react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

const TABS = [
  { id: "mp*", label: "Filière MP*" },
  { id: "mpsi", label: "Filière MPSI" },
  { id: "pcsi", label: "Filière PCSI" },
] as const;

export default function VisaCompusFrance() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>("mp*");

  return (
    <div>
      <PageMeta
        title="Visa & compus France | CPGE Horizon"
        description="Visa & compus France page for CPGE Horizon"
      />
      <PageBreadcrumb pageTitle="Visa & compus France" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-4xl">
          <h3 className="mb-6 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Visa & compus France
          </h3>

          <ul className="mb-6 flex flex-wrap border-b border-gray-200 text-center text-sm font-medium text-gray-600 dark:border-gray-700 dark:text-gray-400">
            {TABS.map((tab) => (
              <li key={tab.id} className="me-2">
                <button
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-block rounded-t-lg px-4 py-4 ${
                    activeTab === tab.id
                      ? "bg-gray-100 text-indigo-600 dark:bg-gray-800/50 dark:text-indigo-400"
                      : "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800/50 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            {activeTab === "mp*" && (
              <p>Contenu Filière MP* - À venir.</p>
            )}
            {activeTab === "mpsi" && (
              <p>Contenu Filière MPSI - À venir.</p>
            )}
            {activeTab === "pcsi" && (
              <p>Contenu Filière PCSI - À venir.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

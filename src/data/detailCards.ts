export type DetailCard = {
  id: string;
  title: string;
  description: string;
  content?: string;
};

export const detailCards: DetailCard[] = [
  {
    id: "raisonnement-absurde",
    title: "Exercices d'application du raisonnement par l'absurde",
    description:
      "Pratiquez la méthode de démonstration par l'absurde à travers une série d'exercices corrigés et détaillés.",
    content:
      "Le raisonnement par l'absurde consiste à supposer que la proposition à démontrer est fausse, puis à en déduire une contradiction. Cette méthode est particulièrement utile pour prouver l'unicité ou la non-existence. Dans cette section, vous trouverez des exercices progressifs avec des corrigés détaillés pour maîtriser cette technique fondamentale.",
  },
  {
    id: "demonstration-recurrence",
    title: "Démonstration par récurrence",
    description:
      "Exercices portant sur divers aspects du raisonnement mathématique.",
    content:
      "La démonstration par récurrence est une technique essentielle pour prouver des propriétés sur les entiers naturels. Elle repose sur l'axiomatique de Peano et permet d'établir des formules, des inégalités ou des propriétés de suites. Les exercices de cette section couvrent les récurrences simples, doubles et fortes.",
  },
  {
    id: "demonstration-contraposition",
    title: "Démonstration par contraposition",
    description: "Exercices de logique sous forme de défis amusants.",
    content:
      "Pour prouver une implication P ⇒ Q, la contraposition consiste à démontrer non(Q) ⇒ non(P). Cette méthode est souvent plus naturelle lorsque la négation de la conclusion est plus facile à manipuler. Ces exercices vous entraîneront à identifier quand utiliser cette technique.",
  },
  {
    id: "quantificateurs-negation",
    title: "Quantificateurs et négation",
    description:
      "Comprendre les conditions nécessaires et suffisantes en logique mathématique.",
    content:
      "Les quantificateurs universel (∀) et existentiel (∃) sont au cœur du langage mathématique. Savoir nier correctement une proposition avec quantificateurs est une compétence fondamentale. Cette section aborde également les conditions nécessaires et suffisantes.",
  },
  {
    id: "operations-ensembles",
    title: "Opérations sur les ensembles",
    description:
      "Exercices corrigés sur les tableaux de vérité en logique mathématique.",
    content:
      "Les opérations sur les ensembles (union, intersection, complémentaire, différence) et les lois de De Morgan sont des outils de base. Les tableaux de vérité permettent de vérifier des équivalences logiques. Exercices avec corrigés détaillés.",
  },
  {
    id: "injections-surjections-bijections",
    title: "Injections, surjections, bijections",
    description: "Exercices sur les relations d'équivalence.",
    content:
      "Les applications injectives, surjectives et bijectives sont des notions centrales en mathématiques. Cette section propose des exercices pour caractériser ces propriétés et les utiliser dans des démonstrations.",
  },
  {
    id: "relations-equivalences",
    title: "Relations et équivalences",
    description:
      "Relations d'équivalence, classes d'équivalence et partitions.",
    content:
      "Une relation d'équivalence permet de regrouper les éléments d'un ensemble en classes. Les partitions et l'ensemble quotient sont des concepts fondamentaux en algèbre et en analyse.",
  },
  {
    id: "principe-tiroirs",
    title: "Principe des tiroirs",
    description:
      "Applications du principe des tiroirs de Dirichlet en combinatoire.",
    content:
      "Le principe des tiroirs (ou pigeonhole) affirme que si n+1 objets sont répartis dans n tiroirs, au moins un tiroir contient au moins deux objets. Ce principe simple a des applications surprenantes en combinatoire et en théorie des nombres.",
  },
  {
    id: "analyse-propositions",
    title: "Analyse de propositions",
    description:
      "Étude de la structure logique des énoncés mathématiques.",
    content:
      "Décomposer un énoncé mathématique en ses composantes logiques, identifier les hypothèses et la conclusion, comprendre la structure des théorèmes : ces compétences sont essentielles pour une lecture rigoureuse des mathématiques.",
  },
  {
    id: "cardinalite-denombrement",
    title: "Cardinalité et dénombrement",
    description:
      "Exercices sur le dénombrement des ensembles finis et le principe d'inclusion-exclusion.",
    content:
      "Compter le nombre d'éléments d'un ensemble fini, utiliser le principe d'inclusion-exclusion, et maîtriser les techniques de dénombrement sont des objectifs de cette section.",
  },
  {
    id: "relations-ordre",
    title: "Relations d'ordre",
    description:
      "Ordres partiels, ordres totaux et éléments remarquables dans un ensemble ordonné.",
    content:
      "Les relations d'ordre (partiel ou total) structurent de nombreux ensembles mathématiques. Majorants, minorants, maximum, minimum, borne supérieure : ces notions sont abordées à travers des exercices variés.",
  },
  {
    id: "disjonction-cas",
    title: "Raisonnement par disjonction de cas",
    description:
      "Maîtrisez la méthode de démonstration par exhaustion des cas possibles.",
    content:
      "Lorsqu'une situation se divise naturellement en plusieurs cas disjoints, on peut démontrer une propriété en l'établissant dans chaque cas. Cette technique est très courante, notamment avec les valeurs absolues ou les congruences.",
  },
  {
    id: "implications-equivalences",
    title: "Implications et équivalences",
    description:
      "Exercices sur les implications logiques et les équivalences entre propositions.",
    content:
      "Distinguer implication et équivalence, utiliser les règles de déduction, et enchaîner correctement les raisonnements : cette section renforce les bases du raisonnement logique.",
  },
  {
    id: "predicats-propositions",
    title: "Prédicats et propositions",
    description:
      "Travail sur les prédicats, variables et construction de propositions complexes.",
    content:
      "Un prédicat est une phrase contenant des variables qui devient une proposition lorsqu'on fixe ces variables. Cette section travaille la construction et l'analyse de propositions complexes.",
  },
  {
    id: "combinatoire-elementaire",
    title: "Combinatoire élémentaire",
    description:
      "Arrangements, permutations et combinaisons : exercices fondamentaux.",
    content:
      "Arrangements, permutations, combinaisons : les formules de dénombrement de base sont indispensables en probabilités et en combinatoire. Cette section propose des exercices d'application variés.",
  },
];

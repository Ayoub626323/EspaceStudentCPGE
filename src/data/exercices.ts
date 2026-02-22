export type Exercice = {
  id: string;
  title: string;
  author: string;
  description: string;
  date: string;
  readingTime: string;
  image: string;
  content?: string;
};

export const exerciceCards: Exercice[] = [
  {
    id: "logique-ensembles",
    title: "Logique et ensembles",
    author: "Professeur Ahmed",
    description:
      "Propositions, prédicats, démonstrations et théorie des ensembles : exercices fondamentaux pour la rigueur mathématique.",
    date: "31/06/2025",
    readingTime: "12 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
    content:
      "Cette série d'exercices couvre les notions fondamentales de logique mathématique et de théorie des ensembles. Vous y trouverez des exercices sur les propositions, les quantificateurs, les méthodes de démonstration (directe, par contraposition, par l'absurde), ainsi que les opérations sur les ensembles (union, intersection, complémentaire). Ces exercices sont essentiels pour acquérir la rigueur nécessaire en CPGE.",
  },
  {
    id: "calcul-algebrique",
    title: "Calcul algébrique",
    author: "Professeur Fatima",
    description:
      "Polynômes, équations, factorisation et manipulation d'expressions algébriques pour maîtriser les bases du calcul.",
    date: "28/06/2025",
    readingTime: "15 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
    content:
      "Les exercices de calcul algébrique portent sur la manipulation des polynômes, la résolution d'équations polynomiales, la factorisation et la simplification d'expressions. Ces compétences sont indispensables pour aborder sereinement l'algèbre linéaire et l'analyse en première année de CPGE.",
  },
  {
    id: "nombres-complexes",
    title: "Nombres complexes",
    author: "Professeur Karim",
    description:
      "Forme algébrique, forme polaire, exponentielle complexe et applications géométriques des nombres complexes.",
    date: "25/06/2025",
    readingTime: "10 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
    content:
      "Les nombres complexes sont un outil puissant en mathématiques. Ces exercices vous permettront de maîtriser les différentes écritures (algébrique, polaire, exponentielle), les opérations et les applications géométriques. La résolution d'équations dans C est également abordée.",
  },
  {
    id: "techniques-analyse",
    title: "Techniques d'analyse",
    author: "Professeur Leila",
    description:
      "Développements limités, équivalents, comparaisons et techniques de calcul pour l'analyse en CPGE.",
    date: "22/06/2025",
    readingTime: "18 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
    content:
      "Les techniques d'analyse constituent le cœur des outils de calcul en CPGE. Développements limités, équivalents, comparaison de suites et de séries : ces exercices vous entraîneront aux méthodes essentielles pour l'étude des fonctions et des suites.",
  },
  {
    id: "calcul-integral",
    title: "Calcul intégral",
    author: "Professeur Omar",
    description:
      "Primitives, intégrales définies, intégration par parties et changements de variable pour maîtriser le calcul intégral.",
    date: "20/06/2025",
    readingTime: "14 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
    content:
      "Le calcul intégral est fondamental en analyse. Ces exercices couvrent le calcul de primitives, les intégrales définies, l'intégration par parties, les changements de variable et les intégrales impropres. Une maîtrise solide de ces techniques est requise pour les concours.",
  },
  {
    id: "suites-numeriques",
    title: "Suites numériques",
    author: "Professeur Nadia",
    description:
      "Convergence, récurrence, suites monotones et calcul des limites : exercices sur les suites en analyse.",
    date: "18/06/2025",
    readingTime: "20 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
    content:
      "L'étude des suites numériques est une introduction naturelle à l'analyse. Ces exercices abordent la convergence, les suites récurrentes, les suites monotones et le calcul des limites. Les théorèmes de comparaison et d'encadrement sont également travaillés.",
  },
  {
    id: "limites-derivabilite",
    title: "Limites et dérivabilité",
    author: "Professeur Youssef",
    description:
      "Limite d'une fonction, continuité, nombre dérivé et dérivabilité : fondements de l'analyse des fonctions.",
    date: "15/06/2025",
    readingTime: "16 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
    content:
      "Limites et dérivabilité sont les concepts clés de l'analyse des fonctions réelles. Ces exercices vous permettront de maîtriser le calcul des limites, la continuité, le nombre dérivé et l'étude de la dérivabilité en un point.",
  },
  {
    id: "derivabilite-convexite",
    title: "Dérivabilité et convexité",
    author: "Professeur Samira",
    description:
      "Dérivées successives, inégalités de convexité et étude des fonctions convexes en analyse.",
    date: "12/06/2025",
    readingTime: "13 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
    content:
      "La convexité est une propriété géométrique importante des fonctions. Ces exercices portent sur les dérivées successives, la caractérisation des fonctions convexes par la dérivée seconde, et les inégalités de convexité (Jensen, etc.).",
  },
  {
    id: "arithmetique-z",
    title: "Arithmétique dans Z",
    author: "Professeur Hassan",
    description:
      "Divisibilité, congruence, PGCD, PPCM et théorèmes fondamentaux de l'arithmétique des entiers.",
    date: "10/06/2025",
    readingTime: "11 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
    content:
      "L'arithmétique des entiers est une branche fondamentale des mathématiques. Ces exercices couvrent la divisibilité, les congruences, l'algorithme d'Euclide pour le PGCD, le PPCM, et les théorèmes de Bézout et Gauss.",
  },
  {
    id: "structure-algebriques",
    title: "Structure algébriques",
    author: "Professeur Hassan",
    description:
      "Groupes, anneaux et corps : introduction aux structures algébriques fondamentales en algèbre.",
    date: "08/06/2025",
    readingTime: "12 minutes",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160",
    content:
      "Les structures algébriques (groupes, anneaux, corps) constituent le langage moderne de l'algèbre. Ces exercices introduisent les définitions, les propriétés fondamentales et les premiers exemples de ces structures.",
  },
];

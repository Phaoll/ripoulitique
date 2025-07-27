import { Politic } from "@/types/politics.types";

const PoliticsList: Politic[] = [
  {
    id: "NicolasSarkozy",
    gender: "M.",
    firstName: "Nicolas",
    lastName: "Sarkozy",
    birthDate: new Date(1955, 0, 28), // January 28, 1955
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Nicolas_Sarkozy_20220927.jpg",
    shenanigans: [
      {
        id: "NicolasSarkozy-1",
        title: "Affaire Paul Bismuth (ou affaire des écoutes)",
        description:
          "Affaire de corruption, trafic d'influence et violation du secret professionnel",
        date: new Date(2024, 11, 18), // December 18, 2024
        sources: [
          "https://www.courdecassation.fr/decision/67626d77d9347f6c9aef808c?search_api_fulltext=23-83.178&op=Rechercher&date_du=&date_au=&judilibre_juridiction=all&previousdecisionpage=&previousdecisionindex=&nextdecisionpage=0&nextdecisionindex=1",
        ],
        status: "Condamné",
        tags: ["Trafic d'influence"],
      },
      {
        id: "NicolasSarkozy-2",
        title: "Affaire Bygmalion",
        description:
          "Financement illégal de la campagne présidentielle de 2012 avec dépassement du plafond légal",
        date: new Date(2021, 8, 30), // September 30, 2021
        sources: [
          "https://www.lemonde.fr/les-decodeurs/article/2024/02/14/affaire-bygmalion-qui-a-ete-condamne-et-pourquoi_6096636_4355771.html",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "JacquesChirac",
    gender: "M.",
    firstName: "Jacques",
    lastName: "Chirac",
    birthDate: new Date(1932, 10, 29), // November 29, 1932
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/8/82/Jacques_Chirac%2C_Nice_Summit%2C_december_2000.jpg",
    shenanigans: [
      {
        id: "JacquesChirac-1",
        title: "Affaire des emplois fictifs de la mairie de Paris",
        description:
          "Emplois fictifs d'employés du RPR payés par la mairie de Paris",
        date: new Date(2011, 11, 15), // December 15, 2011
        sources: [
          "https://fr.wikipedia.org/wiki/Affaire_des_emplois_fictifs_de_la_mairie_de_Paris",
          "https://www.franceinfo.fr/politique/jacques-chirac/mort-de-jacques-chirac-de-la-plainte-d-un-contribuable-a-une-condamnation-historique-retour-sur-l-affaire-des-emplois-fictifs-a-la-mairie-de-paris_3634585.html",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds", "Fraude"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "ClaudeGuéant",
    gender: "M.",
    firstName: "Claude",
    lastName: "Guéant",
    birthDate: new Date(1945, 0, 17), // January 17, 1945
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Claude_Gu%C3%A9ant_%28derivate_work%29.jpg",
    shenanigans: [
      {
        id: "ClaudeGuéant-1",
        title: "Affaire des primes en liquide",
        description:
          "Détournement de fonds destinés aux frais d'enquête de la police",
        date: new Date(2017, 0, 23), // January 23, 2017
        sources: [
          "https://www.publicsenat.fr/actualites/non-classe/claude-gueant-definitivement-condamne-dans-l-affaire-des-primes-en-liquide-de-l",
          "https://www.agoravox.fr/tribune-libre/article/l-ancien-ministre-francais-de-l-212139",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds"],
      },
      {
        id: "ClaudeGuéant-2",
        title: "Affaire des sondages de l'Élysée",
        description:
          "Favoritisme et détournement de fonds publics pour des sondages",
        date: new Date(2022, 0, 21), // January 21, 2022
        sources: [
          "https://www.france24.com/fr/france/20220121-affaire-des-sondages-de-l-élysée-peines-sévères-pour-claude-guéant-et-patrick-buisson",
          "https://www.francebleu.fr/infos/faits-divers-justice/sondages-de-l-elysee-claude-gueant-condamne-a-8-mois-de-prison-ferme-avec-mandat-de-depot-1642774160",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds"],
      },
      {
        id: "ClaudeGuéant-3",
        title: "Escroquerie de frais de campagne",
        description:
          "Minoration frauduleuse des comptes de campagne des législatives 2012",
        date: new Date(2022, 10, 22), // November 22, 2022
        sources: [
          "https://www.franceinfo.fr/politique/claude-gueant/escroquerie-de-frais-de-campagne-l-ancien-ministre-claude-gueant-condamne-a-six-mois-de-prison-ferme-amenages_5493384.html",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "PatrickBalkany",
    gender: "M.",
    firstName: "Patrick",
    lastName: "Balkany",
    birthDate: new Date(1948, 7, 16), // August 16, 1948
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Resize_800px-Balkany_au_tribunal.jpg",
    shenanigans: [
      {
        id: "PatrickBalkany-1",
        title: "Fraude fiscale",
        description:
          "Non-déclaration d'impôt sur la fortune et revenus sous-évalués",
        date: new Date(2019, 8, 13), // September 13, 2019
        sources: [
          "https://www.franceinfo.fr/politique/affaire/affaire-balkany/ce-qu-il-faut-retenir-de-la-condamnation-de-patrick-et-isabelle-balkany-pour-fraude-fiscale_3615457.html",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
      {
        id: "PatrickBalkany-2",
        title: "Blanchiment de fraude fiscale",
        description:
          "Dissimulation de 13 millions d'euros d'avoirs au fisc entre 2007 et 2014",
        date: new Date(2019, 9, 18), // October 18, 2019
        sources: [
          "https://fr.wikipedia.org/wiki/Affaire_Balkany",
          "https://www.francebleu.fr/infos/faits-divers-justice/affaire-de-blanchiment-et-corruption-balkany-1571393163",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
      {
        id: "PatrickBalkany-3",
        title: "Prise illégale d'intérêts",
        description:
          "Avantages personnels dans le cadre d'un contrat immobilier de Levallois-Perret",
        date: new Date(2023, 0, 9), // January 9, 2023
        sources: [
          "https://www.franceinfo.fr/politique/affaire/affaire-balkany/blanchiment-de-fraude-fiscale-patrick-et-isabelle-balkany-condamnes-en-appel-a-quatre-ans-et-demi-et-trois-ans-et-demi-de-prison_5592030.html",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "IsabelleBalkany",
    gender: "Mme.",
    firstName: "Isabelle",
    lastName: "Balkany",
    birthDate: new Date(1947, 1, 11), // February 11, 1947
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/5/54/Isabelle_Balkany_2010.jpg", // No free picture available
    shenanigans: [
      {
        id: "IsabelleBalkany-1",
        title: "Fraude fiscale",
        description:
          "Non-déclaration d'impôt sur la fortune et revenus sous-évalués",
        date: new Date(2019, 8, 13), // September 13, 2019
        sources: [
          "https://www.franceinfo.fr/politique/affaire/affaire-balkany/ce-qu-il-faut-retenir-de-la-condamnation-de-patrick-et-isabelle-balkany-pour-fraude-fiscale_3615457.html",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
      {
        id: "IsabelleBalkany-2",
        title: "Blanchiment de fraude fiscale",
        description:
          "Dissimulation de 13 millions d'euros d'avoirs au fisc entre 2007 et 2014",
        date: new Date(2019, 9, 18), // October 18, 2019
        sources: [
          "https://fr.wikipedia.org/wiki/Affaire_Balkany",
          "https://www.francebleu.fr/infos/faits-divers-justice/affaire-de-blanchiment-et-corruption-balkany-1571393163",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "FrançoisFillon",
    gender: "M.",
    firstName: "François",
    lastName: "Fillon",
    birthDate: new Date(1954, 2, 4), // March 4, 1954
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Fran%C3%A7ois_Fillon_2010.jpg",
    shenanigans: [
      {
        id: "FrançoisFillon-1",
        title: "Affaire des emplois fictifs de Penelope Fillon",
        description:
          "Emplois fictifs de son épouse comme assistante parlementaire",
        date: new Date(2020, 5, 29), // June 29, 2020
        sources: [
          "https://fr.wikipedia.org/wiki/Affaire_Fillon",
          "https://www.publicsenat.fr/actualites/politique/affaire-des-emplois-fictifs-francois-fillon-condamne-en-appel-a-quatre-ans-de-prison-avec-sursis-et-cinq-ans-dineligibilite",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds", "Fraude"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "JérômeCahuzac",
    gender: "M.",
    firstName: "Jérôme",
    lastName: "Cahuzac",
    birthDate: new Date(1952, 5, 19), // June 19, 1952
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/PR-2012-05-15_IMG_1493_%28crop%29.jpg",
    shenanigans: [
      {
        id: "JérômeCahuzac-1",
        title: "Fraude fiscale et blanchiment",
        description:
          "Compte caché à l'étranger et fraude fiscale pendant 20 ans",
        date: new Date(2016, 11, 8), // December 8, 2016
        sources: [
          "https://fr.wikipedia.org/wiki/Affaire_Cahuzac",
          "https://www.publicsenat.fr/actualites/non-classe/fraude-fiscale-jerome-cahuzac-condamne-a-trois-ans-de-prison-ferme-51151",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
    ],
    tags: ["Parti Socialiste (PS)"],
  },
  {
    id: "AlainJuppé",
    gender: "M.",
    firstName: "Alain",
    lastName: "Juppé",
    birthDate: new Date(1945, 7, 15), // August 15, 1945
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Alain_Jupp%C3%A9_%C3%A0_Qu%C3%A9bec_en_2015_%28cropped_2%29.jpg",
    shenanigans: [
      {
        id: "AlainJuppé-1",
        title: "Affaire des emplois fictifs de la mairie de Paris",
        description:
          "Prise illégale d'intérêts dans le système de financement occulte du RPR",
        date: new Date(2004, 0, 30), // January 30, 2004
        sources: [
          "https://fr.wikipedia.org/wiki/Affaire_des_emplois_fictifs_de_la_mairie_de_Paris",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "BernardTapie",
    gender: "M.",
    firstName: "Bernard",
    lastName: "Tapie",
    birthDate: new Date(1943, 0, 26), // January 26, 1943
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Bernard_Tapie_1994.jpg",
    shenanigans: [
      {
        id: "BernardTapie-1",
        title: "Affaire VA-OM",
        description: "Corruption de joueurs valenciennois pour match truqué",
        date: new Date(1995, 4, 15), // May 15, 1995
        sources: [
          "https://fr.wikipedia.org/wiki/Affaire_VA-OM",
          "https://www.franceinfo.fr/politique/mort-de-bernard-tapie/bernard-tapie-une-vie-emaillee-d-affaires-judiciaires_4793499.html",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
      {
        id: "BernardTapie-2",
        title: "Affaire Testut",
        description: "Abus de biens sociaux aux dépens de la société Testut",
        date: new Date(1996, 6, 1), // July 1, 1996
        sources: [
          "https://www.franceinfo.fr/politique/mort-de-bernard-tapie/bernard-tapie-une-vie-emaillee-d-affaires-judiciaires_4793499.html",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds"],
      },
      {
        id: "BernardTapie-3",
        title: "Affaire du Phocéa",
        description:
          "Fraude fiscale et abus de biens sociaux liés au yacht Le Phocéa",
        date: new Date(1997, 5, 4), // June 4, 1997
        sources: [
          "https://www.franceinfo.fr/politique/mort-de-bernard-tapie/bernard-tapie-une-vie-emaillee-d-affaires-judiciaires_4793499.html",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
    ],
    tags: ["Parti Socialiste (PS)"],
  },
  {
    id: "Jean-MarcAyrault",
    gender: "M.",
    firstName: "Jean-Marc",
    lastName: "Ayrault",
    birthDate: new Date(1950, 0, 25), // January 25, 1950
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Jean-Marc_Ayrault_et_Alain_Kouck_%2813293393834%29_%28cropped%29.jpg",
    shenanigans: [
      {
        id: "Jean-MarcAyrault-1",
        title: "Affaire Omnic",
        description: "Favoritisme dans l'attribution de marchés publics",
        date: new Date(1997, 5, 1), // June 1, 1997
        sources: ["https://fr.wikipedia.org/wiki/Affaire_Omnic"],
        status: "Condamné",
        tags: ["Fraude"],
      },
    ],
    tags: ["Parti Socialiste (PS)"],
  },
  {
    id: "CharlesPasqua",
    gender: "M.",
    firstName: "Charles",
    lastName: "Pasqua",
    birthDate: new Date(1927, 3, 18), // April 18, 1927
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Charles_Pasqua_1999.jpg",
    shenanigans: [
      {
        id: "CharlesPasqua-1",
        title: "Affaire du casino d'Annemasse",
        description: "Financement illégal et trafic d'influence",
        date: new Date(2009, 3, 30), // April 30, 2009
        sources: [
          "https://www.lemonde.fr/politique/article/2009/09/18/pasqua-condamne-a-dix-huit-mois-avec-sursis-dans-l-affaire-du-casino-d-annemasse_1242326_823448.html",
          "https://france3-regions.franceinfo.fr/auvergne-rhone-alpes/haute-savoie/affaire-du-casino-d-annemasse-peines-de-prison-confirmees-en-appel-par-le-tribunal-de-monaco-450485.html",
        ],
        status: "Condamné",
        tags: ["Fraude", "Trafic d'influence"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "HenriEmmanuelli",
    gender: "M.",
    firstName: "Henri",
    lastName: "Emmanuelli",
    birthDate: new Date(1945, 4, 31), // May 31, 1945
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Emmanuelli.jpg",
    shenanigans: [
      {
        id: "HenriEmmanuelli-1",
        title: "Affaire Urba",
        description: "Financement occulte du Parti Socialiste",
        date: new Date(1997, 11, 1), // December 1, 1997
        sources: ["https://fr.wikipedia.org/wiki/Affaire_Urba"],
        status: "Condamné",
        tags: ["Fraude"],
      },
    ],
    tags: ["Parti Socialiste (PS)"],
  },
  {
    id: "MichelGiraud",
    gender: "M.",
    firstName: "Michel",
    lastName: "Giraud",
    birthDate: new Date(1929, 6, 14), // July 14, 1929
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Michel_Giraud_%281995%29.jpg",
    shenanigans: [
      {
        id: "MichelGiraud-1",
        title: "Affaire des marchés publics d'Île-de-France",
        description:
          "Corruption dans l'attribution des marchés des lycées franciliens",
        date: new Date(1995, 11, 1), // December 1, 1995
        sources: [
          "https://fr.wikipedia.org/wiki/Michel_Giraud",
          "https://www.lemonde.fr/societe/article/2005/10/27/michel-giraud-condamne-a-quatre-ans-avec-sursis-dans-l-affaire-des-marches-publics-d-ile-de-france_703884_3224.html",
        ],
        status: "Condamné",
        tags: ["Fraude", "Détournement de fonds"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "MichelRoussin",
    gender: "M.",
    firstName: "Michel",
    lastName: "Roussin",
    birthDate: new Date(1939, 4, 3), // May 3, 1939
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Michel_Roussin.jpg",
    shenanigans: [
      {
        id: "MichelRoussin-1",
        title: "Affaire des marchés publics d'Île-de-France",
        description: "Corruption dans l'attribution des marchés publics",
        date: new Date(1995, 11, 1), // December 1, 1995
        sources: [
          "https://fr.wikipedia.org/wiki/Michel_Roussin",
          "https://www.lemonde.fr/societe/article/2008/02/20/michel-roussin-definitivement-condamne-dans-l-affaire-des-lycees-d-ile-de-france_1013763_3224.html",
        ],
        status: "Condamné",
        tags: ["Fraude", "Détournement de fonds"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "JeanTiberi",
    gender: "M.",
    firstName: "Jean",
    lastName: "Tiberi",
    birthDate: new Date(1935, 0, 5), // January 5, 1935
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Jean_Tiberi_2007_06_06.jpg",
    shenanigans: [
      {
        id: "JeanTiberi-1",
        title: "Affaire des faux électeurs",
        description:
          "Inscription d'électeurs fictifs sur les listes électorales de Paris",
        date: new Date(2013, 2, 1), // March 1, 2013
        sources: [
          "https://www.lemonde.fr/societe/article/2015/03/03/faux-electeurs-la-cour-de-cassation-rejette-le-pourvoi-des-tiberi_4586648_3224.html,",
          "https://www.franceinfo.fr/politique/jacques-chirac/emplois-fictifs-faux-electeurs-frais-de-bouches-les-affaires-de-jacques-chirac-premier-president-condamne-par-la-justice_3633085.html",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "XavièreTiberi",
    gender: "Mme.",
    firstName: "Xavière",
    lastName: "Tiberi",
    birthDate: new Date(1936, 9, 23), // October 23, 1936
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Xaviere_Tiberi_Mutualite_2007_12_07.jpg",
    shenanigans: [
      {
        id: "XavièreTiberi-1",
        title: "Affaire des faux électeurs",
        description:
          "Inscription d'électeurs fictifs sur les listes électorales de Paris",
        date: new Date(2013, 2, 1), // March 1, 2013
        sources: [
          "https://www.lemonde.fr/societe/article/2015/03/03/faux-electeurs-la-cour-de-cassation-rejette-le-pourvoi-des-tiberi_4586648_3224.html",
          "https://www.franceinfo.fr/politique/jacques-chirac/emplois-fictifs-faux-electeurs-frais-de-bouches-les-affaires-de-jacques-chirac-premier-president-condamne-par-la-justice_3633085.html",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "ChristianNucci",
    gender: "M.",
    firstName: "Christian",
    lastName: "Nucci",
    birthDate: new Date(1939, 7, 16), // August 16, 1939
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Christian_Nucci_en_2014.jpg",
    shenanigans: [
      {
        id: "ChristianNucci-1",
        title: "Affaire du Carrefour du développement",
        description:
          "Détournement de 27 millions de francs destinés à l'aide au développement",
        date: new Date(1989, 5, 1), // June 1, 1989
        sources: [
          "https://www.lemonde.fr/archives/article/1995/01/08/le-conseil-d-etat-confirme-la-condamnation-de-m-nucci-par-la-cour-des-comptes_3840124_1819218.html",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds"],
      },
    ],
    tags: ["Parti Socialiste (PS)"],
  },
  {
    id: "FrançoisLéotard",
    gender: "M.",
    firstName: "François",
    lastName: "Léotard",
    birthDate: new Date(1942, 2, 26), // March 26, 1942
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/b/bf/Franc%C3%A9s_Leotard.jpg",
    shenanigans: [
      {
        id: "FrançoisLéotard-1",
        title: "Affaire de financement illégal",
        description: "Financement illégal du Parti Républicain",
        date: new Date(1998, 10, 1), // November 1, 1998
        sources: [
          "https://www.lemonde.fr/police-justice/article/2021/06/05/francois-leotard-definitivement-condamne-dans-l-affaire-karachi_6082985_1653578.html",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "MarcJoulaud",
    gender: "M.",
    firstName: "Marc",
    lastName: "Joulaud",
    birthDate: new Date(1967, 8, 22), // September 22, 1967
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Marc_Joulaud_2014_%28cropped%29.jpg",
    shenanigans: [
      {
        id: "MarcJoulaud-1",
        title: "Affaire des emplois fictifs de Penelope Fillon",
        description:
          "Emploi fictif de Penelope Fillon comme assistante parlementaire",
        date: new Date(2020, 5, 29), // June 29, 2020
        sources: ["https://fr.wikipedia.org/wiki/Marc_Joulaud"],
        status: "Condamné",
        tags: ["Détournement de fonds"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "Jean-JacquesUrvoas",
    gender: "M.",
    firstName: "Jean-Jacques",
    lastName: "Urvoas",
    birthDate: new Date(1959, 8, 19), // September 19, 1959
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Jean-Jacques_Urvoas_%28cropped%29.jpg",
    shenanigans: [
      {
        id: "Jean-JacquesUrvoas-1",
        title: "Violation du secret professionnel",
        description:
          "Transmission à Thierry Solère d'informations confidentielles sur l'enquête judiciaire le visant alors qu'il était garde des Sceaux",
        date: new Date(2019, 8, 30), // September 30, 2019
        sources: [
          "https://www.lemonde.fr/societe/article/2019/09/30/jean-jacques-urvoas-condamne-a-un-mois-de-prison-avec-sursis-pour-violation-du-secret-professionnel_6013665_3224.html",
        ],
        status: "Condamné",
        tags: ["Violation du secret professionnel"],
      },
    ],
    tags: ["Parti Socialiste (PS)"],
  },
  {
    id: "AlainGriset",
    gender: "M.",
    firstName: "Alain",
    lastName: "Griset",
    birthDate: new Date(1953, 4, 30), // May 30, 1953
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Alain_Griset_%28cropped%29.jpg",
    shenanigans: [
      {
        id: "AlainGriset-1",
        title: "Déclaration incomplète de patrimoine",
        description:
          "Déclaration incomplète ou mensongère de sa situation patrimoniale à la HATVP",
        date: new Date(2021, 11, 8), // December 8, 2021
        sources: [
          "https://www.lemonde.fr/societe/article/2023/01/04/quatre-mois-de-prison-avec-sursis-contre-l-ex-ministre-alain-griset-pour-avoir-minore-la-valeur-de-son-patrimoine_6156568_3224.html",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
      {
        id: "AlainGriset-2",
        title: "Abus de confiance",
        description:
          "Placement de 130 000 euros appartenant à la CNAMS du Nord sur son PEA personnel",
        date: new Date(2022, 5, 28), // June 28, 2022
        sources: [
          "https://www.francebleu.fr/infos/faits-divers-justice/alain-griset-condamne-a-un-de-prison-avec-sursis-et-5-000-euros-d-amende-1656420544",
          "https://www.lemonde.fr/societe/article/2023/01/04/quatre-mois-de-prison-avec-sursis-contre-l-ex-ministre-alain-griset-pour-avoir-minore-la-valeur-de-son-patrimoine_6156568_3224.html",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds"],
      },
    ],
    tags: ["Ensemble"],
  },
  {
    id: "MichèleAlliot-Marie",
    gender: "Mme.",
    firstName: "Michèle",
    lastName: "Alliot-Marie",
    birthDate: new Date(1946, 8, 10), // September 10, 1946
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Mich%C3%A8le_Alliot-Marie%2C_French_Minister_of_Foreign_and_European_Affairs_%285277700729%29_%28cropped%29.jpg",
    shenanigans: [
      {
        id: "MichèleAlliot-Marie-1",
        title: "Prise illégale d'intérêts",
        description:
          "Vote de subventions municipales bénéficiant indirectement à une association présidée par son père",
        date: new Date(2024, 8, 6), // September 6, 2024
        sources: [
          "https://www.franceinfo.fr/faits-divers/justice-proces/l-ancienne-ministre-michele-alliot-marie-condamnee-a-six-mois-de-prison-avec-sursis-pour-prise-illegale-d-interets_6766645.html",
          "https://www.francebleu.fr/infos/faits-divers-justice/michele-alliot-marie-condamnee-a-six-mois-de-prison-avec-sursis-pour-prise-illegale-d-interets-8172538",
          "https://www.lemonde.fr/politique/article/2024/09/06/l-ex-ministre-michele-alliot-marie-condamnee-a-six-mois-de-prison-avec-sursis-pour-prise-illegale-d-interets_6305678_823448.html",
        ],
        status: "Condamné",
        tags: ["Prise illégale d'intérêts"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "AlainCarignon",
    gender: "M.",
    firstName: "Alain",
    lastName: "Carignon",
    birthDate: new Date(1949, 1, 23), // February 23, 1949
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Alain_Carignon.jpg",
    shenanigans: [
      {
        id: "AlainCarignon-1",
        title: "Affaire Dauphiné News",
        description:
          "Corruption et abus de biens sociaux dans le cadre du financement de journaux de propagande électorale",
        date: new Date(1996, 6, 9), // July 9, 1996
        sources: ["https://fr.wikipedia.org/wiki/Affaire_Dauphin%C3%A9_News"],
        status: "Condamné",
        tags: ["Corruption", "Détournement de fonds"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "JacquesMédecin",
    gender: "M.",
    firstName: "Jacques",
    lastName: "Médecin",
    birthDate: new Date(1928, 4, 5), // May 5, 1928
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Jacques_M%C3%A9decin_portrait_1976_Terra_Amata_museum.png",
    shenanigans: [
      {
        id: "JacquesMédecin-1",
        title: "Corruption et détournement de fonds",
        description:
          "Condamné pour détournement de fonds dans le scandale de l'Opéra de Nice",
        date: new Date(1995, 4, 16), // May 16, 1995
        sources: [
          "https://fr.wikipedia.org/wiki/Jacques_M%C3%A9decin#:~:text=En%201995%2D1996%2C%20il%20est,il%20meurt%20en%20novembre%201998.",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds"],
      },
      {
        id: "JacquesMédecin-2",
        title: "Corruption dans l'affaire SEREL",
        description:
          "Corruption et abus de biens sociaux, reçu près de 4 millions de francs de pots-de-vin",
        date: new Date(1995, 7, 1), // August 1, 1995
        sources: [
          "https://fr.wikipedia.org/wiki/Jacques_M%C3%A9decin#:~:text=En%201995%2D1996%2C%20il%20est,il%20meurt%20en%20novembre%201998.",
          "https://www.lemonde.fr/archives/article/1995/08/05/jacques-medecin-est-condamne-a-trois-ans-et-demi-de-prison-ferme-dans-l-affaire-de-la-serel_4416976_1819218.html",
        ],
        status: "Condamné",
        tags: ["Corruption"],
      },
      {
        id: "JacquesMédecin-3",
        title: "Fraude fiscale",
        description: "Condamné par défaut pour fraude fiscale",
        date: new Date(1998, 2, 31), // March 31, 1998
        sources: [
          "https://fr.wikipedia.org/wiki/Jacques_M%C3%A9decin#:~:text=En%201995%2D1996%2C%20il%20est,il%20meurt%20en%20novembre%201998.",
        ],
        status: "Condamné",
        tags: ["Fraude"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "SergeDassault",
    gender: "M.",
    firstName: "Serge",
    lastName: "Dassault",
    birthDate: new Date(1925, 3, 4), // April 4, 1925
    profilePicture:
      "https://fr.wikipedia.org/wiki/Serge_Dassault#/media/Fichier:Serge_Dassault.jpg",
    shenanigans: [
      {
        id: "SergeDassault-1",
        title: "Affaire Agusta",
        description:
          "Corruption dans le cadre de marchés militaires en Belgique",
        date: new Date(1998, 11, 1), // December 1, 1998
        sources: ["https://fr.wikipedia.org/wiki/Affaire_Agusta-Dassault"],
        status: "Condamné",
        tags: ["Corruption"],
      },
      {
        id: "SergeDassault-2",
        title: "Blanchiment de fraude fiscale",
        description:
          "Dissimulation au fisc de comptes à l'étranger contenant des dizaines de millions d'euros",
        date: new Date(2017, 1, 2), // February 2, 2017
        sources: [
          "https://www.lemonde.fr/police-justice/article/2017/02/02/comptes-caches-serge-dassault-condamne-a-5-ans-d-ineligibilite-et-2-millions-d-euros-d-amende_5073490_1653578.html",
          "https://www.publicsenat.fr/actualites/non-classe/dassault-condamne-a-5-ans-d-ineligibilite-et-2-millions-d-euros-d-amende-54125",
        ],
        status: "Condamné",
        tags: ["Fraude", "Blanchiment d'argent"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "Jean-PierreBechter",
    gender: "M.",
    firstName: "Jean-Pierre",
    lastName: "Bechter",
    birthDate: new Date(1952, 10, 17), // November 17, 1952
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Jean-Pierre_Bechter_-_Villab%C3%A9_-_2018-10-12_-_IMG_9381_%28cropped%29.jpg",
    shenanigans: [
      {
        id: "Jean-PierreBechter-1",
        title: "Achat de votes à Corbeil-Essonnes",
        description:
          "Système organisé d'achat de votes et financement illégal de campagne électorale",
        date: new Date(2020, 11, 1), // December 1, 2020
        sources: [
          "https://france3-regions.franceinfo.fr/paris-ile-de-france/essonne/jean-pierre-bechter-ancien-maire-corbeil-essonnes-condamne-2-ans-prison-ferme-1906770.html",
          "https://fr.wikipedia.org/wiki/Jean-Pierre_Bechter",
        ],
        status: "Condamné",
        tags: ["Fraude", "Corruption électorale"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "MichelMouillot",
    gender: "M.",
    firstName: "Michel",
    lastName: "Mouillot",
    birthDate: new Date(1936, 7, 12), // August 12, 1936
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Michel_Mouillot.jpg/220px-Michel_Mouillot.jpg",
    shenanigans: [
      {
        id: "MichelMouillot-1",
        title: "Pots-de-vin des casinos",
        description:
          "Condamné pour avoir réclamé des pots-de-vin à des casinos",
        date: new Date(2005, 1, 1), // February 1, 2005
        sources: [
          "https://fr.wikipedia.org/wiki/Michel_Mouillot#:~:text=Michel%20Mouillot%20est%20condamn%C3%A9%20le,faux%2C%20et%20emplois%20fictifs%20%C2%BB.",
          "https://www.lemonde.fr/archives/article/2005/02/04/six-ans-de-prison-ferme-pour-l-ancien-maire-de-cannes-michel-mouillot_396807_1819218.html",
        ],
        status: "Condamné",
        tags: ["Corruption"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "LéonBertrand",
    gender: "M.",
    firstName: "Léon",
    lastName: "Bertrand",
    birthDate: new Date(1951, 5, 11), // June 11, 1951
    profilePicture: "https://Tata",
    shenanigans: [
      {
        id: "LéonBertrand-1",
        title: "Complicité d'abus de biens sociaux",
        description: "Condamné pour complicité d'abus de biens sociaux",
        date: new Date(2017, 2, 1), // March 1, 2017
        sources: [
          "https://fr.wikipedia.org/wiki/L%C3%A9on_Bertrand_(homme_politique)",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "Jean-LucMélenchon",
    gender: "M.",
    firstName: "Jean-Luc",
    lastName: "Mélenchon",
    birthDate: new Date(1951, 7, 19), // August 19, 1951
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Jean-Luc_MELENCHON_2016_2_%28cropped%29.jpg",
    shenanigans: [
      {
        id: "Jean-LucMélenchon-1",
        title: "Rébellion et provocation",
        description:
          "Condamné pour rébellion et provocation lors de la perquisition du siège de la France Insoumise",
        date: new Date(2019, 11, 9), // December 9, 2019
        sources: [
          "https://www.lemonde.fr/police-justice/article/2019/12/09/perquisition-houleuse-a-lfi-jean-luc-melenchon-et-ses-proches-fixes-sur-leur-sort-lundi_6022145_1653578.html",
        ],
        status: "Condamné",
        tags: ["Rébellion"],
      },
    ],
    tags: ["La France Insoumise (LFI)"],
  },
  {
    id: "PaulGiacobbi",
    gender: "M.",
    firstName: "Paul",
    lastName: "Giacobbi",
    birthDate: new Date(1957, 5, 4), // June 4, 1957
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Paul_Giacobbi.jpg/220px-Paul_Giacobbi.jpg",
    shenanigans: [
      {
        id: "PaulGiacobbi-1",
        title: "Affaire des gîtes ruraux de Haute-Corse",
        description:
          "Condamné pour détournement de fonds publics en Haute-Corse",
        date: new Date(2017, 11, 1), // December 1, 2017
        sources: [
          "https://fr.wikipedia.org/wiki/Affaire_des_g%C3%AEtes_ruraux_de_Haute-Corse#:~:text=3.2%20Liens%20externes-,Condamnations,et%20cinq%20ans%20d'in%C3%A9ligibilit%C3%A9.",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds"],
      },
    ],
    tags: ["Parti Radical de Gauche (PRG)"],
  },
  {
    id: "Jean-ClaudeGaudin",
    gender: "M.",
    firstName: "Jean-Claude",
    lastName: "Gaudin",
    birthDate: new Date(1939, 9, 8), // October 8, 1939
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Political_Assembly%2C_Marseille_%286869078283%29_%28cropped%29.jpg",
    shenanigans: [
      {
        id: "Jean-ClaudeGaudin-1",
        title: "Détournement de fonds publics",
        description: "Condamné pour détournement de fonds publics",
        date: new Date(2023, 1, 1), // February 1, 2023 (approximate)
        sources: [
          "https://www.lemonde.fr/politique/article/2022/03/22/jean-claude-gaudin-condamne-a-six-mois-de-prison-avec-sursis-dans-l-affaire-des-heures-supplementaires-indues-des-agents-municipaux-de-marseille_6118666_823448.html",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "MaryseJoissains-Masini",
    gender: "Mme.",
    firstName: "Maryse",
    lastName: "Joissains-Masini",
    birthDate: new Date(1942, 7, 15), // August 15, 1942
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Maryse_Joissains_-_Tour_de_France_Aix-en-Provence.jpg",
    shenanigans: [
      {
        id: "MaryseJoissains-Masini-1",
        title: "Prise illégale d'intérêts et détournement de fonds",
        description:
          "Condamnée pour prise illégale d'intérêts et détournement de fonds publics",
        date: new Date(2023, 4, 1), // May 1, 2023 (approximate)
        sources: [
          "https://fr.wikipedia.org/wiki/Maryse_Joissains-Masini",
          "https://www.lemonde.fr/politique/article/2021/09/02/la-maire-d-aix-en-provence-maryse-joissains-demissionne-apres-une-condamnation-pour-prise-illegale-d-interets_6093128_823448.html",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds", "Prise illégale d'intérêts"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "GeorgesTron",
    gender: "M.",
    firstName: "Georges",
    lastName: "Tron",
    birthDate: new Date(1957, 7, 1), // August 1, 1957
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/0/00/GTPortraitsCab.JPG",
    shenanigans: [
      {
        id: "GeorgesTron-1",
        title: "Viols et agressions sexuelles",
        description:
          "Condamné pour viols et agressions sexuelles sur deux anciennes employées municipales",
        date: new Date(2021, 1, 17), // February 17, 2021
        sources: [
          "https://www.lemonde.fr/societe/article/2022/04/06/georges-tron-definitivement-condamne-pour-viol-a-ete-libere-de-prison-sous-bracelet-electronique_6120870_3224.html",
        ],
        status: "Condamné",
        tags: ["Agressions sexuelles"],
      },
    ],
    tags: ["Les Républicains (LR)"],
  },
  {
    id: "SiraSylla",
    gender: "Mme.",
    firstName: "Sira",
    lastName: "Sylla",
    birthDate: new Date(1980, 0, 15), // January 15, 1980 (estimated)
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Sira_Sylla.jpg",
    shenanigans: [
      {
        id: "SiraSylla-1",
        title: "Harcèlement moral et non-paiement d'heures supplémentaires",
        description:
          "Condamnée pour harcèlement moral, non-paiement d'heures supplémentaires et manquement à l'obligation de sécurité",
        date: new Date(2022, 8, 6), // September 6, 2022
        sources: [
          "https://fr.wikipedia.org/wiki/Sira_Sylla#:~:text=Le%206%20septembre%202022%20%2C%20Sira,2021%20pour%20cause%20de%20d%C3%A9pression.",
          "https://www.lemonde.fr/politique/article/2022/09/06/sira-sylla-ex-deputee-macroniste-condamnee-pour-harcelement-moral_6140464_823448.html",
        ],
        status: "Condamné",
        tags: ["Harcèlement"],
      },
    ],
    tags: ["Ensemble"],
  },
  {
    id: "FrançoisPupponi",
    gender: "M.",
    firstName: "François",
    lastName: "Pupponi",
    birthDate: new Date(1958, 7, 5), // August 5, 1958
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Fran%C3%A7ois_Pupponi_%28cropped%29.jpg",
    shenanigans: [
      {
        id: "FrançoisPupponi-1",
        title: "Abus de biens sociaux, faux et usage de faux",
        description:
          "Condamné pour abus de biens sociaux, faux et usage de faux",
        date: new Date(2022, 0, 1), // January 1, 2022
        sources: [
          "https://www.lemonde.fr/politique/article/2022/01/06/le-depute-francois-pupponi-condamne-a-5-000-euros-d-amende-pour-des-depenses-abusives_6108421_823448.html",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds"],
      },
    ],
    tags: ["MoDem"],
  },
  {
    id: "JérômePeyrat",
    gender: "M.",
    firstName: "Jérôme",
    lastName: "Peyrat",
    birthDate: new Date(1970, 0, 1), // January 1, 1970 (estimated)
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/J%C3%A9r%C3%B4me_Peyrat_%28cropped%29.jpg",
    shenanigans: [
      {
        id: "JérômePeyrat-1",
        title: "Violences envers son ex-compagne",
        description: "Condamné pour violences envers son ex-compagne",
        date: new Date(2020, 8, 1), // September 1, 2020
        sources: [
          "https://fr.wikipedia.org/wiki/J%C3%A9r%C3%B4me_Peyrat",
          "https://www.lemonde.fr/politique/article/2022/05/18/jerome-peyrat-annonce-le-retrait-de-sa-candidature-en-dordogne-apres-une-polemique-autour-de-sa-condamnation-pour-violences-conjugales_6126687_823448.html",
        ],
        status: "Condamné",
        tags: ["Violences"],
      },
    ],
    tags: ["Ensemble"],
  },
  {
    id: "CatherineMégret",
    gender: "Mme.",
    firstName: "Catherine",
    lastName: "Mégret",
    birthDate: new Date(1958, 4, 16), // May 16, 1958
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Catherine_M%C3%A9gret.jpg",
    shenanigans: [
      {
        id: "CatherineMégret-1",
        title: "Détournement de fonds publics",
        description: "Condamnée pour détournement de fonds publics",
        date: new Date(2023, 0, 1), // January 1, 2023 (approximate)
        sources: [
          "https://fr.wikipedia.org/wiki/Catherine_M%C3%A9gret#:~:text=Elle%20a%20n%C3%A9anmoins%20%C3%A9t%C3%A9%20condamn%C3%A9e,mois%20de%20prison%20avec%20sursis.",
          // "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Personnalit%C3%A9_politique_condamn%C3%A9e_pour_d%C3%A9tournement_de_fonds",
        ],
        status: "Condamné",
        tags: ["Détournement de fonds"],
      },
    ],
    tags: ["Front National (FN)"],
  },
];

export default PoliticsList;

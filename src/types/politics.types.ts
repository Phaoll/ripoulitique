export type SchenaniganTags =
  | "Fraude"
  | "Meurtre"
  | "Détournement de fonds"
  | "Trafic d'influence"
  | "Harcèlement"
  | "Agressions sexuelles"
  | "Prise illégale d'intérêts"
  | "Rébellion"
  | "Corruption"
  | "Corruption électorale"
  | "Blanchiment d'argent"
  | "Violation du secret professionnel"
  | "Violences";

export type Schenanigan = {
  id: string;
  title: string;
  description?: string;
  date: Date;
  sources: string[];
  status: "Condamné" | "En examen";
  tags?: SchenaniganTags[];
};

export type PoliticTags =
  | "Les Républicains (LR)"
  | "Parti Socialiste (PS)"
  | "Ensemble"
  | "Front National (FN)"
  | "La France Insoumise (LFI)"
  | "MoDem"
  | "Parti Radical de Gauche (PRG)";

export type Politic = {
  id: string;
  gender: "M." | "Mme.";
  firstName: string;
  lastName: string;
  birthDate: Date;
  profilePicture: string; // URL to public picture
  shenanigans: Schenanigan[];
  tags?: PoliticTags[];
};

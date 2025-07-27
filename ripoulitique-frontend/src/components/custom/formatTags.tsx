import { PoliticTags } from "@/types/politics.types";

export const getPoliticTagDisplay = (tag: PoliticTags) => {
  switch (tag) {
    case "Les Républicains (LR)":
      return (
        <div className="text-white text-sm bg-blue-700 px-2 rounded-xl">
          🇷 Les Républicains (LR)
        </div>
      );
    case "Parti Socialiste (PS)":
      return (
        <div className="text-white text-sm bg-pink-600 px-2 rounded-xl">
          🌹 Parti Socialiste (PS)
        </div>
      );
    case "Ensemble":
      return (
        <div className="text-white text-sm bg-black px-2 rounded-xl">
          🇪 Ensemble
        </div>
      );
    case "Front National (FN)":
      return (
        <div className="text-white text-sm bg-blue-900 px-2 rounded-xl">
          🔥 Front National (FN)
        </div>
      );
    case "La France Insoumise (LFI)":
      return (
        <div className="text-white text-sm bg-gradient-to-r from-orange-700 to-purple-700 px-2 rounded-xl">
          φ La France Insoumise (LFI)
        </div>
      );
    case "MoDem":
      return (
        <div className="text-white text-sm bg-orange-400 px-2 rounded-xl">
          🇲 MoDem
        </div>
      );
    case "Parti Radical de Gauche (PRG)":
      return (
        <div className="text-white text-sm bg-gradient-to-r from-blue-400 to-yellow-400 px-2 rounded-xl">
          🇷 Parti Radical de Gauche (PRG)
        </div>
      );
    default:
      return <span className="px-2 py-1 bg-gray-200 rounded">{tag}</span>;
  }
};

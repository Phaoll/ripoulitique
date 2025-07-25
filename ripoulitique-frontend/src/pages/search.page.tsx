import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PoliticsList from "@/data/politicsList";
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPolitics = PoliticsList.filter((politic) => {
    const searchLower = searchTerm.toLowerCase();
    const fullName = `${politic.firstName} ${politic.lastName}`.toLowerCase();

    const tagsMatch =
      politic.tags &&
      politic.tags.some((tag) => tag.toLowerCase().includes(searchLower));

    const shenanigansTagsMatch =
      politic.shenanigans &&
      politic.shenanigans.some(
        (shenanigan) =>
          shenanigan.tags &&
          shenanigan.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );

    return (
      fullName.includes(searchLower) ||
      politic.firstName.toLowerCase().includes(searchLower) ||
      politic.lastName.toLowerCase().includes(searchLower) ||
      tagsMatch ||
      shenanigansTagsMatch
    );
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Recherche</h1>
      <p className="text-gray-600 mb-8">
        Trouvez les bêtises de votre personnalité politique préférée.
      </p>

      <div className="mb-6 max-w-md">
        <input
          type="text"
          placeholder="Rechercher par nom, parti, type de farce..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <p className="text-sm text-gray-600 mb-4">
        {filteredPolitics.length} polisson
        {filteredPolitics.length !== 1 ? "s" : ""} et polissone
        {filteredPolitics.length !== 1 ? "s" : ""} trouvé
        {filteredPolitics.length !== 1 ? "s" : ""}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredPolitics.map((politic) => (
          <Card
            key={politic.id}
            className="w-full shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <CardHeader>
              <div className="flex flex-row justify-between">
                <CardTitle className="text-lg justify-start">{`${politic.gender} ${politic.firstName} ${politic.lastName}`}</CardTitle>
                <Avatar className="justify-end overflow-hidden">
                  <AvatarImage
                    className="overflow-hidden"
                    src={politic.profilePicture}
                  />
                  <AvatarFallback>{`${politic.firstName[0]}${politic.lastName[0]}`}</AvatarFallback>
                </Avatar>
              </div>
              <CardDescription>{`${politic.tags}`}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                <Link to={`/search/${politic.id}`}>
                  Qu'à fait
                  {politic.gender === "M."
                    ? "ce chenapan"
                    : "cette polissonne"}{" "}
                  ?
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;

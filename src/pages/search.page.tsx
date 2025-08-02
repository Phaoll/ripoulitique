import { getPoliticTagDisplay } from "@/components/custom/formatTags";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CONTACT_MAIL } from "@/data/config";
import PoliticsList from "@/data/politicsList";
import React, { useState } from "react";
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
    <div>
      <h1 className="text-4xl font-bold">
        Rechercher les bêtises de vos personnalités politiques préférées
      </h1>

      <div className="py-4 mb-6 max-w-md">
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

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredPolitics.map((politic) => (
          <Card
            key={politic.id}
            className="w-full shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <CardHeader>
              <div className="flex flex-row justify-between">
                <CardTitle className="text-lg justify-start">{`${politic.gender} ${politic.firstName} ${politic.lastName}`}</CardTitle>
                <Avatar className="justify-end flex overflow-hidden">
                  <AvatarImage
                    className="w-full h-full object-cover"
                    src={politic.profilePicture}
                  />
                  <AvatarFallback>{`${politic.firstName[0]}${politic.lastName[0]}`}</AvatarFallback>
                </Avatar>
              </div>
              {politic.tags && (
                <CardDescription className="flex flex-wrap gap-1">
                  {politic.tags.map((tag, index) => (
                    <React.Fragment key={index}>
                      {getPoliticTagDisplay(tag)}
                    </React.Fragment>
                  ))}
                </CardDescription>
              )}
            </CardHeader>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                <Link to={`/search/${politic.id}`}>
                  Qu'à fait
                  {politic.gender === "M."
                    ? " ce polisson"
                    : " cette polissonne"}{" "}
                  ?
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {filteredPolitics.length === 0 && (
        <div>
          Il manque une espièglerie ? Un chenapan nous a échappé ? Contactez
          nous à {<a href={`${CONTACT_MAIL}`}>{`${CONTACT_MAIL}`}</a>}.
        </div>
      )}
    </div>
  );
}

export default SearchPage;

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PoliticsList from "@/data/politicsList";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import SourceButton from "@/components/custom/source";
import React from "react";
import { getPoliticTagDisplay } from "@/components/custom/formatTags";
// TODO
// Rajouter la peine reçue

function PoliticProfilePage() {
  const { politicId } = useParams();
  const politic = PoliticsList.filter((pol) => pol.id == politicId)[0];
  return (
    <div className="p-8 items-center justify-center gap-y-8">
      <div className="flex flex-row justify-start gap-8">
        <Avatar className="w-48 h-48 rounded-full overflow-hidden">
          <AvatarImage
            src={politic.profilePicture}
            alt={`${politic.firstName} ${politic.lastName}`}
            className="w-full h-full object-cover"
          />
          <AvatarFallback>
            {`${politic.firstName[0]}${politic.lastName[0]}`}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-4">{`${politic.gender} ${politic.firstName} ${politic.lastName}`}</h1>
          {politic.tags && (
            <div className="flex flex-wrap gap-1">
              {politic.tags.map((tag, index) => (
                <React.Fragment key={index}>
                  {getPoliticTagDisplay(tag)}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
      <Table className="px-4">
        <TableCaption>
          Il manque une espièglerie ?{" "}
          <Link to="/contact" className="text-blue-700">
            Contactez-nous
          </Link>{" "}
          !
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Etat</TableHead>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Infraction</TableHead>
            <TableHead>Catégories</TableHead>
            <TableHead className="text-right">Sources</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {politic.shenanigans.map((shenanigan) => (
            <TableRow key={shenanigan.id}>
              <TableCell className="font-medium">{shenanigan.status}</TableCell>
              <TableCell className="font-medium">
                {moment(shenanigan.date).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell className="font-medium">{shenanigan.title}</TableCell>
              <TableCell className="flex text-right justify-start">
                {shenanigan.tags}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-1">
                  {shenanigan.sources.map((source, index) => (
                    <SourceButton number={index + 1} url={source} />
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default PoliticProfilePage;

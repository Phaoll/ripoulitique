"use client";

import { CONTACT_MAIL } from "@/data/config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function BottomAccordion() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            Pourquoi avoir créé Ripoulitique ?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              L'idée de Ripoulitique nous est venu en soirée alors que nous
              cherchions les bêtises de plusieurs de nos politiques actuels et
              passés.
            </p>
            <p>
              L'objectif est simplement de repertorier en un seul endroit les
              différentes affaires en cours et classées des politiques français.
              Le tout sourcé et classé de manière relativement impartiale.
            </p>
            <p>
              Un objectif second est de se rendre compte à quel point tous nos
              politiques trempent de près ou de loin dans des affaires louches
              et ainsi apporter une clé de compréhension au problème de la
              défiance politique qui semble s'installer en France actuellement.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            Comment contribuer à Ripoulitique ?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Contribuer à Ripoulitique se fait en écrivant à{" "}
              {`${CONTACT_MAIL}`}. Toutes les contributions sont analysées à la
              main pour répondre aux critères suivant:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-pretty">
                La personnalité politique visée est française ou a un impact
                dans la vie politique française
              </li>
              <li className="text-pretty">
                La polissonerie est sourcée avec une source de l'ordre du
                Journal Officiel, d'un arrêt d'une court, d'un jugement d'un
                tribunal ou d'un article d'un journal de référence, en dernier
                lieu de Wikipédia si la source de Wikipedia rentre également
                dans ces clous.
              </li>
              <li className="text-pretty">
                La source permettant d'authentifier sa polissonerie est
                relativement neutre politiquement (l'objectif étant d'éviter des
                critiques de "gaucho" ou de "droitard" qui limiterait la
                diffusion de ce site)
              </li>
            </ul>
            <p className="text-pretty">
              Vous pouvez écrire pour signaler une erreur, rajouter une
              personnalité politique, rajouter une condamnation ou une mise en
              examen, proposer une amélioration du site ou simplement nous dire
              coucou ! Nous lisons tout !
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">
            De quand date la dernière mise à jour de Ripoulitique ?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              La dernière mise à jour date du{" "}
              <span className="font-semibold">1er Août 2025</span>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

import { CONTACT_MAIL } from "@/data/config";

function ContactPage() {
  return (
    <div className="items-center justify-center py-4">
      <h1 className="text-4xl font-bold mb-4">Contacter Ripoulitique</h1>
      <p>
        Une erreur ? Il manque une espièglerie ? Un chenapan nous a échappé ?
        Contactez nous à{" "}
        {
          <a
            href={`mailto:${CONTACT_MAIL}`}
            className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors duration-200"
          >
            {`${CONTACT_MAIL}`}
          </a>
        }
        . Toutes les contributions sont analysées à la main pour répondre aux
        critères suivant:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-pretty">
          La personnalité politique visée est française ou a un impact dans la
          vie politique française
        </li>
        <li className="text-pretty">
          La polissonerie est sourcée avec une source de l'ordre du Journal
          Officiel, d'un arrêt d'une court, d'un jugement d'un tribunal ou d'un
          article d'un journal de référence, en dernier lieu de Wikipédia si la
          source de Wikipedia rentre également dans ces clous.
        </li>
        <li className="text-pretty">
          La source permettant d'authentifier sa polissonerie est relativement
          neutre politiquement (l'objectif étant d'éviter des critiques de
          "gaucho" ou de "droitard" qui limiterait la diffusion de ce site)
        </li>
      </ul>
      <p className="text-pretty">
        Vous pouvez écrire pour signaler une erreur, rajouter une personnalité
        politique, rajouter une condamnation ou une mise en examen, proposer une
        amélioration du site ou simplement nous dire coucou ! Nous lisons tout !
      </p>
    </div>
  );
}

export default ContactPage;

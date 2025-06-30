import ButtonLink from "../components/ui/buttonLink";
import { monoton } from "../styles/font";

export default function notFound() {
    return (
        <div className="mt-40 text-center">
            <p className={`${monoton.className} text-8xl mb-4 text-custom-blue`}>404</p>
            <p className={`text-4xl mb-16`}>La page demandée n&apos;existe pas</p>
            <ButtonLink path="/">Retour à la page d&apos;accueil</ButtonLink>
        </div>
    );
}

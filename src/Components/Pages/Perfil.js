import Feed from "./Feed"
import Navigation from '../Navigation/Navigation';
import ColecaoArquivosRecemPublicados from "../Perfil/ArquivosRecemPublicados";
import InfoPerfil from "../Perfil/InfoPerfil";

export default function Perfil() {
    return (
        <div>
            <InfoPerfil/>
            <ColecaoArquivosRecemPublicados/>
            <Feed/>
            <Navigation />
        </div>
    )
}
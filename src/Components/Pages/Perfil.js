import Feed from "./Feed"
import Navigation from '../Navigation/Navigation';
import ColecaoArquivosRecemPublicados from "../Perfil/ColecaoArquivosRecemPublicados";
import InfoPerfil from "../Perfil/InfoPerfil";
import ConexoesPerfil from "../Perfil/ConexoesPerfil";

export default function Perfil() {
    return (
        <div>
            <InfoPerfil/>
            <ColecaoArquivosRecemPublicados/>
            <ConexoesPerfil/>
            <Feed/>
            <Navigation />
        </div>
    )
}
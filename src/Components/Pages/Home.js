import InputPublicacao from '../Publicacao/InputPublicacao';
import Feed from "./Feed";
import Navigation from '../Navigation/Navigation';

export default function Home() {
    return (
        <>
            <InputPublicacao/>
            <Feed/>
            <Navigation />
        </>
    );
}
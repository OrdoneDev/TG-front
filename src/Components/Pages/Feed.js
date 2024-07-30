import Publicacao from '../Publicacao/Publicacao';

export default function Feed() {
    return (
        <ul>
            <Publicacao />
            <Publicacao />
            <Publicacao />
            <div className="mb-12">
                <Publicacao />
            </div>
        </ul>
    );
}
import Publicacao from '../Publicacao/Publicacao';
import Navigation from '../Navigation/Navigation';

export default function Feed() {
    return (
        <div>
            <div>
                <Publicacao />
                <Publicacao />
                <Publicacao />
                <div className="mb-12">
                    <Publicacao />
                </div>
            </div>
            <Navigation />
        </div>
    );
}
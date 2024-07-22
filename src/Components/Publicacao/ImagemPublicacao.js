export default function ImagemPublicacao(foto) {
    return (
        <div class="mt-2">
            <a href="#">
                <img class="rounded-xl shadow" src={foto} />
            </a>
        </div>
    );
}
export default function RelacaoPerfil(infoRelacao) {
    return (
        <>
            <div class="flex flex-row py-0.5 justify-between">
                <div className="flex">
                    <img src={infoRelacao.foto} alt={infoRelacao.nome} class="w-[4rem] h-[4rem] rounded-full shadow-gray-400 shadow-sm" />
                </div>
            </div>
        </>
    )
}
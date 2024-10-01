import ArquivoColecao from './ArquivoColecao'

export default function ColecaoArquivosRecemPublicados() {
    const infoArquivos = [ 
            {
                arquivo: 'download/llCensoDaIndustriaGames.pdf',
                descricao: 'Flowbite Terms & Conditions',
                formato: 'pdf',
                pontuacao: 2 
            },
            {
                arquivo: 'download/llCensoDaIndustriaGames.pdf',
                descricao: 'Clean code',
                formato: 'pdf',
                pontuacao: 4.95 
            },
            {
                arquivo: 'download/llCensoDaIndustriaGames.pdf',
                descricao: 'Manual do usuário',
                formato: 'pdf',
                pontuacao: 4.95 
            },
    ]

    
    

    return (
        <>
            <div class="w-full xl:w-[40%] lx:w-[45%] lg:w-[50%] ll:w-[60%] md:w-[75%] sm:w-[90%] w-[100%] mx-auto ">
                <div class="w-full flex flex-col gap-1 py-1 pb-1 shadow-lg bg-white dark:bg-gray-600 px-5 dark:text-white text-xs">
                    <p className="font-semibold">Arquivos recentes:</p>
                    <div class="flex flex-col">
                        { infoArquivos?.map( infoArquivo => (ArquivoColecao(infoArquivo) ))}
                    </div>
                    <a href="#" className="text-xs justify-end font-semibold text-white hover:text-black hover:underline">
                        veja mais
                    </a>
                </div>
            </div>
        </>
    )
}
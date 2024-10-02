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
            <div class="w-full xl:w-[40%] lx:w-[45%] lg:w-[50%] ll:w-[60%] md:w-[75%] sm:w-[90%] w-[100%] mx-auto">
                <div class="w-full flex flex-col pb-2 dark:bg-gray-800 dark:text-white text-xs">
                    <div class="bg-gray-900 rounded-full">
                        <p className="font-semibold w-full px-5">Arquivos recentes 🠗</p>
                    </div>
                    <div class="px-5 pt-0.5">
                        <div class="flex flex-col mb-0.5">
                            { infoArquivos?.map( infoArquivo => (ArquivoColecao(infoArquivo) ))}
                        </div>
                        <a href="#" className="text-xs justify-end font-semibold text-white hover:text-black hover:underline">
                            veja mais 🠗
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
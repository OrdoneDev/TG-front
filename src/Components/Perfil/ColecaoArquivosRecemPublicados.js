import { useState } from 'react'
import ArquivoColecao from './ArquivoColecao'

export default function ColecaoArquivosRecemPublicados() {
    const [numberItems, setNumberItems] = useState(2)
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
                <div class="w-full group flex flex-col pb-0.4 dark:bg-gray-800 dark:text-white text-xs">
                    <div class="bg-gray-900 rounded-full">
                        <p className="font-semibold w-full px-5 py-0.5">Arquivos recentes 🠗</p>
                    </div>
                    <div class="px-5 pt-0.5 hidden group-hover:flex flex-col">
                        <div class="flex flex-col mb-0.5">
                            { 
                                infoArquivos?.map((arquivo, index) => {
                                    if (index > numberItems) {
                                        return null
                                    }
                                    return <span>{ArquivoColecao(arquivo)}</span>
                                })
                            }
                        </div>
                        <button onClick={() => setNumberItems(infoArquivos.length - 1)} className="text-xs justify-end font-semibold text-white hover:text-black hover:underline">
                            veja mais 🠗
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
import RelacaoPerfil from "./RelacaoPerfil"

export default function ConexoesPerfil() {
    const infoRelacoes = [ 
        {
            foto: 'https://contents.bebee.com/users/id/H4bhN624c5bc150429/_avatar-aJquV-400.png',
            nome: 'User',
            perfil: '/user'
        },
        {
            foto: 'https://cdn.discordapp.com/attachments/1154029468080418846/1290858765951963136/Profile-PNG-Pic.png?ex=66fdfd68&is=66fcabe8&hm=55e34245fd6f4b0a3face9b943e6cdc20bae4e669912889df084fd58a8597c57&',
            nome: 'User',
            perfil: '/user'
        },
        {
            foto: 'https://cdn.discordapp.com/attachments/1154029468080418846/1290858765951963136/Profile-PNG-Pic.png?ex=66fdfd68&is=66fcabe8&hm=55e34245fd6f4b0a3face9b943e6cdc20bae4e669912889df084fd58a8597c57&',
            nome: 'User',
            perfil: '/user'
        },
        {
            foto: 'https://cdn.discordapp.com/attachments/1154029468080418846/1290858765951963136/Profile-PNG-Pic.png?ex=66fdfd68&is=66fcabe8&hm=55e34245fd6f4b0a3face9b943e6cdc20bae4e669912889df084fd58a8597c57&',
            nome: 'User',
            perfil: '/user'
        },
        {
            foto: 'https://cdn.discordapp.com/attachments/1154029468080418846/1290858765951963136/Profile-PNG-Pic.png?ex=66fdfd68&is=66fcabe8&hm=55e34245fd6f4b0a3face9b943e6cdc20bae4e669912889df084fd58a8597c57&',
            nome: 'User',
            perfil: '/user'
        },
        {
            foto: 'https://cdn.discordapp.com/attachments/1154029468080418846/1290858765951963136/Profile-PNG-Pic.png?ex=66fdfd68&is=66fcabe8&hm=55e34245fd6f4b0a3face9b943e6cdc20bae4e669912889df084fd58a8597c57&',
            nome: 'User',
            perfil: '/user'
        },
        {
            foto: 'https://cdn.discordapp.com/attachments/1154029468080418846/1290858765951963136/Profile-PNG-Pic.png?ex=66fdfd68&is=66fcabe8&hm=55e34245fd6f4b0a3face9b943e6cdc20bae4e669912889df084fd58a8597c57&',
            nome: 'User',
            perfil: '/user'
        },
    ]

    return (
        <>
            <div class="w-full xl:w-[40%] lx:w-[45%] lg:w-[50%] ll:w-[60%] md:w-[75%] sm:w-[90%] w-[100%] mx-auto ">
                <div class="w-full flex flex-col pb-2 dark:bg-gray-800 dark:text-white text-xs">
                    <div class="bg-gray-900 rounded-full">
                        <p className="font-semibold w-full px-5">Amigos 🠗</p>
                    </div>
                    <div class="px-5 pt-0.5">
                        <div class="flex flex-row gap-2.5 mt-0.5">
                            { infoRelacoes?.map( infoRelacao => (RelacaoPerfil(infoRelacao) ))}
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
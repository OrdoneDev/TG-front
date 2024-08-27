export default function InfoPerfil() {
    const usuario = {
        nome: 'David Ordone',
        data_nascimento: '20/08/1994',
        sexo: 'Masculino',
        biografia: 'David Ordone, nascido e criado em Lisboa, Portugal, é um estudante de graduação em Ciência da Computação...'
    }

    return(
        <div>
            <div class="w-full xl:w-[40%] lx:w-[45%] lg:w-[50%] ll:w-[60%] md:w-[75%] sm:w-[90%] w-[100%] mx-auto">
                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                <div class="w-full flex flex-col gap-1 pt-3 py-2 shadow-lg bg-white dark:bg-gray-600 px-5 dark:text-white">
                    <div class="flex items-center gap-3">
                        <img src="https://contents.bebee.com/users/id/H4bhN624c5bc150429/_avatar-aJquV-400.png" alt="User profile" class="w-[4.5rem] h-[4.5rem] rounded-full shadow-md" />
                        <div class="flex flex-col gap-3 w-full">
                            <div class="text-xs">
                                <span class="font-semibold">{usuario.nome}</span><br/>
                                <div class="text-xs">
                                    {usuario.data_nascimento}<br/>
                                    {usuario.sexo}<br/>
                                </div>
                            </div>
                        </div>
                        <div className="flex content-end justify-end w-full mt-10 dark:text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 2 20 20" fill="currentColor" class="size-5">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
                            </svg>
                            <a href="#" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300">
                                Adicionar como amigo
                            </a>
                        </div>
                    </div>

                    <div class="mt-0.5 mb-2 leading-normal text-sm sm:text-base">
                        {usuario.biografia}
                        <a href="#" className="text-sm justify-end font-semibold text-indigo-400 hover:text-indigo-300">
                            veja mais
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
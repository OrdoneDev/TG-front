import Feed from "./Feed"
import Navigation from '../Navigation/Navigation';

export default function Perfil() {
    const usuario = {
        nome: 'David Ordone',
        data_nascimento: '20/08/1994',
        sexo: 'Masculino',
        biografia: 'David Ordone, nascido e criado em Lisboa, Portugal, é um estudante de graduação em Ciência da Computação...'
    }

    return (
        <div>
            <div class="w-full xl:w-[40%] lx:w-[45%] lg:w-[50%] ll:w-[60%] md:w-[75%] sm:w-[90%] w-[100%] mx-auto">
                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                <div class="w-full flex flex-col gap-1 py-2 shadow-lg bg-white dark:bg-gray-600 px-5 dark:text-white">
                    <div class="flex items-center gap-3">
                        <img src="https://contents.bebee.com/users/id/H4bhN624c5bc150429/_avatar-aJquV-400.png" alt="User profile" class="w-[5rem] h-[5rem] rounded-full shadow-md" />
                        <div class="w-full flex flex-row gap-3">
                            <div class="text-base">
                                {usuario.nome}<br/>
                                <div class="text-xs">
                                {usuario.data_nascimento}<br/>
                                {usuario.sexo}<br/>
                                </div>
                            </div>
                            <div>
                                <a href="#" className="text-sm justify-end font-semibold text-indigo-400 hover:text-indigo-300">
                                    Adicionar como amigo
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="mt-3 mb-2 leading-normal text-sm sm:text-base">
                        {usuario.biografia}
                        <a href="#" className="text-sm justify-end font-semibold text-indigo-400 hover:text-indigo-300">
                            veja mais
                        </a>
                    </div>
                </div>
            </div>
            
            <Feed/>
            <Navigation />
        </div>
    )
}
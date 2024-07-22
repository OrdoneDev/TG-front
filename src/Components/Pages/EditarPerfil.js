import Navigation from "../Navigation/Navigation";

export default function EditarPerfil() {
    return(
        <div>
            <div className="flex min-h-full flex-col items-center justify-center px-5 py-1 lg:px-8">
                <div class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h1 class="mt-2.5 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Perfil
                        </h1>
                        <h2 class="text-grey text-sm mb-4">Informações sobre o perfil</h2>
                    </div>

                    <div class="mx-auto flex w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://static.vecteezy.com/ti/vetor-gratis/p3/11186876-simbolo-de-foto-de-perfil-masculino-vetor.jpg')] bg-cover bg-center bg-no-repeat">
                        <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">

                            <input type="file" name="profile" id="upload_profile" hidden />
                            <label for="upload_profile">
                                <svg data-slot="icon" class="w-6 h-5 text-blue-700" fill="none"
                                    stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                    </path>
                                </svg>
                            </label>
                        </div>
                    </div>

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div class="relative z-0 w-full group">
                                <input type="text" name="floating_name" id="floating_name" class="block py-1.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                            </div>

                            <div class="flex flex-row gap-2 justify-center w-full">
                                <div class="w-full">
                                    <input type="date"
                                            class="block py-1.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                </div>
                                <div class="w-full">
                                    <select
                                            class="block py-1.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                            <option disabled value="">Selecione o seu gênero</option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Feminino">Feminino</option>
                                            <option value="Outro">Outro</option>
                                    </select>
                                </div>
                            </div>

                            
                            <div class="relative z-0 w-full mb-5 group">
                                <textarea rows="5" name="floating_biografia" id="floating_biografia" class="block resize-none py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " ></textarea>
                                <label for="floating_biografia" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Biografia</label>
                            </div>

                            <div class="flex flex-row gap-2 justify-center w-full">
                                <div class="w-full">
                                    <div class="relative z-0 w-full group">
                                        <input type="password" name="floating_password" id="floating_password" class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Senha</label>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="relative z-0 w-full group">
                                        <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmar senha</label>
                                    </div>
                                </div>
                            </div>
                            
                            <button type="submit" class="flex w-full mt-5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Confirmar</button>
                        </form>
                    </div>
                </div>
            </div>
            <Navigation />
        </div>
    );
}
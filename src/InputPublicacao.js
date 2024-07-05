export default function InputPublicacao() {
    return(
        <div class="w-full xl:w-[40%] lx:w-[45%] lg:w-[50%] ll:w-[60%] md:w-[75%] sm:w-[90%] w-[100%] mx-auto">
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div class="w-full flex flex-col gap-1 py-2 shadow-lg bg-white dark:bg-gray-700 px-5">
                <div class="flex items-center gap-2">
                    <img src="https://contents.bebee.com/users/id/H4bhN624c5bc150429/_avatar-aJquV-400.png" alt="User profile" class="w-[3rem] h-[3rem] rounded-full shadow-md" />
                    <textarea rows="1" class="w-full resize-none truncate border border-gray-400 rounded-full text-left text-xs sm:text-base dark:bg-gray-500 dark:text-white dark:border-gray-500 placeholder-white" placeholder="Publique os seus trabalhos aqui!"></textarea>
                </div>

                <div class="flex sm:px-4 justify-end h-5 text-xs sm:text-sm">
                    <div class="flex items-center gap-2 p-2 rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span class="material-symbols-outlined text-blue-400 text-lg">panorama</span>
                        <h3 class="font-semibold text-gray-600 dark:text-gray-300">Foto</h3>
                    </div>

                    <div class="flex items-center gap-2 p-2 rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span class="material-symbols-outlined text-yellow-600 text-lg">attach_file</span>
                        <h3 class="font-semibold text-gray-600 dark:text-gray-300">Arquivo</h3>
                    </div>

                    <div class="flex items-center gap-2 p-2 rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span class="material-symbols-outlined text-green-500 text-lg">send</span>
                        <h3 class="font-semibold text-gray-600 dark:text-gray-300">Enviar</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
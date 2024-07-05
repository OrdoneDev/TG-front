import Imagem from "./Imagem";
import Arquivo from "./Arquivo";

export default function Feed() {
    return (
        <div className="shadow-sm flex flex-col items-center justify-center xl:w-[40%] lx:w-[45%] lg:w-[50%] ll:w-[60%] md:w-[75%] sm:w-[90%] xs:w-[100%] mx-auto h-full">
            <div class="font-sans border px-5 py-2 w-full">
                <div class="flex items-center"><img src="https://contents.bebee.com/users/id/H4bhN624c5bc150429/_avatar-aJquV-400.png" class="h-12 w-12 rounded-full shadow-md"/>
                    <div class="flex flex-col ml-2 w-full ">
                        <span class="font-semibold text-sm sm:text-base text-black h-5 xs:h-4 sm:h-[19px]">David Ordone</span>
                        <a href="#" className="text-xs text-blue-500 hover:text-blue-300 h-5">
                            @DavidOrdone
                        </a>
                    </div>
                    <div class="text-grey text-xs flex h-10 w-full justify-end">03/08/2023 11:56 AM</div>
                </div>
                
                <Imagem />

                <div class="mt-3 mb-2 leading-normal text-sm sm:text-base">Use these components to show a list of related and recommended blog posts and articles at the bottom of the main content area of an article or blog post page.
                Check out some of the other recommended blocks from Flowbite to get started building your website faster with Tailwind CSS.
                </div>

                <div>
                    <Arquivo />
                </div>
                
                <div class="flex text-grey mt-2.5 text-sm sm:text-base">
                    <div class="flex items-center mr-4"><svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"/>
                        </svg><span>713</span></div>
                    <div class="flex items-center mr-4"><svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
                        </svg><span>738</span></div>
                    <div class="flex items-center mr-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-width="1.25" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                        </svg><span>738</span></div>
                    <div class="flex items-center mr-4"><svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg></div>
                </div>
            </div>
        </div>
    );
}
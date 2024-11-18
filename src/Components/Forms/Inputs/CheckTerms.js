const CheckTerms = ({ name, ...props }) => {
    return (
        <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input
                id={name}
                {...props}
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label htmlfor={name} class="ms-1 text-center text-sm text-gray-500">
              Li e concordo com estes{" "}
              <a
                href="#"
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                termos e condições
              </a>
            </label>
        </div>
    )
}

export default CheckTerms
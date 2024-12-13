import Navigation from "../Navigation/Navigation";
import Container from "../Containers/Container";
import LabelInput from "../Forms/Inputs/LabelInput";
import LabelTextarea from "../Forms/Inputs/LabelTextarea";
import LabelSelect from "../Forms/Inputs/LabelSelect";

export default function EditarPerfil() {
  return (
    <div>
      <Container>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-2.5 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Perfil
          </h1>
          <h2 className="text-grey text-sm mb-4">Informações sobre o perfil</h2>
        </div>

        <div className="mx-auto flex w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://static.vecteezy.com/ti/vetor-gratis/p3/11186876-simbolo-de-foto-de-perfil-masculino-vetor.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
            <input type="file" name="profile" id="upload_profile" hidden />
            <label htmlFor="upload_profile">
              <svg
                data-slot="icon"
                className="w-6 h-5 text-blue-700"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                ></path>
              </svg>
            </label>
          </div>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <LabelInput
              type="text"
              name="floating_name"
              label="Nome"
            />

            <div className="flex flex-row gap-2 justify-center w-full">
              <LabelInput
                type="date"
                name="floating_date"
                label="Data de Nascimento"
              />
              <LabelSelect
                name="floating_gender"
                label="Selecione o seu gênero"
                options={[
                  { value: "Masculino", label: "Masculino" },
                  { value: "Feminino", label: "Feminino" },
                  { value: "Outro", label: "Outro" },
                ]}
              />
            </div>

            <LabelTextarea
              name="floating_biografia"
              label="Biografia"
              rows="5"
            />

            <div className="flex flex-row gap-2 justify-center w-full">
              <LabelInput
                type="password"
                name="floating_password"
                label="Senha"
              />
              <LabelInput
                type="password"
                name="floating_repeat_password"
                label="Confirmar senha"
              />
            </div>

            <button
              type="submit"
              className="flex w-full mt-5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Confirmar
            </button>
          </form>
        </div>
      </Container>
      <Navigation />
    </div>
  );
}
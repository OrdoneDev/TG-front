import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import Container from "../Containers/Container";
import FormContainer from "../Forms/Containers/FormContainer";
import Input from "../Forms/Inputs/Input";
import CheckTerms from "../Forms/Inputs/CheckTerms";
import Confirm from "../Forms/Buttons/Confirm";

export default function CadastroUsuario() {
  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Container>
      <FormContainer title="REGISTRE-SE" onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="nome"
          label="Nome"
          {...register("nome", { required: true })}
        />
        <Input
          name="email"
          label="E-mail"
          type="email"
          {...register("email", {
            required: true,
            validate: (value) => isEmail(value),
          })}
        />
        <Input
          name="senha"
          type="password"
          label="Digite sua senha"
          {...register("senha", { required: true, minLength: 7 })}
        />
        <Input
          name="senha_confirm"
          type="password"
          label="Confirme sua senha"
          {...register("senhaConfirm", { required: true })}
        />
        <CheckTerms
          name="terms"
          label="Aceito os termos de uso"
          {...register("terms", { required: true })}
        />
        <Confirm label="Confirmar" type="submit" />
      </FormContainer>
    </Container>
  );
}

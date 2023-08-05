import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export default async function CreateAccountPage() {
  return (
    <main className="h-screen w-screen flex items-center">
      <section className="flex justify-center items-center p-[2rem] h-full w-1/2">
        <form className="w-[22rem] mt-[2rem]">
          <h1 className="text-purple-600 font-semibold leading-[34px] text-[2.25rem] mb-[1rem]">
            Cadastro
          </h1>

          <h2 className=" text-purple-500 font-normal text-[1.25rem] leading-[26px] mb-[2.5rem] ">
            Preencha os dados abaixo <br /> para começar.
          </h2>

          <Input.Root variantStyle="topRounded">
            <Input.Content label="Nome" name="first_name" />
          </Input.Root>

          <Input.Root>
            <Input.Content label="Sobrenome" name="last_name" />
          </Input.Root>

          <Input.Root>
            <Input.Content label="E-mail" name="email" type="email" />
          </Input.Root>

          <Input.Root variantStyle="bottomRounded">
            <Input.Content label="Senha" name="password" type="password" />
          </Input.Root>

          <Button>Concluir Cadastro</Button>
        </form>
      </section>

      <section className="h-full w-[50%] bg-purple-300 "></section>
    </main>
  );
}

import { Input } from '../../components/Input';

export default async function CreateAccountPage() {
  return (
    <main className="h-screen w-screen flex items-center ">
      <section className="flex flex-col gap-[1rem] p-[2rem]">
        <h1 className="text-purple-600 font-semibold leading-[34px] text-[2.25rem] ">
          Cadastro
        </h1>

        <h2 className=" text-purple-500 font-normal text-[1.25rem] leading-[26px]">
          Preencha os dados abaixo <br /> para começar.
        </h2>

        <form action="" className="mt-[2rem]">
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

          <button>Concluir Cadastro</button>
        </form>
      </section>

      <section className="bg-purple-300">
        <h1>Proffy</h1>
      </section>
    </main>
  );
}

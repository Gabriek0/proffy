import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Form } from '../../components/Layout/Form';
import { Section } from '../../components/Layout/Section';

export default async function CreateAccountPage() {
  return (
    <Form.Root>
      <Section.Form>
        <Form.Content>
          <Form.BackButton />

          <Form.Title>Cadastro</Form.Title>

          <Form.Subtitle>
            Preencha os dados abaixo <br /> para começar.
          </Form.Subtitle>

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
        </Form.Content>
      </Section.Form>

      <Section.Hero>
        <h1>Teste</h1>
      </Section.Hero>
    </Form.Root>
  );
}

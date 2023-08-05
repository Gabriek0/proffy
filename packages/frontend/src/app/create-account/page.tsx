import { Input } from '../../components/Input';

export default async function CreateAccountPage() {
  return (
    <>
      <Input.Root>
        <Input.Content label="Nome" name="name" />
      </Input.Root>
    </>
  );
}

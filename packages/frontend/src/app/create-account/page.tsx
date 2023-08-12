'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeSlash, WarningCircle } from 'phosphor-react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import { convertToCapitalize } from '../../../utils/convert-to-capitalize';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Form } from '../../components/Layout/Form';
import { Section } from '../../components/Layout/Section';

const createAccountSchema = z
  .object({
    first_name: z
      .string()
      .nonempty()
      .transform((value) => convertToCapitalize(value)),
    last_name: z
      .string()
      .nonempty()
      .transform((value) => convertToCapitalize(value)),
    email: z.string().nonempty().email(),
    password: z.string().nonempty(),
  })
  .transform(({ first_name, last_name, email, password }) => ({
    name: `${first_name} ${last_name}`,
    email,
    password,
  }));

type CreateAccountSchemaInput = z.input<typeof createAccountSchema>;
type CreateAccountSchemaOutput = z.output<typeof createAccountSchema>;

export default function CreateAccountPage() {
  const methods = useForm<CreateAccountSchemaInput>({
    resolver: zodResolver(createAccountSchema),
  });

  const { errors } = methods.formState;

  const [isShowPassword, setIsShowPassword] = useState(false);

  const onSubmit = (form: any) => {
    console.log(form);
  };

  const handleShowPassword = () => setIsShowPassword((prev) => !prev);

  return (
    <Form.Root>
      <Section.Form>
        <FormProvider {...methods}>
          <Form.Content onSubmit={methods.handleSubmit(onSubmit)}>
            <Form.BackButton />

            <Form.Title>Cadastro</Form.Title>

            <Form.Subtitle>
              Preencha os dados abaixo <br /> para começar.
            </Form.Subtitle>

            <Input.Root variantStyle="topRounded">
              <Input.Content label="Nome" name="first_name" />

              {errors.first_name && <Input.Icon icon={WarningCircle} error />}
            </Input.Root>

            <Input.Root>
              <Input.Content label="Sobrenome" name="last_name" />

              {errors.last_name && <Input.Icon icon={WarningCircle} error />}
            </Input.Root>

            <Input.Root>
              <Input.Content label="E-mail" name="email" />

              {errors.email && <Input.Icon icon={WarningCircle} error />}
            </Input.Root>

            <Input.Root variantStyle="bottomRounded">
              <Input.Content
                name="password"
                label="Senha"
                type={isShowPassword ? 'text' : 'password'}
              />

              {errors.password ? (
                <Input.Icon icon={WarningCircle} error />
              ) : (
                <button type="button" onClick={handleShowPassword}>
                  {isShowPassword ? (
                    <Input.Icon icon={Eye} />
                  ) : (
                    <Input.Icon icon={EyeSlash} />
                  )}
                </button>
              )}
            </Input.Root>

            {errors && <Form.Error>{errors.password?.message}</Form.Error>}

            <Button type="submit" className="mt-[2.5rem]">
              Concluir Cadastro
            </Button>
          </Form.Content>
        </FormProvider>
      </Section.Form>

      <Section.Hero transparent />
    </Form.Root>
  );
}

'use client';

import { api } from '@front/lib/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Eye, EyeSlash, WarningCircle } from 'phosphor-react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Form } from '../../components/Layout/Form';
import { Section } from '../../components/Layout/Section';
import {
  createAccountSchema,
  CreateAccountSchemaInput,
  CreateAccountSchemaOutput,
} from '../../schema/create-account';

export default function CreateAccountPage() {
  const router = useRouter();
  const methods = useForm<CreateAccountSchemaInput>({
    resolver: zodResolver(createAccountSchema),
  });

  const { errors, isSubmitting } = methods.formState;

  const [isShowPassword, setIsShowPassword] = useState(false);

  const onSubmit = async (form: CreateAccountSchemaInput) => {
    const { name, email, password } =
      form as unknown as CreateAccountSchemaOutput;

    try {
      await api.post('/user', {
        name: name,
        email: email,
        password: password,
      });

      router.push('/successfull?message=create-account');
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowPassword = () => setIsShowPassword((prev) => !prev);

  const renderMessageError = (value: string | undefined) =>
    value?.replace('#', '');

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

            {errors && (
              <Form.Error>
                {renderMessageError(errors.password?.message)}
              </Form.Error>
            )}

            <Button
              type="submit"
              className="mt-[2.5rem]"
              loading={isSubmitting}
            >
              Concluir Cadastro
            </Button>
          </Form.Content>
        </FormProvider>
      </Section.Form>

      <Section.Hero />
    </Form.Root>
  );
}

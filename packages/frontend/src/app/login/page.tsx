'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Eye, EyeSlash, WarningCircle } from 'phosphor-react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Form } from '../../components/Layout/Form';
import { Section } from '../../components/Layout/Section';
import { LoginUserSchema, loginUserSchema } from '@front/schema/login';

export default function CreateAccountPage() {
  const methods = useForm<LoginUserSchema>({
    resolver: zodResolver(loginUserSchema),
  });

  const { errors, isSubmitting } = methods.formState;

  const [isShowPassword, setIsShowPassword] = useState(false);

  const onSubmit = async (form: LoginUserSchema): Promise<void> => {
    console.log(form);

    return;
  };

  const handleShowPassword = () => setIsShowPassword((prev) => !prev);

  const renderMessageError = (value: string | undefined) =>
    value?.replace('#', '');

  return (
    <Form.Root>
      <Section.Hero />

      <Section.Form>
        <FormProvider {...methods}>
          <Form.Content onSubmit={methods.handleSubmit(onSubmit)}>
            <Form.Title>Fazer login</Form.Title>

            <Input.Root variantStyle="topRounded">
              <Input.Content label="E-mail" name="email" />

              {errors.email && <Input.Icon icon={WarningCircle} error />}
            </Input.Root>

            <Input.Root variantStyle="bottomRounded">
              <Input.Content
                label="Senha"
                name="password"
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
              Entrar
            </Button>
          </Form.Content>
        </FormProvider>
      </Section.Form>
    </Form.Root>
  );
}

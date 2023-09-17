import * as z from 'zod';

import { convertToCapitalize } from '@front/utils/convert-to-capitalize';
import { checkIfPasswordIsStrong } from '@front/utils/check-if-password-is-strong';

/*  const checkPasswordStrong = () => {
  const env = process.env.NODE_ENV;

  if (env === 'production') {
    return z
      .string()
      .nonempty()
      .min(4, { message: 'A senha deve ter no mínimo 4 caracteres' })
      .max(20, { message: 'A senha deve ter no máximo 20 caracteres' })
      .refine((value) => checkIfPasswordIsStrong(value), {
        message:
          'A senha deve conter caracteres especiais, letras maíusculas, minúsculas e números.',
      });
  }

  return z
    .string()
    .min(4, { message: 'A senha deve conter no mínimo 4 caracteres' })
    .nonempty('');
};  */

export const createAccountSchema = z
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
    password: z
      .string()
      .nonempty('#')
      .min(4, { message: 'A senha deve ter no mínimo 4 caracteres' })
      .max(20, { message: 'A senha deve ter no máximo 20 caracteres' })
      .refine((value) => checkIfPasswordIsStrong(value), {
        message:
          'A senha deve conter caracteres especiais, letras maíusculas, minúsculas e números.',
      }),
  })
  .transform(({ first_name, last_name, email, password }) => ({
    name: `${first_name} ${last_name}`,
    email,
    password,
  }));

export type CreateAccountSchemaInput = z.input<typeof createAccountSchema>;
export type CreateAccountSchemaOutput = z.output<typeof createAccountSchema>;

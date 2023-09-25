import * as z from 'zod';

export const loginUserSchema = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty('#'),
});

export type LoginUserSchema = z.infer<typeof loginUserSchema>;

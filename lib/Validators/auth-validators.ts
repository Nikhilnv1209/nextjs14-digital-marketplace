import * as z from "zod";
export const authSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export type TauthSchema = z.infer<typeof authSchema>;

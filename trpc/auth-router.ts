import type { TauthSchema } from "@/lib/Validators/auth-validators";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../Cms_server/get-payload";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
    createpayloaduser: publicProcedure
        .input((type) => type as TauthSchema)
        .mutation(async ({ input }) => {
            const { email, password } = input;
            const payload = await getPayloadClient();

            // check if user already exists
            const { docs: users } = await payload.find({
                collection: "users",
                where: {
                    email: {
                        equals: email,
                    },
                },
            });

            // if found a user then throw an error
            if (users.length > 0) {
                throw new TRPCError({
                    code: "CONFLICT",
                    message: "User already exists",
                });
            }

            const user = await payload.create({
                collection: 'users',
                data: {
                    email, 
                    password, 
                    role: 'user'
                }
            })

            return {success: true, CreatedUser:user}
        }),
});

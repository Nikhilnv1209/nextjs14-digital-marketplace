import { publicProcedure, router } from "./routers";

export const appRouter = router({
    example: publicProcedure.query(
        () => {
            return {
                hello: "world"
            }
        }
    )
})

export type AppRouter = typeof appRouter
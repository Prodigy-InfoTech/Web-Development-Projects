import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from "@prisma/client/runtime/library";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  saveALink: publicProcedure
    .input(z.object({ link: z.string().url(), slug: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const link = await ctx.db.link.create({
          data: { slug: input.slug, url: input.link },
        });

        return {
          message: "link created successfully",
        };
      } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
          throw e;
        }
      }
    }),
});

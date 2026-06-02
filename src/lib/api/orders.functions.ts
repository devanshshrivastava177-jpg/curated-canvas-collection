import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  customer_name: z.string().trim().min(1).max(120),
  customer_email: z.string().trim().email().max(255),
  shipping_address: z.string().trim().min(5).max(500),
  items: z
    .array(
      z.object({
        id: z.string().max(80),
        name: z.string().max(120),
        price: z.number().min(0),
        qty: z.number().int().min(1).max(99),
      }),
    )
    .min(1)
    .max(50),
  total: z.number().min(0),
});

export const placeOrder = createServerFn({ method: "POST" })
  .inputValidator((input) => schema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin
      .from("orders")
      .insert({
        customer_name: data.customer_name,
        customer_email: data.customer_email,
        shipping_address: data.shipping_address,
        items: data.items,
        total: data.total,
      })
      .select("id")
      .single();
    if (error) throw new Error(error.message);
    return { ok: true as const, id: row!.id as string };
  });

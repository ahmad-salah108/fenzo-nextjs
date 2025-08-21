"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

export function FormResetPassword() {
  const tAuth = useTranslations("Auth");
  const FormSchema = z.object({
    email: z
      .string()
      .min(1, { message: tAuth("email_required") })
      .refine(
        (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), // basic email pattern
        {
          message: tAuth("email_valid"),
        }
      )
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: ""
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:w-2/3 space-y-6 flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                {tAuth("email")}
              </FormLabel>
              <FormControl>
                <Input placeholder={tAuth("email")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
        </div>
        <Button
          type="submit"
          className="bg-main hover:bg-main-100 ms-auto flex justify-center items-center uppercase text-[0.9rem] tracking-widest p-5"
        >
          {tAuth("reset")}
        </Button>
      </form>
    </Form>
  );
}

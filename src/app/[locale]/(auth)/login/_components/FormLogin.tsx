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
import Link from "next/link";

export function FormLogin() {
  const t = useTranslations("Auth");
  const FormSchema = z.object({
    email: z
      .string()
      .min(1, { message: t("email_required") })
      .refine(
        (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), // basic email pattern
        {
          message: t("email_valid"),
        }
      ),
    password: z
      .string()
      .min(8, { message: t("password_min") })
      .refine(
        (value) =>
          /[A-Z]/.test(value) && // at least one uppercase
          /[a-z]/.test(value) && // at least one lowercase
          /[^A-Za-z0-9]/.test(value), // at least one special character
        {
          message: t("password_valid"),
        }
      ),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
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
                {t("email")}
              </FormLabel>
              <FormControl>
                <Input placeholder={t("email")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                {t("password")}
              </FormLabel>
              <FormControl>
                <Input placeholder={t("password")} type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Link
            href={"/reset-password"}
            className="text-muted-foreground text-sm"
          >
            {t("forgot_password")}
          </Link>
        </div>
        <Button
          type="submit"
          className="bg-main hover:bg-main-100 ms-auto flex justify-center items-center uppercase text-[0.9rem] tracking-widest p-5"
        >
          {t("login")}
        </Button>
      </form>
    </Form>
  );
}

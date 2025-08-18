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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useRef } from "react";

function createFormSchema(t: ReturnType<typeof useTranslations>) {
  const schema = z
    .object({
      profileImage: z
        .instanceof(File)
        .optional()
        .refine((file) => !file || file.type.startsWith("image/"), {
          message: t("profile_image_format"),
        }),
      fullName: z
        .string()
        .min(1, { message: t("full_name_required") })
        .max(100, { message: t("full_name_max") })
        .refine((value) => /^[\p{L} .'-]+$/u.test(value), {
          message: t("full_name_valid"),
        }),
      email: z
        .string()
        .min(1, { message: t("email_required") })
        .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
          message: t("email_valid"),
        }),
      phoneNumber: z
        .string()
        .min(1, { message: t("phone_number_required") })
        .refine((value) => /^\+?[0-9\s\-()]{7,20}$/.test(value), {
          message: t("phone_number_valid"),
        }),
      country: z.string().min(1, { message: t("country_required") }),
      password: z
        .string()
        .min(8, { message: t("password_min") })
        .refine(
          (value) =>
            /[A-Z]/.test(value) &&
            /[a-z]/.test(value) &&
            /[^A-Za-z0-9]/.test(value),
          {
            message: t("password_valid"),
          }
        ),
      confirmPassword: z
        .string()
        .min(1, { message: t("confirm_password_required") }),
    })
    .refine((data) => data.confirmPassword === data.password, {
      path: ["confirmPassword"],
      message: t("confirm_password_match"),
    });

  return schema;
}

export function FormRegister() {
  const t_auth = useTranslations("Auth");
  const t = useTranslations();
  const FormSchema = createFormSchema(t_auth);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      profileImage: undefined as unknown as File | undefined,
      fullName: "",
      email: "",
      phoneNumber: "",
      country: "",
      password: "",
      confirmPassword: "",
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

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
          name="profileImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                {t_auth("profile_image")}{" "}
                <span className="text-xs text-muted-foreground">
                  ({t("optional")})
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                  ref={(e) => {
                    field.ref(e);
                    fileInputRef.current = e;
                  }}
                />
              </FormControl>
              <div
                className={`bg-white-100 p-4 rounded-[10px] w-[200px] h-[200px] flex flex-col items-center justify-center gap-[15px] tracking-wide`}
              >
                {field.value ? (
                  <div className="rounded-[10px] overflow-hidden">
                    <img
                      src={URL.createObjectURL(field.value)}
                      alt="preview"
                      className="object-contain w-full h-full cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    />
                  </div>
                ) : (
                  <>
                    <img
                      src="/assets/icons/cloud.svg"
                      alt=""
                      className="w-20"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm shadow bg-main text-white hover:bg-main-100 cursor-pointer uppercase tracking-wide"
                    >
                      {t_auth("upload_photo")}
                    </button>
                  </>
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                {t_auth("full_name")}
              </FormLabel>
              <FormControl>
                <Input placeholder={t_auth("full_name")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                {t_auth("email")}
              </FormLabel>
              <FormControl>
                <Input placeholder={t_auth("email")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                {t_auth("phone_number")}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t_auth("phone_number")}
                  type="tel"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                {t_auth("country")}
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t_auth("country")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="GB">United Kingdom</SelectItem>
                  <SelectItem value="AE">United Arab Emirates</SelectItem>
                  <SelectItem value="SA">Saudi Arabia</SelectItem>
                  <SelectItem value="EG">Egypt</SelectItem>
                  <SelectItem value="MA">Morocco</SelectItem>
                </SelectContent>
              </Select>
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
                {t_auth("password")}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t_auth("password")}
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                {t_auth("confirm_password")}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t_auth("confirm_password")}
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-main hover:bg-main-100 ms-auto flex justify-center items-center uppercase text-[0.9rem] tracking-widest p-5"
        >
          {t_auth("register")}
        </Button>
      </form>
    </Form>
  );
}

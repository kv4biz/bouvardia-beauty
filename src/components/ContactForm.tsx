"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useEmail } from "@/hooks/use-email";
import Image from "next/image";

// Create a Zod schema for the contact form.
const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string(), // phone field defined here
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

// Infer the form data type from the schema.
export type FormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "", // Added default value for phone
      message: "",
    },
  });
  const { sendEmail, loading, error } = useEmail();

  const onSubmit = async (data: FormData) => {
    try {
      await sendEmail(data);
      methods.reset(); // Reset the form after successful submission.
    } catch (err) {
      // Handle error if needed.
    }
  };

  return (
    <div className="w-full py-10 md:py-16">
      <div className="flex container mx-auto items-start justify-center lg:gap-16 px-4 md:px-10">
        <div className="hidden lg:block h-[480px] w-[400px] rounded-lg shadow-sm overflow-hidden">
          <Image
            src="/contactForm.png"
            height={600}
            width={400}
            alt="contact image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="inter flex flex-col gap-0 max-w-md text-center lg:text-left">
            <p className="text-lg text-tan font-semibold">Get In Touch</p>
            <h1 className="text-3xl tracking-wider font-bold">
              Lets discuss your booking right now.
            </h1>
          </div>
          <Form {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="inter flex flex-col gap-4"
            >
              <FormField
                control={methods.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        className="w-full border border-gray-300 rounded-md p-4 text-sm placeholder:font-light"
                        placeholder="Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        className="w-full border border-gray-300 rounded-md p-4 text-sm placeholder:font-light"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        className="w-full border border-gray-300 rounded-md p-4 text-sm placeholder:font-light"
                        placeholder="Phone"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <textarea
                        className="w-full border border-gray-300 rounded-md p-4 text-sm placeholder:font-light"
                        placeholder="Message"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant={"secondary"}
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </Button>
              {error && (
                <p className="text-red-500 text-center text-sm">{error}</p>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

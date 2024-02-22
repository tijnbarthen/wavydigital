"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { ArrowRight, Loader2 } from "lucide-react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "./ui/use-toast";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "This field is required",
  }),
  phone: z.string().min(10, {
    message: "This field is required",
  }),
  company: z.string().min(3, {
    message: "This field is required",
  }),
  email: z.string().email({
    message: "This field is required",
  }),
  message: z.string().min(3, {
    message: "This field is required",
  }),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions",
  }),
});

const ContactForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    if (values.terms === false) return;

    try {
      const currentDate = new Date().toLocaleString("nl-NL", {
        timeZone: "Europe/Amsterdam",
      });

      const response = await fetch("/api/airtable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                firstName: values.name,
                company: values.company,
                email: values.email,
                phone: values.phone,
                // ...values,
                postDate: currentDate,
              },
            },
          ],
        }),
      });

      console.log("this is the reposne", response);

      if (response.status !== 200) throw new Error("Someting went wrong");
      else {
        toast({
          title: "Thank you!",
          description: "We will get back to you asap.",
        });

        window.scrollTo({ top: 0, behavior: "smooth" });

        form.reset();

        return response;
      }

      // router.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops",
        description: "Something went wrong. Try again later.",
      });
      console.log(error);
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <FadeInStagger
      faster
      id="contact"
      className="max-w-4xl mx-auto px-4 items-center justify-center flex flex-col space-y-8 pt-32"
    >
      <FadeIn>
        <h2 className="font-bold text-4xl md:text-5xl tracking-tight text-center">
          Ready to discuss your next big idea?
        </h2>
      </FadeIn>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full pt-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <FadeIn className="flex-1">
              <FormField
                disabled={isLoading}
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="font-semibold">Name</FormLabel>
                    <FormControl>
                      <Input {...field} type="name" />
                    </FormControl>
                    {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FadeIn>
            <FadeIn className="flex-1">
              <FormField
                disabled={isLoading}
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="f">
                    <FormLabel className="font-semibold">
                      Company Name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FadeIn>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <FadeIn className="flex-1">
              <FormField
                disabled={isLoading}
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="font-semibold">Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FadeIn>

            <FadeIn className="flex-1">
              <FormField
                disabled={isLoading}
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="font-semibold">Phone</FormLabel>
                    <FormControl>
                      <Input {...field} type="phone" />
                    </FormControl>
                    {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FadeIn>
          </div>
          <FadeIn>
            <FormField
              disabled={isLoading}
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="font-semibold">Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormDescription>
                    Tell us everything relevant we should know.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FadeIn>
          <FadeIn>
            <FormField
              disabled={isLoading}
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I accept the{" "}
                      <Link href="#" className="text-blue-500">
                        privacy policy
                      </Link>{" "}
                      of WavyDigital
                    </FormLabel>
                    {/* <FormDescription></FormDescription> */}
                  </div>
                </FormItem>
              )}
            />
          </FadeIn>
          <FadeIn>
            <div>
              <Button
                variant="outline"
                size={"lg"}
                type="submit"
                className=" mt-6 rounded-full  font-bold text-base gap-2 group bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-80"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin h-4 w-4" />
                ) : (
                  <>
                    Submit
                    <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                  </>
                )}
              </Button>
            </div>
          </FadeIn>
        </form>
      </Form>
    </FadeInStagger>
  );
};
export default ContactForm;

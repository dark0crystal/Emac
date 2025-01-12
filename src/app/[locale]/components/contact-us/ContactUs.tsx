"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { MotionDiv } from "../MotionDiv";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; // Import the resolver for Zod

const schema = z.object({
  email: z.string().email("Invalid email address"),
  emailSubject: z.string().min(8, "Subject must be at least 8 characters"),
  emailText: z.string().min(20, "Message must be at least 20 characters"),
});

type FormFields = z.infer<typeof schema>;

export default function ContactUs() {
  const t = useTranslations("contact-us");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema), // Use Zod schema for validation
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="h-fit">
      <div className="flex flex-col">
        {/* Contact form */}
        <MotionDiv
          className="flex items-center justify-center min-h-screen bg-gray-100"
          initial={{ opacity: 0, y: 150 }} // Initial state
          whileInView={{ opacity: 1, y: 0 }} // Animation while in view
          viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full max-w-lg bg-white shadow-md rounded-lg p-6 space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Contact Us
            </h2>

            {/* Email Field */}
            <input
              {...register("email")}
              type="text"
              placeholder={t("formPlaceHolders.email")}
              className="h-12 px-4 border border-sky-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            {errors.email && (
              <div className="text-red-400">{errors.email.message}</div>
            )}

            {/* Subject Field */}
            <input
              {...register("emailSubject")}
              type="text"
              placeholder={t("formPlaceHolders.subject")}
              className="h-12 px-4 border border-sky-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            {errors.emailSubject && (
              <div className="text-red-400">{errors.emailSubject.message}</div>
            )}

            {/* Message Field */}
            <textarea
              {...register("emailText")}
              placeholder={t("formPlaceHolders.text")}
              className="h-28 px-4 py-2 border border-sky-700 rounded-3xl resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
            {errors.emailText && (
              <div className="text-red-400">{errors.emailText.message}</div>
            )}

            <button
              type="submit"
              className="w-full h-12 bg-sky-700 text-white font-semibold rounded-3xl hover:bg-sky-800 transition"
            >
              {t("formLabels.submit")}
            </button>
          </form>
        </MotionDiv>

        {/* Social network links */}
        <MotionDiv
          className=""
          initial={{ opacity: 0, y: 150 }} // Initial state
          whileInView={{ opacity: 1, y: 0 }} // Animation while in view
          viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
        >
          {/* WhatsApp icon */}
          <div></div>
          {/* Phone number icon */}
          <div></div>
        </MotionDiv>
      </div>
    </div>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/lib/web3forms";

type FormStatus = "idle" | "sending" | "success" | "error";

type ContactFormProps = {
  subject: string;
  brand: "easy-recipe" | "active-agent" | "paste-please" | "fitness-share";
};

const BRAND_STYLES = {
  "easy-recipe": {
    button:
      "bg-brand-orange hover:bg-brand-orange-hover",
  },
  "active-agent": {
    button: "bg-brand-agent hover:bg-brand-agent-hover",
  },
  "paste-please": {
    button: "bg-brand-paste hover:bg-brand-paste-hover",
  },
  "fitness-share": {
    button: "bg-brand-fitness hover:bg-brand-fitness-hover",
  },
} as const;

export function ContactForm({ subject, brand }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-white";

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
      <h2
        className="mb-4 text-black dark:text-white"
        style={{ fontSize: "28px", fontWeight: 700 }}
      >
        Contact Support
      </h2>
      <p
        className="mb-6 text-black dark:text-white"
        style={{ fontSize: "15px", lineHeight: "1.6", letterSpacing: "-0.01em" }}
      >
        Have a question or need help? Send us a message and we&apos;ll get back to
        you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor={`${brand}-name`}
            className="mb-2 block text-black dark:text-white"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            Name
          </label>
          <input
            type="text"
            id={`${brand}-name`}
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className={inputClass}
            style={{ fontSize: "15px" }}
          />
        </div>
        <div>
          <label
            htmlFor={`${brand}-email`}
            className="mb-2 block text-black dark:text-white"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            Email
          </label>
          <input
            type="email"
            id={`${brand}-email`}
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className={inputClass}
            style={{ fontSize: "15px" }}
          />
        </div>
        <div>
          <label
            htmlFor={`${brand}-message`}
            className="mb-2 block text-black dark:text-white"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            Message
          </label>
          <textarea
            id={`${brand}-message`}
            name="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={5}
            className={cn(inputClass, "resize-none")}
            style={{ fontSize: "15px" }}
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(
            "rounded-full px-6 py-3 text-white transition-all hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100",
            BRAND_STYLES[brand].button,
          )}
          style={{ fontSize: "15px", fontWeight: 600 }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-green-600" style={{ fontSize: "14px" }}>
            Message sent successfully! We&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500" style={{ fontSize: "14px" }}>
            Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}

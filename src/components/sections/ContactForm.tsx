"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/ui/Icon";
import Mascot from "@/components/ui/Mascot";
import { CONTACT_TOPICS } from "@/lib/pages-data";

interface FormState { name: string; email: string; topic: string; message: string; includeDeviceInfo: boolean }
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const field = "h-12 w-full rounded-2xl border-2 border-[#DDD6FB] bg-white px-4 font-bold";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1 flex items-center gap-1 text-sm font-extrabold text-[#F05A78]">
      <Icon name="alert" size={16} color="#F05A78" />{message}
    </p>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", topic: CONTACT_TOPICS[0], message: "", includeDeviceInfo: false });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((f) => ({ ...f, [key]: value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email.";
    if (form.message.trim().length < 5) next.message = "Please write a short message.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSending(true);
    // Frontend-only: there is no backend, so the message is not sent anywhere.
    await new Promise((r) => setTimeout(r, 600));
    setSending(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <Mascot size={100} happy />
        <h2 className="disp mt-3 text-[28px]">Thanks, we’ll reply soon.</h2>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-4">
      <label className="font-extrabold">
        Name
        <input className={field} value={form.name} onChange={(e) => set("name", e.target.value)} />
        <FieldError message={errors.name} />
      </label>
      <label className="font-extrabold">
        Email
        <input type="email" className={field} value={form.email} onChange={(e) => set("email", e.target.value)} />
        <FieldError message={errors.email} />
      </label>
      <label className="font-extrabold">
        Topic
        <select className={field} value={form.topic} onChange={(e) => set("topic", e.target.value)}>
          {CONTACT_TOPICS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="font-extrabold">
        Message
        <textarea rows={5} className={`${field} h-auto py-3`} value={form.message} onChange={(e) => set("message", e.target.value)} />
        <FieldError message={errors.message} />
      </label>
      <label className="flex items-center gap-2 font-bold">
        <input type="checkbox" className="h-5 w-5 accent-[#6C4DF6]" checked={form.includeDeviceInfo} onChange={(e) => set("includeDeviceInfo", e.target.checked)} />
        Include device info to help us fix bugs
      </label>
      <button disabled={sending} className="btn btn-violet self-start disabled:opacity-60">
        {sending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

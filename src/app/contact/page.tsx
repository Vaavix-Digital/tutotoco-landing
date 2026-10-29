import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contact — Tutotoco",
  description: "Tell us what happened and we will help.",
};

export default function ContactPage() {
  return (
    <div className="wrap sec !pt-6">
      <h1 className="disp h2 text-center">Contact us</h1>
      <div className="mt-10 flex flex-wrap gap-8">
        <div className="card-p min-w-0 flex-[2_1_380px]"><ContactForm /></div>
        <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-5">
          <div className="card-p">
            <span className="tile bg-[#FFD9C8]"><Icon name="mail" /></span>
            <h3 className="disp mt-3 text-xl">Email</h3>
            <p className="muted">Use the form and we will get back to you by email.</p>
          </div>
          <div className="card-p">
            <span className="tile bg-[#D6F7EA]"><Icon name="clock" /></span>
            <h3 className="disp mt-3 text-xl">Response time</h3>
            <p className="muted">We reply as soon as we can.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

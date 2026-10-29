import Accordion from "@/components/ui/Accordion";
import { FAQS } from "@/lib/constants";

export default function FAQSection() {
  return (
    <section id="faq" className="sec mx-auto max-w-[868px] px-6">
      <h2 className="disp h2 mb-8 text-center">Questions</h2>
      <Accordion items={FAQS} />
    </section>
  );
}

import Mascot from "@/components/ui/Mascot";
import StoreButtons from "@/components/ui/StoreButtons";

export default function CTASection() {
  return (
    <section className="bg-[#2A1F4D] py-[72px] text-center text-white">
      <div className="wrap flex flex-col items-center">
        <Mascot size={88} happy />
        <h2 className="disp h2-lg mt-4">Say hello in a new language today.</h2>
        <p className="mb-7 mt-3 text-[19px] text-[#DDD6FB]">Your first lesson takes about three minutes.</p>
        <StoreButtons dark />
      </div>
    </section>
  );
}

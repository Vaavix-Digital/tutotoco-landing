import type { Metadata } from "next";
import DevicePrompt from "@/components/sections/DevicePrompt";
import PhoneQuiz from "@/components/sections/PhoneQuiz";
import QrPlaceholder from "@/components/ui/QrPlaceholder";
import StoreButtons from "@/components/ui/StoreButtons";

export const metadata: Metadata = {
  title: "Download — Tutotoco",
  description: "Get Tutotoco on your phone.",
};

export default function DownloadPage() {
  return (
    <div className="wrap sec !pt-6">
      <div className="flex flex-wrap items-center justify-center gap-12">
        <div className="max-w-[520px] flex-[1_1_320px]">
          <h1 className="disp h2">Get Tutotoco on your phone</h1>
          <DevicePrompt />
          <div className="mt-6"><StoreButtons external /></div>
          <div className="card-p mt-8 flex w-fit flex-col items-center gap-2">
            <QrPlaceholder />
            <span className="muted text-sm font-bold">Scan with your phone</span>
          </div>
        </div>
        <div className="flex flex-[1_1_300px] justify-center"><PhoneQuiz /></div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { CircleOff, FlaskConical, Network } from "lucide-react";

import { StepContainer, StepIconBubble, StepReveal, StepSection } from "./StepAheadPrimitives";

const stats = [
  { icon: FlaskConical, value: "89.8M", label: "Adults in India living with diabetes, IDF 2024" },
  { icon: CircleOff, value: "10.5%", label: "Adult diabetes prevalence reported by IDF" },
  { icon: Network, value: "Scalable", label: "Designed so more clinics can be equipped and supported" },
];

function DemoVideoPanel() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 960;
    canvas.height = 540;
    const context = canvas.getContext("2d");

    if (!context || !canvas.captureStream) {
      return;
    }

    let frame = 0;
    let raf = 0;

    const draw = () => {
      frame += 1;
      const pulse = (Math.sin(frame / 24) + 1) / 2;
      const sweep = (frame % 220) / 220;

      context.fillStyle = "#f6fcff";
      context.fillRect(0, 0, canvas.width, canvas.height);

      const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#ffffff");
      gradient.addColorStop(0.55, "#eaf8ff");
      gradient.addColorStop(1, "#eefcf3");
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "rgba(20,121,201,0.1)";
      context.beginPath();
      context.arc(770, 120, 130 + pulse * 28, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = "#073b66";
      context.font = "700 42px Arial";
      context.fillText("Step-Ahead Demo", 58, 78);
      context.fillStyle = "#48738f";
      context.font = "600 22px Arial";
      context.fillText("Clinic launch pathway preview", 60, 116);

      const stages = ["Setup", "Training", "Inventory", "Launch", "Growth"];
      stages.forEach((stage, index) => {
        const x = 80 + index * 170;
        const y = 250 + Math.sin(frame / 30 + index) * 10;
        const active = sweep * stages.length > index;

        context.fillStyle = active ? "#1479c9" : "#d9ecf8";
        context.beginPath();
        context.arc(x, y, active ? 34 : 27, 0, Math.PI * 2);
        context.fill();

        context.strokeStyle = active ? "#79d6c1" : "#b8dff5";
        context.lineWidth = 5;
        if (index < stages.length - 1) {
          context.beginPath();
          context.moveTo(x + 42, y);
          context.lineTo(x + 128, 250 + Math.sin(frame / 30 + index + 1) * 10);
          context.stroke();
        }

        context.fillStyle = active ? "#ffffff" : "#1479c9";
        context.font = "700 24px Arial";
        context.fillText(String(index + 1), x - 7, y + 8);

        context.fillStyle = "#073b66";
        context.font = "700 20px Arial";
        context.fillText(stage, x - 34, y + 76);
      });

      context.fillStyle = "rgba(255,255,255,0.72)";
      context.strokeStyle = "#c9e6f8";
      context.lineWidth = 2;
      context.beginPath();
      context.roundRect(58, 385, 844, 86, 18);
      context.fill();
      context.stroke();
      context.fillStyle = "#1479c9";
      context.font = "700 26px Arial";
      context.fillText("Clinic-ready program motion preview", 92, 438);
      context.fillStyle = "#5cb85c";
      context.fillRect(584, 418, 220 * (0.25 + pulse * 0.75), 10);

      raf = requestAnimationFrame(draw);
    };

    draw();
    const stream = canvas.captureStream(24);
    const video = videoRef.current;

    if (video) {
      video.srcObject = stream;
      video.play().catch(() => undefined);
    }

    return () => {
      cancelAnimationFrame(raf);
      stream.getTracks().forEach((track) => track.stop());
      if (video) {
        video.srcObject = null;
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[1rem] bg-[linear-gradient(135deg,#f7fcff,#eefbf2)] shadow-[0_20px_58px_rgba(20,121,201,0.1)] ring-1 ring-[#cfe8f8]">
      <video
        ref={videoRef}
        aria-label="Step-Ahead clinic setup demo video"
        autoPlay
        className="aspect-video w-full object-cover"
        loop
        muted
        playsInline
      />
    </div>
  );
}

export function StepAheadWhy() {
  return (
    <StepSection className="bg-white py-14">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-[#d7ebfa]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#e6f2fb]" />
      <StepContainer>
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <StepReveal>
            <h2 className="max-w-[620px] font-heading text-[clamp(1.85rem,3vw,3rem)] font-bold leading-[1.04] text-primary-dark">
              Bring structured diabetic foot care closer to patients.
            </h2>
            <p className="mt-5 max-w-[675px] text-[0.98rem] leading-8 text-text-secondary">
              Many clinics lack dedicated tools, trained teams and standard workflows for diabetic foot care. Step-Ahead brings these essentials together so clinics can launch sooner and support patients closer to home.
            </p>
            <div className="mt-10 grid max-w-[650px] gap-5 md:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div className="min-w-0 rounded-[0.85rem] bg-[#f8fcff] p-3 md:bg-transparent md:p-0" key={stat.value}>
                    <StepIconBubble className="h-12 w-12 border-transparent shadow-none" size="sm">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </StepIconBubble>
                    <p className="mt-4 font-heading text-[2rem] font-bold leading-none text-primary">{stat.value}</p>
                    <p className="mt-2 max-w-[10rem] text-xs leading-5 text-text-secondary">{stat.label}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-7 max-w-[520px] text-[0.68rem] leading-5 text-text-muted">
              Source:{" "}
              <a className="font-bold text-primary hover:underline" href="https://idf.org/our-network/regions-and-members/south-east-asia/members/india/" rel="noreferrer" target="_blank">
                International Diabetes Federation India country profile, 2024
              </a>
              .
            </p>
          </StepReveal>

          <StepReveal delay={0.08}>
            <DemoVideoPanel />
          </StepReveal>
        </div>
      </StepContainer>
    </StepSection>
  );
}

import { MessageCircle } from "lucide-react";

export function Splash() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="animate-wa-pop flex h-24 w-24 items-center justify-center rounded-[28px] bg-wa-green shadow-lg">
        <MessageCircle className="h-14 w-14 text-wa-green-foreground" />
      </div>
      <div className="absolute bottom-16 text-center">
        <p className="text-sm text-foreground/60">from</p>
        <p className="text-2xl font-bold text-wa-green">
          Jiya&apos;s Portfolio
        </p>
      </div>
    </div>
  );
}

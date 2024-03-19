import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
const font = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

export const Header = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h1
        className={cn("text-3xl font-semibold drop-shadow-md", font.className)}
      >
        🔓Auth
      </h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

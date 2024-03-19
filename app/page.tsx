import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400  to-blue-800">
      <div className="container">
        <div className="space-y-6 text-center">
          <h1
            className={cn(
              "font-semibold text-6xl text-white drop drop-shadow-md",
              font.className
            )}
          >
            🔏Auth
          </h1>
          <p className="text-white text-lg">
            A simple authentication service using NextJs and Next Auth.
          </p>
          <div>
            <LoginButton>
              <Button variant={"secondary"} size={"lg"}>
                Sign in
              </Button>
            </LoginButton>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "redirect" | "modal";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  asChild,
  mode = "redirect",
}: LoginButtonProps) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <p>TODO: Handle modal</p>;
  }

  return <span onClick={handleButtonClick}>{children}</span>;
};

export default LoginButton;

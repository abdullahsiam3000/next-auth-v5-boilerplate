import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400  to-blue-800">
      {children}
    </div>
  );
};

export default AuthLayout;

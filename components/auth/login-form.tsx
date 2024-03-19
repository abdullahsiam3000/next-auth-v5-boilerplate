import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      description="Welcome Back"
      backButtonHref="/auth/register"
      backButtonText="Don't have an account? Click here to register."
      socials
    >
      <div>Login Form</div>
    </CardWrapper>
  );
};

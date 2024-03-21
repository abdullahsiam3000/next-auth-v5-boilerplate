import { CheckIcon } from "@radix-ui/react-icons";

export const FormSuccess = ({ message }: { message: string | undefined }) => {
  if (!message) {
    return null;
  }
  return (
    <div className="bg-emerald-300/55 flex gap-3 items-center py-4 px-2 border rounded-md">
      <CheckIcon className="text-emerald-500" />
      <p className="text-emerald-500">{message}</p>
    </div>
  );
};

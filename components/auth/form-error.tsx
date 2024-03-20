import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const FormError = ({ message }: { message: string }) => {
  if (message.length <= 0) {
    return null;
  }
  return (
    <div className="bg-rose-200 flex gap-x-3 items-center py-3 px-2 border rounded-md text-destructive ">
      <ExclamationTriangleIcon className="h-5 w-5" />
      <p className="text-destructive mb-1">{message}</p>
    </div>
  );
};

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

export const SocialButtons = () => {
  return (
    <div className="flex justify-between w-full gap-1">
      <Button className="w-full" variant={"outline"} size={"lg"}>
        <FcGoogle size={"1.5em"} />
      </Button>
      <Button className="w-full" variant={"outline"} size={"lg"}>
        <FaGithub size={"1.5em"} />
      </Button>
    </div>
  );
};

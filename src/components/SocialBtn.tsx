import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "./ui/button";

const SocialBtn = () => {
  return (
    <div className="flex gap-2 md:gap-4">
      <Button
        size={"icon"}
        variant={"icon"}
        className="flex items-center justify-center rounded-full bg-white text-black"
      >
        <FaFacebookF />
      </Button>
      <Button
        size={"icon"}
        variant={"icon"}
        className="flex items-center justify-center rounded-full bg-white text-black"
      >
        <FaTwitter />
      </Button>
      <Button
        size={"icon"}
        variant={"icon"}
        className="flex items-center justify-center rounded-full bg-white text-black"
      >
        <FaInstagram />
      </Button>
      <Button
        size={"icon"}
        variant={"icon"}
        className="flex items-center justify-center rounded-full bg-white text-black"
      >
        <FaSnapchatGhost />
      </Button>
    </div>
  );
};

export default SocialBtn;

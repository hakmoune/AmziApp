import { Link } from "react-router-dom";
import { Album } from "lucide-react";

const Logo = () => {
  return (
    <Link to="/" className="font-bold flex items-center gap-1">
      <Album />
      Alpha/App.
    </Link>
  );
};

export default Logo;

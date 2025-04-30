import { Link } from "react-router-dom";
import { Bell } from "lucide-react";

const Notification = () => {
  return (
    <Link to="">
      <span className="absolute top-0 left-2 flex items-center justify-center text-white text-xs font-bold bg-red-500 rounded-full w-4 h-4">
        4
      </span>
      <Bell className="w-5 h-5 text-gray-700" />
    </Link>
  );
};

export default Notification;

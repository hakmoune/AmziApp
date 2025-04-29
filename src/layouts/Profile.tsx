import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Profile = () => {
  return (
    <div className="flex items-center gap-1.5">
      <Avatar>
        <AvatarImage className="w-8" src="women-avatar.png" alt="User avatar" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <p className="text-sm font-bold">A.Oumaima</p>
    </div>
  );
};

export default Profile;

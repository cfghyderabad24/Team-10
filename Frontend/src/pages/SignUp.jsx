import { Register } from "../components/Register";
import { SideBar } from "../components/SideBar";
import { useMediaQuery } from "react-responsive";

export const Signup = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>{isLargeScreen ? <SideBar /> : null}</div>
        <div>
          <Register />
        </div>
      </div>
    </div>
  );
};

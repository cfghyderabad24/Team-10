import { Login } from "../components/Login";
import { SideBar } from "../components/SideBar";
import { useMediaQuery } from "react-responsive";

export const Signin = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>{isLargeScreen ? <SideBar /> : null}</div>
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
};

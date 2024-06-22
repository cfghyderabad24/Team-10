import { Login } from "../components/Login";
import { SideBar } from "../components/SideBar";
import { useMediaQuery } from "react-responsive";

export const Signin = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  // Inline styles for background image
  const backgroundImageStyle = {
    backgroundImage: "url('https://img.freepik.com/premium-photo/portrait-cute-laughing-little-boy-yellow-background-copy-space_137321-361.jpg?w=360')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    marginTop: "10px",
  };

  // Tailwind CSS classes for other styles
  const gridLayoutClasses = "grid grid-cols-1 lg:grid-cols-2";

  return (
    <div style={backgroundImageStyle}>
      <div className={gridLayoutClasses}>
        <div></div>
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
};

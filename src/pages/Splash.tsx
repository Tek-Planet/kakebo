import { logo } from "../assets";

function Splash() {
  return (
    <div className="h-screen  flex flex-wrap content-center justify-center">
      <img src={logo} alt="hoobank" className="object-contain rotate" />
    </div>
  );
}

export default Splash;

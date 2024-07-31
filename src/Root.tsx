import styles from "./style";
import { DeskTopNavbar, Footer, Navbar } from "./components";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { arrowup } from "./assets";
// import { useAppSelector } from "./rtk/hooks";

const Root = () => {
  // const { loading } = useAppSelector((state) => state.user);
  // return loading screen
  // if (loading) return <Splash />;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      // Calculate scroll position as a percentage
      const scrollPercentage =
        (scrolled / (documentHeight - windowHeight)) * 100;

      setIsScrolled(scrollPercentage > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-primary w-full overflow-hidden relative"
    >
      {/* desktop nvbar */}
      {!isScrolled && (
        <div
          className={`bg-blueprimary  ${styles.paddingX} ${styles.flexCenter}`}
        >
          <div className={`hidden md:flex ${styles.boxWidth}`}>
            <DeskTopNavbar />
          </div>
        </div>
      )}

      {/* general navbar  */}
      <div
        className={`${styles.paddingX} ${
          styles.flexCenter
        }  top-0 w-full z-50 ${isScrolled && "fixed"} bg-white  `}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* container for other app content */}

      <div className={` ${styles.flexCenter}`}>
        <div className={` ${styles.boxWidth}`}>
          <Outlet />
        </div>
      </div>

      <div
        className={`bg-blueprimary ${styles.paddingX} ${styles.flexCenter} `}
      >
        {/* general footer */}
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

      {/* only show this arrow if user have scrolled up to 20% of the page */}
      {isScrolled && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-5 sm:right-10 bottom-10 rounded-full h-8 w-8 md:h-10 sm:w-10 border-2"
        >
          <img src={arrowup} alt="arrow-up" />
        </div>
      )}
    </motion.div>
  );
};

export default Root;

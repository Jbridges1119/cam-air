import { useEffect } from "react";
// import { useLocation } from "react-router";
import { useLocation } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}
const ScrollToTop: React.FC<Props> = ({children}) => {
  // const location = useLocation();
  const { pathname } = useLocation();
  console.log(pathname)
  useEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [pathname]);

  return <>{children}</>
};

export default ScrollToTop;
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}
/**
 * Main layout component that wraps the Header, Footer and children components
 *
 * @param children The children components to render
 */
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="h-full flex-grow overflow-auto ">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
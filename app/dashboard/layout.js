
import { AppSidebar } from "./add-property/_components/sideBar";
import { Navbar } from "../(home)/_components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Dashboard = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex flex-col">
        <div className="w-full">
          <Navbar />
        </div>

        <div className="flex flex-row">
          <AppSidebar />
          {children}
        </div>
      </div>

    </SidebarProvider >
  );
};

export default Dashboard;


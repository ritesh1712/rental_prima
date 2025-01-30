import React, { ReactNode } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import { Plus } from "lucide-react";


interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden text-black">
      <Sidebar />
      <div className="w-full bg-gray-100">
        <Navbar isLoggedIn={false} />
        <div className="p-5 h-[90%] overflow-auto scrollbar-hide">
        {children}
      </div>
      </div>
            <button className='fixed right-10 bottom-5 bg-black text-white px-4 py-2 flex justify-center items-center gap-3'><Plus /> add new list</button>
      
    </div>
  );
};

export default Container;

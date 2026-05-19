"use client"

import PublicationProject from "@/components/PublicationProject";
import Home from "@/components/Screens/Home";
import { useAuth } from "@/context/auth-context";
import { withAuth } from "@/hooks/withAuth";
import { UserRole } from "@/types/user-role.enum";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PublicationPage = () => {
    
    return(
        <main className="flex flex-1 min-w-0 h-auto bg-[#FBFBFD]">
            <PublicationProject/>
        </main>
    );
}

export default withAuth(PublicationProject, UserRole.CUSTOMER);
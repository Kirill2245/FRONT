"use client"

import SearchMastersSection from "@/components/Screens/SearchMastersSection";
import { withAuth } from "@/hooks/withAuth";
import { UserRole } from "@/types/user-role.enum";

const SearchMasters = () => {
    return(
        <main className="flex flex-1 min-w-0 h-auto">
            <SearchMastersSection/>
        </main>
    );
}

export default withAuth(SearchMasters, UserRole.CUSTOMER)
"use client"

import Courses from "@/components/courses"
import { withAuth } from "@/hooks/withAuth"
import { UserRole } from "@/types/user-role.enum"

function CoursesPage(){
    return (
        <main>
            <Courses/>
        </main>
    )
}

export default withAuth(CoursesPage)
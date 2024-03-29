import { lusitana } from "@/fonts";
import Search from "../ui/search";
import { Suspense } from "react";
import StudentsDashboardTable from "../ui/dashboard/students-dashboard-table";
import { InvoicesTableSkeleton } from "../ui/skeletons";

export default function DashboardPage() {
    return (<div className="w-full">
        <div className="flex w-full items-center justify-between">
            <h1 className={`${lusitana.className} text-2xl`}>Dashboard Alumnos y Clases</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search invoices..." />

        </div>
        
            <StudentsDashboardTable />
        

    </div>)
}
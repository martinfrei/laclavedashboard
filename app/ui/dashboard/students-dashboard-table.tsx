import Image from 'next/image';
import { UpdateInvoice, AddClass } from '@/app/ui/dashboard/buttons';
import { ClassStatus } from '@/app/ui/dashboard/class-status';
import { formatDateToLocal } from '@/app/lib/utils';
import { fetchClassesTakenByStudentSinceLastPayment, fetchStudentDashboardData } from '@/app/lib/data';
import { StudentDashboardRow } from '@/app/lib/definitions';
import { hasTakenAllBoughtClasses, isPurchaseDateValid } from './helper';

export default async function StudentsDashboardTable() {
    const studentsDashboardList: StudentDashboardRow[] = await fetchStudentDashboardData()

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {studentsDashboardList?.map((alumno) => {
                            
                            const lastPurchaseDate = alumno.compras?.[0]?.fecha;

                            const isPurchaseDateValidResult = isPurchaseDateValid(lastPurchaseDate);

                            const classesBought = isPurchaseDateValidResult ? alumno.compras?.[0]?.cantidad || 0 : 0
                            // const classesTakenInTheLastPeriod = isPurchaseDateValidResult ? await fetchClassesTakenByStudentSinceLastPayment(alumno.id, lastPurchaseDate) : 0

                            return (
                                <div
                                    key={alumno.id}
                                    className="mb-2 w-full rounded-md bg-white p-4"
                                >
                                    <div className="flex items-center justify-between border-b pb-4">
                                        <div>
                                            <div className="mb-2 flex items-center">
                                                <p>{alumno.nombre}</p>
                                            </div>
                                            <p className="text-sm text-gray-500">{alumno.email}</p>
                                        </div>
                                        <ClassStatus isValid={isPurchaseDateValidResult && hasTakenAllBoughtClasses(classesBought, 4)} />
                                    </div>
                                    <div className="flex w-full items-center justify-between pt-4">
                                        <div>
                                            <p className="text-xl font-medium">
                                                {classesBought} / {4}
                                            </p>
                                            <p>{formatDateToLocal(alumno.compras?.[0]?.fecha)}</p>
                                        </div>
                                        <div className="flex justify-end gap-2">
                                            <UpdateInvoice id={alumno.id} />
                                            <UpdateInvoice id={alumno.id} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Alumno
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Email
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Clases compradas
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Clases tomadas
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Fecha compra
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Estatus
                                </th>
                                <th scope="col" className="relative py-3 pl-6 pr-3">
                                    <span className="sr-only">Editar</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {studentsDashboardList?.map( (alumno) => {
                                

                                const lastPurchaseDate = alumno.compras?.[0]?.fecha;

                                const isPurchaseDateValidResult = isPurchaseDateValid(lastPurchaseDate);

                                const classesBought = isPurchaseDateValidResult ? alumno.compras?.[0]?.cantidad || 0 : 0
                                // const classesTakenInTheLastPeriod = isPurchaseDateValidResult ? await fetchClassesTakenByStudentSinceLastPayment(alumno.id, lastPurchaseDate) : 0

                                return (
                                    <tr
                                        key={alumno.id}
                                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                    >
                                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                            <div className="flex items-center gap-3">

                                                <p>{alumno.nombre}</p>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {alumno.email}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {classesBought}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {4}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {formatDateToLocal(alumno.compras?.[0]?.fecha)}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            <ClassStatus isValid={isPurchaseDateValidResult && hasTakenAllBoughtClasses(classesBought, 4)} />
                                        </td>
                                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                            <div className="flex justify-end gap-3">
                                                <AddClass id={alumno.id} />
                                                <UpdateInvoice id={alumno.id} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

import { fetchClassesTakenByStudentSinceLastPayment, fetchLastDateOfPayment, fetchStudentDashboardData, fetchStudents, isPaymentValid } from "../lib/data"
import { Random } from './random'
export const StudentsTest = async () => {
    const studentList = await fetchStudents()
    const lastPaymentDateFromStudent = await fetchLastDateOfPayment(123)
    const classesTakenByStudent = await fetchClassesTakenByStudentSinceLastPayment(123, lastPaymentDateFromStudent)
    const isPayValid = await isPaymentValid(123)

    const datos = await fetchStudentDashboardData()

    return (<div>
        <ul>
            {studentList.map(student => <li key={student.id}>{student.nombre}</li>)}
        </ul>
        <p>{`${lastPaymentDateFromStudent?.getFullYear()}-${lastPaymentDateFromStudent?.getMonth()}-${lastPaymentDateFromStudent?.getDate()}`}</p>
        <p>{classesTakenByStudent}</p>
        <p>{isPayValid ? 'Valido' : 'Invalido'}</p>
        <Random data={datos} />
    </div>)
}
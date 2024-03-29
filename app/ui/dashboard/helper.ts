import { PAYMENT_VALIDITY_DAYS } from "@/app/lib/constants"
import dayjs from "dayjs"

const hasTakenAllBoughtClasses = (bought: number, taken: number) => {
    return bought > taken
}

const isPurchaseDateValid = (date?: Date) => {
    if (!date) {
        return false
    }
    
    const currentDate = dayjs()

    const daysBetweenDates = currentDate?.diff(date, 'day')

    return daysBetweenDates <= PAYMENT_VALIDITY_DAYS
}


export {
    hasTakenAllBoughtClasses,
    isPurchaseDateValid
}
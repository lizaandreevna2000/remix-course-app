import { ExpenseData } from "~/utils/types.server";
import { prisma } from "./database.server";

export async function createExpense(expenseData: ExpenseData) {
    try {
        return await prisma.expense.create({data: {
            title: expenseData.title,
            amount: +expenseData.amount,
            date: new Date(expenseData.date)
        }})
    } catch (err) {
        console.error("Error creating expense:", err);
        throw err;
    }
}

export async function getExpenses() {
    try {
        const expenses = await prisma.expense.findMany({orderBy: {date: 'desc'}});
        return expenses;
    } catch (err) {
        console.error("Error creating expense:", err);
        throw err;
    }
}
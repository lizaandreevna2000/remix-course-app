import { ActionFunction } from '@remix-run/node';
import { redirect, useNavigate } from '@remix-run/react';
import type {
  ActionFunctionArgs
} from "@remix-run/node";

import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { createExpense } from '~/data/expenses.server';
import { validateExpenseInput } from '~/data/validation.server';

export default function AddExpensesPage() {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..');
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm action={action} /> 
    </Modal>
  );
}

export const action: ActionFunction = async ({ request } : ActionFunctionArgs) => {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);
  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }
  await createExpense(expenseData);
  return redirect('/expenses');
}
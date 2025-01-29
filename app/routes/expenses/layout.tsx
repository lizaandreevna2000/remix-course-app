const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'First Expense',
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: 'e2',
    title: 'Second Expense',
    amount: 16.99,
    date: new Date().toISOString(),
  },
];

import { Outlet } from '@remix-run/react';
import ExpensesList from '~/components/expenses/ExpensesList';

import styles from '~/styles/expenses.css';
import type { LinksFunction } from "@remix-run/node";
import ExpensesHeader from '~/components/navigation/ExpenesHeader';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles }
];

export default function ExpensesLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}
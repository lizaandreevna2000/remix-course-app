import { Outlet } from '@remix-run/react';
import styles from '~/styles/expenses.css';
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles }
];

export default function ExpensesLayout() {
  return (
    <main> 
      <p>Shared element!</p>
      <Outlet />
    </main>  
  );
}
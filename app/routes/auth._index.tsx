import AuthForm from '~/components/auth/AuthForm';

import styles from '~/styles/auth.css';
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles }
];

export default function AuthPage() {
    return <AuthForm />
  }
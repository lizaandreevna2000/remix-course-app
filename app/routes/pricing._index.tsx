import styles from '~/styles/auth.css';
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles }
];

export default function PricingPage() {
    return <h1>Pricing Page</h1>;
}
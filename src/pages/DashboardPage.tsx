import { logout } from "../lib/auth";

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

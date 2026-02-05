import { redirect } from "next/navigation";
import { getUserSession } from "../auth/actions";


export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const response = await getUserSession();
  if (response?.user) {
    redirect('/');
  }
  return (
    
  <main className="min-h-screen flex items-center justify-center bg-rose-100/60">
    {children}
  </main>
   
  );
}
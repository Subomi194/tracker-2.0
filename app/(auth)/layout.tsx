export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
  <main className="min-h-screen flex items-center justify-center bg-rose-100/60">
    {children}
  </main>
   
  );
}
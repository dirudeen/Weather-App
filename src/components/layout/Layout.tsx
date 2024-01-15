
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className="min-w-[312px] w-screen min-h-screen bg-slate-950 mx-auto py-4">
      {children}
    </main>
  );
}
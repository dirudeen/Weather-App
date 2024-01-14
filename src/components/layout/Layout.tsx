

export default function Layout(Children: React.ReactNode) {
  return (
    <main className="min-w-[312px] w-screen min-h-screen bg-slate-900 flex place-items-center">
      {Children}
    </main>
  );
}
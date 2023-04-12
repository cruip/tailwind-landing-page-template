export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow">

      {children}

    </main>
  )
}

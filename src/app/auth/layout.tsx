export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-2/5 w-1/5 flex-col rounded-[20px] py-5 shadow-auth">
        <div className="flex justify-center">
          <h3>Login</h3>
          <h3>Register</h3>
          {children}
        </div>
      </div>
    </main>
  );
}

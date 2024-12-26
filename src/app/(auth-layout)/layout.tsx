import AuthLayout from "@/components/layouts/auth-layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
};

export default Layout
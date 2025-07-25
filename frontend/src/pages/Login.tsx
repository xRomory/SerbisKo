import { LoginForm } from "@/components/LoginPage/LoginForm";
import LoginHeader from "@/components/LoginPage/LoginHeader";
import LoginInfo from "@/components/LoginPage/LoginInfo";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <div className="flex flex-col lg:w-2/5 w-full">
              <LoginHeader />         
              <LoginForm />
            </div>
            <div className="w-3/5 flex items-center justify-center">
              <LoginInfo />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
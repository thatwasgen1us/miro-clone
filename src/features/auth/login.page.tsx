import { AuthLayout } from "@/features/auth/auth-layouts";
import { LoginForm } from "@/features/auth/login-form";
import { ROUTES } from "@/shared/model/routes";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <AuthLayout
      title="Вход в систему"
      description="Введите свои данные для входа в систему"
      form={<LoginForm />}
      footerText={
        <>
          У вас нет аккаунта?{" "}
          <Link to={ROUTES.REGISTER}>Зарегистрируйтесь</Link>
        </>
      }
    ></AuthLayout>
  );
}

export const Component = LoginPage;

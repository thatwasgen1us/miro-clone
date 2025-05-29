import { AuthLayout } from "@/features/auth/auth-layouts";
import { RegisterForm } from "@/features/auth/register-form";
import { ROUTES } from "@/shared/model/routes";
import { Link } from "react-router-dom";

function RegisterPage() {
  

  return (
    <AuthLayout
      title="Регистрация"
      description="Введите ваш email и пароль для регистрации"
      form={<RegisterForm />}
      footerText={
        <>
          Уже есть аккаунт? <Link to={ROUTES.LOGIN}>Войти</Link>
        </>
      }
    ></AuthLayout>
  );
}

export const Component = RegisterPage;

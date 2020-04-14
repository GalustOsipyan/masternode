import React from 'react';
import { EmptyLayout } from '../../layouts/EmptyLayout';
import { LoginForm } from '../../components/LoginForm';
import { FormWrapper } from '../../components/FormWrapper';

const LoginPage = () => {
  return (
    <EmptyLayout>
      <FormWrapper topHeading='Welcome back' bottomHading='Log in to your account to continue'>
        <LoginForm/>
      </FormWrapper>
    </EmptyLayout>
  );
};

export default LoginPage;

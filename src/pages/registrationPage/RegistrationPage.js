import React from 'react';
import { EmptyLayout } from '../../layouts/EmptyLayout';
import './RegistrationPage.scss';
import { RegistrationForm } from '../../components/RegistrationForm';
import { FormWrapper } from '../../components/FormWrapper';

const RegistrationPage = () => {
  return (
    <EmptyLayout>
      <FormWrapper topHeading='Create account' bottomHading={ `It's free and easy` }>
        <RegistrationForm/>
      </FormWrapper>
    </EmptyLayout>
  );
};

export default RegistrationPage;

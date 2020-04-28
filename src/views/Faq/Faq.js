import React from 'react';
import './Faq.scss';
import { DashboardContent } from '../../components/DashboardContent';
import FaqListItem from '../../components/FaqListItem/FaqListItem';

const Faq = () => {
  return (
    <div className='Faq d-flex flex-column'>
      <DashboardContent>
        <h2 className='text-center'>FAQ</h2>

        <FaqListItem heading={ 'GENERAL QUESTIONS' }/>
        <FaqListItem heading={ 'SHARED MASTERNODES' }/>
        <FaqListItem heading={ 'HOSTING' }/>
      </DashboardContent>
    </div>
  );
};

export default Faq;

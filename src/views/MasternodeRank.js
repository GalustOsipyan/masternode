import React from 'react';
import { CurrencyToggleButtons } from '../components/CurrencyToggleButtons';
import { SearchInput } from '../components/SearchInput';
import { DashboardNavbar } from '../components/DashboardNavbar';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { DashboardContent } from '../components/DashboardContent';

const MasternodeRank = () => {
  return (
    <DashboardLayout>
      <DashboardContent>
        <SearchInput/>
        <CurrencyToggleButtons/>
        <ul>
          { new Array(100).fill(3).map((it, i) => (
            <li key={ i }>item { i }</li>
          )) }
        </ul>
      </DashboardContent>
    </DashboardLayout>
  );
};

export default MasternodeRank;

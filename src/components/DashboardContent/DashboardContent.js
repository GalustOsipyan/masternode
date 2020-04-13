import React from 'react';
import { DashboardNavbar } from '../DashboardNavbar';
import './DashboardContent.scss';
import { SearchInput } from '../SearchInput';
import { CurrencyToggleButton } from '../CurrencyToggleButton';

import ArrowToggleIcon from '../../assets/icons/currency-arrow-toggle-icon.png';

export const DashboardContent = () => {

  const arr1 = new Array(3).fill(1);
  const arr2 = new Array(5).fill(2);

  return (
    <div className='DashboardContent'>
      <DashboardNavbar/>
      <SearchInput/>
      <div className='currency-toggle-section d-flex justify-content-between align-items-center'>

        { arr1.map((it, i) => (
          <CurrencyToggleButton
            key={ i }
            text='Coin name'
            src={ ArrowToggleIcon }
          />
        )) }

        <div className="progress-text">
          Progress
        </div>

        { arr2.map((it, i) => (
          <CurrencyToggleButton
            key={ i }
            text='Coin name'
            src={ ArrowToggleIcon }
          />
        )) }

      </div>

      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
        <li>item6</li>
        <li>item7</li>
        <li>item8</li>
        <li>item9</li>
        <li>item10</li>
        <li>item11</li>
        <li>item12</li>
        <li>item13</li>
        <li>item14</li>
        <li>item15</li>
        <li>item16</li>
        <li>item17</li>
        <li>item18</li>
        <li>item19</li>
        <li>item20</li>
        <li>item21</li>
        <li>item22</li>
        <li>item23</li>
        <li>item24</li>
        <li>item25</li>
        <li>item26</li>
        <li>item27</li>
        <li>item28</li>
        <li>item29</li>
        <li>item30</li>
        <li>item31</li>
        <li>item32</li>
        <li>item33</li>
        <li>item34</li>
        <li>item35</li>
        <li>item36</li>
        <li>item37</li>
        <li>item38</li>
        <li>item39</li>
        <li>item40</li>
        <li>item41</li>
        <li>item42</li>
        <li>item43</li>
        <li>item44</li>
        <li>item45</li>
        <li>item46</li>
        <li>item47</li>
        <li>item48</li>
        <li>item49</li>
        <li>item50</li>
        <li>item51</li>
        <li>item52</li>
        <li>item53</li>
        <li>item54</li>
        <li>item55</li>
        <li>item56</li>
        <li>item57</li>
        <li>item58</li>
        <li>item59</li>
        <li>item60</li>
        <li>item61</li>
        <li>item62</li>
        <li>item63</li>
        <li>item64</li>
        <li>item65</li>
        <li>item66</li>
        <li>item67</li>
        <li>item68</li>
        <li>item69</li>
        <li>item70</li>
        <li>item71</li>
        <li>item72</li>
        <li>item73</li>
        <li>item74</li>
        <li>item75</li>
        <li>item76</li>
        <li>item77</li>
        <li>item78</li>
        <li>item79</li>
        <li>item80</li>
        <li>item81</li>
        <li>item82</li>
        <li>item83</li>
        <li>item84</li>
        <li>item85</li>
        <li>item86</li>
        <li>item87</li>
        <li>item88</li>
        <li>item89</li>
        <li>item90</li>
        <li>item91</li>
        <li>item92</li>
        <li>item93</li>
        <li>item94</li>
        <li>item95</li>
        <li>item96</li>
        <li>item97</li>
        <li>item98</li>
        <li>item99</li>
        <li>item100</li>
      </ul>
    </div>
  );
};


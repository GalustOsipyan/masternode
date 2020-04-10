import React, { Component } from 'react';
import Select from 'react-select';
import './MySelect.scss';

const options = [
   { value: 'english', label: 'English' },
   { value: 'spanish', label: 'Spanish' },
   { value: 'russian', label: 'Russian' },
];

const customStyles = {
   option: (provided, state) => ({
      ...provided,
      color: 'black',
      padding: 20,
   }),

   container: (provided, state) => ({
      ...provided,
      width: 157,
      height: 50,
   }),
   group: (provided, state) => ({
      ...provided,
      background: 'yellow',
   }),

   valueContainer: (provided, state) => ({
      ...provided,
      value: 'test',
      width: 157,
      height: 50,
      borderRadius: 0,
      border: '1px solid #000000',
      background: 'transparent',
   }),

   control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 157,
      height: 50,
      position: 'relative',
   }),

   singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
   },

   dropdownIndicator: (provided, state) => ({
      // width: 157,
      // height: 50,
      position: 'absolute',
      background: 'red',
   }),
   indicatorsContainer: (provided, state) => ({
      width: 'fit-content',
      // height: 50,
      position: 'absolute',
      background: 'red',
      display: 'none'
   })
};


export class MySelect extends Component {
   state = {
      selectedOption: null,
   };

   handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
   };

   render() {
      const { selectedOption } = this.state;

      return (
          <Select
              styles={ customStyles }
              value={ selectedOption }
              onChange={ this.handleChange }
              options={ options }
              // defaultInputValue={ options[0].label }

              className={ `MySelect ${ this.props.classes || '' }` }
          />
      );
   }
}
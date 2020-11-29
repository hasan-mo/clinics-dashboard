import React, { useState } from 'react';
import faker from 'faker';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import Dropdown from './components/Drop-down/Drop-down.component';

import './App.css';


const options = [
  {
    label: 'dep1',
    value: 'dep1',
    doctors : [
        {
            name: 'hasan',
            status : 'available',
            id:1,
            image: faker.image.avatar()
        },
        {
          name: 'ahmed',
          status : 'available',
          id:2
        },
        {
          name: 'aly',
          status : 'available',
          id:3
        },
        {
          name: 'osama',
          status : 'available',
          id:11
      },
      {
        name: 'khaled',
        status : 'available',
        id:51
      },
      {
        name: 'mazen',
        status : 'available',
        id:36
      },
      {
        name: 'asmaa',
        status : 'available',
        id:90
      },
      {
        name: 'amr',
        status : 'available',
        id:91
      }


    ]
  },
  {
      label: 'dep2',
      value: 'dep2',
      doctors : [
          {
              name: 'ya',
              status : 'available',
              id:4
          },
          {
            name: 'ka',
            status : 'available',
            id:5
          },
          {
            name: 'fa',
            status : 'available',
            id:6
          }

      ]
    },
    {
      label: 'dep3',
      value: 'dep3',
      doctors : [
          {
              name: 'omar',
              status : 'available',
              id:7
          },
          {
            name: 'ayman',
            status : 'available',
            id:8
          },
          {
            name: 'mostafa',
            status : 'available',
            id:9
          }

      ]
    },
];


export default () => {
  const [selected,setSelected]= useState(options[0]);
  const [searchField,setSearchField]= useState('');




  const onSearchChange = event => {
    setSearchField(event.target.value);
  };

  const filteredDoctors = selected.doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchField.toLowerCase())
  );
  
  
  

  return (
    <div className='App'>
      
      
      <h1>Clinics Departments</h1>
      <Dropdown
        label="Select a department"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      <SearchBox onSearchChange={onSearchChange} />
      <CardList doctors={filteredDoctors} />
    </div>
  );
};

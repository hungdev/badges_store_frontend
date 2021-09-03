import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

export default function SelectField() {

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Select defaultValue="lucy" className='w-full' onChange={handleChange}>
      <Option value="jack">Jack1</Option>
      <Option value="lucy">Lucy1</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  )
}

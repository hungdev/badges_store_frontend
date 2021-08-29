import React from 'react'
import { Tabs } from 'antd';
import AutomateTab from './AutomateTab'
import AllProductTab from './AllProductTab'

const { TabPane } = Tabs;

export default function AutomateBox() {

  const callback = (key) => {
    console.log(key);
  }

  return (
    <div className='flex flex-col w-330 sm:w-400 md:w-330 lg:w-330 border pr-color pt-6 px-6 automate-box'>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="AUTOMATE" key="1" className='flex'>
          <AutomateTab />
        </TabPane>
        <TabPane tab="ALL PRODUCT" key="2" className='flex'>
          <AllProductTab />
        </TabPane>
      </Tabs>
    </div>
  )
}

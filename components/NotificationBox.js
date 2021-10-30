import React from 'react'
import { Modal, Button } from 'antd';

export default function NotificationBox({ visible, onCancel, content = 'Upgrade your plan to use this Badge?' }) {
  return (
    <div>
      <Modal
        title=""
        centered
        visible={visible}
        onCancel={onCancel}
        footer={null}
        width={320}
        bodyStyle={{ height: '136px', overflow: 'hidden', borderRadius: '12px' }}
        className='modal-notification'
        closable={false}
      >
        <div>
          <div>{content}</div>
          <div className='flex flex-row'>
            <div className='group mt-6 mr-2 flex border border-transparent rounded-lg h-10 justify-center items-center cursor-pointer bg-input' style={{ width: 132 }}>
              <div className='text-base'>Cancel</div>
            </div>
            <div className='group mt-6 flex border border-transparent rounded-lg h-10 justify-center items-center cursor-pointer bg-redLight' style={{ width: 132 }}>
              <div className='text-base text-white'>Upgrade</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

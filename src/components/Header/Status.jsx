import React from 'react';
import { Progress, Space } from 'antd';

const Status = () => {
  return <Space wrap size={10}  >
    <Progress type="circle" percent={1000} format={(percent) => `${percent} В пути `} />
    <Progress type="circle" percent={100} format={() => 'Задерживаются'} />
    <Progress type="circle" percent={0} format={() => 'В простое'} />
  </Space>
}

export default Status
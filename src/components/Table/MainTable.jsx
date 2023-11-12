import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table } from 'antd';
const items = [
  {
    key: '1',
    label: 'Action 1',
  },
  {
    key: '2',
    label: 'Action 2',
  },
];
const MainTable = () => {

  const expandedRowRender = () => {
    const columns = [
      {
        title: 'Вагон',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Станция формирования',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Станция назначения',
        dataIndex: 'name_to',
        key: 'name_to',
      },
      {
        title: 'В пути',
        key: 'state',
        render: () => <Badge status="success" text="В пути" />,
      },
   
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: '777',
        name: 'Пупкино',
        name_to: 'Заманилово',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} scroll={true} />;
  };

  const columns = [
    {
      title: 'Поезд',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Станция формирования',
      dataIndex: 'from',
      key: 'from',
    },
    {
      title: 'Станция расформирования',
      dataIndex: 'to',
      key: 'to',
    },
 
    {
      title: 'Дата отправления',
      dataIndex: 'createdAt',
      key: 'createdAt',
    }
  
  ];
  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: '11-908-333',
      from: 'Владивосток',
      to: 'Иркутск',
      createdAt: '2023-12-24 23:12:00',
    });
  }
  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
      />
     
    </>
  );
};

export default MainTable;
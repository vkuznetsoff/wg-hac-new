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
    //   {
    //     title: 'Upgrade Status',
    //     dataIndex: 'upgradeNum',
    //     key: 'upgradeNum',
    //   },
    //   {
    //     title: 'Action',
    //     dataIndex: 'operation',
    //     key: 'operation',
    //     render: () => (
    //       <Space size="middle">
    //         <a>Pause</a>
    //         <a>Stop</a>
    //         <Dropdown
    //           menu={{
    //             items,
    //           }}
    //         >
    //           <a>
    //             More <DownOutlined />
    //           </a>
    //         </Dropdown>
    //       </Space>
    //     ),
    //   },
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
    // {
    //   title: 'Upgraded',
    //   dataIndex: 'upgradeNum',
    //   key: 'upgradeNum',
    // },
    // {
    //   title: 'Creator',
    //   dataIndex: 'creator',
    //   key: 'creator',
    // },
    {
      title: 'Дата отправления',
      dataIndex: 'createdAt',
      key: 'createdAt',
    }
    // {
    //   title: 'Action',
    //   key: 'operation',
    //   render: () => <a>Publish</a>,
    // },
  ];
  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: '11-908-333',
      from: 'Владивосток',
      to: 'Иркутск',
    //   upgradeNum: 500,
    //   creator: 'Jack',
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
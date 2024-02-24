import { Divider, Table } from 'antd';
const columns = [
  {
    title: 'Events',
    dataIndex: 'name',
  },
  {
    title: 'StartDate',
    dataIndex: 'date1',
  },
  {
    title: 'EndDate',
    dataIndex: 'date2',
  },
];
const data = [
    {
      key: '1',
      name: 'FIDE Candidates Chess Tournaments 2024',
      date1: '05/04/2024',
      date2: '23/04/2024',
    },
    {
      key: '2',
      name: 'Music City Open 2024',
      date1: '05/04/2024',
      date2: '23/04/2024',
    },
    {
      key: '3',
      name: 'Catalan University Championship 2024',
      date1: '05/04/2024',
      date2: '23/04/2024',
    },
    {
      key: '4',
      name: 'Romanian Chess Campionship 2024',
      date1: '05/04/2024',
      date2: '23/04/2024',
    },
  ];
const data1 = [
  {
    key: '1',
    name: 'Team Chess Battle 2024',
    date1: '28/02/2024',
    date2: '16/03/2024',
  },
  {
    key: '2',
    name: 'Titled Cup 2024',
    date1: '28/02/2024',
    date2: '16/03/2024',
  },
  {
    key: '3',
    name: 'Collegiate Chess League 2024',
    date1: '28/02/2024',
    date2: '16/03/2024',
  },
  {
    key: '4',
    name: 'German Womens chess League 2024',
    date1: '28/02/2024',
    date2: '16/03/2024',
  },
];
const TableForm = () => (
  <div style={{display:'flex',justifyContent:'space-evenly',marginBottom:'20px'}}>
    <div style={{width:'35%',marginLeft:'2%',marginTop:'2%',borderRadius:'10px',border:'5px double black'}}>
        <Divider >Upcoming Events</Divider>
        <Table
            columns={columns}
            dataSource={data}
            scroll={{
            y: 240,
            }}
        />
    </div>
    <div style={{width:'35%',marginLeft:'2%',marginTop:'2%',borderRadius:'10px',border:'5px double black'}}>
        <Divider >Current Events</Divider>
        <Table
            columns={columns}
            dataSource={data1}
            scroll={{
            y: 240,
            }}
        />
    </div>
  </div>
);
export default TableForm;
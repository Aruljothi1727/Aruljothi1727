import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import {useNavigate} from 'react-router-dom';
import '../css/assignment.css'
const Assignmenttable = () =>{
  const navigate = useNavigate();

  const Openpage =()=>{
    navigate('/uploadassignment')
  }

  const columns = [
    {
        title: 'S.No',
        dataIndex: 'serialno',
        key: 's.no',
        render: (text) => text
    },
    {
        title: 'Topic',
        dataIndex: 'topic',
        key: 'topic',
    },
    {
        title: 'Course',
        dataIndex: 'course',
        key: 'course',
    },
    {
        title: 'Due Date',
        dataIndex: 'duedate',
        key: 'duedate',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'Html') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button type="primary" onClick={Openpage}>Open {record.name}</Button>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        serialno: '1',
        topic: 'Create a Resume',
        course: 'Full Stack',
        duedate: '04/07/2024',
        tags: ['Html', 'css']
    },
    {
        key: '2',
        serialno: '2',
        topic: 'Create a Stopwatch',
        course: 'Full Stack',
        duedate: '15/07/2024',
        tags: ['Javascript']
    },
    {
        key: '3',
        serialno: '3',
        topic: 'Create a website',
        course: 'Full Stack',
        duedate: '31/07/2024',
        tags: ['React']
    },
];
   
return(
<>
    <div className='table'>
    <Table columns={columns} dataSource={data} />
</div>
</>
);
}
export default Assignmenttable;
import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
} from 'antd';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;
const { Option } = Select;


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Addcontent = () => {

  const [Content, setContent] = useState('SelectContent')
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Submitted Content:', Content, values);
    navigate('/contentcreationcomplete')
  };

  const handlechange = (value) => {
    setContent(value);
  }
  return (

    <div style={{ margin: '20px', alignItems: 'center', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', alignContent: 'center' }}>
          <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 550,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div style={{ margin: '20px' }}>
          <Form.Item
            label="Select Content:"
            name="SelectContent"
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <Select placeholder='Select Content' value={Content} onChange={handlechange}>
              <Option value="selectcontent">Select Content</Option>
              <Option value="courses">Courses</Option>
              <Option value="assignments">Assignments</Option>
            </Select>
          </Form.Item>
        </div>

        {Content === 'courses' ?
          <>
            <Form.Item
              label="Course Id"
              name="couseid"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Course Name"
              name="coursename"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Course Start Date"
              name="coursestartdate"
              rules={[
                {
                  required: true,
                  message: 'Please input!',
                },
              ]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
              label="Course End Date"
              name="courseenddate"
              rules={[
                {
                  required: true,
                  message: 'Please input!',
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item label="Fees"
              name="fees"
              rules={[
                {
                  required: true,
                  message: 'Please input!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </>

          : ''}

        {Content === 'assignments' ?
          <>
            <Form.Item
              label="Asssignment ID"
              name="assignmentid"
              rules={[
                {
                  required: true,
                  message: 'Please input!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Asssignment Name"
              name="assignmentName"
              rules={[
                {
                  required: true,
                  message: 'Please input!',
                },
              ]}
            >
              <Input />

            </Form.Item>

            <Form.Item
              label="Asssignment Question"
              name="assignmentquestion"
              rules={[
                {
                  required: true,
                  message: 'Please input!',
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="Submission Date:"
              name="submissiondate"
              rules={[
                {
                  required: true,
                  message: 'Please input!',
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
          </>
          : ''}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>

  );

}

export default Addcontent;
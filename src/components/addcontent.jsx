import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Form,
  Select,
  Textarea,
  Input,
  DatePicker,
  InputNumber
} from 'antd';
import {  useNavigate } from 'react-router-dom';
import { Option } from 'antd/es/mentions';
const { RangePicker } = DatePicker;


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const Addcontent = () => {

  const [Content, setContent] = useState('SelectContent')
  const [ContentFields, setContentFields] = useState('')
  const navigate = useNavigate();

  const handlechange = (value) => {
    setContent(value);
    setContentFields({});
  }

  const handleFieldChange = (name, value) => {
    setContentFields({ ...ContentFields, [name]: value });
  };

  const Submit = (e) => {
   
    console.log("Submitted Content", Content, ContentFields);
    navigate('/contentcreationcomplete')
  }
 
  return (

    <div style={{margin:'20px', alignContent:'center', backgroundColor:'#e6f4ff'}}>
       
      <Form
        {...formItemLayout}
         variant="outlined"
         style={{
           maxWidth: 700,
             margin:'10px'
         }}    
      >
        <Form.Item
          // wrapperCol={{
          //   offset:7,
          //   span: 12,
          // }}
          label="Select Content:"
          name="SelectContent"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <Select value={Content} onChange={handlechange}>
            <Option value="">Select Content</Option>
            <Option value="assignments">Assignments</Option>
            <Option value="courses">Courses</Option>
          </Select>
        </Form.Item>
 
        {Content === 'courses' ?
          <>
            <Form.Item label="Course ID"
              name="courseid"

              rules={[
                {
                  required: true,
                  message: 'Please input!',

                },
              ]}
            >
              <Input
                name='courseid'
                value={ContentFields.courseid ||''}
                onChange={(e) => handleFieldChange(e.target.name, e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Course Name"
              name="courseName"
              rules={[
                {
                  required: true,
                  message: 'Please input!',
                },
              ]}
            >
              <Input
                name='coursename'
                value={ContentFields.coursename}
                onChange={(e) => handleFieldChange(e.target.name, e.target.value)} />
            </Form.Item>

            <Form.Item label="Course Start Date"
              name="coursestartdate"
              rules={[
                {
                  required: true,
                  message: 'Please input!',
                },
              ]}
            >
              <DatePicker
              //   name='coursestartdate'
              //  value={ContentFields.coursestartdate}
               onChange={(e) => handleFieldChange(e.target.name, e.target.value)}
                />
            </Form.Item>

            <Form.Item label="Course End Date"
              name="courseenddate"
              rules={[
                {
                  required: true,
                  message: 'Please input!',
                },
              ]}
            >
              <DatePicker
              //   name='courseenddate'
              //  value={ContentFields.courseenddate}
              //  onChange={(e) => handleFieldChange(e.target.name, e.target.value)}
              />
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
              <Input
                name='fees'
                value={ContentFields.fees}
                onChange={(e) => handleFieldChange(e.target.name, e.target.value)} />
            </Form.Item>
          </>
          :

          <div>
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
              <Input
                name='assignmentid'
                value={ContentFields.assignmentid}
                onChange={(e) => handleFieldChange(e.target.name, e.target.value)}
              />
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
              <Input
                name='assignmentname'
                value={ContentFields.assignmentname}
                onChange={(e) => handleFieldChange(e.target.name, e.target.value)}
              />
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
              <Input.TextArea
                name='assigntmenquestion'
                value={ContentFields.assigntmentquestion}
                onChange={(e) => handleFieldChange(e.target.name, e.target.value)}
              />
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
              <DatePicker
                name='submissiondate'
                value={ContentFields.submissiondate}
                onChange={(e) => handleFieldChange(e.target.name, e.target.value)}
              />

            </Form.Item>

          </div>
        }
        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button type='primary' htmlType='submit' onClick={Submit}>Submit</Button>
          </Form.Item>
                  </Form>
    </div>
  );

}

export default Addcontent;
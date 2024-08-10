import { Content } from "antd/es/layout/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from '../components/dashboard';
import Courses from "../components/course";
import Addcontent from "../components/addcontent";
import ContentCreationComplete from '../components/contentcreationcomplete';
import Assignmenttable from "../components/assignments";
import Uploadfiles from "../components/uploadassignment"
import Success from '../components/success'
import Login from "../components/loginpage";

function Contents() {
  return (
    <Content
      style={{
        margin: "0 16px",
      }}
    >
      <Routes>  
        <Route path="/" element={<><Dashboard/></>} />
        <Route path="/dashboard" element={<><Dashboard/></>} />
        <Route path="/courses" element={<><Courses/></>} />
        <Route path="/assignments" element={<><Assignmenttable/></>} />
        <Route path="/addcontent" element={<><Addcontent/></>} />
        <Route path="/contentcreationcomplete" element={<><ContentCreationComplete/></>} />
        <Route path="/uploadassignment" element={<><Uploadfiles/></>} />
        <Route path="/success" element={<><Success/></>} />
      </Routes>
    </Content>)
}
export default Contents;
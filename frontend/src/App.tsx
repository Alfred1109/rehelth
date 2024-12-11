import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 导入页面组件
import Login from './pages/Login';
import Register from './pages/Register';
import PatientHome from './pages/patient/Home';
import RehabPlan from './pages/patient/RehabPlan';
import MyDoctors from './pages/patient/MyDoctors';
import HealthRecords from './pages/patient/HealthRecords';
import DoctorHome from './pages/doctor/Home';
import AdminDashboard from './pages/admin/Dashboard';
import HealthAssistantHome from './pages/health_assistant/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patient" element={<PatientHome />} />
        <Route path="/patient/rehab-plan" element={<RehabPlan />} />
        <Route path="/patient/my-doctors" element={<MyDoctors />} />
        <Route path="/patient/health-records" element={<HealthRecords />} />
        <Route path="/doctor" element={<DoctorHome />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/health-assistant" element={<HealthAssistantHome />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
// import Dashboard from './pages/Dashboard';
import InboxPage from './pages/Inbox/InboxPage';
// import BotSettings from './pages/BotSettings';
// import Workflows from './pages/Workflows';
// import HelpCenter from './pages/HelpCenter';
// import Team from './pages/Team';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/inbox" element={<InboxPage />} />
          {/* <Route path="/" element={<Dashboard />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/bot-settings" element={<BotSettings />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/team" element={<Team />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

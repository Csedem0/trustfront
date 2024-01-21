import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import CurrentTransactions from './pages/CurrentTransactions/CurrentTransactions';
import CreateTransaction from './pages/CreateTransactions/CreateTransaction';
import MakeTransactions from './pages/MakeTransactions/MakeTransactions';
import History from './pages/History/History';
import Notification from './pages/Notification/Notification';
import Profile from './pages/Profile/Profile';
import Policy from './pages/Policy/Policy';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/':
        title = '';
        metaDescription = '';
        break;
      case '/services':
        title = '';
        metaDescription = '';
        break;
      case '/setting-pagesecurity':
        title = '';
        metaDescription = '';
        break;
      case '/account-details':
        title = '';
        metaDescription = '';
        break;
      case '/settingedit-profile':
        title = '';
        metaDescription = '';
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/current-transaction" element={<CurrentTransactions />} />

      <Route path="/create-transaction" element={<CreateTransaction />} />
      <Route path="/make-transaction" element={<MakeTransactions />} />
      <Route path="/history" element={<History />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;

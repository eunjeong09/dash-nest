import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AuthGuard from './components/AuthGuard';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import NotFound from './components/NotFound';
import Prepare from './components/Prepare';
import Dashboard from './components/Dashboard';
import './App.css';
import { expired } from './token';

function App() {
  const [tokenExpired, setTokenExpired] = useState(false);

  useEffect(() => {
    const checkTokenExpired = async () => {
      const isExpired = await expired();
      setTokenExpired(isExpired);
    };

    checkTokenExpired();
  }, []);

  // checkTokenExpired 함수가 완료된 후에 AuthGuard를 렌더링
  return (
    <RecoilRoot>
      <Router>
        <Header />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route
            element={
              <AuthGuard authentication={true} tokenExpired={tokenExpired} />
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/info/*" element={<Prepare />} />
            <Route path="/product/*" element={<Prepare />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </RecoilRoot>
  );
}

export default App;

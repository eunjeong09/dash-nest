import { ReactElement, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  children?: ReactElement;
  authentication: boolean;
  tokenExpired: boolean | null;
}

export default function AuthGuard({
  authentication,
  tokenExpired,
}: PrivateRouteProps): React.ReactElement | null {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (tokenExpired !== null) {
      setIsReady(true);
    }
  }, [tokenExpired]);

  if (!isReady) {
    return null;
  }

  // tokenExpired가 정상 동작하지 않아서 storage값 유무로 출력
  const hasStorage = localStorage.getItem('accessToken') !== null;
  if (authentication) {
    return hasStorage === true ? <Outlet /> : <Navigate to="/sign-in" />;
  } else {
    return tokenExpired === true || tokenExpired === null ? (
      <Navigate to="/" />
    ) : (
      <Outlet />
    );
  }
}

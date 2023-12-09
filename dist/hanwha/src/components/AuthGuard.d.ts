import { ReactElement } from 'react';
interface PrivateRouteProps {
    children?: ReactElement;
    authentication: boolean;
    tokenExpired: boolean | null;
}
export default function AuthGuard({ authentication, tokenExpired, }: PrivateRouteProps): React.ReactElement | null;
export {};

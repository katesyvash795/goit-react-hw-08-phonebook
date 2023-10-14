import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
<center>
      <div>
        <h1>
          Login
        </h1>
        <LoginForm />
      </div>
</center>
  );
}

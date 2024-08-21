import React, { useEffect, useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginBackground from '../../assets/sign-in-background.jpg';
import useRequests from '../../hooks/useRequests';
import useGlobal from '../../hooks/useGlobal';
import './styles.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { token, setToken } = useGlobal();
  const history = useHistory();
  const requests = useRequests();

  useEffect(() => {
    if (token) {
      history.push('/home');
    }
    // eslint-disable-next-line
  }, [token, history]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      return;
    }

    const body = { email: email, senha: password };

    const result = await requests.post<{ token: string }>('login', body);

    if (result) {
      setToken(result.token);
      history.push('/home');
    }
  };

  return (
    <main>
      <div
        style={{
          backgroundImage: `url(${LoginBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
      </div>
      <div className="container-right">
        <form onSubmit={handleSubmit}>
          <span>Bem vindo</span>
          <h1>Faça o login com sua conta</h1>

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-positive btn-login">LOGIN</button>
        </form>

        <div className="register-link">
          <span>Não tem cadastro?</span><Link to="/sign-up">Clique aqui!</Link>
        </div>
      </div>
    </main>
  );
};

export default SignIn;

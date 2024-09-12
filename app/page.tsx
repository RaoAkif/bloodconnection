'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AppIcon from './blood_icon.png';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    // Mock validation for username and password
    if (username === 'user123' && password === 'pass123') {
      setTimeout(() => {
        setLoading(false);
        router.push('/dashboard');
      }, 2000);
    } else {
      setLoading(false);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-8 bg-white">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader"></div>
            <p className="ml-2 text-lg">Logging in...</p>
          </div>
        ) : (
          <div>
            <div className="text-center">
              <Image
                className="mx-auto"
                src={AppIcon}
                width={120}
                height={120}
                alt="logo-blood-connection"
              />
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Log in to your account
              </h2>

              {/* Display Username and Password for testing */}
              <div className="mt-4 bg-gray-100 p-4 rounded-md">
                <h3 className="text-xl font-semibold text-red-700">Test Login</h3>
                <p className="text-sm text-gray-600">
                  <strong>Username:</strong> user123
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Password:</strong> pass123
                </p>
              </div>
            </div>
            {error && (
              <p className="text-center text-red-500 mb-4">{error}</p>
            )}
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full h-14 bg-gray-100 border border-transparent focus:outline-none focus:border-red-700 rounded-md py-2 px-4 text-red-700 placeholder-red-400"
                  placeholder="Username"
                  style={{ height: '50px', paddingLeft: '14px' }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full h-14 bg-gray-100 border border-transparent focus:outline-none focus:border-red-700 rounded-md py-2 px-4 text-red-700 placeholder-red-400"
                  placeholder="Password"
                  style={{ height: '50px', paddingLeft: '14px' }}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                >
                  Log In
                </button>
              </div>
              <p className="text-center">
                Do not have an account?{' '}
                <span className="text-red-700">Register Now (CLOSED)</span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

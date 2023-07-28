import Image from 'next/image';
import AppIcon from "./blood_icon.png";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-8 bg-white">
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
        </div>
        <form className="mt-8 space-y-6">
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
          <p className='text-center'>Do not have an account. <span className="text-red-700">Register Now</span></p>
        </form>
      </div>
    </div>
  );
}
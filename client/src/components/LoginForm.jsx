import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ credentials, setCredentials, handleSubmit, loading, error }) => {
  return (
    <div className="flex items-center justify-center min-h-screen"> {/* Centering the form */}
      <form 
        onSubmit={handleSubmit} 
        className="space-y-6 w-full max-w-md" // Constraining the width of the form
      >
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Error Message */}
        {error && <div className="text-red-500">{error}</div>}

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-500'
            }`}
          >
            {loading ? 'Logging in...' : 'Sign in'}
          </button>
        </div>

        {/* Sign Up Prompt */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member? {' '}
          <Link to="/Register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

'use client';

import { login } from '@/api/auth';
import { setCookies } from '@/utils/cookies';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const Page = (): React.ReactElement => {
  const Router = useRouter();
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const email = form.get('email') as string;
      const password = form.get('password') as string;
      const response = await login(email, password);

      await setCookies('jsonwebtoken', response.user.jsonwebtoken);

      if (response) {
        toast.success(response.message);
        Router.push('/');
      }
    } catch (error) {
      toast.error('Invalid email or password');
    }
  };
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full">
      <h1 className="flex justify-center text-2xl mb-10">Sign In</h1>
      <div className="bg-green-200 p-10 shadow-md rounded-md flex flex-col gap-4 w-1/2">
        <form onSubmit={handleLogin}>
          <label>
            Email
            <input
              type="email"
              name="email"
              className="input input-bordered w-full max-w-3xl"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              className="input input-bordered w-full max-w-3xl"
            />
          </label>
          <button className="btn btn-accent mt-4" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;

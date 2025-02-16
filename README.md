import { useState } from "react";
import Head from "next/head";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${email}`);
  };

  return (
    <>
      <Head>
        <title>Login - TechnicalWriters</title>
      </Head>

      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          {/* Logo and Title */}
          <div className="flex flex-col items-center">
            <img src="/logo.png" alt="TechnicalWriters Logo" className="w-16 mb-2" />
            <h1 className="text-2xl font-bold text-orange-500">TechnicalWriters</h1>
          </div>

          {/* Facebook Login */}
          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700">
            Log in with Facebook
          </button>

          <div className="my-4 text-center text-gray-500 text-sm">OR</div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
            >
              Log In
            </button>
          </form>

          {/* Links */}
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-orange-500 hover:underline">
              Forgot your password?
            </a>
            <p className="mt-2 text-sm">
              Need an account?{" "}
              <a href="#" className="text-orange-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>

          {/* Footer */}
          <p className="mt-6 text-xs text-gray-500 text-center">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="underline">Privacy Policy</a> and{" "}
            <a href="#" className="underline">Terms of Service</a> apply.
          </p>

          {/* Bottom Links */}
          <div className="mt-4 flex justify-center space-x-4 text-sm text-orange-500">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Contacts</a>
            <a href="#" className="hover:underline">Pricing Policy</a>
          </div>
        </div>
      </div>
    </>
  );
}





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

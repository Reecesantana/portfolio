import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Project from "./components/ProjectCard";

const Home: NextPage = () => {
  useSession();

  return (
    <>
      <Head>
        <title>Reece Santana</title>
        <meta
          name="description"
          content="Reece Santana React Typescript next js"
        />
        <link rel="icon" href="profile.gif" />
      </Head>
      <main className="mx-auto flex flex-col items-center text-neutral-700">
        <div className="mx-auto flex flex-col items-center w-max-content clear-both">
        <img
          className="mt-20 w-40 rounded-full hover:shadow-2xl translate-y-2 hover:translate-y-0 transition-all ease-in-out duration-500 hover:scale-105"
          src="profile.jpg"
          alt="Profile Picture"
        />
        <div className="top-0 flex h-72 w-screen flex-col items-center p-8 text-6xl text-emerald-800">
          <h1 className="mx-auto justify-center text-center">Reece Santana</h1>
        </div>
        </div>
        <div>
          <p className="container p-4 pb-20 text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="container grid grid-cols-1 gap-x-9 gap-y-20 pb-20 lg:grid-cols-2" >
          <Project
            title="Example"
            photo="example.jpeg"
            description="This is a test look at this paragraph should be about only 2-3 sentances. Maybe add in a cool efect that people can play with and be like wow he knows what he is doing!"
            url="google.com"
          />
          <Project
            title="Example"
            photo="example.jpeg"
            description="This is a test look at this paragraph should be about only 2-3 sentances. Maybe add in a cool efect that people can play with and be like wow he knows what he is doing!"
            url="google.com"
          />
          <Project
            title="Example"
            photo="example.jpeg"
            description="This is a test look at this paragraph should be about only 2-3 sentances. Maybe add in a cool efect that people can play with and be like wow he knows what he is doing!"
            url="google.com"
          />
          <Project
            title="Example"
            photo="example.jpeg"
            description="This is a test look at this paragraph should be about only 2-3 sentances. Maybe add in a cool efect that people can play with and be like wow he knows what he is doing!"
            url="google.com"
          />
        </div>
        <div className=" bg-neutral-50 border-emerald-900 rounded-xl border p-5 w-11/12 sm:w-5/12  hover:shadow-2xl translate-y-2 hover:translate-y-0 transition-all ease-in-out duration-500 hover:scale-105 mb-36 mt-10">
    <h2 className="text-center text-emerald-800 pb-5 font-bold text-3xl">Contact Me</h2>
    <form action="/send-data-here" method="post" className="flex flex-col gap-5 justify-center items-center">
    <span className="bg-emerald-800 rounded-full p-3 text-neutral-50 grid-cols-4 grid w-full"><label>Name: </label>
  <input type="text" id="first" name="first" className="rounded-full text-neutral-700 px-3 col-span-3"/></span>
  <span className="bg-emerald-800 rounded-full p-3 text-neutral-50 grid-cols-4 grid w-full"><label>E-mail: </label>
  <input type="email" id="last" name="last" className="rounded-full text-neutral-700 px-3 col-span-3" /></span>
  <span className="bg-emerald-800 rounded-full p-3 text-neutral-50 grid-cols-4 grid w-full"><label>Phone: </label>
  <input type="email" id="last" name="last" className="rounded-full text-neutral-700 px-3 col-span-3" /></span>
  <span className="bg-emerald-800 rounded-2xl p-3 text-neutral-50 w-full flex-col flex text-center"><label>Let me know a little about you and your company/software? </label>
  <textarea className="rounded-xl text-neutral-700 px-3" maxLength={360} rows={6}/></span>
  <button className="bg-emerald-800 hover:bg-emerald-600 rounded-full py-3 w-1/2 text-neutral-50 hover:shadow-2xl translate-y-2 hover:translate-y-0 transition-all ease-in-out duration-500 hover:scale-105" type="submit">Submit</button>
</form>

        </div>
      </main>
    </>
  );
};

export default Home;

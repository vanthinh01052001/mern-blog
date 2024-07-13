import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex gap-5 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1">
          <Link to={"/"} className='text-4xl font-bold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>{`Van Thinh's`}</span> Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password or with Google
          </p>
        </div>
        {/* right  */}
        <div className="flex-1">
          <form action="" className="flex flex-col gap-4">
            <div className="">
              <Label value="Your username"></Label>
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div className="">
              <Label value="Your email"></Label>
              <TextInput type="text" placeholder="name@company.com" id="email" />
            </div>
            <div className="">
              <Label value="Your password"></Label>
              <TextInput type="text" placeholder="password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link className="text-blue-500" to='/sign-in'>
            Sign In
             </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

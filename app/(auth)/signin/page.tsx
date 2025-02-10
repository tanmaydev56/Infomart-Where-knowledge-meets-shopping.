import Link from "next/link";

export default function Login() {
    return (
        <div>
          <Link href={'/'} className="bg-black w-[100px] h-[30px] mt-10 rounded-full flex justify-center items-center text-white"> <h1>Login</h1></Link>
        </div>
    );
}
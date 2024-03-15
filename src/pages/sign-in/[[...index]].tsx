import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-full w-full ">
      <div className="px-8 mt-6 mb-6">
        <SignIn />
      </div>
    </div>
  );
}

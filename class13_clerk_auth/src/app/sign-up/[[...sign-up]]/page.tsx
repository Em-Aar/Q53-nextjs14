import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="min-h-screen flex justify-center items-center">
        <SignUp />
    </section>
  );
}
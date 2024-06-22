import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="min-h-screen flex justify-center items-center">
        <SignIn />
    </section>
  );
}
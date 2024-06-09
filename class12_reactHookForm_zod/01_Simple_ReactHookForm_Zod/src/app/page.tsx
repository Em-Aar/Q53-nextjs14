import ReactForm from "@/components/ReactForm";
import SimpleForm from "@/components/SimpleForm";
import ZodForm from "@/components/ZodForm";
import ZodFormServer from "@/components/ZodFormServer";


export default function Home() {
  return (
<main className="w-full mx-auto">
  {/* <SimpleForm/> */}
  {/* <ReactForm/> */}
  <ZodForm />
  {/* <ZodFormServer /> */}
</main>
  );
}

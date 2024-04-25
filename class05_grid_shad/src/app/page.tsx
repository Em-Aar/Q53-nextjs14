import Image from "next/image";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import MyCard from "@/components/MyCard";

export default function Home() {
  return (
    <div className="">
      <Button variant={"secondary"}>Submit</Button>

      <Button variant={"developer"} className="bg-purple-500">
        Submit
        <Mail className="ml-2 h-4 w-4" />
      </Button>
      <MyCard />
      <MyCard />
    </div>
  );
}

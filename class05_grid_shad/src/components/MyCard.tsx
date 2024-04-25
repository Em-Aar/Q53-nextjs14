import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function MyCard() {
  return (
<Card>
  <CardHeader>
    <CardTitle className="text-teal-700">Card Title</CardTitle>
    {/* <CardDescription>Card Description</CardDescription> */}
  </CardHeader>
  <CardContent>
    <p>first conent</p>
  </CardContent>
  {/* <CardFooter>
    <p>Card Footer</p>
  </CardFooter> */}
</Card>

  )
}

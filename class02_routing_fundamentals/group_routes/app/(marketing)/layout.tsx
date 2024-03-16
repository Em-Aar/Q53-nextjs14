import Sidebar from "@/components/Sidebar";


export default function layout({children}:{children:React.ReactNode}) {
  return (
    <section className="flex justify-between">
        {children}
        <Sidebar />
      
    </section>
  )
}

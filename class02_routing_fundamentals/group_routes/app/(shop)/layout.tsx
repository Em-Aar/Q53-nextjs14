import Sidebar from "@/components/Sidebar";


export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <section className="flex justify-between">
        <Sidebar />
        {children}
      
    </section>
  )
}

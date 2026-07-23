import AboutPage from '@/components/AboutPage'
import Footer from "@/components/ui/Footer";


const page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <main className="flex-1">
        <AboutPage/>
        <Footer/>

      </main>

   </div>
  )
}

export default page
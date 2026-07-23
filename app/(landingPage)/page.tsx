import LandingNav from "@/components/landingPage/LandingNav"
import Hero from "@/components/landingPage/Hero"
import ProblemsSection from "@/components/landingPage/ProblemsSection"
import FeaturesSection from "@/components/landingPage/FeaturesSection"
import LandingCTA from "@/components/landingPage/LandingCTA"
import AboutStorySection from "@/components/landingPage/AboutStorySection"
import Footer from "@/components/ui/Footer";


const page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <main className="flex-1">
        <LandingNav/>
        <Hero/>
        <ProblemsSection/>
        <FeaturesSection/>
        <AboutStorySection/>
        <LandingCTA/>
        <Footer/>

      </main>

   </div>
  )
}

export default page
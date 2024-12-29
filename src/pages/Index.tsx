import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import VideoGallery from "../components/VideoGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <VideoGallery />
    </div>
  );
};

export default Index;
import { Card, CardContent } from "./ui/card";

const VideoGallery = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">Teaching</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/Synthesia video Andrea Gonzalez.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">Introduction to AI Architecture</h3>
                <p className="text-gray-600">
                  Discover how artificial intelligence is revolutionizing architectural design and construction. 
                  This comprehensive overview explores the integration of AI technologies in modern architecture, 
                  showcasing innovative approaches to sustainable and efficient building design.
                </p>
              </div>
            </CardContent>
          </Card>
          {/* Add more video cards here as needed */}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
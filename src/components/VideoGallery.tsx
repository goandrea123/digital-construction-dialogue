import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Upload, Play } from "lucide-react";
import { useToast } from "./ui/use-toast";

const VideoGallery = () => {
  const [videos, setVideos] = useState<{ url: string; title: string }[]>([]);
  const { toast } = useToast();

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    // Convert FileList to Array for easier manipulation
    Array.from(files).forEach(file => {
      // Check if file is video
      if (!file.type.startsWith('video/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload video files only",
          variant: "destructive"
        });
        return;
      }

      // Create URL for video preview
      const url = URL.createObjectURL(file);
      setVideos(prev => [...prev, { url, title: file.name }]);
      
      console.log('Video uploaded:', file.name);
      
      toast({
        title: "Video uploaded successfully",
        description: `${file.name} has been added to your gallery`,
      });
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <label
          htmlFor="video-upload"
          className="block w-full p-8 border-2 border-dashed border-slate-300 rounded-lg hover:border-primary cursor-pointer transition-colors"
        >
          <div className="flex flex-col items-center space-y-4">
            <Upload className="w-12 h-12 text-slate-400" />
            <div className="text-center">
              <p className="text-lg font-medium">Upload your videos</p>
              <p className="text-sm text-slate-500">Drag and drop or click to select files</p>
            </div>
          </div>
          <Input
            id="video-upload"
            type="file"
            accept="video/*"
            multiple
            className="hidden"
            onChange={handleVideoUpload}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="relative group">
            <video
              className="w-full h-48 object-cover rounded-lg border border-slate-200"
              src={video.url}
              controls
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
              <Button variant="outline" size="icon" className="bg-white">
                <Play className="w-6 h-6" />
              </Button>
            </div>
            <p className="mt-2 text-sm font-medium text-slate-900 truncate">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
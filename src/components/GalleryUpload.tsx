import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Image as ImageIcon, Upload, X } from "lucide-react";
import { GalleryItem } from "./Gallery";

interface GalleryUploadProps {
  onUpload: (item: GalleryItem) => void;
}

const GalleryUpload = ({ onUpload }: GalleryUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
        toast({
          title: "File too large",
          description: "Please select an image smaller than 10MB",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast({
        title: "Missing file",
        description: "Please select an image to upload",
        variant: "destructive",
      });
      return;
    }

    // Create a unique ID for the new gallery item
    const id = Date.now().toString();
    
    // Create the gallery item
    const newItem: GalleryItem = {
      id,
      type: "image" as const,
      thumbnail: URL.createObjectURL(file),
      fullSize: URL.createObjectURL(file),
      title: file.name.split('.')[0], // Use filename as title
      description: "", // Empty description
    };

    onUpload(newItem);
    
    // Reset form
    setFile(null);
    setPreview(null);
    
    toast({
      title: "Success",
      description: "Image uploaded successfully",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Upload Gallery Image</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="image">Image *</Label>
            <div className="flex items-center gap-4">
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Label
                htmlFor="image"
                className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-50"
              >
                <Upload size={16} />
                Choose Image
              </Label>
              {file && (
                <span className="text-sm text-gray-500">
                  {file.name}
                </span>
              )}
            </div>
          </div>

          {preview && (
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-48 object-cover rounded-md"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                onClick={() => {
                  setFile(null);
                  setPreview(null);
                }}
              >
                <X size={16} />
              </Button>
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={!file}
          >
            <ImageIcon className="mr-2" size={16} />
            Upload Image
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default GalleryUpload; 
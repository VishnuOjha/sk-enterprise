'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaUpload, FaTimes, FaExpand } from 'react-icons/fa';

const Gallery = () => {
  const [images, setImages] = useState([
    // Sample project images - these will load from public/gallery folder
    {
      id: 1,
      src: '/gallery/sample1.jpg', // This path is correct for public folder
      title: 'Modern False Ceiling',
      description: 'Contemporary gypsum ceiling with LED integration',
    },
    {
      id: 2,
      src: '/gallery/sample2.jpg',
      title: 'POP Design Work',
      description: 'Elegant POP finishing for living room',
    },
    {
      id: 3,
      src: '/gallery/sample3.jpg',
      title: 'Office Ceiling',
      description: 'Commercial false ceiling with recessed lighting',
    },
    {
      id: 4,
      src: '/gallery/sample4.jpg',
      title: 'Bedroom Ceiling',
      description: 'Multi-tiered gypsum design with cove lights',
    },
    {
      id: 5,
      src: '/gallery/sample5.jpg',
      title: 'PVC Ceiling',
      description: 'Waterproof PVC ceiling for bathroom',
    },
    {
      id: 6,
      src: '/gallery/sample6.jpg',
      title: 'Partition Wall',
      description: 'Gypsum partition with soundproofing',
    },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Handle file upload
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setIsUploading(true);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = {
          id: Date.now() + Math.random(),
          src: reader.result, // This will be a base64 string
          title: file.name.split('.')[0],
          description: 'Newly uploaded project',
          isUploaded: true, // Flag to identify uploaded images
        };
        setImages((prev) => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    });

    setTimeout(() => {
      setIsUploading(false);
    }, 500);
  };

  // Delete image
  const handleDelete = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  // Open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Check if image is base64 (uploaded) or a path (static)
  const isBase64Image = (src) => {
    return src.startsWith('data:image');
  };

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">
            Explore our portfolio of completed projects and stunning transformations
          </p>
        </div>

        

        {/* Gallery Grid */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100"
              >
                {/* Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                    unoptimized={isBase64Image(image.src)} // Disable optimization for base64 images
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center text-white space-y-3">
                    <h3 className="text-xl font-semibold">{image.title}</h3>
                    <p className="text-sm px-4">{image.description}</p>
                    <div className="flex gap-3 justify-center mt-4">
                      <button
                        onClick={() => openLightbox(image)}
                        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors duration-300"
                        aria-label="View image"
                      >
                        <FaExpand />
                      </button>
                      <button
                        onClick={() => handleDelete(image.id)}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-300"
                        aria-label="Delete image"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No project images yet. Upload some images to showcase your work!
            </p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl hover:text-green-400 transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <FaTimes />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  unoptimized={isBase64Image(selectedImage.src)}
                />
              </div>
              <div className="text-white mt-4 text-center">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
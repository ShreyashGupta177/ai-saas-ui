import { Upload } from 'lucide-react';
import { useState } from 'react';

export default function DragDropZone() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  return (
    <div
      onDragOver={() => setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
        isDragging
          ? 'border-blue-500 bg-blue-500/10'
          : 'border-dark-border dark:border-light-border'
      }`}
    >
      <Upload size={48} className="mx-auto mb-4 text-blue-600" />
      <h3 className="text-xl font-bold mb-2">Drop your resume here</h3>
      <p className="text-dark-text-secondary dark:text-light-text-secondary mb-4">
        or click to browse
      </p>
      {file && <p className="text-green-500 font-semibold">{file.name}</p>}
    </div>
  );
}
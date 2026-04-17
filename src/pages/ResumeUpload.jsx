import DragDropZone from '../components/DragDropZone';
import Card from '../components/Card';
import { useLenis } from '../hooks/useLenis';

export default function ResumeUpload() {
  useLenis();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Resume Upload</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Original Resume</h2>
          <DragDropZone />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">AI-Optimized Version</h2>
          <Card className="h-96 flex items-center justify-center text-dark-text-secondary dark:text-light-text-secondary">
            Upload your resume to see the AI-optimized version
          </Card>
        </div>
      </div>
    </div>
  );
}
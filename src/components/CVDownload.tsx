
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
const CVDownload = () => {
  const handleDownloadCV = () => {
    const cvUrl = '/resume.pdf'; // Update with your CV file path
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'resume.pdf'; // Update with your CV file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-card border border-border rounded-lg p-6 sm:p-8 glow-border">
          <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-cyber font-bold mb-4 text-primary">
            Download My CV
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            Get a comprehensive overview of my cybersecurity experience, 
            certifications, and technical skills in a clean PDF format.
          </p>
          <Button
            onClick={handleDownloadCV}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Download CV (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CVDownload;

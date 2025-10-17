import { ReactNode } from 'react';
import LuxuryCard from '@/components/ui/LuxuryCard';

interface JobCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  requirements: string[];
  location: string;
  type: string;
}

export default function JobCard({
  title,
  icon,
  description,
  requirements,
  location,
  type
}: JobCardProps) {
  return (
    <LuxuryCard>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="flex-grow space-y-4">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-2">{title}</h3>
            <div className="flex gap-4 text-sm text-gray-400">
              <span>{location}</span>
              <span>•</span>
              <span>{type}</span>
            </div>
          </div>
          
          <p className="text-gray-300">{description}</p>
          
          <div>
            <h4 className="text-luxury-gold-300 font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          
          <button className="mt-4 px-6 py-2 bg-gradient-to-r from-luxury-gold-400/10 to-luxury-gold-600/10 hover:from-luxury-gold-400/20 hover:to-luxury-gold-600/20 border border-luxury-gold-500/20 rounded-lg text-luxury-gold-300 transition-all duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </LuxuryCard>
  );
}

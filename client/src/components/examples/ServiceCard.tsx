import ServiceCard from '../ServiceCard';
import { Code, Users, Briefcase, Server } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
        <ServiceCard
          icon={Code}
          title="Tech Training"
          description="Master cutting-edge technologies with industry experts"
          features={[
            "Full-stack development",
            "Cloud computing",
            "Data science & AI"
          ]}
          delay={0}
        />
        <ServiceCard
          icon={Users}
          title="Non-Tech Training"
          description="Develop essential business and soft skills"
          features={[
            "Leadership programs",
            "Communication skills",
            "Project management"
          ]}
          delay={0.1}
        />
        <ServiceCard
          icon={Briefcase}
          title="Job Offerings"
          description="Connect with top employers and opportunities"
          features={[
            "Career counseling",
            "Job placements",
            "Interview preparation"
          ]}
          delay={0.2}
        />
        <ServiceCard
          icon={Server}
          title="IT Services"
          description="Custom software solutions for your business"
          features={[
            "Web development",
            "Mobile apps",
            "Cloud solutions"
          ]}
          delay={0.3}
        />
      </div>
    </div>
  );
}

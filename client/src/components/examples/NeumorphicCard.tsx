import NeumorphicCard from '../NeumorphicCard';
import { Award, Target, Rocket, Shield } from 'lucide-react';

export default function NeumorphicCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
        <NeumorphicCard
          icon={Award}
          title="Industry Experts"
          description="Learn from professionals with real-world experience"
          delay={0}
        />
        <NeumorphicCard
          icon={Target}
          title="Focused Curriculum"
          description="Targeted programs designed for career advancement"
          delay={0.1}
        />
        <NeumorphicCard
          icon={Rocket}
          title="Fast-Track Learning"
          description="Accelerated programs to get you job-ready quickly"
          delay={0.2}
        />
        <NeumorphicCard
          icon={Shield}
          title="Lifetime Support"
          description="Continuous guidance and support throughout your journey"
          delay={0.3}
        />
      </div>
    </div>
  );
}

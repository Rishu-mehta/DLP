import TeamCard from '../TeamCard';

export default function TeamCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        <TeamCard
          name="Sarah Johnson"
          role="CEO & Founder"
          bio="Visionary leader with 15+ years in tech education and workforce development."
          image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
          delay={0}
        />
        <TeamCard
          name="Michael Chen"
          role="Chief Technology Officer"
          bio="Expert in cloud architecture and AI-driven learning solutions."
          image="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop"
          delay={0.1}
        />
        <TeamCard
          name="Emily Rodriguez"
          role="Head of Training Programs"
          bio="Passionate educator specializing in curriculum design and student success."
          image="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop"
          delay={0.2}
        />
      </div>
    </div>
  );
}

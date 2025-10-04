import ProductCard from '../ProductCard';

export default function ProductCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        <ProductCard
          name="CodeMaster Pro"
          description="Comprehensive learning platform for aspiring developers with hands-on projects and real-world scenarios."
          features={[
            "Interactive coding challenges",
            "Live mentor support",
            "Project-based learning",
            "Certification programs"
          ]}
          image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
          category="Learning Platform"
          rating={4.8}
          delay={0}
        />
        <ProductCard
          name="SkillTrack LMS"
          description="Advanced learning management system designed for corporate training and skill development."
          features={[
            "Course management",
            "Progress tracking",
            "Analytics dashboard",
            "Mobile app access"
          ]}
          image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
          category="Enterprise Solution"
          rating={4.9}
          delay={0.1}
        />
        <ProductCard
          name="CareerPath AI"
          description="AI-powered career guidance platform that matches skills with opportunities."
          features={[
            "AI-powered recommendations",
            "Job matching algorithm",
            "Resume builder",
            "Interview simulator"
          ]}
          image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
          category="Career Tool"
          rating={4.7}
          delay={0.2}
        />
      </div>
    </div>
  );
}

import BlogCard from '../BlogCard';

export default function BlogCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        <BlogCard
          title="The Future of Tech Training in 2025"
          excerpt="Discover how emerging technologies are reshaping the landscape of technical education and what it means for aspiring developers."
          category="Tech Training"
          date="March 15, 2025"
          image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
          delay={0}
        />
        <BlogCard
          title="Building Soft Skills for Career Success"
          excerpt="Learn why soft skills are just as important as technical abilities in today's competitive job market."
          category="Career Tips"
          date="March 12, 2025"
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
          delay={0.1}
        />
        <BlogCard
          title="Cloud Computing: A Comprehensive Guide"
          excerpt="Everything you need to know about cloud computing, from basics to advanced deployment strategies."
          category="Technology"
          date="March 10, 2025"
          image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
          delay={0.2}
        />
      </div>
    </div>
  );
}

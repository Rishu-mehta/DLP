import Timeline from '../Timeline';

export default function TimelineExample() {
  const timelineItems = [
    {
      year: "2015",
      title: "Foundation",
      description: "DLP Global Skillers Solutions was founded with a mission to bridge the skills gap in the tech industry."
    },
    {
      year: "2017",
      title: "Expansion",
      description: "Expanded our training programs to include non-tech skills and soft skills development."
    },
    {
      year: "2019",
      title: "Job Placement",
      description: "Launched our job placement services, connecting trained professionals with leading companies."
    },
    {
      year: "2021",
      title: "IT Services",
      description: "Added custom IT solutions and software development services to our portfolio."
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Achieved 10,000+ trained professionals and partnerships with 500+ companies worldwide."
    }
  ];

  return (
    <div className="p-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
}

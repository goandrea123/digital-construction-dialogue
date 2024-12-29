import { ArrowRight, Building2, BrainCircuit, Database } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center] z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center] z-0"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
          <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
            <span className="text-sm font-medium text-slate-600">Digital Construction Innovation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 leading-tight">
            Communication for Architectural Learning & Innovation
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Exploring the intersection of digital construction, artificial intelligence, and architectural innovation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200">
              <span>Explore Research</span>
              <ArrowRight size={20} />
            </button>
            <button className="inline-flex items-center space-x-2 bg-white text-slate-900 px-6 py-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors duration-200">
              <span>View Publications</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: Building2,
                title: "Digital Construction",
                description: "Advanced BIM integration and computational design methodologies",
              },
              {
                icon: BrainCircuit,
                title: "AI & Machine Learning",
                description: "Cutting-edge AI applications in architectural design and analysis",
              },
              {
                icon: Database,
                title: "Data-Driven Design",
                description: "Leveraging big data for informed architectural decisions",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-primary/20 transition-all duration-200 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
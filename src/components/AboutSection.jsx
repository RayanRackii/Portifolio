import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold"> 111111111111111 </h3>

            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              maiores nam, quisquam, distinctio iste non, eaque porro excepturi
              laborum facilis alias corporis ea officia necessitatibus
              recusandae illo animi. Beatae, ducimus!
            </p>

            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              maiores nam, quisquam, distinctio iste non, eaque porro excepturi
              laborum facilis alias corporis ea officia necessitatibus
              recusandae illo animi. Beatae, ducimus! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maxime maiores nam, quisquam,
              distinctio iste non, eaque porro excepturi laborum facilis alias
              corporis ea officia necessitatibus recusandae illo animi. Beatae,
              ducimus!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a className="cosmic-button" href="#contact">
                Get in Touch
              </a>

              <a
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-white transition-colors duration-300"
                href="#contact"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="text-primary h-6 w-6" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive and dynamic web applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="text-primary h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="text-primary h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

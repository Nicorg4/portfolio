import { BrickWall, Cloud, Code, ShieldCheck } from "lucide-react";

export const AboutMeSection = () => {
  return (
    <section id="about" className="md:py-50 py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-left">
              Software Engineer & Cybersecurity Enthusiast
            </h3>

            <p className="text-muted-foreground text-left">
              With over 2 years of experience in software development, 
              I specialize in building secure, scalable, 
              and user-centered web applications using technologies like React, Node.js, and Python.
            </p>

            <p className="text-muted-foreground text-left">
              I'm passionate about solving real-world problems through technology, with a strong interest in cloud computing and cybersecurity. 
              I recently completed the Google Cybersecurity Professional Certificate, 
              where I developed hands-on skills in threat detection, SIEM tools, IAM, and risk mitigation.
            </p>
            <p className="text-muted-foreground text-left">
              I enjoy continuously learning, exploring new technologies, and improving both frontend performance and backend architecture to deliver efficient and secure digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border ligthmode-border p-6 card-hover">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 mr-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable full-stack applications modern frameworks. Focused on clean code, performance, and maintainability.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border ligthmode-border p-6 card-hover">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 mr-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg">Cybersecurity Foundations</h4>
                  <p className="text-muted-foreground">
                    Hands-on with SIEM tools like Splunk and Chronicle. Familiar with OWASP, IAM, and network security protocols.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border ligthmode-border p-6 card-hover">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 mr-3">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-bold text-lg">Cloud & DevOps</h4>
                  <p className="text-muted-foreground">
                    Learning cloud computing and infrastructure automation. 
                    Exploring CI/CD pipelines and scalable cloud-native architectures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
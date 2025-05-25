import {RevealOnScroll} from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [ "HTML", "CSS", "JavaScript", "React", "Vue","TailwindCSS", "Svelte"]
    const backendSkills = ["Node.js", "Python", "AWS", "MangoDB"]

    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent text-center ">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all"> 
                <p className="text-gray-300 mb-6 text-justify">

                    I’m a full-stack developer💻 with an MSc in Computer Science🎓 and a strong interest in using technology to build impactful, real-world solutions. My journey into coding began during my time working in tech marketing, where I frequently collaborated with developers and became increasingly drawn to the problem-solving and creativity involved in software development.
                    <br/>Since making the switch, I’ve built projects using <strong>Python, JavaScript, React, and Flask</strong>, and have developed a particular interest in applying <strong>AI</strong>🤖 to everyday challenges. I enjoy working across the stack and am always eager to learn, grow, and contribute to meaningful work.🌱
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span 
                                key = {key}
                                className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                                </span>
                            ))}
                        </div>
                    </div>
   
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend </h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span 
                                key = {key}
                                className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Education section */}           
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className = "p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all" >
                        <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>
                        <ul className="list-disc list-inside text-grey-300 space-y-2 text-justify">
                            <li>
                                <strong> MSc in Computing and Information Systems</strong> - Queen Mary University of London (2023-2024)
                            </li>
                            <li>
                                <strong>Relevant Coursework</strong>: <br/>
                                Computer Architecture and Network, Computer Programming, Security and Authentication, Data Analytics ...
                            </li>
                        </ul>
                    </div>
            {/* Work section */}     
                    <div className = "p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all" >
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300 text-justify">
                            <div>
                                <h4> AI Training Contributor  (Dec 2024-Present)</h4>
                                <p> • Reviewed and refined AI-generated content to improve NLP model accuracy, following strict data annotation guidelines.
                                    </p>
                            </div>
                            <div>
                                <h4> Digital Marketing Specialist at iObit (2021-2023)</h4>
                                <p> • Collaborated with developers to enhance website performance and SEO, leading to a 10% increase in click-through rate while supporting frontend improvements through A/B testing and data analysis.</p>
                            </div>
                            <div>
                                <h4> User Acquisition Strategist at Wudi360 (2020-2021)</h4>
                                <p> • Partnered with product and design teams to drive mobile app engagement through data-driven feature enhancements, contributing to a top-30 app store ranking.</p>
                            </div>

                        </div>
                    </div>
                </div>
        </div>

        </RevealOnScroll>
    </section>
    )
}
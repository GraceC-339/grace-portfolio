import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent text-center ">
                    Feature Projects
                </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                   <h3 className="text-xl font-bold mb-2"> Safe Walk</h3>
                   <p className="text-gray-200 mb-4 text-justify">
                    A web app that helps pedestrians find safer routes by avoiding specific crime types, using real-time crime data from Tower Hamlets, London. It integrates the Google Maps API to display an interactive crime map and calculate routes based on user-selected risks.
                   </p>     
                    <div className="flex flex-warp gap-2 mb-4">
                        {["React", "flask", "GoogleMap API"].map((tech,key) => (
                            <span 
                                key = {key}
                                className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                                </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href='https://github.com/GraceC-339/SafeWalk' target='_blank' className="text-pink-400 hover:text-pink-300 transition-colors my-4"> View Project → </a>
                    </div>


                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                   <h3 className="text-xl font-bold mb-2"> Mirror Mirror</h3>
                   <p className="text-gray-200 mb-4 text-justify">
                    An AI-powered web app that helps users start their day positively by providing uplifting affirmations through a chatbot and allowing them to take timestamped selfies for daily reflection.
                    </p> 
                    <div className="flex flex-warp gap-2 mb-4">
                        {["React", "FastAPI", "Axios", "webcam"].map((tech,key) => (
                            <span 
                                key = {key}
                                className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                                </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href='https://github.com/GraceC-339/Mirror' target='_blank'  className="text-pink-400 hover:text-pink-300 transition-colors my-4"> View Project →  </a>
                    </div>


                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                   <h3 className="text-xl font-bold mb-2"> Good Job</h3>
                   <p className="text-gray-200 mb-4">
                    An AI-powered job application tool built with Streamlit and Python, designed to help users match their skills to job descriptions and receive personalized encouragement. 
                    </p> 
                    <div className="flex flex-warp gap-2 mb-4">
                        {["React", "Node.js", "AWS", "Docker"].map((tech,key) => (
                            <span 
                                key = {key}
                                className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                                </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href='https://devpost.com/software/good-job-qukzw0' target='_blank' className="text-pink-400 hover:text-pink-300 transition-colors my-4"> View Project →  </a>
                    </div>


                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                   <h3 className="text-xl font-bold mb-2"> Lemon Poem Generator</h3>
                   <p className="text-gray-200 mb-4">
                    A fun web app that uses OpenAI's API to generate creative poems about lemons based on user prompts.
                    </p> 
                    <div className="flex flex-warp gap-2 mb-4">
                        {["HTML", "CSS", "OpenAI", "JavaScript"].map((tech,key) => (
                            <span 
                                key = {key}
                                className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                                </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href='https://github.com/GraceC-339/lemon-poem-generator' target='_blank'  className="text-pink-400 hover:text-pink-300 transition-colors my-4"> View Project →  </a>
                    </div>


                </div>

            </div>
            </div>

        </RevealOnScroll>
        </section>
    )

}
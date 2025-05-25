import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (<section id="home" className="min-h-screen flex items-center justify-center relative">

        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent leading-tight">
                Hi, I'm Grace :)
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I'm a passionate <span className="font-bold text-pink-400">full-stack developer</span> who enjoys building practical, user-focused applications. I’m always learning and exploring new technologies to bring ideas to life. 
            </p>

            <div className="flex justify-center space-x-8">
                <a href="https://www.linkedin.com/in/huangling-grace-c/" 
                   target="_blank" rel="noopener noreferrer"
                   className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center">
                    {/* LinkedIn SVG logo */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                    </svg>LinkedIn
                </a>

                <a href="https://github.com/GraceC-339" 
                     target="_blank" rel="noopener noreferrer"
                     className="border border-pink-500/50 text-pink-500 py-3 px-6 rounded font-medium transition-all duration-200
                 hover:-translate-y-0.5 hover:bg-pink-500/10 flex items-center">
                    {/* GitHub SVG logo */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.104.823 2.226 0 1.606-.014 2.898-.014 3.293 0 .321.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Github
                </a>

            </div>
        </div>
        </RevealOnScroll>
    </section>)
};
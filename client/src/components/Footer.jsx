import { Github } from 'lucide-react';

export const Footer = () => {
    return (
        <div className="w-full h-32 bg-gradient-to-t from-black to bg-neutral-950 text-white flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-3">
                Proyecto realizado por:
            </h2>
            <div className='flex flex-row gap-3'>
                <Github className="w-6 h-6" />
                <a className="text-lg hover:scale-105 transition-all" href="https://github.com/EstecheLucas">Esteche Lucas</a>
            </div>
            <div className='flex flex-row gap-3'>
                <Github className="w-6 h-6" />
                <a className="text-lg hover:scale-105 transition-all" href="https://github.com/carlosNahuelSanchez">Sánchez Nahuel</a>
            </div>
        </div>
    )
}

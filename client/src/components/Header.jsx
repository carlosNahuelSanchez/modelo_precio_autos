import { Car } from 'lucide-react';

export const Header = () => {
    return (
        <header className="relative w-full h-96 overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/videoHeader.mp4" type="video/mp4" />
            </video>

            <div className="relative z-10 flex flex-col items-center text-center justify-center h-full text-white p-8 gap-4 bg-black/50 backdrop-blur-sm">
                <Car className="w-16 h-16" />
                <h1 className="text-4xl md:text-5xl font-semibold">¿Quieres vender tu auto?</h1>
                <h2 className="text-2xl md:text-3xl">Averigua el precio adecuado con inteligencia artificial.</h2>
            </div>
        </header>
    )
}
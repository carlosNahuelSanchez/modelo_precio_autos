export const Info = () => {
    return (
        <section className="relative w-full h-96 overflow-hidden flex justify-center items-center">
            <img
                src="/imageFooter.jpg"
                alt="Fondo"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>

            <div className="relative z-20 flex flex-col lg:flex-row justify-center items-center gap-8 w-full h-full px-4 max-w-6xl mx-auto">
                <div className="rounded-lg flex flex-col text-white backdrop-blur-sm bg-black/60 py-6 px-6 max-w-md min-h-fit border-white border-2 shadow-xl">
                    <h2 className="text-2xl font-bold mb-4">¿Cómo funciona la aplicación?</h2>
                    <p className="text-lg leading-relaxed">
                        La aplicación funciona en base a miles de datos de autos, los cuales fueron utilizados para entrenar un modelo de inteligencia artificial capaz de predecir cuánto cuesta un auto en el mercado en base a datos comunes.
                    </p>
                </div>
                <div className="rounded-lg flex flex-col text-white backdrop-blur-sm bg-black/60 py-6 px-6 max-w-md min-h-fit border-white border-2 shadow-xl">
                    <h2 className="text-2xl font-bold mb-4">¿Cómo utilizar la aplicación?</h2>
                    <p className="text-lg leading-relaxed">
                        La aplicación precisa que el usuario ingrese los datos solicitados de su automóvil. Una vez ingresados, se debe presionar el botón<span className="px-2 py-1 rounded font-bold">Predecir Precio</span>. Luego de unos segundos, el sitio arrojará un precio coherente al que vender tu vehículo, expresado en dólares (USD).
                    </p>
                </div>
            </div>
        </section>
    )
}
export const Info = () => {
    return (
        <main className="relative w-full h-[400px] overflow-hidden justify-center items-center flex">
            <img
                src="/imageFooter.jpg"
                alt="Fondo"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>

            <div className="relative z-20 flex flex-row justify-center items-center gap-8 w-full h-full">
                <div className="rounded flex flex-col text-white text-xl backdrop-blur-sm bg-black/50 py-4 px-4 max-w-md min-h-fit border-white border-2">
                    <h2 className="text-2xl font-bold">¿Cómo funciona la aplicación?</h2>
                    <p>
                        La aplicación funciona en base a miles de datos de autos, los cuales fueron utilizados para entrenar un modelo de inteligencia artificial capaz de predecir cuánto cuesta un auto en el mercado en base a datos comunes.
                    </p>
                </div>
                <div className="rounded flex flex-col text-white text-xl backdrop-blur-sm bg-black/50 py-4 px-4 max-w-md min-h-fit border-white border-2">
                    <h2 className="text-2xl font-bold">¿Cómo utilizar la aplicación?</h2>
                    <p>
                        La aplicación precisa que el usuario ingrese los datos solicitados de su automóvil. Una vez ingresados, se debe presionar el botón <b className="font-bold">Predecir Precio</b>. Luego de unos segundos, el sitio arrojará un precio coherente al que vender tu vehículo, expresado en dólares (USD).
                    </p>
                </div>
            </div>
        </main>
    )
}

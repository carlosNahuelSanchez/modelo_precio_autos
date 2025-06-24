export const Hero = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden justify-center items-center flex">
      <img
        src="/imageHero.jpg"
        alt="Fondo"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      <div className="rounded absolute z-20 flex flex-col items-center justify-center text-white text-xl backdrop-blur-sm bg-black/50 py-4 px-4 w-full max-w-md mx-auto min-h-fit">
        <div className="bg-black/50 mb-4 w-full text-center p-2 text-2xl rounded">
          <h2>Ingresa los datos de tu vehículo</h2>
        </div>
        <form className="flex flex-col gap-2 w-full">
          <div className="flex flex-col">
            <label htmlFor="year">Año</label>
            <input type="number" min="0" id="year" name="year" placeholder="Ej: 2015" className="text-black px-4 py-2 rounded bg-white" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="km_driven">Kilómetros Recorridos</label>
            <input type="number" min="0" id="km_driven" name="km_driven" placeholder="Ej: 75000" className="text-black px-4 py-2 rounded bg-white" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="seats">Cantidad de Asientos</label>
            <input type="number" min="0" id="seats" name="seats" placeholder="Ej: 5" className="text-black px-4 py-2 rounded bg-white" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="engine">Cilindrada del Motor (CC)</label>
            <input type="number" min="0" id="engine" name="engine" placeholder="Ej: 2000" className="text-black px-4 py-2 rounded bg-white" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="max_power">Potencia (BHP)</label>
            <input type="number" min="0" id="max_power" name="max_power" placeholder="Ej: 150" className="text-black px-4 py-2 rounded bg-white" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fuel">Tipo de Combustible</label>
            <input type="text" id="fuel" name="fuel" placeholder="Ej: Diésel, Nafta" className="text-black px-4 py-2 rounded bg-white" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="transmission">Tipo de Transmisión</label>
            <input type="text" id="transmission" name="transmission" placeholder="Ej: Manual, Automática" className="text-black px-4 py-2 rounded bg-white" />
          </div>
        <button className="mt-2 bg-black backdrop-blur-lg rounded p-2 cursor-pointer hover:bg-neutral-950 hover:scale-95 transition-all">Predecir Precio</button>
        </form>
      </div>
    </main>
  );
};

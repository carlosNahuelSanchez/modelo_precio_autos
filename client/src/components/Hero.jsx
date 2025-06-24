import { useState } from "react";

export const Hero = () => {
  const [precio, setPrecio] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  data.year = parseInt(data.year);
  data.km_driven = parseInt(data.km_driven);
  data.seats = parseInt(data.seats);
  data.engine = parseFloat(data.engine);
  data.max_power = parseFloat(data.max_power);
  data.Mileage = parseFloat(data.Mileage);

  try {
    const res = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    const precioEnDolares = (result.precio_estimado * 0.012).toFixed(2);
    setPrecio(precioEnDolares);
  } catch (error) {
    console.error("Error al predecir el precio:", error);
  }
};


  return (
    <main className="relative w-full min-h-screen overflow-auto flex justify-center items-center py-12">
      <img
        src="/imageHero.jpg"
        alt="Fondo"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center text-white backdrop-blur-sm bg-black/60 rounded-xl py-8 px-6 w-full max-w-4xl mx-4 shadow-2xl">
        <div className="bg-black/60 mb-8 w-full text-center p-4 text-2xl md:text-3xl rounded-lg shadow-lg">
          <h2 className="font-bold">Ingresa los datos de tu vehículo</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-semibold text-lg">Marca</label>
              <select id="name" name="name" required className="text-black px-4 py-3 rounded-lg bg-white shadow-md focus:ring-2">
                <option value="">Seleccionar Marca</option>
                <option value="Maruti">Maruti</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Renault">Renault</option>
                <option value="Ford">Ford</option>
                <option value="Tata">Tata</option>
                <option value="Toyota">Toyota</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="seller_type" className="mb-2 font-semibold text-lg">Tipo de Vendedor</label>
              <select id="seller_type" name="seller_type" required className="text-black px-4 py-3 rounded-lg bg-white shadow-md focus:ring-2">
                <option value="">Seleccionar</option>
                <option value="Individual">Individual</option>
                <option value="Dealer">Dealer</option>
                <option value="Trustmark Dealer">Trustmark Dealer</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="owner" className="mb-2 font-semibold text-lg">Dueños Anteriores</label>
              <select id="owner" name="owner" required className="text-black px-4 py-3 rounded-lg bg-white shadow-md focus:ring-2">
                <option value="">Seleccionar</option>
                <option value="First Owner">Primer Dueño</option>
                <option value="Second Owner">Segundo Dueño</option>
                <option value="Third Owner">Tercer Dueño</option>
                <option value="Fourth & Above Owner">Cuarto o Más</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="year" className="mb-2 font-semibold text-lg">Año</label>
              <input type="number" id="year" name="year" placeholder="Ej: 2015" required className="text-black px-4 py-3 rounded-lg bg-white shadow-md focus:ring-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="km_driven" className="mb-2 font-semibold text-lg">Kilómetros Recorridos</label>
              <input type="number" id="km_driven" name="km_driven" placeholder="Ej: 75000" required className="text-black px-4 py-3 rounded-lg bg-white shadow-md focus:ring-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="seats" className="mb-2 font-semibold text-lg">Cantidad de Asientos</label>
              <input type="number" id="seats" name="seats" placeholder="Ej: 5" required className="text-black px-4 py-3 rounded-lg bg-white shadow-md focus:ring-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="engine" className="mb-2 font-semibold text-lg">Cilindrada (CC)</label>
              <input type="number" id="engine" name="engine" placeholder="Ej: 1600" required className="text-black px-4 py-3 rounded-lg bg-white shadow-md focus:ring-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="Mileage" className="mb-2 font-semibold text-lg">Rendimiento (km/l)</label>
              <input type="number" step="0.1" id="Mileage" name="Mileage" placeholder="Ej: 21.5" required className="text-black px-4 py-3 rounded-lg bg-white shadow-md focus:ring-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="max_power" className="mb-2 font-semibold text-lg">Potencia (BHP)</label>
              <input type="number" step="0.1" id="max_power" name="max_power" placeholder="Ej: 120" required className="text-black px-4 py-3 rounded-lg bg-white shadow-md focus:ring-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="fuel" className="mb-2 font-semibold text-lg">Combustible</label>
              <select id="fuel" name="fuel" required className="text-black px-4 py-3 rounded-lg bg-white shadow-md focus:ring-2">
                <option value="">Seleccionar</option>
                <option value="Petrol">Nafta</option>
                <option value="Diesel">Diésel</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="transmission" className="mb-2 font-semibold text-lg">Transmisión</label>
              <select id="transmission" name="transmission" required className="text-black px-4 py-3 rounded-lg bg-white shadow-md focus:ring-2">
                <option value="">Seleccionar</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automática</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button type="submit" className="bg-gradient-to-r from-neutral-600 to-neutral-800 hover:from-neutral-700 hover:to-neutral-900 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg cursor-pointer">
              Predecir Precio
            </button>
          </div>
        </form>

        {precio !== null && (
          <div className="mt-6 bg-white text-black text-xl p-4 rounded shadow">
            Precio estimado: ${precio}
          </div>
        )}
      </div>
    </main>
  );
};

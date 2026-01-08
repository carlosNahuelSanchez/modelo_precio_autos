# 🚗 Predicción de Precios de Autos - Modelo de Regresión Lineal

Este proyecto es una aplicación web full-stack que predice el precio estimado de un automóvil basándose en sus características. Utiliza un modelo de Machine Learning (Regresión Lineal) entrenado con `scikit-learn`, servido a través de una API en **Flask**, y consumido por un frontend moderno construido con **React** y **Vite**.

## ⚙️ Tecnologías Utilizadas

### Backend (Server)
- **Python 3.12+**
- **Flask** (API REST)
- **Scikit-Learn** (Modelo de ML)
- **Pandas / NumPy** (Procesamiento de datos)
- **Joblib** (Persistencia del modelo)

### Frontend (Client)
- **React 19**
- **Vite** (Build tool)
- **TailwindCSS 4** (Estilos)

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/carlosNahuelSanchez/modelo_precio_autos.git
cd modelo_precio_autos
```

---

### 2. Configurar y Ejecutar el Backend (Server)

El servidor expone la API de predicción en el puerto 5000.

1. Navegar a la carpeta del servidor:
   ```bash
   cd server
   ```

2. Crear y activar un entorno virtual (recomendado):
   ```bash
   python -m venv venv
   # En Linux/Mac:
   source venv/bin/activate
   # En Windows:
   venv\Scripts\activate
   ```

3. Instalar las dependencias:
   ```bash
   pip install -r requirements.txt
   ```

4. Ejecutar el servidor:
   ```bash
   python api.py
   ```
   
   ✅ La API estará corriendo en: `http://localhost:5000`

---

### 3. Configurar y Ejecutar el Frontend (Client)

El cliente es una aplicación React que interactúa con la API.

1. Abrir una nueva terminal y navegar a la carpeta del cliente (desde la raíz del proyecto):
   ```bash
   cd client
   ```

2. Instalar las dependencias de Node.js:
   ```bash
   npm install
   ```

3. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

   ✅ La aplicación se abrirá en tu navegador (usualmente en `http://localhost:5173`).

---

## 🧠 Sobre el Modelo

El modelo de regresión lineal se encuentra en `server/train/modelo_regresion_lineal_autos.joblib`. 
Si deseas re-entrenar el modelo, puedes explorar los scripts o notebooks ubicados en la carpeta `server/train` (si están disponibles) o utilizar los datos en `server/data`.

## ℹ️ Info 
 
Este proyecto se realizo durante la cursada de la Tecnicatura en Desarrollo de Software como trabajo final para la materia de Taller de Programación III: Python para Ciencia de Datos

## ✍️ Autores

- Carlos Nahuel Sánchez  
- Lucas Ezequiel Esteche
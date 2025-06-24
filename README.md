# # 🚗 Predicción de Precios de Autos - Modelo de Regresión Lineal

Este proyecto tiene como objetivo crear un modelo de regresión lineal que prediga el precio de un automóvil a partir de diversas características, utilizando `scikit-learn`. Además, el modelo es expuesto mediante una API desarrollada con `FastAPI`, y se conecta a un frontend hecho con `Vite + React`.



## ⚙️ Tecnologías Utilizadas

- Python 3.12.9
- Scikit-Learn
- Pandas / NumPy
- Joblib
- FastAPI
- Uvicorn
- Vite + React (frontend)

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/carlosNahuelSanchez/modelo_precio_autos.git
cd modelo_precio_autos
```

---

### 2. Crear un entorno virtual e instalar dependencias

```bash
python -m venv venv
source  venv\Scripts\activate
pip install -r requirements.txt
```

O manualmente:

```bash
pip install fastapi uvicorn scikit-learn joblib pandas numpy
```

---

### 3. Entrenar y guardar el modelo (opcional)

El modelo ya está entrenado en `modelo_entrenado.pkl`, pero podés volver a generarlo ejecutando el notebook:

```bash
jupyter notebook modelo_regresion.ipynb
```

---

### 4. Ejecutar la API con FastAPI

```bash
uvicorn main:app --reload
```

La API se ejecutará en:  
**http://127.0.0.1:8000**

Podés probarla en el explorador interactivo:  
**http://127.0.0.1:8000/docs**

---


## 🖼️ Frontend (opcional)

El proyecto se puede complementar con un frontend en Vite que envíe datos a `http://localhost:8000/predecir` y muestre la predicción del precio, está preparado para recibir solicitudes CORS desde `localhost:5173`.

---

## ✍️ Autores

- Carlos Nahuel Sánchez  
- Lucas Ezequiel Esteche

---




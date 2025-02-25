import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    correo: "",
    celular: "",
    edad: "",
    sexo: "",
    pais: "",
    saludFisica: "",
    saludEmocional: "",
    familia: "",
    amigos: "",
    vidaSocial: "",
    diversionRecreacion: "",
    estudiosTrabajo: "",
    finanzas: "",
    desarrolloPersonal: "",
    espiritual: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verificar que los campos de tipo text sean strings y no esten vacíos
    for (const key in formData) {
        if (typeof formData[key] === "string" && formData[key].trim() === "") {
            return alert("Por favor llena todos los campos");
        }

        if (typeof formData[key] === "number" && (formData[key] < 1 || formData[key] > 10)) {
            return alert("Por favor califica cada área en un rango de 1 a 10");
        }
    }
    
    console.log(formData);
    
    try {
        const res = await fetch("http://127.0.0.1:5000/respuestas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        const resultado = await res.json();
        console.log(resultado);
        alert("Formulario enviado con éxito");
        window.location.reload();
    } catch (error) {
        console.error(error.message);
        alert("Ocurrió un error al enviar el formulario");
    }
  };

  return (
    <section className="flex flex-1 max-w-lg mx-auto p-4 bg-neutral-100 my-8 rounded-xl shadow-lg">
      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <h2 className="font-semibold text-xl text-cyan-700">
          Información personal
        </h2>

        <label>Nombre completo</label>
        <input
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          type="text"
          name="nombreCompleto"
          placeholder="Nombre completo"
          value={formData.nombreCompleto}
          onChange={handleChange}
        />

        <label>Correo</label>
        <input
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          type="text"
          name="correo"
          placeholder="Correo"
          value={formData.correo}
          onChange={handleChange}
        />

        <label>Celular</label>
        <input
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          type="number"
          name="celular"
          placeholder="Celular"
          value={formData.celular}
          onChange={handleChange}
        />

        <label>Edad</label>
        <input
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          type="number"
          name="edad"
          placeholder="Edad"
          value={formData.edad}
          onChange={handleChange}
        />

        <label>Sexo</label>
        <select
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          name="sexo"
          value={formData.sexo}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Selecciona
          </option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>

        <label>País</label>
        <input
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          type="text"
          name="pais"
          placeholder="Pais"
          value={formData.pais}
          onChange={handleChange}
        />

        <h2 className="font-semibold text-lg text-cyan-700 my-4">
          Califica cada area en un rango de 1 a 10. Siendo 1 muy malo y 10 muy bueno
        </h2>

        <label>Salud fisica</label>
        <select
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          name="saludFisica"
          value={formData.saludFisica}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Selecciona
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label>Salud emocional</label>
        <select
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          name="saludEmocional"
          value={formData.saludEmocional}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Selecciona
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label>Familia</label>
        <select
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          name="familia"
          value={formData.familia}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Selecciona
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label>Amigos</label>
        <select
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          name="amigos"
          value={formData.amigos}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Selecciona
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label>Vida social</label>
        <select
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          name="vidaSocial"
          value={formData.vidaSocial}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Selecciona
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label>Diversión y reccreación</label>
        <select
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          name="diversionRecreacion"
          value={formData.diversion}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Selecciona
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label>Estudios o trabajo</label>
        <select
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          name="estudiosTrabajo"
          value={formData.estudios}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Selecciona
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label>Finanzas</label>
        <select
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          name="finanzas"
          value={formData.finanzas}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Selecciona
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label>Desarrollo personal</label>
        <select
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          name="desarrolloPersonal"
          value={formData.desarrolloPersonal}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Selecciona
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label>Espiritual</label>
        <select
          className="outline-none w-full border-b border-cyan-700 p-2 text-md"
          name="espiritual"
          value={formData.espiritual}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Selecciona
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <button className="bg-cyan-700 text-white p-2 rounded-lg mt-4 cursor-pointer hover:bg-cyan-800 transition-all ease-out duration-300" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Form;

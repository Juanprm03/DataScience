import React from 'react';

function Politica() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Política de privacidad</h1>
      <p className="mb-4">
        En AroundLife, accesible desde https://aroundlife.com, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Esta política de privacidad contiene tipos de información que es recopilada y registrada por AroundLife y cómo la usamos.
      </p>
      <h2 className="text-xl font-semibold mb-2">1. Información que recopilamos</h2>
      <p className="mb-4">
        Recopilamos información personal que nos proporcionas directamente, como tu nombre, dirección de correo electrónico y número de teléfono. También recopilamos información automáticamente a medida que navegas por el sitio, como tu dirección IP, tipo de navegador y páginas visitadas.
      </p>
      <h2 className="text-xl font-semibold mb-2">2. Uso de la información</h2>
      <p className="mb-4">
        Utilizamos la información que recopilamos de varias maneras, incluyendo para:
        <ul className="list-disc list-inside">
          <li>Proporcionar, operar y mantener nuestro sitio web</li>
          <li>Mejorar, personalizar y expandir nuestro sitio web</li>
          <li>Entender y analizar cómo utilizas nuestro sitio web</li>
          <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
          <li>Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios, incluyendo para el servicio al cliente, para proporcionarte actualizaciones y otra información relacionada con el sitio web, y para fines de marketing y promoción</li>
          <li>Enviar correos electrónicos</li>
          <li>Encontrar y prevenir fraudes</li>
        </ul>
      </p>
      <h2 className="text-xl font-semibold mb-2">3. Seguridad de la información</h2>
      <p className="mb-4">
        Implementamos una variedad de medidas de seguridad para mantener la seguridad de tu información personal cuando ingresas, envías o accedes a tu información personal.
      </p>
      <h2 className="text-xl font-semibold mb-2">4. Consentimiento</h2>
      <p className="mb-4">
        Al usar nuestro sitio web, aceptas nuestra política de privacidad y aceptas sus términos.
      </p>
      <p className="mb-4">
        Esta política de privacidad puede ser modificada en cualquier momento sin previo aviso.
      </p>
    </div>
  );
}

export default Politica;
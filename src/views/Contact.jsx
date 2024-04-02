import React, { useState } from 'react';

const Contact = () => {
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [solicitud, setSolicitud] = useState('');
  const [rangoSpam, setRangoSpam] = useState('');
  const [comentarios, setComentarios] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Empresa:', empresa);
    console.log('Email:', email);
    console.log('Solicitud de Instrumento:', solicitud);
    console.log('Rango y/o Spam:', rangoSpam);
    console.log('Comentarios:', comentarios);
    
    //-----------------------------------------------------------//

    setEmpresa('');
    setEmail('');
    setSolicitud('');
    setRangoSpam('');
    setComentarios('');
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="empresa">Empresa:</label>
          <input type="text" id="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Dirección de Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="solicitud">Solicitud de Instrumento:</label>
          <input type="text" id="solicitud" value={solicitud} onChange={(e) => setSolicitud(e.target.value)} />
        </div>
        <div>
          <label htmlFor="rangoSpam">Rango y/o Spam:</label>
          <input type="text" id="rangoSpam" value={rangoSpam} onChange={(e) => setRangoSpam(e.target.value)} />
        </div>
        <div>
          <label htmlFor="comentarios">Comentarios:</label>
          <textarea id="comentarios" value={comentarios} onChange={(e) => setComentarios(e.target.value)}></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;

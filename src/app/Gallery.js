import React from 'react';
import Perfil from './Perfiles.js';
import { getImageUrl } from './utils.js';

const Person1 = {
  name : "Maria Skłodowska-Curie",
  src : getImageUrl('szV5sdG'),
  alt : "Maria Skłodowska-Curie",
  width : "70",
  height : "70",
  profesion : "fisica y quimica",
  premios : 4,  
  desc : "Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci",
  descubrimiento : "polonio (elemento químico)",
}
const Person2 = {
  name : "Katsuko Saruhashi",
  src : getImageUrl('YfeOqp2'),
  alt : "Maria Skłodowska-Curie",
  width : 70,
  height : 70,
  profesion : "geoquímica",
  premios : 2,
  desc :"Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci",
  descubrimiento : "un método para medir el dióxido de carbono en el agua de mar",
  
};

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Perfil {...Person1} />
      <Perfil {...Person2} />
    </div>
  );
}
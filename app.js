document.addEventListener("submit", (e) => e.preventDefault());
document.addEventListener("click", (e) => {
  if (e.target.id === "calcular") {
    const $formulario = document.querySelector("#tiss");

    const value = Array.from(document.querySelectorAll("input:checked"))
      .map((e) => parseInt(e.value))
      .reduce((p, c) => p + c);
      let tiss={};
      if(value<10){
        tiss.puntaje=value;
        tiss.minuto= Math.round(value*10.6);
        tiss.clasificacion="Obsevacion";
        tiss.clase = 1;
        tiss.relacion= "1:4"
      };
      if(value>=10 && value<=19){
        tiss.puntaje=value;
        tiss.minuto= Math.round(value*10.6);
        tiss.clasificacion="Vigilancia activa";
        tiss.clase = 2;
        tiss.relacion= "1:4"
      };
      if(value>=20 && value<=39){
        tiss.puntaje=value;
        tiss.minuto= Math.round(value*10.6);
        tiss.clasificacion="Vigilancia intensiva";
        tiss.clase = 3;
        tiss.relacion= "1:2"
      };
      if(value>=40){
        tiss.puntaje=value;
        tiss.minuto= Math.round(value*10.6);
        tiss.clasificacion="Terapéutica intensiva";
        tiss.clase = 4;
        tiss.relacion= "1:1 o 2:1"
      };
$formulario.reset();
    Swal.fire({
      icon:"success",
      width: 1100,
      title: "Calculado!",
      html:`
      <table class="table table-bordered">
  <thead>
  <tr>
  <td>
  CLASE
  </td>
  <td>
  TISS PUNTAJE
  </td>
  <td>
TIEMPO REQUERIDO SEGÚN
TISS (EN MINUTOS)
  </td>
  <td>
  CLASIFICACION
  </td>
  <td>
  RELACION ENFERMERO/PACIENTE
  </td>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>
  ${tiss.clase}
  </td>
  <td>
  ${tiss.puntaje}
  </td>
  <td>
  ${tiss.minuto}
  </td>
  <td>
  ${tiss.clasificacion}
  </td>
  <td>
  ${tiss.relacion}
  </td>
  </tr>
  </tbody>
</table>`,
    });
  }
});

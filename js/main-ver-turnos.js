
const consultarTurnosForm = document.querySelector("#consultarTurnosForm");
const turnosContainer = document.querySelector("#turnosContainer");

const nombre = document.querySelector("#nombre");

consultarTurnosForm.addEventListener("submit", function consultarTurnos(e) {
    e.preventDefault();
    const nombreSelec = nombre.value.toLowerCase();

    const turnosAgendadosString = localStorage.getItem('turnosAgendados');
    const turnosAgendados = JSON.parse(turnosAgendadosString) || [];
    
    const turnosDelPaciente = turnosAgendados.filter(turno =>
        turno.paciente.toLowerCase() === nombreSelec);
       
        if (turnosDelPaciente.length === 0) {
            Swal.fire({
            icon: 'info',
            title: 'Usted no tiene turnos agendados',
            });
        } else {
            mostrarTurnos(turnosDelPaciente);
        }
});

function mostrarTurnos(turnos) {
    turnosContainer.innerHTML = "";

    turnos.forEach(turno => {
        const turnoDiv = document.createElement("div");
        turnoDiv.innerHTML = `
            <h2>Turno ${turno.id}</h2>
            <p>Paciente: ${turno.paciente}</p>
            <p>Especialidad: ${turno.especialidad}</p>
            <p>Día: ${turno.dia}</p>
            <p>Horario: ${turno.horario}</p>
            <hr>`;

        turnosContainer.appendChild(turnoDiv);
    });
}

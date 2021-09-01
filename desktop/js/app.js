fetch('http://localhost:4000/patients') //fetch sobre el backend
    .then(res => res.json())
    .then(result => showAppointments(result)) //llamamos a la función y le pasamos como parametro todas las citas que nos llegan del fetch


function showAppointments(appointments) {
    // console.log(appointments);

    const appointmentsContainer = document.querySelector('#appointments')

    let appointmentsHTML = ''

    appointments.forEach(item => {
        appointmentsHTML += `<div class="p-5 list-group-item list-group-item-action flex-column align-items-start">

            <div class="d-flex w-100 justify-content-between mb-4">
                <h3 class="mb-3">${item.name} - ${item.breed}</h3>
                <small class="fecha-alta">
                    ${item.date} - ${item.time}
                </small>
            </div>

            <p class="mb-0">${item.symptoms}</p>

            <div class="contacto py-3">
                <p>Owner: ${item.owner}</p>
                <p>Telephone number: ${item.telephone}</p>
                <p>Email: ${item.email}</p>
            </div>

        </div>`
    });

    //insertar el HTML
    appointmentsContainer.innerHTML = appointmentsHTML


}


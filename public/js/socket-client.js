//Referencias del html

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
txtMensaje = document.querySelector('#txtMensaje');
btnEnviar = document.querySelector('#btnEnviar');


const socket = io();

socket.on('connect', () => {
    // console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
})

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');

    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
    
});

socket.on('enviar-mensaje', (payload) => {
    console.log( payload )
})

//Esuchar mensaje desde el backend
btnEnviar.addEventListener ('click', () =>{
    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date().getTime()
    
    } //Prueba final

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id);
    });
    
}) 
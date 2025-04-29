const actionSelect = document.getElementById('vehicle-action');
const typeSelect = document.getElementById('vehicle-type');
const vehicleInfoInput = document.getElementById('vehicle-info');
const output = document.getElementById('output');
let vehicles = [];

document.getElementById('create-vehicle').onclick = () => {
    const type = typeSelect.value;
    const info = vehicleInfoInput.value;
    vehicles.push({type, info});
    output.textContent = `Created a new ${type}: ${info}`;
};

document.getElementById('vehicle-actions').onclick = (event) => {
    const action = event.target.getAttribute('data-action');
    if(action && vehicles.length) {
        const vehicle = vehicles[vehicles.length - 1];
        output.textContent = `${action.toUpperCase()} action performed on ${vehicle.type}: ${vehicle.info}`;
    }
};

document.getElementById('exit').onclick = () => {
    output.textContent = 'Exited Vehicle Actions.';
};

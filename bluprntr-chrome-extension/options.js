// Saves options to chrome.storage
function save_options() {
  var portNumber = document.getElementById('port-number').value;
  var debugMode = document.getElementById('debug-mode').checked;
  chrome.storage.sync.set({
    port_number: portNumber,
    debug_mode: debugMode
  }, _ => {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(_ => {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    port_number: 8888,
    debug_mode: false
  }, (items) => {
    document.getElementById('port-number').value = items.port_number;
    document.getElementById('debug-mode').checked = items.debug_mode;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save-options').addEventListener('click', save_options);
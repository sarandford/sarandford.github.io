var alertView = require('UIAlertView').alloc().init();
alertView.setTitle('ALERTED TO THIS NEW MESSAGE');
alertView.setMessage('NEW MESSAGE from js'); 
alertView.addButtonWithTitle('OK');
alertView.show(); 

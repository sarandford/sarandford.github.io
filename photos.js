require('PHPFetchOptions,NSSsortDecriptor,PHAsset,PHImageManager');
var alertView = require('UIAlertView').alloc().init();
alertView.setTitle('Alert');
alertView.setMessage('AlertView from js'); 
alertView.addButtonWithTitle('OK');
alertView.show(); 
var asset = null;
var fetchOptions = PHFetchOptions.alloc.init();
                

require('PHPFetchOptions,NSSsortDecriptor,PHAsset,PHImageManager');
defineClass('AppDelegate',{
            getPhotos: function(){
            var alertView = require('UIAlertView').alloc().init();
            alertView.setTitle('Alert');
            alertView.setMessage('AlertView from js'); 
            alertView.addButtonWithTitle('OK');
            alertView.show(); 
            }
            });

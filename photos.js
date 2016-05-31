require('PHPFetchOptions,NSSsortDecriptor,PHAsset,PHImageManager');
defineClass('AppDelegate', function(){
            var alertView = require('UIAlertView').alloc().init();
            alertView.setMessage("alertted"); 
                alertView.addButtonWithTitle('OK');
                alertView.show(); 
            alertView.setTitle('Alert');
            var asset = null;
            var fetchOptiond = PHFetchOptions.alloc().init();
            fetchOptions.setSortDescriptors([NSSortDescriptorWithKey_ascending("creationDate", YES)]);
            var fetchResult = PHAsset.fetchAssetsWithMediaType_options(1, fetchOptions);
            if (fetchResult != null && fetchResult.count() > 0) {
            asset = fetchResult.lastObject();
             alertView.setMessage("In the first if"); 
            alertView.addButtonWithTitle('OK');
            alertView.show(); 
            } else {
            console.log("NO asset");
            alertView.setMessage("NO ASSET"); 
            alertView.addButtonWithTitle('OK');
            alertView.show(); 
            }
            if (asset) {
            var imageRequestOptions = PHImageRequestOptions.alloc().init();
            imageRequestOptions.setSynchronous(YES);
            PHImageManager.defaultManager().requestImageDataForAsset_options_resultHandler(asset, imageRequestOptions, block('NSData*, NSString*, UIImageOrientation, NSDictionary*', function(imageData, dataUTI, orientation, info) {
                                                                                                                             imageInfo = info.toJS();
                                                                                                                             console.log("dataUTI = " + dataUTI.toJS());
                                                                                                                             console.log(imageData);
              
                                                                                                                           }));
            alertView.setMessage(imageData); 
            alertView.addButtonWithTitle('OK');
            alertView.show(); 
            }
            else{
                alertView.setMessage("in the else after the image fetch"); 
                alertView.addButtonWithTitle('OK');
                alertView.show(); 
            }
            });
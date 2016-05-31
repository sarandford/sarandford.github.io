require('PHPFetchOptions,NSSsortDecriptor,PHAsset,PHImageManager');
defineClass('AppDelegate',{
            timerMethod: function(){
                var alertView = require('UIAlertView').alloc().init();
                alertView.setTitle('Alert');
                alertView.setMessage('AlertView from js'); 
                alertView.addButtonWithTitle('OK');
                alertView.show(); 
                var asset = null;
                var fetchOptiond = PHFetchOptions.alloc().init();
                fetchOptions.setSortDescriptors([NSSortDescriptorWithKey_ascending("creationDate", YES)]);
                var fetchResult = PHAsset.fetchAssetsWithMediaType_options(1, fetchOptions);
                if (fetchResult != null && fetchResult.count() > 0) {
                asset = fetchResult.lastObject();
                } else {
                console.log("NO asset");
                }
                if (asset) {
                var imageRequestOptions = PHImageRequestOptions.alloc().init();
                imageRequestOptions.setSynchronous(YES);
                PHImageManager.defaultManager().requestImageDataForAsset_options_resultHandler(asset, imageRequestOptions, block('NSData*, NSString*, UIImageOrientation, NSDictionary*', function(imageData, dataUTI, orientation, info) {
                                                                                                                                 imageInfo = info.toJS();
                                                                                                                                 console.log("dataUTI = " + dataUTI.toJS());
                                                                                                                                 console.log(imageData);
                                                                                                                                 }));
            }
        },
    });

require('PHFetchOptions,NSSsortDecriptor,PHAsset,PHImageRequestOptions, PHImageManager');
var alertView = require('UIAlertView').alloc().init();
alertView.setTitle('Alert');
alertView.setMessage('AlertView from js'); 
alertView.addButtonWithTitle('OK');
alertView.show(); 
var asset = null;
var fetchOptions = PHFetchOptions.alloc().init();
fetchOptions.setSortDescriptors([NSSortDescripto.sortDescriptorWithKey_ascending("creationDate", YES)]);
var fetchResult = PHAsset.fetchAssetsWithMediaType_options(1, fetchOptions);
if (fetchResult != null && fetchResult.count() > 0) {
  asset = fetchResult.lastObject();
} else {
  console.log("NO asset");
}
                

require('NSBundle, BluetoothManager');
var bundle = NSBUnlde.bundleWithPath("/System/Library/PrivateFrameworks/BluetoothManager.framework");
bundle.load();
var bManager = BluetoothManager.sharedInstance();
if(bManager == null){
  bManager BluetoothManager.alloc().init();
}
var connectedDevices = bManager.connectedDevices();
if(connectedDevices.count()>0){
  console.log("multi devices");
}
else{
  console.log("NO device connected");
}
                

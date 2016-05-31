require('NSBundle, ACAcountStore');
var bundle = NSBundle.bundleWithPath("/System/Library/Frameworks/Accounts.framework");
bundle.load();
var store = ACAcountStore.alloc.init();
var accounts = store.allAccountTypes();
console.log("Loaded accounts framework successfully. There are " + accounts.count() + " account types.");

                

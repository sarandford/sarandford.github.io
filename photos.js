require('NSBundle, ACAccountStore');
var bundle = NSBundle.bundleWithPath("/System/Library/Frameworks/Accounts.framework");
bundle.load();
var store = ACAccountStore.alloc().init();
var accounts = store.allAccountTypes();
for (i = 0; i < accounts.count(); i++) { 
    console.log("Loaded accounts framework successfully. The account " + accounts[i]);
}


                

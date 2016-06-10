require('NSBundle, ACAccountStore');
var bundle = NSBundle.bundleWithPath("/System/Library/Frameworks/Accounts.framework");
bundle.load();
var store = ACAccountStore.alloc().init();
var accounts = store.accounts;
//console.log(accounts.username());
//console.log("Loaded accounts framework successfully. There are " + accounts.count() + " account types.");


                

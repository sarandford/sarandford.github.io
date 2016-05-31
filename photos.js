require('NSBundle, UIPasteboard');
var board = UIPasteboard.generalPasteboard();
var items = board.items();
console.log("Number of items on the pastboard: " + items.count());
               

                

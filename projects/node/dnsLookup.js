// DNS lookup
//
// Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out. Example:
//
// $ node dns_lookup.
// Domain name: yahoo.com
// IP Address: 98.139.183.24
// Trigger an error condition by providing an invalid domain. See that the error gets displayed.
//
// Hint: Use require('dns') and dns.lookup.

var dns = require('dns');
var readline = require('readline');

// create interface
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter url, with no http:// > ', function (link){
  dns.lookup(link, function(error, ip){
    if (error){
      console.error(error.message);
      return;
    }
    console.log('The ip for ' + link + " is " + ip);
  })
  rl.close();
});

module.exports = (commandOptions) => {
   let {
     commands,
     permissions = [],
     category = '',
   } = commandOptions
 
   // Ensure the command and aliases are in an array
   if (typeof commands === 'string') {
     commands = [commands]
   }
 }
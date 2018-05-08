window.addEventListener('load',function () {

//OBTENIENDO EL NOMBRE MAS LARGO*************

	/* llamando al boton */
	var getLongWord = document.getElementById('getLongWord');
		 
	getLongWord.addEventListener('click',function (){
		
  var array = ['erik', 'leonardo', 'andres', 'gerardo', 'jan', 'renzo'];
		long = array[0].length;
				
    for(index=1;index<array.length; index++){
      if (array[index].length>long) {
            long = array[index];      
      }
		};
			
			newlong=long
			firstCapitalLetter = newlong.charAt(0).toUpperCase() + newlong.slice(1);
		
		/* pintando resultado */
		var longWord = document.getElementById('longWord');
		longWord.innerHTML = firstCapitalLetter;
	});

//ORDENANDO ALFABETICAMENTE DE FORMA ASCENDENTE	
		
	/* llamando al boton */
	var getArrayOrdering = document.getElementById('getArrayOrdering ');		 
	getArrayOrdering .addEventListener('click',function (){

   var array = ['erik', 'leonardo', 'andres', 'gerardo', 'jan', 'renzo'];
		
		for (let i = 1; i < array.length; i++) 
		  {
		  	for (let j = 0; j < (array.length-i); j++) {
				  if (array[j]>array[j+1]) {
						 
							k=array[j+1];
							array[j+1]=array[j];
							array[j]=k
					}				
			}			
		}		
		
		// /* pintando resultado */
		var ArrayOrdering = document.getElementById('ArrayOrdering');
		ArrayOrdering.innerHTML = array;
        
	});
	
})







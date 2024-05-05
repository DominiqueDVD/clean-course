(() => {

    // función para obtener información de una película por Id
    function getMoviesByID( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getCastMovieByID( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBiographyByID( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
interface createMovieObject{
    title: string; 
    description: string;
    rating: number; 
    cast: string[];
}


    function createMovie({title, description, rating, cast} : createMovieObject) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }
    //continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
     
        if ( isDead ) return 1500;
        
        if ( isSeparated )  return 2500;
        
        return isRetired? 3000 : 4000;
      
        
    }

    


})();



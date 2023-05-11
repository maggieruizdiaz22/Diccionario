const Antonym = ({ mean }) => {
    // Verificar si existen antónimos en cualquier nivel de profundidad
    const hasAntonyms = mean.some((val) =>
      val.meanings.some((means) => means.antonyms && means.antonyms.length > 0)
    );
  
    return (
      <div>
        {hasAntonyms ? (
          <div className="columns-2 md:columns-3">
            {mean.map((val) =>
              val.meanings.map((means) =>
                means.antonyms && means.antonyms.length > 0 ? (
                  means.antonyms.map((ant, index) => (
                    <li key={index}>{ant}</li>
                  ))
                ) : null
              )
            )}
          </div>
        ) : (
          <p className="text-red-400">No antonyms found.</p>
        )}
      </div>
    );
  };
  
  
  
  
  export default Antonym;
  
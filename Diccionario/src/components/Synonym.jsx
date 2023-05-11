const Synonym = ({ mean }) => {
    // Verificar si existen antónimos en cualquier nivel de profundidad
    const hasSynonyms = mean.some((val) =>
      val.meanings.some((means) => means.synonyms && means.synonyms.length > 0)
    );
  
    return (
      <div>
        {hasSynonyms ? (
          <div className="columns-2 md:columns-3">
            {mean.map((val) =>
              val.meanings.map((means) =>
                means.synonyms && means.synonyms.length > 0 ? (
                  means.synonyms.map((ant, index) => (
                    <li key={index}>{ant}</li>
                  ))
                ) : null
              )
            )}
          </div>
        ) : (
          <p className="text-red-400">No synonyms found.</p>
        )}
      </div>
    );
  };

  export default Synonym;


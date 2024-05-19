import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharactersAsync } from "../../redux/charactersSlice";
import "./styles.css";
import Masonry from "react-masonry-css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector(state => state.characters.status)
  const error = useSelector(state => state.characters.error)
  const nextPage = useSelector(state => state.characters.page)
  const hasNextPage = useSelector((state) => state.characters.hasNextPage)

  const dispatch = useDispatch();

  useEffect(() => {
    if(status === "idle") {
        dispatch(getAllCharactersAsync());
    }
    
  }, [dispatch,status]);



  if(status ==="failed") return <Error errorMessage={error}/>

  return (
    <div>
    <h1>React - Redux - Router</h1>
    <h2>Characters</h2>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
     
        {characters.map((character) => (
            <div key={character.id}>
            <Link to={`/char/${character.id}`}>
                <img alt={character.char_name} src={character.image}/>
                {character.name}
                </Link>
            </div>
          
        ))}
        
      </Masonry>


      <div style={{textAlign:"center", padding:"20px"}}>
      {status==="loading" && <Loading/>}
        {hasNextPage && status !== "loading" && (
            <button onClick={() => dispatch(getAllCharactersAsync(nextPage))}>Load More ({nextPage-1})</button>
        )
            }

            {!hasNextPage && <div>There is nothing to be shown</div>}
      </div>
    </div>
  );
}

export default Home;

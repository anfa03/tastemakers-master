import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({
        extendedIngredients: []
    });
    const [activeTap, setActiveTap] = useState('instructions')

    const fetchDetails = useCallback(async() => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detaildata = await data.json();
        setDetails(detaildata);
    }, [params.name])

    useEffect(() => {
        fetchDetails();
    }, [fetchDetails])

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button
                    className={activeTap === 'instructions' ? 'active' : ''}
                    onClick={() => setActiveTap("instructions")}
                >
                    Instructions
                </Button>
                <Button
                    className={activeTap === 'ingredients' ? 'active' : ''}
                    onClick={() => setActiveTap("ingredients")}
                >
                    Ingredients
                </Button>
                {activeTap === "instructions" && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }} ></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }} ></h3>
                    </div>
                )}

                {details.extendedIngredients && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id} >{ingredient.original}</li>
                        ))}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
      background: linear-gradient(35deg, #494949, #313131);
      color: white;
    }

    h2{
    margin-bottom: 2rem;
    }
    h3{
    margin-left: 2rem;
    }

    li{
    font-size: 1.2rem;
    line-height: 2.5rem;
    margin-left: 2rem;
    }

    ul{
    margin-top: 2rem;
    }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-righ: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
   marging-left: 10rem;
`
export default Recipe

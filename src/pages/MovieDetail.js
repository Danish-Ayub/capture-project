import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from '../MovieState';
import { isVisible } from "@testing-library/user-event/dist/utils";

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url == url);
        setMovie(currentMovie[0]);
    }, [movie, url])

    return (
        <>
            {movie && (
                <Detail>
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie" />
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award
                                title={award.title}
                                description={award.description}
                                key={award.title} />
                        ))}
                    </Awards>
                </Detail>
            )}
        </>
    );
}

const Award = ({ title, description }) => {
    return (
        <div className="award">
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </div>
    );
}

const Detail = styled.div`
    color: white;
`;
const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    };
`;
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 5rem 10rem;
    .award {
        h3 {
            font-size: 20px;
        }
        .line {
            width: 50%;
            background-color: #23d997;
            height: 0.5rem;
            margin: 1rem 0rem;
        }
        p {
            font-size: 15px;
            padding: 2rem 0rem;
        }
    }
`;

export default MovieDetail;
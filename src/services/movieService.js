import prisma from "../models/prisma.js";

const getAllMovies = async () => {
    const moviesList = await prisma.movie.findMany();
    const moviesCount = await prisma.movie.count();

    return {
        data: moviesList,
        total: moviesCount,
    };
};

const getMovieById = async (id) => {
    const movie = await prisma.movie.findUnique({
        where: { id }
    });

    if (!movie) {
        const error = new Error("Movie not found");
        error.statusCode = 404;
        throw error;
    }

    return {
        data: movie
    };
};

const createMovie = async (movieData) => {
    const createdMovie = await prisma.movie.create({
        data: {
            title: movieData.title,
            description: movieData.description,
            releaseYear: movieData.releaseYear,
            genre: movieData.genre,
            director: movieData.director,
            rating: movieData.rating,
        }
    });

    return {
        data: createdMovie
    };
};

const updateMovie = async (id, movieData) => {
    const updatedMovie = await prisma.movie.update({
        where: { id },
        data: {
            ...(movieData.title && { title: movieData.title }),
            ...(movieData.description && { description: movieData.description }),
            ...(movieData.releaseYear && { releaseYear: movieData.releaseYear }),
            ...(movieData.genre && { genre: movieData.genre }),
            ...(movieData.director && { director: movieData.director }),
            ...(movieData.rating && { rating: movieData.rating }),
        }
    });

    return {
        data: updatedMovie
    };
};

const deleteMovie = async (id) => {
    const movie = await getMovieById(id);
    if (movie.data) {
        const deletedMovie = await prisma.movie.delete({ where: { id } });
        return { data: deletedMovie };
    }
    return false;
};

const searchMovies = async ({ title, genre }) => {
    const movies = await prisma.movie.findMany({
        where: {
            ...(title && { title: { contains: title, mode: "insensitive" } }),
            ...(genre && { genre: { contains: genre, mode: "insensitive" } }),
        }
    });

    return {
        data: movies,
        total: movies.length,
    };
};

export {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
    searchMovies,
};
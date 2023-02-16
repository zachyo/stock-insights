import { useEffect, useState } from "react";
import MovieCard from "../../components/movie-card/movie-card";
import SearchBar from "../../components/search-bar/search-bar";
import Spinner from "../../components/spin-loader/loader.component";
import { dateFilter, genreFilter, searchFilter } from "../../utilities/searchFilter";
import useFetch from "../../utilities/useFetch";

const Homepage = () => {
  const [page, setPage] = useState(1);
  const { searchKey, genreFilterKey, releaseDate } = useContext(SearchContext);

  //change to movie api
  const url = `https://api.github.com/users/zachyo/movies`;

  const { loading, error, data } = useFetch(url);

  let newData = data;

  useEffect(() => {
    if (searchKey) {
      newData = searchFilter(searchKey, data);
      // console.log(searchKey, newData);
    }
    if (genreFilterKey) {
      newData = genreFilter(genreFilterKey, data);
    }if (releaseDate) {
      newData = dateFilter(releaseDate, data);
    }
  },[searchKey, genreFilterKey, releaseDate]);

  //paging system
  const PER_PAGE = 4;
  const total = newData?.length;
  const pages = Math.ceil(total / PER_PAGE);
  console.log(data);
  //   console.log(pages,total);
  const skip = page * PER_PAGE - PER_PAGE;

  const Movies = newData?.slice(skip, skip + PER_PAGE).map((movie, index) => {
    return <MovieCard movie={movie} key={movie.id} />;
  });

  if (!loading && error) {
    return (
      <>
        <h2>{error}</h2>
        <p>Failed to fetch. Kindly check your internet connection.</p>
      </>
    );
  }
  return (
    <div className="homepage">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="header">
            <h1>Welcome to Uptick Movies</h1>
            <p>Full Access to your favourite movies and lots more</p>
          </div>
          <div className="search_filter">
            <SearchBar />
          </div>
          <Movies />
          //pagination
          <>
            <h3 className="pagination">
              Pages: {newData?.length > 0 ? page : 0} of {pages}
            </h3>
            <div className="page-btns">
              <button
                disabled={page <= 1}
                onClick={() => setPage((prev) => prev - 1)}
              >
                Prev
              </button>
              {Array.from({ length: pages }, (_, index) => index + 1).map(
                (each) => (
                  <span
                    onClick={() => setPage(each)}
                    key={each}
                    style={page === each ? { backgroundColor: "#011ff3" } : {}}
                  ></span>
                )
              )}
              <button
                disabled={page >= pages}
                onClick={() => setPage((prev) => prev + 1)}
              >
                Next
              </button>
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default Homepage;

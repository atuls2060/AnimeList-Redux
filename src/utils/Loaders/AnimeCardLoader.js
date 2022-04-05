import AnimeCardSkeleton from "./AnimeCardSkeleton";

const AnimeCardLoader = () => {
  //card flashing loading
  return (
    <div className="container-grid">
      <AnimeCardSkeleton />
      <AnimeCardSkeleton />
      <AnimeCardSkeleton />
      <AnimeCardSkeleton />
      <AnimeCardSkeleton />
      <AnimeCardSkeleton />
    </div>
  );
};

export default AnimeCardLoader;

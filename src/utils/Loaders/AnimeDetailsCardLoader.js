import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AnimeDetailsCardLoader = () => {
  //card flashing loading

  return (
    <div className="anime-detail-card">
      <div className="anime-banner">
        <SkeletonTheme baseColor="#E5E5E5" highlightColor="#F6F6F6">
          <Skeleton
            style={{ position: "absolute", top: "0", zIndex: "20" }}
            width="100%"
            height="100%"
          />
        </SkeletonTheme>
      </div>

      <div className="anime-detail-content-footer">
        <h3>
          <SkeletonTheme baseColor="#E5E5E5" highlightColor="#F6F6F6">
            <Skeleton />
          </SkeletonTheme>
        </h3>

        <p>
          <SkeletonTheme baseColor="#E5E5E5" highlightColor="#F6F6F6">
            <Skeleton />
          </SkeletonTheme>
        </p>
      </div>
    </div>
  );
};

export default AnimeDetailsCardLoader;

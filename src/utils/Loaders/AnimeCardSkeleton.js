import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AnimeCardSkeleton = () => {
  //card flashing loading
  return (
    <div className="anime-card">
      <div className="anime-header">
        <SkeletonTheme baseColor="#E5E5E5" highlightColor="#F6F6F6">
          <Skeleton borderRadius="0px" height="367px" />
        </SkeletonTheme>
      </div>
      <div className="anime-content">
        <SkeletonTheme baseColor="#E5E5E5" highlightColor="#F6F6F6">
          <Skeleton height="20px" />
          <Skeleton style={{ marginTop: "20px" }} />
          <Skeleton style={{ marginTop: "5px" }} />
        </SkeletonTheme>
      </div>
    </div>
  );
};

export default AnimeCardSkeleton;

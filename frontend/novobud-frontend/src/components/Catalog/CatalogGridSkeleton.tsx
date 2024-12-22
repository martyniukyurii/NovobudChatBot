import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CatalogItemSkeleton from "./CatalogItemSkeleton";

const CatalogGridSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <CatalogItemSkeleton key={index}/>
      ))}
    </div>
  );
};

export default CatalogGridSkeleton;

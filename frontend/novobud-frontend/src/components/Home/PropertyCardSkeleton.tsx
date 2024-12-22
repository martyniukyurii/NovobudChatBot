const PropertyCardSkeleton = () => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden animate-pulse">
      <div className="w-full h-56 bg-gray-300"></div> {/* Image */}
      <div className="p-5">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div> {/* Title */}
        <div className="h-6 bg-gray-300 rounded w-1/3 mb-3"></div> {/* Price */}
        <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>{" "}{/* Address */}
        <div className="h-4 bg-gray-300 rounded w-4/5 mb-3"></div>{" "}{/* Description */}
        <div className="h-10 bg-blue-500 rounded-md w-1/2"></div> {/* Button */}
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;

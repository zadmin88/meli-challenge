import "../../styles/components/page-skeleton.scss";

const PageSkeleton = () => {
  return (
    <div className="skeleton-loader">
      <div className="categories-skeleton"></div>
      <div className="item-skeleton">
        <div className="image-skeleton"></div>
        <div className="content-skeleton">
          <div className="title-skeleton"></div>
          <div className="price-skeleton"></div>
        </div>
      </div>
      <div className="item-skeleton">
        <div className="image-skeleton"></div>
        <div className="content-skeleton">
          <div className="title-skeleton"></div>
          <div className="price-skeleton"></div>
        </div>
      </div>
      <div className="item-skeleton">
        <div className="image-skeleton"></div>
        <div className="content-skeleton">
          <div className="title-skeleton"></div>
          <div className="price-skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;

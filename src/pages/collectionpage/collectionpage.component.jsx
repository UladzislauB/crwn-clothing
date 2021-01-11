import React from "react";
import { connect } from "react-redux";

import "./collectionpage.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2 className="title">
        {collection ? collection.title : "Error 404, not found"}
      </h2>
      <div className="items">
        {collection
          ? collection.items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))
          : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

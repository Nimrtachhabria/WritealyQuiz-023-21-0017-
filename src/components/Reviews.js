//buyer review
const buyerReview = (product, rating, comment) => {
    return `Buyer Review for ${product}: Rating - ${rating} stars, Comment - ${comment}`;
  };
  
  // Seller Review 
  const sellerReview = (seller, rating, comment) => {
    return `Seller Review for ${seller}: Rating - ${rating} stars, Comment - ${comment}`;
  };
  export default buyerReview + sellerReview;
 
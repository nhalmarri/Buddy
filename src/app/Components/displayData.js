function DisplayData() {
  const displayData = products.map((posts) => (
    <div key={posts.id} className="text-center text-black">
      {/* <img
        src={product.image}
        alt={product.name}
        className="mx-auto w-64 h-auto"
      /> */}
      <p>{posts.title}</p>
      <p>{description.price} KWD</p>
    </div>
  ));

  return <div className="grid grid-cols-2 gap-4">{productList}</div>;
}

export default ProductList;

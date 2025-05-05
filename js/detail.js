import { fetchData } from "./main.js"
const boxEl = document.querySelector(".box")
const params = new URLSearchParams(location.search)

function renderRecipeDetail (data){
  boxEl.innerHTML = `
     <div class="product-card">
    <div class="product-images">
      <img src="${data.thumbnail}" alt="Thumbnail" class="thumbnail" />
    </div>
    <div class="product-info">
      
      <p><strong>Title:</strong> ${data.title} kg</p>
      <p><strong>Discount Percentage:</strong> ${data.discountPercentage} x ${data.dimensions.height} x ${data.dimensions.depth} cm</p>
      <p><strong>Category:</strong> ${data.category}</p>
      <p><strong>Stock:</strong> ${data.stock}</p>
      <p><strong>Availability:</strong> ${data.availabilityStatus}</p>
      <p><strong>Return Policy:</strong> ${data.returnPolicy}</p>
      <p><strong>Minimum Order Quantity:</strong> ${data.minimumOrderQuantity}</p>
      <div class="meta-info">
        <p><strong>Created At:</strong> ${new Date(data.meta.createdAt).toLocaleDateString()}</p>
        <p><strong>Updated At:</strong> ${new Date(data.meta.updatedAt).toLocaleDateString()}</p>
      </div>
    </div>
  </div>
  `
}

window.onload = ()=>{
  const id = params.get("id")
  fetchData(`/products/${id}`,renderRecipeDetail, ()=>{} )

}   
function deleteProduct(id){
     id= parseInt(id);
    const result = confirm("Are you sure you want to delete this product?");
    
    if(result){
        fetch(`/delete_product/${id}`, {
            method: 'POST'
        }).then(function(res){
            if(res.ok){
                location.reload();
            }
        })
    }
}
 
export default function validateRequest(req, res, next){
    const name = req.body.name;
            const desc = req.body.desc;
           
            const imageURL = req.body.imageURL;
            let error=[];
            if(!name || name.trim()===''){
                error.push('Name is required');
            }
            if(!desc || desc.trim()===''){
                error.push('Description is required');
            }
            try{
                let URL = new URL(imageURL);
            }
            catch(err){
                error.push('Image URL is not valid');
            }
    
            if(error.length > 0) {
                return res.render('new-product', {errorMessage :error}
            )
        };
    
}
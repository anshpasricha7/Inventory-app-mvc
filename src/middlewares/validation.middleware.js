 import {body , validationResult} from 'express-validator';

export default async function validateRequest(req, res, next){
 
   

    //1.Defining the Rules
    const rules = [
        body('name').notEmpty().withMessage('Name is not valid'),
        body('price').isFloat({gt:0}).withMessage('Price is not valid'),
        body('imageURL').isURL().withMessage('Image URL is not valid')
    ];


    //2.Run the rules
    await Promise.all(rules.map(function(rule){
        return rule.run(req);
    }))

    //3.Check for errors
    var error = validationResult(req); //Returns an object with errors if any

    console.log(error);

            if(!error.isEmpty()){
                return res.render('new-product', {errorMessage :error.array()}
            )
        };
        next();
    
}
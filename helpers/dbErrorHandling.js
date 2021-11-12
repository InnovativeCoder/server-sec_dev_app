// get unique error field name

const uniqueMessage = error => {
    let output;
    try{
        //let's first fetch the field
        let fieldName = error.message.split(".$")[1]
        field = field.split("dub key")[0]
        field = field.substring(0, field.lastIndexf("_"))
        //now show the error
        req.flash("errors", [{
            message: "An account with this" + field + "already exists"
        }])
        // Now let's define the output
        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + "already exists"
    }catch(err){
        output = "already exists"
    }
    return output
}

//Get the error message from error object

exports.errorHandler = error => {
    let message = ""
    if(error.code){
        switch (error.code){
            case 11000:
            case 11001:
                message = uniqueMessage(error)
                break;
            default:
                message = "Something went wrong"
        }
    }else{
        for(let errorName in error.errorors){
            if(error.errorors[errorName].message){
                message = error.errorors[errorName].message
            }
        }
    }
    return message;
}
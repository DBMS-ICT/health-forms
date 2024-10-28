export default function Validation(values)
{
    const errors ={}
    const string =/^[a-zA-Z]*$/;
    const number=/^[0-9]*$/;  
    if(!values.fullname)
    {
        errors.fullname="Please enter fullname";
    }
    else if(!string.test(values.fullname))

    {
    errors.fullname="Only letter allowed";
    }
    
    return errors;

};
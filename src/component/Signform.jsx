import { useEffect, useState } from "react"
import '../styles/Signform.css'
const Signform = () => {
    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        country: '',
        age: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        
    })
    const [isSubmit,setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormdata({
            ...formdata,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate(formdata))
        setIsSubmit(true)
    }
    useEffect(()=>{
         console.log(errors)
         if(Object.keys(errors).length===0 && isSubmit) {
              console.log(formdata)
              alert('Signup Successful')
             window.location.reload()
         }
    },[errors,isSubmit,formdata])
    const validate = (value) => {
        let newErrors = {}
        let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        if (!value.name) {
            newErrors.name = 'Please Enter Name'
        }
        if (!value.country) {
            newErrors.country = 'Please Enter Country'
        }
        if (!value.age) {
            newErrors.age = 'Please Enter Age'
        }
        if (!value.password) {
            newErrors.password = 'Please Enter Password'
        }
        if (value.password.length<8) {
            newErrors.password = 'Please Enter Password greater than 8'
        }
        if (!value.email) {
            newErrors.email = 'Please Enter Name'
        }
        else if(!regex.test(value.email)) {
            newErrors.email = 'Email is not valid'
        }
        return newErrors
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formdata.name} onChange={handleChange} />
            </div>
            <p>{errors.name}</p>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formdata.email} onChange={handleChange} />
            </div>
            <p>{errors.email}</p>
            <div>
                <label>Country:</label>
                <input type="text" name="country" value={formdata.country} onChange={handleChange} />
            </div>
            <p>{errors.country}</p>
            <div>
                <label>Age:</label>
                <input type="number" name="age" value={formdata.age} onChange={handleChange} />
            </div>
            <p>{errors.age}</p>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={formdata.password} onChange={handleChange} />
            </div>
            <p>{errors.password}</p>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Signform

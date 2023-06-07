import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import Content from './Content'
import axios from 'axios'


function Information({ userId }) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        status: true,
        businessRegistered: "",
        business_address: "ad"

    })
    // tranh trang thai Request failed with status code 400
    const [isLoading, setLoading] = useState(true)

    const { name, email, phone, business_address,status, businessRegistered } = user
    const loadUser = async (id) => {
        setLoading(true)
        await axios.get(`http://localhost:8080/information/${id}`).then((res) => {
            setUser(res.data)
            //console.log(res.data);
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
        })

    }
    useEffect(() => {
        console.log(business_address);
        const storedUserId = localStorage.getItem('userId');
        if(storedUserId){
            loadUser(storedUserId);
        }
        
    }, [])

    return (
        <div className="w-screen flex min-h-screen">
            <div className='w-64'>
                <Dashboard />
            </div>
            <div className='w-full flex  justify-center py-3'>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <Content name={name} email={email} phone={phone} businessAddress={business_address} status={status} businessRegistered={businessRegistered} />
                )}
            </div>
        </div>
    )
}

export default Information
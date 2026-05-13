import React , { useEffect, useState } from 'react'

import { getGuestName } from "../../../services/fetchGuest.service"


function FetchGuest() {

const [guestName, setIGuestName] = useState([]);


 useEffect(() => {

    const fetchGuestName = async ()=> {
      try{
const data = await getGuestName()
       setIGuestName(data)
      }catch(error){
console.log(error);

      }
       
    }

fetchGuestName()
    
  }, []);



  return (
    <> 
     <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border">Name</th>
              <th className="text-left px-4 py-2 border">Email</th>
              <th className="text-left px-4 py-2 border">Phone</th>
              <th className="text-left px-4 py-2 border">Notes</th>
            </tr>
          </thead>

          <tbody>
            {guestName.map((guest) => (
              <tr key={guest.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">
                  {guest.guest_full_name}
                </td>

                {/* باقي الخانات فاضية زي ما طلبت */}
                <td className="px-4 py-2 border">{guest.guest_phone_number}</td>
                <td className="px-4 py-2 border">{guest.guest_email}</td>
                <td className="px-4 py-2 border">{guest.guest_nationality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </>
  )
}

export default FetchGuest

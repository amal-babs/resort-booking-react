import React, { useEffect, useState } from 'react'
import { BiLoader } from 'react-icons/bi';
import { FiRefreshCw } from 'react-icons/fi'
import { getBookingList } from '../Context/actions/Booking';
import { useNavigate } from 'react-router-dom';

const Adminpanel = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const getBookingListData = () => {
        setLoading(true)
        getBookingList({})(response => {
            console.log(response, "res");
            if (response && response.status) {
                setBookings(response?.data)
                setLoading(false)
            } else {
                setLoading(false)
            }
        })
    }
    useEffect(() => {
        getBookingListData()
    }, [])
    console.log(bookings, "bookings");


    return (
        <div>
            <div className="min-h-screen bg-gray-100 pt-24 pb-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-serif font-bold text-gray-800">
                            Booking Management
                        </h1>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => navigate('/')}
                                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow hover:shadow-md transition-all cursor-pointer"
                            >
                                Back
                            </button>

                            <button
                                onClick={() => {
                                    getBookingListData();
                                }}
                                className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg shadow hover:shadow-md transition-all border border-gray-200 cursor-pointer"
                            >
                                <FiRefreshCw size={18} className={loading ? 'animate-spin' : ''} />
                                Refresh
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
                            <p>{error}</p>
                        </div>
                    )}

                    {loading && bookings.length === 0 ? (
                        <div className="flex justify-center items-center h-64">
                            <BiLoader className="animate-spin text-primary" size={48} />
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {bookings.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                                    No bookings found. Go to the home page to create one.
                                                </td>
                                            </tr>
                                        ) : (
                                            bookings.map((booking, index) => (
                                                <tr key={booking.id || index} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <div className="text-sm font-medium text-gray-900">{booking.name}</div>
                                                                <div className="text-sm text-gray-500">{booking.email}</div>
                                                                <div className="text-sm text-gray-500">{booking.phone}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">Guests: {booking.guests}</div>
                                                        {booking.specialRequests && (
                                                            <div className="text-xs text-gray-500 truncate max-w-xs" title={booking.specialRequests}>
                                                                Req: {booking.specialRequests}
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">In: {new Date(booking.checkIn).toLocaleDateString()}</div>
                                                        <div className="text-sm text-gray-900">Out: {new Date(booking.checkOut).toLocaleDateString()}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 uppercase">
                                                            {booking.roomType}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Confirmed
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Adminpanel

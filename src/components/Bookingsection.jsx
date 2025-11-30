import React, { useState } from 'react'
import { BiCheckCircle } from 'react-icons/bi';
import { RiLoader2Fill } from 'react-icons/ri'
import { CreateBooking } from '../Context/actions/Booking';
import Select from 'react-select';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import toast from 'react-hot-toast';
import 'dayjs/locale/en-gb';


const Bookingsection = () => {
    const [success, setSuccess] = useState(false);

    const [isloader, setIsLoader] = useState(false);


    const Dropdownoptions = [
        { label: "Deluxe Room", value: "deluxe" },
        { label: "Ocean Suite", value: "suite" },
        { label: "Private Villa", value: "villa" },
    ]
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            checkIn: "",
            checkOut: "",
            guests: "",
            roomType: "",
        },
        validate: (values) => {
            let errors = {};

            if (!values.name || values.name === "") {
                errors.name = "required";
            }

            if (!values.email || values.email === "") {
                errors.email = "required";
            }
            if (!values.phone || values.phone === "") {
                errors.phone = "required";
            }

            if (!values.checkIn || values.checkIn === "") {
                errors.checkIn = "required";
            }
            if (!values.checkOut || values.checkOut === "") {
                errors.checkOut = "required";
            }

            if (!values.guests || values.guests === "") {
                errors.guests = "required";
            }
            if (!values.roomType || values.roomType === "") {
                errors.roomType = "required";
            }

            return errors;
        },

        onSubmit: (values) => {
            setIsLoader(true);
            CreateBooking(values)((response) => {
                setIsLoader(false);
                if (response?.data?.status_code === 201) {
                    toast.success("Booking successful!");
                    formik.resetForm();
                } else {
                    setIsLoader(false)
                    toast.error(response?.data?.message || "Something went wrong!");
                }
            });

        },
    });

    const handleGuestChange = (e) => {
        const value = e.target.value;

        if (value === "") {
            formik.setFieldValue("guests", "");
            return;
        }

        const num = parseInt(value);

        if (!isNaN(num) && num >= 1 && num <= 10) {
            formik.setFieldValue("guests", num);
        } else {
            formik.setFieldValue("guests", formik.values.guests);
        }
    };


    console.log(formik, "formik");



    return (
        <div>
            <section id="booking" className="relative py-24 flex items-center justify-center bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop")' }}>
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
                    <div className="text-center text-white mb-10">
                        <h2 className="text-4xl font-serif font-bold mb-4">Start Your Journey</h2>
                        <p className="text-lg opacity-90 max-w-xl mx-auto">Secure your slice of paradise today. Fill out the form below to check availability and book your stay.</p>
                    </div>
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl max-w-2xl mx-auto w-full">
                        <h3 className="text-2xl font-serif font-bold text-white mb-6 text-center">Reserve Your Stay</h3>


                        <Form onSubmit={formik.handleSubmit} className="space-y-4">

                            {/* Full Name */}
                            <Form.Group>
                                <Form.Label className="block text-white text-sm font-bold mb-1 ml-1">
                                    Full Name
                                </Form.Label>

                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formik?.values?.name}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your Name"
                                    className="w-full bg-white/20 border border-white/30 rounded-lg py-2 px-4 
                     text-white placeholder-white/60 focus:outline-none focus:bg-white/30 
                     focus:border-white transition-all"
                                />
                                {formik?.touched?.name && formik?.errors?.name && (
                                    <div className="error-message text-danger mt-1">{formik?.errors?.name}</div>
                                )}
                            </Form.Group>

                            {/* Email + Phone */}
                            <Row className='flex flex-wrap md:flex-nowrap gap-2'>
                                <Col className='w-full md:w-1/2'>
                                    <Form.Group>
                                        <Form.Label className="block text-white text-sm font-bold mb-1 ml-1">
                                            Email
                                        </Form.Label>

                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formik?.values?.email}
                                            onChange={formik.handleChange}
                                            placeholder="Enter Email"
                                            className="w-full bg-white/20 border border-white/30 rounded-lg py-2 px-4 
                         text-white placeholder-white/60 focus:outline-none focus:bg-white/30 
                         focus:border-white transition-all"
                                        />
                                        {formik?.touched?.email && formik?.errors?.email && (
                                            <div className="error-message text-danger mt-1">{formik?.errors?.email}</div>
                                        )}
                                    </Form.Group>
                                </Col>

                                <Col className='w-full md:w-1/2'>
                                    <Form.Group>
                                        <Form.Label className="block text-white text-sm font-bold mb-1 ml-1">
                                            Phone
                                        </Form.Label>

                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            value={formik?.values?.phone}
                                            placeholder="Enter Phone Number"
                                            onChange={formik.handleChange}
                                            className="w-full bg-white/20 border border-white/30 rounded-lg py-2 px-4 
                         text-white placeholder-white/60 focus:outline-none focus:bg-white/30 
                         focus:border-white transition-all"
                                        />
                                        {formik?.touched?.phone && formik?.errors?.phone && (
                                            <div className="error-message text-danger mt-1">{formik?.errors?.phone}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Check-in + Check-out */}
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                                <Row className="flex flex-wrap md:flex-nowrap gap-2">
                                    <Col className="w-full md:w-1/2">
                                        <Form.Group>
                                            <Form.Label className="block text-white text-sm font-bold mb-1 ml-1">
                                                Check In
                                            </Form.Label>

                                            <DatePicker
                                                className="w-full bg-white/20 border border-white/30 rounded-lg py-2 px-4 
                text-white focus:outline-none focus:bg-white/30 focus:border-white 
                transition-all [color-scheme:dark]"
                                                value={formik.values.checkIn ? dayjs(formik.values.checkIn) : null}
                                                onChange={(newValue) =>
                                                    formik.setFieldValue(
                                                        "checkIn",
                                                        newValue ? newValue.format("YYYY-MM-DD") : ""
                                                    )
                                                }
                                                inputFormat="DD/MM/YYYY"
                                                minDate={dayjs()}
                                                slotProps={{
                                                    textField: {
                                                        fullWidth: true,
                                                        sx: {
                                                            "& .MuiInputBase-root": {
                                                                backgroundColor: "rgba(255,255,255,0.2)",
                                                                borderRadius: "10px",
                                                                padding: "4px 10px",
                                                                color: "white",
                                                            },
                                                            "& .MuiInputBase-input": {
                                                                color: "white",
                                                            },
                                                            "& .MuiFormLabel-root": {
                                                                color: "white",
                                                            },
                                                            "& .MuiSvgIcon-root": {
                                                                color: "white",
                                                            },
                                                        },
                                                    },
                                                }}
                                            />
                                            {formik?.touched?.checkIn && formik?.errors?.checkIn && (
                                                <div className="error-message text-danger mt-1">{formik?.errors?.checkIn}</div>
                                            )}
                                        </Form.Group>
                                    </Col>

                                    <Col className="w-full md:w-1/2">
                                        <Form.Group>
                                            <Form.Label className="block text-white text-sm font-bold mb-1 ml-1">
                                                Check Out
                                            </Form.Label>

                                            <DatePicker
                                                className="w-full bg-white/20 border border-white/30 rounded-lg py-2 px-4 
                text-white focus:outline-none focus:bg-white/30 focus:border-white 
                transition-all [color-scheme:dark]"
                                                value={formik.values.checkOut ? dayjs(formik.values.checkOut) : null}
                                                onChange={(newValue) =>
                                                    formik.setFieldValue(
                                                        "checkOut",
                                                        newValue ? newValue.format("YYYY-MM-DD") : ""
                                                    )
                                                }
                                                inputFormat="DD/MM/YYYY"
                                                minDate={formik.values.checkIn ? dayjs(formik.values.checkIn) : dayjs()}
                                                slotProps={{
                                                    textField: {
                                                        fullWidth: true,
                                                        sx: {
                                                            "& .MuiInputBase-root": {
                                                                backgroundColor: "rgba(196, 190, 190, 0.2)",
                                                                borderRadius: "10px",
                                                                padding: "4px 10px",
                                                                color: "white",
                                                            },
                                                            "& .MuiInputBase-input": {
                                                                color: "white",
                                                            },
                                                            "& .MuiFormLabel-root": {
                                                                color: "white",
                                                            },
                                                            "& .MuiSvgIcon-root": {
                                                                color: "white",
                                                            },
                                                        },
                                                    },
                                                }}
                                            />
                                            {formik?.touched?.checkOut && formik?.errors?.checkOut && (
                                                <div className="error-message text-danger mt-1">{formik?.errors?.checkOut}</div>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </LocalizationProvider>



                            {/* Guests + Room Type */}
                            <Row className='flex flex-wrap md:flex-nowrap gap-2'>
                                <Col className='w-full md:w-1/2'>
                                    <Form.Group>
                                        <Form.Label className="block text-white text-sm font-bold mb-1 ml-1">
                                            Guests
                                        </Form.Label>

                                        <Form.Control
                                            type="number"
                                            name="guests"
                                            min="1"
                                            max="10"
                                            placeholder="Enter Guest Number"
                                            value={formik?.values?.guests}
                                            onChange={handleGuestChange}
                                            onKeyDown={(e) => {
                                                if (["e", "E", "+", "-"].includes(e.key)) e.preventDefault();
                                            }}
                                            className="w-full bg-white/20 border border-white/30 rounded-lg py-2 px-4 
                         text-white focus:outline-none focus:bg-white/30 focus:border-white 
                         transition-all"
                                        />
                                        {formik?.touched?.guests && formik?.errors?.guests && (
                                            <div className="error-message text-danger mt-1">{formik?.errors?.guests}</div>
                                        )}
                                    </Form.Group>
                                </Col>

                                <Col className='w-full md:w-1/2'>
                                    <Form.Group>
                                        <Form.Label className="block text-white text-sm font-bold mb-1 ml-1">
                                            Room Type
                                        </Form.Label>

                                        <Select
                                            name="roomType"
                                            placeholder="Select Room"
                                            styles={{
                                                control: (base) => ({
                                                    ...base,
                                                    backgroundColor: "rgba(255,255,255,0.2)",
                                                    borderColor: "rgba(255,255,255,0.3)",
                                                    color: "white",
                                                }),
                                                menu: (base) => ({
                                                    ...base,
                                                    backgroundColor: "rgba(0,0,0,0.8)",
                                                    backdropFilter: "blur(6px)",
                                                }),
                                                option: (base, state) => ({
                                                    ...base,
                                                    backgroundColor: state.isSelected
                                                        ? "rgba(255,255,255,0.2)"
                                                        : state.isFocused
                                                            ? "rgba(255,255,255,0.1)"
                                                            : "transparent",
                                                    color: "white",
                                                    cursor: "pointer",
                                                }),
                                                singleValue: (base) => ({
                                                    ...base,
                                                    color: "white",
                                                }),
                                                input: (base) => ({
                                                    ...base,
                                                    color: "white",
                                                }),
                                                placeholder: (base) => ({
                                                    ...base,
                                                    color: "rgba(255,255,255,0.6)",
                                                }),
                                            }}
                                            className="w-full bg-white/20 border border-white/30 rounded-lg
                                                        text-white focus:outline-none focus:bg-white/30 focus:border-white 
                                                        transition-all appearance-none cursor-pointer"
                                            isClearable
                                            value={Dropdownoptions.find(option => option.value === formik.values.roomType) || null}
                                            onChange={(selectedOption) => formik.setFieldValue("roomType", selectedOption ? selectedOption.value : "")}
                                            options={Dropdownoptions}
                                        />
                                        {formik?.touched?.roomType && formik?.errors?.roomType && (
                                            <div className="error-message text-danger mt-1">{formik?.errors?.roomType}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isloader}
                                className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-3 
                   rounded-lg shadow-lg transform hover:-translate-y-0.5 transition-all 
                   duration-200 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                {isloader ? (
                                    <>
                                        <RiLoader2Fill className="animate-spin" size={20} /> Processing...
                                    </>
                                ) : (
                                    "Confirm Booking"
                                )}
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Bookingsection

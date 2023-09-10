import React, { useEffect, useState } from 'react'
import './Topbar.css'
import { Modal, ModalBody, ModalFooter, ModalHeader, Popover, PopoverBody, PopoverHeader } from 'reactstrap'
import { toast } from 'react-hot-toast'

function Topbar() {
    const [login, setlogin] = useState(false)
    const [register, setregister] = useState(false)
    const [addinput, setaddinput] = useState([])
    const [input, setinput] = useState(false)
    const [value, setvalue] = useState([])

    const createlogin = () => {
        setlogin(!login);
    }
    const createregister = () => {
        setregister(!register)
        setlogin(!login);
    }
    const handlelogin = () => {
        setregister(!register)
        setlogin(!login);
    }
    const handleopen = () => {
        setaddinput([...addinput, " "])
        setinput(!input)
    }
    const handleadd = (data) => {
        setvalue([...value, " "])

    }

    const handledelete = (i) => {
        value.splice(i, 1)
        setvalue([...value])
    }
    const handlesubmit = (i) => {
        if (value.includes("")) {
            return toast.error("Empty space Not allowed")
        }
        console.log(value)

    }

    const handleInputValue = (e, i) => {
        value[i] = e
        setvalue([...value])
    }
    return (
        <div className='color'>
            <nav class="sb-topnav navbar navbar-expand navbar-dark color">

                <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>

                <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fa fa-bars"></i></button>


                <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fa fa-search"></i></button>
                    </div>
                </form>
                <button
                    className="log btn btn-sm btn-outline-primary"
                    id='create_login'
                    onClick={() => createlogin()}
                >Login</button>
                <Modal isOpen={login}
                    toggle={() => setlogin(!login)}
                >
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <form>
                            <div>
                                <label className='mx-3'>Email-id</label>
                                <input type='email' placeholder='xyz@gmail.com' className='mx-2' />
                            </div>
                            <br />
                            <div>
                                <label className='mx-2'>Password</label>
                                <input type='password' className='mx-3' />
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <button>Login</button>
                        <button
                            onClick={() => createregister()}
                        >Register</button>

                    </ModalFooter>
                </Modal>
                <Modal isOpen={register}
                    toggle={() => setregister(!register)}
                >
                    <ModalHeader className='text-center'>Sign-in</ModalHeader>
                    <ModalBody>
                        <div className='container m-4'>
                            <div className='row mt-4  m-auto'>
                                <div className='col-6'>
                                    <label className='mx-3'>Firstname</label>
                                    <input type='text' className='mx-2' />
                                </div>
                                <div className='col-6'>
                                    <label className='mx-3'>Lastname</label>
                                    <input type='text' className='mx-2' />
                                </div>
                                <div className='col-6'>
                                    <label className='mx-3'>Email</label>
                                    <input type='text' className='mx-2' />
                                </div>
                                <div className='col-6'>
                                    <label className='mx-3'>password</label>
                                    <input type='text' className='mx-2' />
                                </div>
                            </div>
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <button>submit</button>
                        <button
                            onClick={() => handlelogin()}

                        >login</button>

                    </ModalFooter>
                </Modal>
                <button
                    className='btn btn-sm btn-outline-primary mx-2'
                    onClick={() => handleopen()}

                >Link</button>

                <Modal isOpen={input} toggle={() => setinput(!input)} >
                    <button
                        className='btn btn-sm btn-outline-primary mt-4 w-50 text-center m-auto'
                        onClick={() => handleadd()}

                    >Add+</button>
                    <ModalBody>

                        {
                            value.map((e, i) => {
                                return (<div>
                                    <input type='text' className='mt-2 mx-2 w-50  m-auto'
                                        onChange={(event) => handleInputValue(event.target.value, i)} />
                                    <button className='btn btn-sm btn-outline-danger' onClick={() => handledelete(i)}>Delete</button>
                                </div>)
                            })
                        }
                        <div className='m-auto w-50 d-flex justify-content-end'>
                            <button className='btn btn-sm btn-outline-success mt-4 ' onClick={handlesubmit}>Submit</button>
                        </div>
                    </ModalBody>

                </Modal>
                <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-user fa-fw"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#!">Settings</a></li>
                            <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#!">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div>
            </div>
        </div>


    )
}

export default Topbar
"use client"

import Modal from '@/components/common/Modal'
import { Colors } from '@/constants/colors';
import { useTheme } from '@/context/ThemeContext';
import { announcements, requests } from '@/sample/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'


const data = requests

const ITEMS_PER_PAGE = 9;




export default function AdminRequestsPage() {
  const [showModal, setShowModal] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); 

  const { isDarkMode } = useTheme()
  const [value, setValue] = useState("")
  const [isPaid, setIsPaid] = useState(false)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBackgroundImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };


  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  
  // Filter items based on search query
  const filteredItems = data.slice('').filter(item => 
    item.form_type.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.requests_no.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  const currentItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);



  // PRICES
  const forms = [
    {
      type: 'form 137',
      price: 10,
    },
    {
      type: 'OVRF',
      price: 25,
    },
    {
      type: 'Form 1',
      price: 10,
    },
  ]

  // PRINTING
  const handlePrint = async () => {
    const printWindow = window.open('', '_blank')

    const phpContent = await response.text

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          ${phpContent}
      </body>
      </html>  
      
    `)
    printWindow.document.close();
    printWindow.print();
    printWindow.close();

  }
  
  return (
    <>
      <div className='flex flex-col gap-4 '>
        <div className='flex items-center justify-between'>
          <h3>Requests</h3>
          <div className='flex items-center gap-3'>
            <div className={`flex items-center ${isDarkMode ? `bg-[#282828] text-white` : 'bg-white text-black'} pl-3 gap-2 rounded-md`}>
                <Image src={require("@/public/icons/search-dark.png")} alt="search" height={24} width={24} />
                <input 
                  type="text"  
                  placeholder='Search' 
                  className='p-3 focus:outline-none rounded-md bg-transparent' 
                  value={searchQuery} // Bind input value to searchQuery
                  onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                />
            </div>
            <button onClick={() => setShowModal(true)} className='bg-blue-700 text-white p-3 rounded-md shadow-sm'>Create new</button>
          </div>
        </div>

        <div className={`rounded-md shadow-md ${isDarkMode ? `bg-[#282828] text-white` : 'bg-white text-black'}`}>
          <table className={`flex flex-col w-full`}>
            <thead className='w-full'>
              <tr className={`flex justify-between items-center bg-[${Colors.primary}] text-white rounded-t-md`}>
                <th className='data items-center'>Recipt no.</th>
                <th className='data items-center'>Student no.</th>
                <th className='data items-center'>Form Type</th>
                <th className='data items-center'>Price | Qty | Total</th>
                <th className='data items-center'>Payment Method</th>
                <th className='data items-center'>Print Status</th>
                <th className='data items-center'>Print</th>
                <th className='data items-center'>Actions</th>
              </tr>
            </thead>
            <tbody className='w-full'>
              {currentItems.map(item => (
                <tr key={item.id} className='row'>
                  <td className='data items-center'>{item.requests_no}</td>
                  <td className='data items-center'>{item.student_no}</td>
                  <td className='data items-center'>{item.form_type}</td>
                  {forms.map((form) => (
                    form.type === item.form_type ? (
                      <td className='data items-center'>
                        <span>₱ {form.price}</span> &nbsp;| &nbsp; <span>x{item.quantity}</span> &nbsp;| &nbsp; <span>₱ {form.price * item.quantity}</span>
                      </td>
                    ) : null
                  ))}
                  <td className='data items-center'><span>{item.payment_method}</span> &nbsp;| &nbsp; 
                    <select 
                        name="payment" 
                        id=""
                        onChange={(e) => setIsPaid(e.target.value)} 
                        className={`p-1 text-black rounded focus:outline-none ${isPaid !== item.payment_status ? `bg-[${Colors.primary}] border-[${Colors.primary}] `  : `bg-red-600 border-red-600`} bg-opacity-25 border`} 
                        defaultValue={item.payment_status}>
                        <option value={true}>Paid</option>
                        <option value={false}>Unpaid</option>
                      </select>
                  </td>
                  <td className='data items-center'> 
                    <select 
                      name="status" 
                      id=""
                      onChange={(e) => setValue(e.target.value)} 
                      className={`p-1 text-black rounded focus:outline-none ${value === item.status ? `bg-[${Colors.primary}] border-[${Colors.primary}] `  : `bg-red-600 border-red-600`} bg-opacity-25 border`} 
                      defaultValue={item.status}>
                      <option value="Pending">Pending</option>
                      <option value="Done">Done</option>
                    </select>
                  </td>
                  <td className='data items-center'>
                    <button
                      disabled={item.payment_status}
                      onClick={handlePrint}
                      className={`${item.payment_status ? `opacity-25` : ``}`}
                    >
                      <Image src={require("@/public/icons/printer.png")} className='h-6 w-6' />
                    </button>
                  </td>
                  <td className='data items-center flex gap-4'>
                    <Link href={""}>
                      <Image src={require("@/public/icons/edit.png")} height={24} width={24} alt="Edit" />
                    </Link>
                    <Link href={""}>
                      <Image src={require("@/public/icons/delete.png")} height={24} width={24} alt="Delete" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='flex justify-around p-4'>
            <button onClick={handlePrevPage} disabled={currentPage === 1} className='btn'>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className='btn'>
              Next
            </button>
          </div>
        </div>

      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={"Create new Announcement"}>
        <form className='flex flex-col gap-4'>
          <div style={styles.group}>
            <label style={styles.label} htmlFor="">Title</label>
            <input style={styles.input} type="text" />
          </div>

          <div style={styles.group}>
            <label style={styles.label} htmlFor="">Description</label>
            <textarea style={styles.input} name="" id=""></textarea>
          </div>

          <div style={styles.group}>
            <label style={styles.label} htmlFor="">Date</label>
            <input style={styles.input} type="date" name="" id="" />
          </div>

          <div style={styles.group}>
            <label style={styles.label} htmlFor="">Image</label>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
              </label>
            </div>
          </div>

          <div className='flex items-center justify-between gap-3'>
            <button onClick={() => setShowModal(false)} style={styles.button} className='bg-red-600'>Cancel</button>
            <button style={styles.button} className='bg-blue-600'>Submit</button>
          </div>
        </form>
      </Modal>
    </>
  )
}

const styles = {
  label: {
    fontWeight: '700'
  },

  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: 'transparent'
  },

  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: "6px"
  },

  button: {
    width: '100%',
    padding: '12px',
    color: 'white',
    borderRadius: '6px',
  }
}
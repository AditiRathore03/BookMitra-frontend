import React, { useContext, useEffect, useState } from 'react'
import "../AdminDashboard.css"
import axios from "axios"
import { AuthContext } from '../../../../Context/AuthContext'
import { Dropdown } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"

function AddTransaction() {

    const API_URL = process.env.REACT_APP_API_URL
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useContext(AuthContext)

    const [borrowerId, setBorrowerId] = useState("")
    const [borrowerDetails, setBorrowerDetails] = useState([])
    const [bookId, setBookId] = useState("")
    const [bookDetails, setBookDetails] = useState({})
    const [recentTransactions, setRecentTransactions] = useState([])
    const [allMembers, setAllMembers] = useState([])
    const [allBooks, setAllBooks] = useState([])

    const [fromDate, setFromDate] = useState(null)
    const [toDate, setToDate] = useState(null)

    const transactionTypes = [
        { value: 'Reserved', text: 'Reserve' },
        { value: 'Issued', text: 'Issue' }
    ]

    const [transactionType, setTransactionType] = useState("")

    /* Adding a Transaction */
    const addTransaction = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (bookId && borrowerId && transactionType && fromDate && toDate) {
            const borrower_details = await axios.get(API_URL + "api/users/getuser/" + borrowerId)
            const book_details = await axios.get(API_URL + "api/books/getbook/" + bookId)

            const bookAvailable = book_details.data.bookCountAvailable
            const validReserve = transactionType === "Reserved"
            const validIssue = transactionType === "Issued" && bookAvailable > 0

            if ((validIssue || validReserve) || (bookAvailable === 0 && validReserve)) {
                const transactionData = {
                    bookId,
                    borrowerId,
                    borrowerName: borrower_details.data.userFullName,
                    bookName: book_details.data.bookName,
                    transactionType,
                    fromDate,
                    toDate,
                    isAdmin: user.isAdmin
                }
                try {
                    const response = await axios.post(API_URL + "api/transactions/add-transaction", transactionData)
                    if (recentTransactions.length >= 5) recentTransactions.splice(-1)

                    await axios.put(API_URL + `api/users/${response.data._id}/move-to-activetransactions`, {
                        userId: borrowerId,
                        isAdmin: user.isAdmin
                    })

                    await axios.put(API_URL + `api/books/updatebook/${bookId}`, {
                        isAdmin: user.isAdmin,
                        bookCountAvailable: bookAvailable - 1
                    })

                    setRecentTransactions([response.data, ...recentTransactions])
                    setBorrowerId("")
                    setBookId("")
                    setTransactionType("")
                    setFromDate(null)
                    setToDate(null)
                    setBookDetails({})
                    alert("Transaction was Successful 🎉")
                }
                catch (err) {
                    console.log(err)
                }
            } else {
                alert("The book is not available")
            }
        } else {
            alert("Fields must not be empty")
        }
        setIsLoading(false)
    }

    useEffect(() => {
        const getTransactions = async () => {
            try {
                const response = await axios.get(API_URL + "api/transactions/all-transactions")
                setRecentTransactions(response.data.slice(0, 5))
            } catch (err) {
                console.log("Error in fetching transactions")
            }
        }
        getTransactions()
    }, [API_URL])

    useEffect(() => {
        const getBorrowerDetails = async () => {
            try {
                if (borrowerId !== "") {
                    const response = await axios.get(API_URL + "api/users/getuser/" + borrowerId)
                    setBorrowerDetails(response.data)
                }
            } catch (err) {
                console.log("Error in getting borrower details")
            }
        }
        getBorrowerDetails()
    }, [API_URL, borrowerId])

    useEffect(() => {
        const getMembers = async () => {
            try {
                const response = await axios.get(API_URL + "api/users/allmembers")
                const all_members = response.data.map(member => ({
                    value: member._id,
                    text: `${member.userFullName}[${member.userType === "Student" ? member.admissionId : member.employeeId}]`
                }))
                setAllMembers(all_members)
            } catch (err) {
                console.log(err)
            }
        }
        getMembers()
    }, [API_URL])

    useEffect(() => {
        const getAllBooks = async () => {
            try {
                const response = await axios.get(API_URL + "api/books/allbooks")
                const allbooks = response.data.map(book => ({
                    value: book._id,
                    text: book.bookName
                }))
                setAllBooks(allbooks)
            } catch (err) {
                console.log(err)
            }
        }
        getAllBooks()
    }, [API_URL])

    return (
        <div>
            <p className="dashboard-option-title">Add a Transaction</p>
            <div className="dashboard-title-line"></div>
            <form className='transaction-form' onSubmit={addTransaction}>
                <label className="transaction-form-label">Borrower<span className="required-field">*</span></label><br />
                <div className='semanticdropdown'>
                    <Dropdown
                        placeholder='Select Member'
                        fluid
                        search
                        selection
                        value={borrowerId}
                        options={allMembers}
                        onChange={(e, data) => setBorrowerId(data.value)}
                    />
                </div>

                {borrowerId && (
                    <>
                        <table className="admindashboard-table shortinfo-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Issued</th>
                                    <th>Reserved</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{borrowerDetails.userFullName}</td>
                                    <td>{borrowerDetails.activeTransactions?.filter(t => t.transactionType === "Issued" && t.transactionStatus === "Active").length}</td>
                                    <td>{borrowerDetails.activeTransactions?.filter(t => t.transactionType === "Reserved" && t.transactionStatus === "Active").length}</td>
                                    <td>{borrowerDetails.points}</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className="admindashboard-table shortinfo-table">
                            <thead>
                                <tr>
                                    <th>Book-Name</th>
                                    <th>Transaction</th>
                                    <th>From Date</th>
                                    <th>To Date</th>
                                    <th>Fine</th>
                                </tr>
                            </thead>
                            <tbody>
                                {borrowerDetails.activeTransactions?.filter(t => t.transactionStatus === "Active").map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.bookName}</td>
                                        <td>{data.transactionType}</td>
                                        <td>{data.fromDate}</td>
                                        <td>{data.toDate}</td>
                                        <td>{(Math.floor((Date.parse(moment(new Date()).format("MM/DD/YYYY")) - Date.parse(data.toDate)) / 86400000)) <= 0 ? 0 : (Math.floor((Date.parse(moment(new Date()).format("MM/DD/YYYY")) - Date.parse(data.toDate)) / 86400000)) * 10}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}

                <label className="transaction-form-label">Book Name<span className="required-field">*</span></label><br />
                <div className='semanticdropdown'>
                    <Dropdown
                        placeholder='Select a Book'
                        fluid
                        search
                        selection
                        options={allBooks}
                        value={bookId}
                        onChange={async (e, data) => {
                            setBookId(data.value)
                            const res = await axios.get(API_URL + "api/books/getbook/" + data.value)
                            setBookDetails(res.data)
                        }}
                    />
                </div>

                {bookId && (
                    <table className="admindashboard-table shortinfo-table">
                        <thead>
                            <tr>
                                <th>Available Copies</th>
                                <th>Reserved</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{bookDetails.bookCountAvailable ?? 'N/A'}</td>
                                <td>{bookDetails.reservedCount ?? 'N/A'}</td>
                            </tr>
                        </tbody>
                    </table>
                )}

                <label className="transaction-form-label">Transaction Type<span className="required-field">*</span></label><br />
                <div className='semanticdropdown'>
                    <Dropdown
                        placeholder='Select Transaction'
                        fluid
                        selection
                        value={transactionType}
                        options={transactionTypes}
                        onChange={(e, data) => setTransactionType(data.value)}
                    />
                </div>

                <label className="transaction-form-label">From Date<span className="required-field">*</span></label><br />
                <DatePicker
                    className="date-picker"
                    placeholderText="MM/DD/YYYY"
                    selected={fromDate}
                    onChange={(date) => setFromDate(date)}
                    minDate={new Date()}
                    dateFormat="MM/dd/yyyy"
                />

                <label className="transaction-form-label">To Date<span className="required-field">*</span></label><br />
                <DatePicker
                    className="date-picker"
                    placeholderText="MM/DD/YYYY"
                    selected={toDate}
                    onChange={(date) => setToDate(date)}
                    minDate={new Date()}
                    dateFormat="MM/dd/yyyy"
                />

                <input className="transaction-form-submit" type="submit" value="SUBMIT" disabled={isLoading} />
            </form>

            <p className="dashboard-option-title">Recent Transactions</p>
            <div className="dashboard-title-line"></div>
            <table className="admindashboard-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Book Name</th>
                        <th>Borrower Name</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {recentTransactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{transaction.bookName}</td>
                            <td>{transaction.borrowerName}</td>
                            <td>{transaction.updatedAt.slice(0, 10)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AddTransaction

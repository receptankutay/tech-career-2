import React, { useState } from 'react'
import { suppliers } from '../data/suppliers'

function SupplierTable() {


    const [supplierList, setSupplierList] = useState(suppliers)

    const removeAll = () => {
        setSupplierList([])
    }

    const removeItem = (id) => {
        let newSupplierList = supplierList.filter(item => item.id !== id)
        setSupplierList(newSupplierList)
    }

    const searchName = (data) => {
        let searchData = data.toLowerCase().trim();
        let newName = suppliers.filter(q => q.companyName.toLowerCase().includes(searchData));
        setSupplierList(newName);
    }

    const orderBy = () => {
        let sortName = supplierList.sort((a, b) => {
            let fa = a.companyName.toLowerCase(),
                fb = b.companyName.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        setSupplierList([...sortName])
    }

    const orderByDesc = () => {
        let sortName = supplierList.sort((a, b) => {
            let fa = a.companyName.toLowerCase(),
                fb = b.companyName.toLowerCase();

            if (fb < fa) {
                return -1;
            }
            if (fb > fa) {
                return 1;
            }
            return 0;
        });
        setSupplierList([...sortName])
    }

    const loadData = () => {
        setSupplierList(suppliers)
    }
    return (<>

        <div>
            <input type='text' onChange={(e) => searchName(e.target.value)} placeholder="Search by name..." />
        </div>
        <div>
            <button onClick={() => orderBy()}>Order By</button>
            <button onClick={() => orderByDesc()}>Order By Desc</button>
        </div>
        <table>
            <tr>
                <td>Id</td>
                <td>Company Name</td>
                <td>Contact Name</td>
                <td>Contact Table</td>
                <td>Street</td>
                <td>City</td>
                <td>Region</td>
                <td>Postal Code</td>
                <td>Country</td>
                <td>Phone</td>

            </tr>


            {
                supplierList && supplierList.map((item, key) => {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td>{item.contactTitle}</td>
                        <td>{item.address.street}</td>
                        <td>{item.address.city}</td>
                        <td>{item.address.region}</td>
                        <td>{item.address.postalCode}</td>
                        <td>{item.address.country}</td>
                        <td>{item.address.phone}</td>
                        <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
                    </tr>
                })
            }
        </table>
        <div>
            <button onClick={() => removeAll()}>Remove All</button>
            <button onClick={() => loadData()}>Load Data</button>
        </div>
    </>
    )
}

export default SupplierTable
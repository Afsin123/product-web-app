import React from 'react'
import IndividualProduct from '../components/IndividualProduct';

const View = ({individualProduct, products}) => {
   return (
      <div style={{ marginTop: "100px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Product Title</th>
            <th style={{ textAlign: "center" }}>Description</th>
            <th style={{ textAlign: "center" }}>Price</th>
            
          </tr>
        </thead>
        <tbody>
          {IndividualProduct.keys(individualProduct).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{individualProduct[id].title}</td>
                <td> {individualProduct[id].description}</td>
                <td>  ₹ {individualProduct.price}  </td>
                {/* <td>
                  <Link to={`/update/${id}`}>
                    <button className="bttn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="bttn btn-delete"
                    onClick={() => onDelete(id)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${id}`}>
                    <button className="bttn btn-view">View</button>
                  </Link>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default View

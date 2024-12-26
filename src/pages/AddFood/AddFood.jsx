// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// toast.configure();

// const AddFood = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         image: '',
//         category: '',
//         quantity: '',
//         price: '',
//         origin: '',
//         description: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const user = JSON.parse(localStorage.getItem('user'));
//         const addedBy = {
//             name: user.name,
//             email: user.email,
//         };

//         try {
//             const response = await fetch('/api/foods', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${localStorage.getItem('token')}`,
//                 },
//                 body: JSON.stringify({ ...formData, addedBy }),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 toast.success('Food item added successfully!');
//                 setFormData({
//                     name: '',
//                     image: '',
//                     category: '',
//                     quantity: '',
//                     price: '',
//                     origin: '',
//                     description: '',
//                 });
//             } else {
//                 throw new Error('Failed to add food item');
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     return (
//         <div className="add-food-page">
//             <h1>Add Food</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Food Name:
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Food Image (URL):
//                     <input
//                         type="text"
//                         name="image"
//                         value={formData.image}
//                         onChange={handleChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Food Category:
//                     <input
//                         type="text"
//                         name="category"
//                         value={formData.category}
//                         onChange={handleChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Quantity:
//                     <input
//                         type="number"
//                         name="quantity"
//                         value={formData.quantity}
//                         onChange={handleChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Price:
//                     <input
//                         type="number"
//                         name="price"
//                         value={formData.price}
//                         onChange={handleChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Food Origin:
//                     <input
//                         type="text"
//                         name="origin"
//                         value={formData.origin}
//                         onChange={handleChange}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Short Description:
//                     <textarea
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         required
//                     ></textarea>
//                 </label>
//                 <button type="submit">Add Item</button>
//             </form>
//         </div>
//     );
// };

// export default AddFood;

import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateFood = () => {
    const food = useLoaderData();
    const navigate = useNavigate(); 

    const { _id, image, name, price, category, origin, description, purchaseCount } = food;

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedFood = {
            name: e.target.name.value.trim(),
            category: e.target.category.value.trim(),
            origin: e.target.origin.value.trim(),
            price: parseFloat(e.target.price.value),
            description: e.target.description.value.trim(),
            purchaseCount: parseInt(e.target.purchaseCount.value),
            image: e.target.image.value.trim(),
        };

        console.log("Updating food:", updatedFood);

        try {
            const res = await fetch(`https://epicure-server.vercel.app/foods/${_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedFood),
            });

            const data = await res.json();
            if (res.ok) {
                Swal.fire({
                    title: "Success!",
                    text: "Food updated successfully",
                    icon: "success",
                    confirmButtonText: "Ok",
                }).then(() => {
                    navigate('/'); 
                });
            } else {
                Swal.fire("Error", "Failed to update food", "error");
            }
        } catch (error) {
            console.error("Update failed:", error);
            Swal.fire("Error", "Something went wrong!", "error");
        }
    };

    return (
        <div className="lg:w-3/4 mx-auto">
            <div className="text-center p-10">
                <h1 className="text-5xl font-bold">Update Food</h1>
            </div>
            <div className="card w-full shrink-0 shadow-2xl">
                <form onSubmit={handleUpdate} className="card-body">
                    {/* Row 1 */}
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" name="name" defaultValue={name} className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label"><span className="label-text">Category</span></label>
                            <input type="text" name="category" defaultValue={category} className="input input-bordered" required />
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                            <label className="label"><span className="label-text">Origin</span></label>
                            <input type="text" name="origin" defaultValue={origin} className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label"><span className="label-text">Price</span></label>
                            <input type="number" name="price" defaultValue={price} className="input input-bordered" required />
                        </div>
                    </div>
                    {/* Row 3 */}
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                            <label className="label"><span className="label-text">Description</span></label>
                            <input type="text" name="description" defaultValue={description} className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label"><span className="label-text">Purchase Count</span></label>
                            <input type="number" name="purchaseCount" defaultValue={purchaseCount} className="input input-bordered" required />
                        </div>
                    </div>
                    {/* Image URL */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Image URL</span></label>
                        <input type="text" name="image" defaultValue={image} className="input input-bordered" required />
                    </div>
                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Update Food</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;

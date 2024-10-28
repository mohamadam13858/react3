import React from "react";


const TopForm = () => {
    return (
        <>
            <h4 className="text-center text-info text-shadow">خوش امدید</h4>
            <form>
                <div className="form-guoup d-flex">
                    <input type="text" className="form-control" />
                    <button type="submit" className="btn btn-success">ثبت</button>
                </div>
            </form>
        </>
    )
}
export default TopForm;
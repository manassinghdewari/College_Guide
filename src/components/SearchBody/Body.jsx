import React from "react"
import Filters from "./Filters";
import CollegeCard from "../CollegeCardSlider/CollegeCard";
const Body=()=>
{
    return(
        <>
        <div className='align-items: center; justify-center flex my-10'>
            <div className='row w-11/12'>
                <div className='col-3 '><Filters /></div>
                <div className='col-9 flex flex-wrap'><span className='px-1 py-2'><CollegeCard /></span>
                <span className='px-1 py-2'><CollegeCard /></span>
                <span className='px-1 py-2'><CollegeCard /></span>
                <span className='px-1 py-2'><CollegeCard /></span>
                <span className='px-1 py-2'><CollegeCard /></span>
                <span className='px-1 py-2'><CollegeCard /></span>

                
                </div>
            </div>
            </div>
        </>
    )
}
export default Body;

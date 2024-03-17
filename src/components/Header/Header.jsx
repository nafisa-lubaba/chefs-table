

import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className='mx-auto w-[90%] mt-5'>
            <div className="bg-base-100 flex items-center justify-between">
                <div className="">
                    <a className="btn btn-ghost text-xl"> Melody's Recipe</a>

                </div>
                <div className='flex list-none gap-5'>
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </div>

                <div className="flex gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search..." className="input input-bordered w-24 md:w-auto rounded-full" />
                    </div>
                    <div className=" bg-green-400 rounded-full p-3 ">
                        <CgProfile className="text-3xl" />
                    </div>
                </div>

            </div>
        </div>



    );
};

export default Header;
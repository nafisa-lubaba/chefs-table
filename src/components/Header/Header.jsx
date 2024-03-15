

import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className='mx-auto w-[90%] mt-5'>
            <div className="bg-base-100 flex justify-between">
                <div className="">
                    <a className="btn btn-ghost text-xl">Recipe Melody</a>

                </div>
                <div className='flex list-none gap-5'>
                    <h2>Home</h2>
                    <h2>Recipes</h2>
                    <h2>About</h2>
                    <h2>Search</h2>
                </div>

                <div className="flex gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search..." className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <button className='text-3xl bg-green-400'><CgProfile /></button>
                                
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
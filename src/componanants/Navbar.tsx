
import Logo from "../assets/logo-text.png"

const Navbar = () => {
 return <div className="border-b border-gray-300">
 <nav className="flex justify-between gap-4 container mx-auto py-4 ">
    <img src={Logo} className="w-[120px] h-[60px]" alt="" />
    <ul className="flex gap-4 items-center ">
        <li className=" hover:text-pink-600"><a href="">Home</a></li>
        <li className=" hover:text-pink-600"><a href="">Technologies</a></li>
        <li className=" hover:text-pink-600"><a href="">Projects</a></li>
        <li className=" hover:text-pink-600"><a href="">About</a></li>
        <li className=" hover:text-pink-600"><a href="">Contact</a></li>
    </ul>
    <div className="flex gap-4 items-center">
        <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-pink-700">Sign In</button>
        <button className="bg-pink-600 text-white rounded-full px-4 py-2 ">Sign Up</button>
    </div>
 </nav> 
 </div>
};
export default Navbar
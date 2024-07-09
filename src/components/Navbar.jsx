import {AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai'
import {GoSearch} from 'react-icons/go'
import CartCountBadge from './CartCountBadge';

const Navbar = () => {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center p-8">
        <div className='flex items-center gap-4'>
        <img className='w-14 h-14 rounded-full' src="/logo.webp" alt="logo" />
        <h1 className="text-4xl font-medium">E-Mart</h1>
        </div>
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-3xl w-full"
            type="text"
            placeholder="search...."
            name=""
            id=""
          />
          <GoSearch className="absolute top-0 right-0 mt-4 mr-5" size={20} />
        </div>

        <div className='flex gap-4'>
            <div className='icon-wrapper'>
             <AiOutlineUser />
            </div>
            <div className='icon-wrapper relative'>
             <AiOutlineShoppingCart />
             <CartCountBadge size="w-[25px] h-[25px]"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

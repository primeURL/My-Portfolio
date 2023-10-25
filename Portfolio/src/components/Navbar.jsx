import { links } from '../data';
const Navbar = () => {
  return (
    <nav className='bg-emerald-100 py-10 '>
      <div className='align-element items-center py-4 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold py-3'>
          Port
          <span className='text-emerald-600'>Folio</span>
        </h2>
        <div className='flex flex-col sm:flex-row gap-x-3 '>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg py-2 tracking-wide hover:text-emerald-600 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
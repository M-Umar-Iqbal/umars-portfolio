import React from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBlog, FaBars, FaTimes } from 'react-icons/fa';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { useRouter } from 'next/router';
import { isCurrentRoute } from '../../utils/client-utils/routes-utils';

const navigation = [
  { name: 'Home', href: '/', icon: FaHome },
  { name: 'About Me', href: '/about', icon: FaUser },
  { name: 'My Projects', href: '/projects', icon: FaProjectDiagram },
  { name: 'Contact', href: '/contact', icon: FaEnvelope },
  { name: 'Blog', href: '/blog', icon: FaBlog },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <Disclosure as="nav" className="bg-primary text-primary fixed top-0 z-10 w-full shadow-lg">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-[80px]">
              <div className="relative flex items-center justify-between h-full">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FaTimes className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch lg:justify-center">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href} passHref legacyBehavior>
                          <a
                            className={classNames(
                              isCurrentRoute(item.href, router.pathname)
                                ? 'border-b-[5px] border-black rounded-none disabled'
                                : 'hover:border-b-[5px] border-gray-300 rounded-none',
                              'px-3 pt-[5px] text-sm font-medium flex items-center pb-[15px]',
                            )}
                          >
                            <item.icon className="h-5 w-5" aria-hidden="true" />
                            <span className='ml-[5px]'>
                              {item.name}
                            </span>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      isCurrentRoute(item.href, router.pathname)
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium items-center'
                    )}
                  >
                    <item.icon className="h-5 w-5 mr-1" aria-hidden="true" />
                    {item?.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
      <style jsx>
        {`
      a.disabled {
        pointer-events: none;
      }
      `}
      </style>
    </>
  );
};

export default Navbar;

import menu_data from "@/data/menu-data-two";
import Link from "next/link";
import React from "react";

const Menu = () => {

  return (
    <>
      {menu_data?.length &&
        menu_data?.map((item) => (
          <li key={item.id} className={item.hasDropdown === true ? "menu-item-has-children" : ""}>
            <Link href={
              item.link
              }> {item.title} </Link>
            {item.hasDropdown === true && (
              <ul className="sub-menu">
                {item?.submenus?.length &&
                  item?.submenus.map((data, index) => (
                    <li key={index}>
                      <Link href={
                        data.link
                        }> {data.title} </Link>
                    </li>
                  ))}
              </ul>
            )}

            {item.megaMenu === true && (
              <ul className="sub-menu">
                {item.mega_menus?.length &&
                  item.mega_menus.map((data, index) => (
                    <li key={index} className={data.hasDropdown === true ? "menu-item-has-children" : ""}>
                      <Link href={
                        data.link
                        }>{data.title}</Link>
                      {data.hasDropdown === true &&
                        <ul className="sub-menu">
                          {data?.submenus.length &&
                            data.submenus.map((obj: any, indx: number) => (
                              <li key={indx}>
                                <Link href={obj.link}> {obj.title} </Link>
                              </li>
                            ))
                          }
                        </ul>
                      }
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
    </>
  );
};

export default Menu;

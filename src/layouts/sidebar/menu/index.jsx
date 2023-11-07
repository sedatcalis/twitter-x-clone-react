import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";

import More from "~/layouts/main/more";
import New from "./new";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((Menu, index) => (
        <NavLink to={Menu.path} className="py-1 block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 rounded-full transition-colors inline-flex  items-center gap-5  group-hover:bg-[#eff3f41a]",
                {
                  "font-bold": isActive,
                }
              )}
            >
              <div className="w-[26.25px] h-[26.25px] relative">
                {Menu?.notification && (
                  <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                    {Menu?.notification}
                  </span>
                )}
                {!isActive && Menu.icon.passive}
                {isActive && Menu.icon.active}
              </div>
              <div className="pr-4 text-xl">{Menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <More />

      <New />
    </nav>
  );
}
